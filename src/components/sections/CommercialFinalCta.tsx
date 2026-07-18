const assurances = [
  'No long-term contract',
  'Cancel anytime',
  'Free equipment assessment',
  'Response guaranteed within 2hrs',
] as const;

function WaveLayer({ index, className }: { index: 1 | 2 | 3 | 4; className: string }) {
  return (
    <>
      <span className={`${className} xl:hidden`} aria-hidden="true">
        <img src={`/assets/figma-final-wave-m${index}.svg`} alt="" className="absolute inset-0 block size-full max-w-none" />
      </span>
      <span className={`${className} hidden xl:block`} aria-hidden="true">
        <img src={`/assets/figma-final-wave-d${index}.svg`} alt="" className="absolute inset-0 block size-full max-w-none" />
      </span>
    </>
  );
}

export function CommercialFinalCta() {
  return (
    <section className="relative h-[800px] overflow-hidden bg-[#EBF5FF] font-['Montserrat'] xl:h-[738px]" aria-labelledby="commercial-final-cta-title">
      <div className="absolute -top-px left-0 right-0 h-[120px] rounded-t-[10px] bg-[linear-gradient(158.68deg,#065FB8_0%,#003366_100%)] xl:h-[207px] xl:bg-[linear-gradient(169.59deg,#065FB8_0%,#003366_100%)]">
        <div className="absolute bottom-[-0.25px] left-0 right-0 h-[100px] overflow-hidden">
          <WaveLayer index={1} className="absolute bottom-[4.36%] left-[10.3%] right-[-11.67%] top-[23.37%]" />
          <WaveLayer index={2} className="absolute bottom-[3.68%] left-[-11.89%] right-[10.53%] top-[24.05%]" />
          <WaveLayer index={3} className="absolute bottom-[-1.04%] left-[14.13%] right-[16.49%] top-[29.42%]" />
          <WaveLayer index={4} className="absolute bottom-[-4%] left-[-11.56%] right-[-12.56%] top-[27.29%]" />
        </div>
      </div>

      <div className="absolute left-[21px] top-[136.59px] flex h-[585px] w-[352px] flex-col items-center gap-[23px] text-center xl:left-1/2 xl:top-[173px] xl:h-[472px] xl:w-[872px] xl:-translate-x-1/2">
        <h2 id="commercial-final-cta-title" className="w-full text-[32px] font-extrabold leading-normal tracking-[-1.3px] text-[#2A3B4B] xl:text-[52px] xl:leading-[57.2px]">
          The next breakdown isn&apos;t a matter of <span className="text-[#0066CC]">if</span> — it&apos;s <span className="text-[#0066CC]">when</span>.
        </h2>

        <div className="flex w-full flex-col items-center gap-10">
          <p className="w-full text-[16px] font-normal leading-normal text-[#2A3B4B] xl:whitespace-pre-line xl:leading-[28.8px]">
            <span className="xl:hidden">Most of our members join after a costly emergency. A walk-in failure. A summer HVAC breakdown. A $1,400 invoice they didn&apos;t see coming. Don&apos;t wait for yours. Get protected today — it takes 10 minutes and there&apos;s no commitment.</span>
            <span className="hidden xl:inline">Most of our members join after a costly emergency. A walk-in{`\n`}failure. A summer HVAC breakdown. A $1,400 invoice they didn&apos;t{`\n`}see coming. Don&apos;t wait for yours. Get protected today — it takes 10{`\n`}minutes and there&apos;s no commitment.</span>
          </p>

          <div className="flex w-full flex-col items-center">
            <div className="flex w-full flex-col items-center gap-[15px] xl:w-auto xl:flex-row xl:items-start">
              <a href="#schedule" className="group flex h-[61.4px] w-full items-center justify-center gap-[10px] rounded-[90px] bg-gradient-to-r from-[#2A7AE2] to-[#1E5BB8] px-[21px] py-4 text-[16px] font-bold leading-[29.4px] tracking-[-0.4614px] text-white shadow-[0_10.5px_7.875px_rgba(0,0,0,0.1),0_4.2px_3.15px_rgba(0,0,0,0.1)] transition-transform duration-300 motion-safe:hover:-translate-y-1 xl:w-auto xl:text-[18.9px]">
                <span>Get Protected Today — Free Quote</span>
                <img src="/assets/figma-final-cta-arrow.svg" alt="" className="hidden size-[21px] transition-transform duration-300 group-hover:translate-x-1 xl:block" aria-hidden="true" />
              </a>
              <a href="tel:+14696383215" className="flex h-[61.4px] w-full items-center justify-center rounded-[90px] border border-[#1E5CBA] px-[21px] py-4 text-[16px] font-bold leading-[29.4px] tracking-[-0.4614px] text-[#00478F] shadow-[0_10.5px_15.75px_rgba(0,0,0,0.1),0_4.2px_6.3px_rgba(0,0,0,0.1)] transition-colors duration-300 hover:bg-white/60 xl:w-auto xl:text-[18.9px]">
                Call (469) 638-3215
              </a>

              <div className="mt-[9px] flex w-full flex-wrap items-center gap-6 text-[13px] font-normal leading-[20.8px] text-[#090A0A] xl:hidden">
                {assurances.map((item) => (
                  <span key={item} className="flex h-[21px] items-center gap-[10px] whitespace-nowrap">
                    <img src="/assets/figma-final-check.svg" alt="" className="size-4" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-[21.3px] hidden h-[116px] w-full flex-wrap content-start justify-center gap-x-[24px] gap-y-[23.8px] text-[13px] font-normal leading-[20.8px] text-[#090A0A] xl:flex">
              {assurances.map((item) => (
                <span key={item} className={`flex h-[21px] items-center gap-[6px] whitespace-nowrap ${item.startsWith('Response') ? 'basis-full justify-center' : ''}`}>
                  <img src="/assets/figma-final-check.svg" alt="" className="size-4" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
