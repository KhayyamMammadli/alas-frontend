export function PlanHelpCta() {
  return (
    <section className="relative flex h-[398.4px] items-center justify-center overflow-hidden px-5 py-[50px] xl:h-[312px] xl:px-20 xl:py-10" aria-labelledby="plan-help-title">
      <picture className="pointer-events-none absolute inset-0 overflow-hidden">
        <source media="(min-width: 1280px)" srcSet="/assets/figma-plan-cta-bg-desktop.jpg" />
        <img src="/assets/figma-plan-cta-bg-mobile.jpg" alt="" className="absolute left-0 top-[-108.7%] h-[317.39%] w-full max-w-none" />
      </picture>
      <div className="absolute inset-x-0 bottom-[0.62px] top-0 bg-[#0A1628] opacity-90 xl:bottom-[0.23px]" />

      <div className="relative flex w-full flex-col items-center gap-10">
        <div className="flex w-full max-w-[1120px] flex-col items-center xl:px-3">
          <div className="flex w-full flex-col items-center gap-[14.4px] text-center xl:w-[824px]">
            <h2 id="plan-help-title" className="w-full text-[32px] font-bold leading-[1.6] text-white xl:text-[42px] xl:leading-[1.4]">
              Not sure which plan is right for you?
            </h2>
            <p className="w-full text-[16px] font-normal leading-[1.6] text-white">
              Not sure which plan is right for you?
            </p>
          </div>
        </div>

        <div className="flex h-[116px] w-full flex-col items-center gap-5 xl:h-[49px] xl:w-auto xl:flex-row">
          <a href="/protection-plans" className="flex h-12 w-full items-center justify-center gap-2 rounded-[120px] bg-[#277ACD] px-5 py-3 text-[16px] font-semibold leading-6 text-[#F5FAFF] shadow-[0_1px_2px_rgba(16,24,40,0.05)] xl:w-auto">
            View Residential Plans <span className="inline-flex size-6 items-center justify-center text-[21px] font-normal" aria-hidden="true">↗</span>
          </a>
          <a href="tel:+14696383215" className="flex h-12 w-full items-center justify-center gap-2 rounded-[120px] border border-[#003366] bg-[#F5FAFF] px-5 py-3 text-[16px] font-semibold leading-6 text-[#003366] shadow-[0_1px_2px_rgba(16,24,40,0.05)] xl:w-auto">
            Get Commercial Quote <span className="inline-flex size-6 items-center justify-center text-[21px] font-normal" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
