export function ResidentialProtectionPlansCta() {
  return (
    <section className="relative h-[586px] overflow-hidden rounded-t-[25px] bg-[#0A1628] px-6 py-10 font-['Montserrat'] xl:h-[247px] xl:rounded-[25px] xl:px-20" aria-labelledby="residential-protection-plans-title">
      <img src="/assets/figma-residential-plans-bg.jpg" alt="" className="pointer-events-none absolute left-0 top-[-108.7%] h-[317.39%] w-full max-w-none object-cover" aria-hidden="true" />
      <div className="absolute inset-0 rounded-[25px] bg-[#0A1628]/90" />

      <div className="relative mx-auto flex h-full w-full max-w-[1280px] flex-col xl:flex-row xl:items-center">
        <div className="relative flex w-full flex-col items-start gap-[14.4px] xl:w-[653.33px] xl:px-3">
          <h2 id="residential-protection-plans-title" className="text-[42px] font-bold leading-[1.4] text-white xl:whitespace-nowrap">
            Residental Protection Plans
          </h2>
          <p className="w-full text-[16px] font-semibold leading-[1.6] text-white xl:w-[640px]">
            Join the fastest-growing appliance repair franchise in the US. Locally owned, nationally supported. $89K average ticket, 70% gross margin, proven system.
          </p>

          <span className="absolute -right-[118px] bottom-0 top-[0.63px] hidden w-0.5 bg-white xl:block" aria-hidden="true" />
          <span className="absolute -right-[124px] top-1/2 hidden h-[14px] w-[7px] -translate-y-1/2 border-y-[7px] border-l-[7px] border-y-transparent border-l-white xl:block" aria-hidden="true" />
        </div>

        <div className="mt-12 flex w-full flex-col items-center gap-[18px] xl:ml-auto xl:mt-0 xl:w-[466.66px] xl:items-end xl:gap-5 xl:px-3">
          <a href="tel:+14696383215" className="group flex h-[57.59px] w-[290.34px] cursor-pointer items-center gap-[15px] text-white" aria-label="Call (469) 638-3215">
            <img src="/assets/figma-residential-plans-phone.svg" alt="" className="size-8 shrink-0 -scale-y-100 transition-transform duration-300 group-hover:scale-x-[-1.08] group-hover:scale-y-[-1.08]" aria-hidden="true" />
            <span className="whitespace-nowrap text-[32px] font-bold leading-[1.6]">(469) 638-3215</span>
          </a>

          <a href="tel:+14696383215" aria-label="Call for a quote at (469) 638-3215" className="group flex cursor-pointer items-center justify-center gap-2 rounded-[120px] border border-[#003366] bg-[#F5FAFF] px-5 py-3 text-[16px] font-semibold leading-6 text-[#003366] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)]">
            Get Quote
            <img src="/assets/figma-residential-plans-arrow.svg" alt="" className="size-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
