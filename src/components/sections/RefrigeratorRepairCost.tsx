import type { FormEvent, ReactNode } from 'react';
import { useCurrentPostalCode } from '../../hooks/useCurrentPostalCode';

export function RefrigeratorRepairCost() {
  const { postalCode, setPostalCode, isLocating, locationMessage, locate } = useCurrentPostalCode();

  const submit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

  return (
    <section className="relative h-[1057px] overflow-hidden bg-[#F0F6FF] xl:h-[642px]" aria-labelledby="refrigerator-repair-cost-title">
      <div className="absolute left-0 top-[31px] h-[440px] w-[127.23%] overflow-hidden rounded-r-[800px] xl:top-1/2 xl:w-[88%] xl:-translate-y-1/2">
        <picture>
          <source media="(max-width:1279px)" srcSet="/assets/figma-refrigerator-cost-bg-mobile.jpg" />
          <img src="/assets/figma-refrigerator-cost-bg-desktop.jpg" alt="Technician inspecting a refrigerator" className="absolute inset-0 size-full object-cover" />
        </picture>
        <div className="absolute left-[-265px] top-[-3px] h-[445px] w-[1334px] -skew-x-[45deg] bg-[rgba(23,51,86,0.8)]" />
      </div>

      <div className="absolute left-5 top-[121.35px] flex w-[353px] flex-col items-start gap-[15.3px] max-[392px]:left-4 max-[392px]:w-[calc(100%-32px)] xl:left-[calc(50%-608px)] xl:top-1/2 xl:w-[622px] xl:-translate-y-1/2">
        <h2 id="refrigerator-repair-cost-title" className="w-full text-[24px] font-bold leading-[1.6] text-white xl:text-[42px] xl:leading-[1.4]">
          How Much Does Refrigerator Repair Cost in Plano?
        </h2>
        <p className="w-full text-[16px] font-normal leading-[1.6] text-white xl:w-[549px]">
          Most refrigerator repairs in Plano cost&nbsp;$89–$400. Common repairs: thermostat ($100–$300), ice maker ($100–$300), fan motor ($150–$300). Compressor repairs start at $299.
        </p>
      </div>

      <form onSubmit={submit} className="absolute left-5 top-[424px] flex w-[353px] flex-col items-start gap-6 rounded-[24px] bg-white p-6 shadow-[0_0_0_1px_rgba(10,22,40,0.06),0_24px_48px_rgba(10,22,40,0.2)] max-[392px]:left-4 max-[392px]:w-[calc(100%-32px)] xl:left-[calc(50%+69px)] xl:top-1/2 xl:w-[571px] xl:-translate-y-1/2">
        <div className="flex w-full flex-col gap-5">
          <label className="flex w-full flex-col gap-2 pt-1">
            <span className="text-[16px] font-semibold leading-[1.6] text-[#090A0A]">ZIP Code*</span>
            <span className="flex w-full flex-col gap-6 xl:relative xl:block">
              <input required inputMode="numeric" autoComplete="postal-code" value={postalCode} onChange={(event) => setPostalCode(event.target.value)} placeholder="Enter your ZIP code" className="h-[53px] w-full rounded-lg border border-[#E8E8E8] bg-[#F7FAFC] px-4 text-[14px] font-medium leading-[1.48] text-[#454648] outline-none placeholder:text-[#454648] xl:pr-[230px]" />
              <button type="button" onClick={locate} disabled={isLocating} className="flex h-[36px] w-fit items-center justify-center gap-1 rounded-[34px] border border-[#2A7AE2] bg-white px-[9px] text-[14px] font-medium leading-[1.48] text-[#454648] disabled:cursor-wait disabled:opacity-60 xl:absolute xl:right-[10px] xl:top-[8px]">
                <span aria-hidden="true">📍</span>{isLocating ? 'Detecting…' : 'Use My Current Location'}
              </button>
              {locationMessage ? <span aria-live="polite" className="text-[11px] leading-4 text-[#168A4B]">{locationMessage}</span> : null}
            </span>
          </label>

          <CostField label="Mobile number *">
            <input required type="tel" autoComplete="tel" placeholder="Your phone" className="h-[53px] w-full rounded-lg border border-[#CFD5DC] bg-[#F7FAFC] p-4 text-[14px] font-medium leading-[1.48] text-[#5B6774] outline-none placeholder:text-[#5B6774]" />
          </CostField>

          <CostField label="Refrigerator Brand">
            <span className="relative block w-full">
              <select defaultValue="" className="h-[53px] w-full appearance-none rounded-lg border border-[#CFD5DC] bg-[#F7FAFC] p-4 pr-12 text-[14px] font-medium leading-[1.48] text-[#5B6774] outline-none">
                <option value="" disabled>Select</option>
                <option>Samsung</option><option>LG</option><option>Whirlpool</option><option>GE</option><option>Frigidaire</option><option>Other</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 flex size-5 -translate-y-1/2 items-center justify-center" aria-hidden="true">
                <img src="/assets/figma-washer-select-arrow.svg" alt="" className="h-[4.833px] w-[8.167px]" />
              </span>
            </span>
          </CostField>
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

function CostField({ label, children }: { label: string; children: ReactNode }) {
  return <label className="flex w-full flex-col gap-2"><span className="text-[14px] font-semibold leading-5 text-[#090A0A]">{label}</span>{children}</label>;
}
