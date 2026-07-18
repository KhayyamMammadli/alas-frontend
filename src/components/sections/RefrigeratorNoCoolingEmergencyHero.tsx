import type { FormEvent, ReactNode } from 'react';
import { useCurrentPostalCode } from '../../hooks/useCurrentPostalCode';

const benefits = [
  ['Available Today', '/assets/figma-washer-available-icon.svg'],
  ['Same-Day Service', '/assets/figma-washer-sameday-icon.svg'],
  ['90-Day Warranty', '/assets/figma-washer-warranty-icon.svg'],
] as const;

export function RefrigeratorNoCoolingEmergencyHero() {
  const { postalCode, setPostalCode, isLocating, locationMessage, locate } = useCurrentPostalCode();

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    document.querySelector('#schedule')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[1138px] overflow-hidden bg-[#F4F6F8] xl:h-[686px]" aria-labelledby="refrigerator-emergency-title">
      <div className="absolute left-0 top-0 h-[769px] w-full overflow-hidden xl:h-[531px]">
        <picture>
          <source media="(max-width:1279px)" srcSet="/assets/figma-washer-emergency-bg-mobile.png" />
          <img src="/assets/figma-washer-emergency-bg-desktop.png" alt="Appliance technician repairing a refrigerator" className="absolute inset-0 size-full object-cover max-xl:object-[51%_center]" />
        </picture>
        <div className="absolute inset-0 bg-[rgba(3,59,116,0.8)] [clip-path:polygon(0_0,100%_0,92%_12%,92%_88%,100%_100%,0_100%)] xl:hidden" />
        <div className="absolute left-[-376px] top-0 hidden h-[529px] w-[1335px] -skew-x-[45deg] bg-[rgba(3,59,116,0.8)] xl:block" />
      </div>

      <div className="absolute left-5 top-[72px] flex w-[353px] flex-col items-start gap-5 max-[392px]:left-4 max-[392px]:w-[calc(100%-32px)] xl:left-[calc(50%-644px)] xl:top-[81px] xl:w-[597px]">
        <h1 id="refrigerator-emergency-title" className="w-full text-[32px] font-bold leading-[1.6] text-white xl:text-[42px] xl:leading-[1.4]">
          Refrigerator No Cooling? <span className="text-[#FF4848] xl:block">Same-Day Repair <span className="text-white">Available</span></span>
        </h1>
        <p className="w-full text-[14px] font-normal leading-[1.6] text-white xl:w-[535px]">
          Marcus Johnson dispatches from Plano within 60 seconds of booking. Licensed technician. All brands. Don&apos;t lose your food — book now.
        </p>
        <ul className="flex flex-col items-start gap-3">
          {benefits.map(([label, icon]) => (
            <li key={label} className="flex h-10 min-w-[196px] items-center gap-2 rounded-lg bg-white/10 px-4 text-[16px] font-semibold leading-[1.6] text-white">
              <img src={icon} alt="" className="size-5 shrink-0" />
              {label}
            </li>
          ))}
        </ul>
      </div>

      <form id="schedule" onSubmit={submit} className="absolute left-1/2 top-[509px] flex w-[353px] -translate-x-1/2 flex-col items-start gap-6 rounded-[24px] bg-white p-6 shadow-[0_0_0_1px_rgba(10,22,40,0.06),0_24px_48px_rgba(10,22,40,0.2)] max-[392px]:w-[calc(100%-32px)] xl:left-[calc(50%+70px)] xl:top-[89px] xl:w-[571px] xl:translate-x-0">
        <div className="flex w-full flex-col gap-5">
          <label className="flex w-full flex-col gap-2 pt-1">
            <span className="text-[16px] font-semibold leading-[1.6] text-[#090A0A]">ZIP Code*</span>
            <span className="flex w-full flex-col gap-6 xl:relative xl:block">
              <input required inputMode="numeric" autoComplete="postal-code" value={postalCode} onChange={(event) => setPostalCode(event.target.value)} placeholder="Enter your ZIP code" className="h-[53px] w-full rounded-lg border border-[#E8E8E8] bg-[#F7FAFC] px-4 text-[14px] font-medium leading-[1.48] text-[#454648] outline-none placeholder:text-[#454648] xl:pr-[230px]" />
              <button type="button" onClick={locate} disabled={isLocating} className="flex h-[36px] w-fit items-center justify-center gap-1 rounded-[34px] border border-[#2A7AE2] bg-white px-[9px] text-[14px] font-medium leading-[1.48] text-[#5B6774] disabled:cursor-wait disabled:opacity-60 xl:absolute xl:right-[10px] xl:top-[8px]">
                <span aria-hidden="true">📍</span>{isLocating ? 'Detecting…' : 'Use My Current Location'}
              </button>
              {locationMessage ? <span aria-live="polite" className="text-[11px] leading-4 text-[#168A4B]">{locationMessage}</span> : null}
            </span>
          </label>

          <Field label="Mobile number *">
            <input required type="tel" autoComplete="tel" placeholder="Your phone" className="h-[53px] w-full rounded-lg border border-[#CFD5DC] bg-[#F7FAFC] p-4 text-[14px] font-medium leading-[1.48] text-[#5B6774] outline-none placeholder:text-[#5B6774]" />
          </Field>

          <Field label="Refrigerator Brand">
            <span className="relative block w-full">
              <select defaultValue="" className="h-[53px] w-full appearance-none rounded-lg border border-[#CFD5DC] bg-[#F7FAFC] p-4 pr-12 text-[14px] font-medium leading-[1.48] text-[#5B6774] outline-none">
                <option value="" disabled>Select</option>
                <option>Samsung</option><option>LG</option><option>Whirlpool</option><option>GE</option><option>Frigidaire</option><option>Other</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 flex size-5 -translate-y-1/2 items-center justify-center" aria-hidden="true">
                <img src="/assets/figma-washer-select-arrow.svg" alt="" className="h-[4.833px] w-[8.167px]" />
              </span>
            </span>
          </Field>
        </div>

        <div className="flex w-full flex-col items-center gap-[10px]">
          <button type="submit" className="flex h-[60px] w-full items-center justify-center rounded-[120px] bg-[#DC2626] px-7 text-[18px] font-semibold leading-7 text-[#F5FAFF] transition-colors hover:bg-[#BE1E1E] xl:w-[486px]">Get Emergency Help</button>
          <div className="flex h-[75px] w-full flex-col items-center gap-2 border-t border-[#E5E7EB] pt-[9px]">
            <span className="text-[14px] font-normal leading-[1.6] text-[#454648]">Or call now</span>
            <a href="tel:+18005551234" className="flex items-center gap-[5px] text-[18px] font-bold leading-[1.6] text-[#090A0A]">
              <img src="/assets/figma-washer-phone-icon.svg" alt="" className="size-5" />(800) 555-1234
            </a>
          </div>
        </div>
      </form>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return <label className="flex w-full flex-col gap-2"><span className="text-[14px] font-semibold leading-5 text-[#090A0A]">{label}</span>{children}</label>;
}
