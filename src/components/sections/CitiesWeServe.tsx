import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { ServiceCategoryPageData } from '../../data/homePageData';

type CitiesWeServeProps = {
  data: ServiceCategoryPageData['citiesWeServe'];
};

type CityLocation = {
  name: string;
  lat: number;
  lng: number;
};

const cityLocations: CityLocation[] = [
  { name: 'West Plano', lat: 33.0202, lng: -96.8055 },
  { name: 'East Plano', lat: 33.0294, lng: -96.6744 },
  { name: 'Park Forest', lat: 33.0447, lng: -96.7272 },
  { name: 'Legacy', lat: 33.0738, lng: -96.8237 },
  { name: 'Willow Bend', lat: 33.0243, lng: -96.7915 },
  { name: 'Haggard Farm', lat: 33.0523, lng: -96.7011 },
  { name: 'Windridge', lat: 33.0546, lng: -96.7448 },
  { name: 'Oak Point', lat: 33.0439, lng: -96.6799 },
  { name: 'Chapel Hill', lat: 33.0158, lng: -96.7736 },
];

function MapPinIcon({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 21s6.4-5.7 6.4-12A6.4 6.4 0 0 0 5.6 9c0 6.3 6.4 12 6.4 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function CityItem({ city, active, onSelect }: { city: string; active: boolean; onSelect: (city: string) => void }) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(city)}
        aria-pressed={active}
        className={`flex items-center gap-[10px] text-left text-[14px] font-bold leading-5 transition-colors md:gap-[9px] md:text-[15px] ${active ? 'text-[#0A73D9]' : 'text-[#111111] hover:text-[#0A73D9]'}`}
      >
        <MapPinIcon className="size-[15px] shrink-0 text-[#0A73D9] md:size-[14px]" />
        <span>{city}</span>
      </button>
    </li>
  );
}

function markerIcon(active: boolean) {
  const color = active ? '#0066CC' : '#0A73D9';
  const size = active ? 38 : 30;

  return L.divIcon({
    className: 'alas-map-marker',
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    tooltipAnchor: [0, -size],
    html: `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="white" style="filter:drop-shadow(0 4px 5px rgba(0,51,102,.24))"><path d="M12 21s6.4-5.7 6.4-12A6.4 6.4 0 0 0 5.6 9c0 6.3 6.4 12 6.4 12Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="9" r="2.2" stroke="${color}" stroke-width="2"/></svg>`,
  });
}

function MapCard({ data, selectedCity, onSelect }: CitiesWeServeProps & { selectedCity: string; onSelect: (city: string) => void }) {
  const mapElementRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  useEffect(() => {
    if (!mapElementRef.current || mapRef.current) return;

    const map = L.map(mapElementRef.current, { scrollWheelZoom: false, zoomControl: true }).setView([33.035, -96.745], 11);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    cityLocations.forEach((location) => {
      const marker = L.marker(L.latLng(location.lat, location.lng), { icon: markerIcon(location.name === selectedCity), title: location.name, alt: location.name })
        .addTo(map)
        .bindTooltip(location.name, { direction: 'top', offset: [0, -3], className: 'alas-map-tooltip' })
        .on('click', () => onSelectRef.current(location.name));
      markersRef.current.set(location.name, marker);
    });

    mapRef.current = map;
    const resizeTimer = window.setTimeout(() => {
      if (mapRef.current === map) map.invalidateSize();
    }, 0);

    return () => {
      window.clearTimeout(resizeTimer);
      map.remove();
      mapRef.current = null;
      markersRef.current.clear();
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    const location = cityLocations.find((item) => item.name === selectedCity);
    if (!map || !location) return;

    markersRef.current.forEach((marker, name) => marker.setIcon(markerIcon(name === selectedCity)));
    if (!Number.isFinite(location.lat) || !Number.isFinite(location.lng)) return;

    const mapContainer = map.getContainer();
    if (mapContainer.offsetWidth === 0 || mapContainer.offsetHeight === 0) return;

    map.stop();
    map.invalidateSize({ animate: false });
    map.setView(L.latLng(location.lat, location.lng), 14, { animate: false });
    markersRef.current.get(selectedCity)?.openTooltip();
  }, [selectedCity]);

  return (
    <div className="relative h-[230px] w-full overflow-hidden rounded-[14px] border border-[#DCE2EA] bg-[#E6E9EE] shadow-[0_22px_36px_rgba(15,23,42,0.12)] md:h-[450px] md:w-[560px] md:rounded-[18px]">
      <div ref={mapElementRef} className="size-full" aria-label={`${data.mapTitle}: ${data.mapSubtitle}`} />
      <div className="pointer-events-none absolute left-3 top-3 z-[500] rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-[#003366] shadow-sm backdrop-blur-sm md:text-[12px]">
        {data.mapSubtitle}
      </div>
    </div>
  );
}

export function CitiesWeServe({ data }: CitiesWeServeProps) {
  const [selectedCity, setSelectedCity] = useState<string>(data.cities[0]);

  const cityList = (
    <ul className="mt-[18px] flex flex-col gap-[13px] md:mt-[22px] md:grid md:grid-cols-3 md:gap-x-[52px] md:gap-y-4">
      {data.cities.map((city) => <CityItem key={city} city={city} active={city === selectedCity} onSelect={setSelectedCity} />)}
    </ul>
  );

  return (
    <section className="overflow-hidden bg-white px-6 pb-[66px] pt-[59px] md:px-0 md:pb-[66px] md:pt-[72px]">
      <div className="mx-auto hidden h-[450px] w-full max-w-[1280px] items-center md:flex">
        <div className="relative z-10 shrink-0"><MapCard data={data} selectedCity={selectedCity} onSelect={setSelectedCity} /></div>
        <div className="-ml-[84px] flex h-[420px] flex-1 items-center rounded-r-full bg-[#F2F4F7] pl-[165px] pr-[76px]">
          <div className="w-full max-w-[636px]">
            <div className="h-0.5 w-[88px] bg-[#0A73D9]" />
            <h2 className="mt-[42px] text-[32px] font-bold leading-10 text-[#090A0A]">{data.desktopTitle}</h2>
            <p className="mt-[22px] max-w-[600px] text-[13px] font-normal leading-5 text-[#5D6570]">{data.description}</p>
            {cityList}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[345px] md:hidden">
        <h2 className="text-[26px] font-bold leading-[38px] text-[#090A0A]">{data.mobileTitle}</h2>
        <p className="mt-[18px] text-[12px] font-normal leading-[18px] text-[#5D6570]">{data.description}</p>
        {cityList}
        <div className="mt-[37px]"><MapCard data={data} selectedCity={selectedCity} onSelect={setSelectedCity} /></div>
      </div>
    </section>
  );
}
