const includedItems = [
  'All commercial appliances covered',
  'Complete HVAC system protection',
  '24/7 emergency support',
  'Preventive maintenance included',
  'No service call fees',
  'Priority scheduling',
] as const;

export function CareersCommercialHero() {
  return (
    <section className="relative min-h-[1320px] overflow-hidden bg-gradient-to-b from-[#022045] to-[#044FAB] xl:h-[690px] xl:min-h-0" aria-labelledby="careers-commercial-title">
      <img src="/assets/figma-careers-hero-wave.png" alt="" className="pointer-events-none absolute inset-x-0 top-0 h-[305px] w-full object-fill object-bottom" />

      <div className="relative z-20 mx-5 flex flex-col items-start gap-11 pt-12 xl:absolute xl:left-20 xl:top-[68px] xl:mx-0 xl:w-[540px] xl:pt-0">
        <div className="flex w-full flex-col items-start gap-2 xl:w-[540px]">
          <p className="rounded-full border border-white/20 bg-white/10 p-[10px] text-[14px] font-normal leading-5 tracking-[-0.1504px] text-[#E5E7EB]">
            Commercial Protection Plan – Texas
          </p>
          <h1 id="careers-commercial-title" className="max-w-[496px] text-[36px] font-bold leading-[1.4] text-[#F7FAFC] xl:text-[42px]">
            One broken HVAC in a Texas summer costs you&nbsp;$2,400&nbsp;— and your weekend.
          </h1>
          <p className="max-w-[507px] text-[16px] font-semibold leading-[1.6] text-[#F7FAFC]">
            ALAS covers your&nbsp;appliances,&nbsp;HVAC, and&nbsp;ventilation systems&nbsp;under one monthly plan. One call. One team. One invoice. No emergency scrambling — ever again.
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-4 xl:h-[60px] xl:w-[519px] xl:flex-row xl:items-start xl:gap-6">
          <a href="tel:+14696383215" className="flex h-[60px] shrink-0 items-center justify-center whitespace-nowrap rounded-[120px] bg-[#F5FAFF] px-7 py-4 text-[18px] font-semibold leading-7 text-[#0066CC] shadow-[0_1px_2px_rgba(16,24,40,0.05)] xl:w-[254px]">
            Get My Free Quote
          </a>
          <a href="#commercial-plan-included" className="flex h-[60px] shrink-0 items-center justify-center whitespace-nowrap rounded-[120px] border border-[#C5E1FD] bg-transparent px-7 py-4 text-[18px] font-semibold leading-7 text-[#F7FAFC] shadow-[0_1px_2px_rgba(16,24,40,0.05)] xl:w-[241px]">
            See What&apos;s Covered
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[570px] overflow-hidden xl:left-[697px] xl:right-0 xl:top-0 xl:h-[571px] xl:rounded-bl-[63px]">
        <img src="/assets/figma-careers-hero-building.jpg" alt="Commercial building and ALAS service van" className="size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-neutral-700/40" />
      </div>

      <img src="/assets/figma-careers-hero-technician.png" alt="ALAS commercial service technician" className="absolute bottom-0 left-1/2 z-10 h-[500px] w-auto -translate-x-1/2 object-cover xl:left-[830px] xl:top-[210px] xl:h-[533.652px] xl:w-[356px] xl:translate-x-0" />

      <aside id="commercial-plan-included" className="absolute bottom-5 left-5 right-5 z-20 h-[367px] rounded-[14px] border border-white/20 bg-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.25)] backdrop-blur-[2px] xl:left-[1114px] xl:right-auto xl:top-[85px] xl:w-[301px]">
        <h2 className="absolute left-6 top-6 text-[20px] font-bold leading-7 tracking-[-0.4492px] text-white">What&apos;s Included</h2>
        <ul className="absolute left-6 top-[68px] flex h-48 flex-col gap-3">
          {includedItems.map((item) => (
            <li key={item} className="flex h-[22px] items-center gap-2 text-[14px] font-normal leading-5 tracking-[-0.1504px] text-[#E5E7EB]">
              <img src="/assets/figma-careers-check.svg" alt="" className="size-5" />
              <span className="whitespace-nowrap">{item}</span>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-[25px] left-6 right-6 border-t border-white/20 pt-4">
          <span className="text-[36px] font-bold leading-10 tracking-[0.3691px] text-[#F59E0B]">$15</span>
          <span className="ml-2 text-[16px] font-normal leading-6 tracking-[-0.3125px] text-[#D1D5DC]">/month</span>
        </div>
      </aside>
    </section>
  );
}
