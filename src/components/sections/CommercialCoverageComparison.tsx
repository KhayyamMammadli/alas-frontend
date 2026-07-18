const beforeItems = [
  ['🏪', 'Appliance Vendor'],
  ['🏠', 'HVAC Contractor'],
  ['💨', 'Ventilation Specialist'],
] as const;

const coverageItems = ['All appliances covered', 'HVAC systems covered', 'Ventilation covered'] as const;

const summaryItems = [
  ['Number to call', 'For any system, any time, day or night.'],
  ['Monthly invoice', 'Flat rate — no surprises, ever.'],
  ['Team that knows you', 'Your history, your equipment, your building.'],
] as const;

export function CommercialCoverageComparison() {
  return (
    <section
      className="bg-white px-5 py-[50px] xl:h-[1509px] xl:bg-[url('/assets/figma-commercial-comparison-bg.png')] xl:bg-cover xl:bg-center xl:px-20 xl:pb-0 xl:pt-[72px]"
      aria-labelledby="commercial-coverage-title"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-[30px]">
        <header className="flex w-full flex-col items-center gap-[15px] pb-[9.3px] text-center">
          <h2 id="commercial-coverage-title" className="w-full font-bold tracking-[-2px] text-[#042330] xl:tracking-normal">
            <span className="block text-[32px] leading-normal xl:text-[42px] xl:leading-[1.4]">Stop firefighting emergencies.</span>
            <span className="block text-[32px] leading-normal text-[#00478F] xl:text-[42px] xl:leading-[1.4]">Start protecting your business.</span>
          </h2>
          <p className="text-[20px] font-normal leading-[32.5px] tracking-[-0.4492px] text-[#2A3B4B] xl:hidden">
            Protect your commercial appliances and HVAC systems with one simple plan. Fast response, expert service, zero surprises.
          </p>
          <p className="hidden w-[1008px] text-[20px] font-normal leading-[32.5px] tracking-[-0.4492px] text-[#2A3B4B] xl:block">
            Three systems. One team. One number. Stop juggling vendors. ALAS is the only DFW service company covering appliances, HVAC, and ventilation under a single monthly membership.
          </p>
        </header>

        <div className="flex w-full flex-col gap-[34px]">
          <div className="grid w-full grid-cols-1 gap-9 xl:h-[712.03px] xl:grid-cols-[minmax(0,1fr)_110px_minmax(0,1.1fr)] xl:items-center xl:gap-7">
            <article className="flex min-h-[565px] w-full flex-col items-start gap-3 rounded-[24px] border-2 border-[#FF9D9D] bg-white/[0.92] px-4 py-10 shadow-[0_24px_65px_rgba(15,45,90,0.08)] transition-[transform,box-shadow] duration-300 ease-out motion-safe:hover:-translate-y-1.5 hover:shadow-[0_30px_75px_rgba(225,29,46,0.14)] xl:h-[712.03px] xl:gap-0 xl:p-[38px]">
              <p className="text-[16px] font-bold leading-normal tracking-[1.6px] text-[#D90000]">✕ BEFORE ALAS</p>
              <h3 className="pb-[21.2px] text-[36px] font-bold leading-[47.52px] tracking-[-1px] text-[#042330] xl:pt-[6px]">Too Many Calls. Too Many Bills.</h3>

              <div className="flex w-full flex-col gap-3 xl:gap-[8.8px]">
                {beforeItems.map(([icon, title]) => (
                  <div key={title} className="group flex h-[101.2px] w-full items-center gap-[18px] rounded-[16px] border border-[#FFB8B8] bg-[#FFF7F7] px-[21px] py-[19px] transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out motion-safe:hover:translate-x-1 hover:border-[#FF8585] hover:bg-[#FFF0F0] hover:shadow-[0_10px_24px_rgba(225,29,46,0.1)] xl:h-[101.2px]">
                    <span className="flex size-[39px] shrink-0 items-center justify-center rounded-[8px] bg-[#FFE4E4] text-[17.5px] xl:size-[58px] xl:rounded-[12px] xl:text-[26px]" aria-hidden="true">{icon}</span>
                    <span className="min-w-0 flex-1">
                      <strong className="block text-[16px] font-bold leading-normal text-[#042330] xl:text-[22px]">{title}</strong>
                      <span className="mt-1.5 block text-[16px] font-normal leading-normal text-[#D00000]">Separate call · Separate invoice</span>
                    </span>
                    <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-[#E11D2E] text-[16px] font-bold text-white transition-transform duration-300 motion-safe:group-hover:scale-110" aria-hidden="true">!</span>
                  </div>
                ))}
              </div>

              <div className="mt-0 flex w-full flex-col justify-center gap-[14px] rounded-[16px] bg-[#FFE4E4] px-3 py-[26px] xl:mt-[21px] xl:flex-row xl:items-center xl:justify-start xl:gap-6 xl:px-[26px]">
                <span className="hidden text-[44px] xl:block" aria-hidden="true">📄</span>
                <span>
                  <strong className="block text-[16px] font-bold leading-normal text-[#B40000] xl:text-[22px]">3 numbers · 3 wait times · 3 invoices</strong>
                  <span className="mt-2 block text-[18px] font-normal leading-normal text-[#3F4E5C]">More hassle. More delays. More cost.</span>
                </span>
              </div>
            </article>

            <div className="flex h-44 flex-col items-center justify-center gap-[14px] xl:h-auto">
              <div className="commercial-switch-pulse relative flex size-[112px] items-center justify-center">
                <span className="commercial-switch-wave commercial-switch-wave--delayed" aria-hidden="true" />
                <span className="commercial-switch-wave" aria-hidden="true" />
                <span className="relative z-10 flex size-[76px] items-center justify-center rounded-full bg-[#071833] text-[34px] text-white">
                  <span className="rotate-90 xl:rotate-0" aria-hidden="true">→</span>
                </span>
              </div>
              <p className="text-center text-[18px] font-normal leading-normal text-[#0066CC]">Switch to<br /><strong className="font-bold">ALAS</strong></p>
            </div>

            <article className="relative flex min-h-[565px] w-full flex-col items-start gap-3 rounded-[24px] border-[3px] border-[#1266D6] bg-white/[0.92] px-4 py-[37px] shadow-[0_28px_80px_rgba(18,102,214,0.18)] transition-[transform,box-shadow] duration-300 ease-out motion-safe:hover:-translate-y-1.5 hover:shadow-[0_34px_90px_rgba(18,102,214,0.25)] xl:h-[692.52px] xl:gap-0 xl:p-[38px]">
              <div
                className="absolute -top-[44.46px] right-[16px] flex h-[108.67px] w-[115.34px] flex-col items-center bg-gradient-to-b from-[#16C784] to-[#0AA36A] px-[18px] pb-[30px] pt-[22px] text-center text-[14px] font-bold leading-[18.9px] text-white"
                style={{ WebkitMask: "url('/assets/figma-commercial-badge-mask.svg') 4px 0 / 115.34px 108.67px no-repeat", mask: "url('/assets/figma-commercial-badge-mask.svg') 4px 0 / 115.34px 108.67px no-repeat" }}
              >
                SMARTER<br />SIMPLER<br />STRONGER
              </div>
              <p className="text-[16px] font-bold leading-normal tracking-[1.6px] text-[#0066CC]">WITH ALAS</p>
              <h3 className="pb-[0.52px] text-[36px] font-bold leading-[47.52px] tracking-[-1px] text-[#042330]">One Plan. Total Coverage.</h3>

              <div className="flex w-full items-center gap-6 pb-[17px] pt-[21px]">
                <span className="flex size-[88px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1677F2] to-[#004BBD] text-[32px] font-bold text-white">AL</span>
                <span className="min-w-0">
                  <strong className="block text-[22px] font-bold leading-normal text-[#042330]">ALAS Appliance Services</strong>
                  <span className="mt-1.5 block text-[18px] font-normal leading-normal text-[#0066CC]">One plan covers everything</span>
                </span>
              </div>

              <div className="flex w-full flex-col gap-3 xl:gap-[9px]">
                {coverageItems.map((item) => (
                  <div key={item} className="group flex min-h-[75px] w-full items-center gap-[18px] rounded-[14px] border border-[#B7D4F8] bg-[#EEF7FF] px-[23px] py-[19px] transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out motion-safe:hover:translate-x-1 hover:border-[#7DB2F2] hover:bg-[#E3F1FF] hover:shadow-[0_10px_24px_rgba(18,102,214,0.11)]">
                    <span className="flex size-[26px] shrink-0 items-center justify-center rounded-full bg-[#1266D6] text-[16px] font-black text-white transition-transform duration-300 motion-safe:group-hover:scale-110" aria-hidden="true">✓</span>
                    <span className="text-[21px] font-normal leading-normal text-[#042330]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-0 flex w-full items-center rounded-[16px] bg-gradient-to-br from-[#0D73EE] to-[#004FC7] p-[26px] text-white xl:mt-[29px] xl:gap-6">
                <span className="hidden text-[44px] xl:block" aria-hidden="true">📋</span>
                <span>
                  <strong className="block text-[16px] font-bold leading-normal xl:text-[22px]">1 number · 1 team · 1 invoice</strong>
                  <span className="mt-2 block text-[16px] font-normal leading-normal xl:text-[18px]">One call. One team. Total peace of mind.</span>
                </span>
              </div>
            </article>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 xl:h-[260.78px] xl:grid-cols-3 xl:gap-7">
            {summaryItems.map(([title, description]) => (
              <article key={title} className="group relative flex h-[260px] min-h-[260px] flex-col items-center gap-[13px] overflow-hidden rounded-[22px] border border-[#DBE7F5] bg-white px-[35px] pb-[66.89px] pt-[39px] text-center shadow-[0_20px_55px_rgba(15,45,90,0.08)] transition-[transform,border-color,box-shadow] duration-300 ease-out motion-safe:hover:-translate-y-1.5 hover:border-[#B7D4F8] hover:shadow-[0_28px_65px_rgba(18,102,214,0.15)]">
                <strong className="text-[24px] font-bold leading-[62px] text-[#0066CC] xl:text-[62px]">1</strong>
                <h3 className="pt-[11px] text-[23px] font-bold leading-normal text-[#042330]">{title}</h3>
                <p className="max-w-[330px] text-[18px] font-normal leading-[27.9px] text-[#5B6774]">{description}</p>
                <span className="absolute bottom-0 left-1/2 h-1 w-[120px] -translate-x-1/2 rounded-full bg-[#1266D6] transition-[width] duration-300 group-hover:w-[180px]" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
