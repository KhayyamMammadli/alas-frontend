import type { FormEvent } from 'react';

export function HvacHero() {
  const preventSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

  return (
    <section className="relative h-[1056px] overflow-hidden bg-[#F4F6F8] xl:h-[710px] xl:bg-[#0C2D53]">
      <div className="absolute left-0 top-0 h-[798px] w-full overflow-hidden bg-[#001529] xl:h-[710px]">
        <picture>
          <source media="(max-width: 1279px)" srcSet="/assets/figma-hvac-bg-mobile.png" />
          <img src="/assets/figma-hvac-bg-desktop.png" alt="" className="absolute inset-0 size-full object-cover opacity-40" />
        </picture>
        <picture>
          <source media="(max-width: 1279px)" srcSet="/assets/figma-hvac-pattern-mobile.jpg" />
          <img src="/assets/figma-hvac-pattern-desktop.jpg" alt="" className="absolute left-0 top-[-0.79%] h-[101.59%] w-full opacity-40" />
        </picture>
      </div>

      <div className="absolute left-5 top-12 flex w-[353px] flex-col items-center gap-8 max-[392px]:left-4 max-[392px]:right-4 max-[392px]:w-auto xl:left-20 xl:top-[55px] xl:w-[565px] xl:items-start">
        <div className="flex items-center gap-3">
          <span className="flex size-[26px] items-center justify-center text-center text-[24px] font-semibold leading-6 text-[#FFC14F]">★</span>
          <span className="text-[14px] font-semibold leading-normal text-[#F5FAFF]">4.9 Average Rating</span>
        </div>
        <h1 className="w-full text-center text-[42px] font-bold leading-[1.4] text-white xl:text-left xl:text-[56px]">
          HVAC Repair Services
        </h1>
        <div className="hidden flex-col items-start gap-4 xl:flex">
          {['Same-Day Service', '90-Day Warranty', 'Licensed & Insured'].map((feature) => (
            <div key={feature} className="flex items-center gap-3 text-[16px] font-semibold leading-[1.6] text-white/90">
              <HvacCheck />
              {feature}
            </div>
          ))}
        </div>
      </div>

      <form
        onSubmit={preventSubmit}
        className="absolute left-1/2 top-[251px] flex h-[744px] w-[353px] -translate-x-1/2 flex-col items-start gap-6 rounded-[24px] bg-white p-6 shadow-[0_0_0_1px_rgba(10,22,40,0.06),0_24px_48px_rgba(10,22,40,0.2)] max-[392px]:w-[calc(100%-40px)] xl:left-[783px] xl:top-[55px] xl:h-[589px] xl:w-[585px] xl:translate-x-0"
      >
        <div className="flex w-full flex-col items-start gap-4">
          <ZipField />

          <div className="flex w-full flex-col items-start gap-3 xl:flex-row">
            <TextField label="Mobile number *" placeholder="Your phone" type="tel" />
            <TextField label="Email address" placeholder="Your email address" type="email" />
          </div>

          <label className="flex h-[164px] w-full flex-col items-start gap-2">
            <span className="text-[16px] font-semibold leading-[1.6] text-[#090A0A]">What's the problem?</span>
            <span className="relative flex min-h-0 w-full flex-1 overflow-hidden rounded-lg border border-[#CFD5DC] bg-[#F7FAFC]">
              <textarea
                maxLength={200}
                placeholder="Briefly describe the issue (e.g., 'Not cooling,' 'Making loud noise,' 'Leaking water')"
                className="size-full resize-none bg-transparent px-3 pb-6 pt-2 text-[16px] font-normal leading-[1.6] text-[#747476] outline-none placeholder:text-[#747476]"
              />
              <span className="absolute bottom-1 right-3 text-[12px] font-medium leading-none text-[#5B6774]">0/200</span>
            </span>
          </label>
        </div>

        <div className="flex w-full flex-col items-center gap-[10px]">
          <button type="submit" className="flex h-[54px] w-full items-center justify-center rounded-[120px] bg-[#0066CC] px-5 py-3 text-[16px] font-semibold leading-6 text-[#F5FAFF] shadow-[0_1px_2px_rgba(16,24,40,0.05)] xl:w-[382px]">
            Schedule Service
          </button>
          <div className="flex w-full flex-col items-center gap-2 px-[10px] pt-[9px]">
            <span className="text-[14px] font-normal leading-[1.6] text-[#2C2C31]">Or call now</span>
            <a href="tel:+18005551234" className="flex items-center gap-[6px] text-[18px] font-semibold leading-[1.6] text-[#0A1628]">
              <picture>
                <source media="(max-width: 1279px)" srcSet="/assets/figma-hvac-phone-mobile.svg" />
                <img src="/assets/figma-hvac-phone-desktop.svg" alt="" className="size-5" />
              </picture>
              (800) 555-1234
            </a>
          </div>
        </div>
      </form>
    </section>
  );
}

function ZipField() {
  return (
    <label className="flex w-full flex-col items-start gap-2 pt-1">
      <span className="text-[16px] font-semibold leading-[1.6] text-[#090A0A]">ZIP Code*</span>
      <span className="flex w-full flex-col items-start gap-6 xl:relative xl:block">
        <input
          inputMode="numeric"
          autoComplete="postal-code"
          placeholder="Enter your ZIP code"
          className="h-[53px] w-full rounded-lg border border-[#E8E8E8] bg-[#F7FAFC] px-4 pr-[10px] text-[14px] font-medium leading-[1.48] text-[#5B6774] outline-none placeholder:text-[#5B6774]"
        />
        <button type="button" className="flex h-[36px] items-center justify-center gap-1 rounded-[34px] border border-[#2A7AE2] bg-white px-[9px] py-[7px] text-[14px] font-medium leading-[1.48] text-[#454648] xl:absolute xl:right-[10px] xl:top-[8px]">
          <span className="text-[14px] leading-none">📍</span>
          Use My Current Location
        </button>
      </span>
    </label>
  );
}

function TextField({ label, placeholder, type }: { label: string; placeholder: string; type: string }) {
  return (
    <label className="flex w-full flex-1 flex-col items-start gap-2">
      <span className="text-[14px] font-semibold leading-5 text-[#090A0A]">{label}</span>
      <input type={type} placeholder={placeholder} className="h-[53px] w-full rounded-lg border border-[#CFD5DC] bg-[#F7FAFC] p-4 text-[14px] font-medium leading-[1.48] text-[#5B6774] outline-none placeholder:text-[#5B6774]" />
    </label>
  );
}

function HvacCheck() {
  return (
    <svg aria-hidden="true" className="size-8 shrink-0" viewBox="0 0 32 32" fill="none">
      <g transform="translate(2.66666 2.65903)">
        <path d="M26.6667 12.1143v1.2267a13.3333 13.3333 0 1 1-7.9067-12.1867" stroke="#00B700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26.6667 2.6743 13.3333 16.021l-4-4" stroke="#00B700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
