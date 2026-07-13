import { useState } from 'react';

type ReverseGeocodeResponse = {
  address?: {
    postcode?: string;
    postal_code?: string;
  };
};

function getCurrentPosition() {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 12000,
      maximumAge: 300000,
    });
  });
}

export function useCurrentPostalCode() {
  const [postalCode, setPostalCode] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const [locationMessage, setLocationMessage] = useState('');

  const locate = async () => {
    if (!navigator.geolocation) {
      setLocationMessage('Location is not supported by this browser.');
      return;
    }

    setIsLocating(true);
    setLocationMessage('');

    try {
      const position = await getCurrentPosition();
      const query = new URLSearchParams({
        lat: String(position.coords.latitude),
        lon: String(position.coords.longitude),
        format: 'jsonv2',
        addressdetails: '1',
        zoom: '18',
      });
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?${query.toString()}`, {
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Reverse geocoding failed');

      const result = (await response.json()) as ReverseGeocodeResponse;
      const detectedPostalCode = result.address?.postcode ?? result.address?.postal_code;
      if (!detectedPostalCode) {
        setLocationMessage('ZIP code was not found for this location.');
        return;
      }

      setPostalCode(detectedPostalCode);
      setLocationMessage('ZIP code added.');
    } catch (error) {
      if (typeof error === 'object' && error !== null && 'code' in error) {
        const geolocationError = error as GeolocationPositionError;
        const messages: Record<number, string> = {
          [geolocationError.PERMISSION_DENIED]: 'Location permission was denied.',
          [geolocationError.POSITION_UNAVAILABLE]: 'Your location is currently unavailable.',
          [geolocationError.TIMEOUT]: 'Location request timed out. Please try again.',
        };
        setLocationMessage(messages[geolocationError.code] ?? 'Unable to detect your location.');
      } else {
        setLocationMessage('Unable to find the ZIP code. Please enter it manually.');
      }
    } finally {
      setIsLocating(false);
    }
  };

  return { postalCode, setPostalCode, isLocating, locationMessage, locate };
}
