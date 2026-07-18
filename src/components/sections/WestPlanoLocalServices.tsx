export function WestPlanoLocalServices() {
  return (
    <section className="bg-white px-5 pb-16 pt-[50px] font-['Montserrat'] xl:h-[614.3px] xl:px-[72px] xl:py-16" aria-labelledby="west-plano-local-services-title">
      <div className="mx-auto flex w-full max-w-[1296px] flex-col items-start gap-[37px] xl:flex-row xl:justify-end">
        <img
          src="/assets/figma-west-plano-service-van.png"
          alt="ALAS Appliance Services local service van"
          className="order-2 aspect-[4/3] w-full object-cover xl:order-1 xl:h-[435px] xl:w-[580px] xl:shrink-0"
        />

        <div className="order-1 flex w-full flex-col items-start gap-[27.3px] xl:order-2 xl:w-[681px] xl:shrink-0">
          <div className="rounded-full bg-[#EAF4FF] px-6 py-3 text-[14px] font-bold uppercase leading-normal tracking-[1.6px] text-[#0066CC] xl:hidden">
            Local Service
          </div>

          <h2 id="west-plano-local-services-title" className="w-full text-[32px] font-bold leading-[1.6] text-[#042330] xl:w-[526px] xl:pt-[2.7px] xl:text-[40px] xl:leading-normal xl:tracking-[-2.6px]">
            Local Appliance Repair Services in <span className="text-[#0066CC]">West Plano</span>
          </h2>

          <div className="flex w-full flex-col gap-4 text-[22px] font-medium leading-[36.3px] text-[#454648] xl:max-w-none">
            <p>
              We specialize in appliance repair across West Plano — from the Legacy West corridor to Arbor Hills communities. Our technicians are familiar with West Plano neighborhoods, enabling faster response times and reliable scheduling.
            </p>
            <p className="pb-[19.295px] xl:pb-0">
              Whether you need a refrigerator fixed at home or equipment repaired at a local business, our <strong className="font-bold text-[#0066CC]">full-service Plano team</strong> is close by and ready to help.
            </p>
          </div>

          <a href="#schedule" className="flex h-[60px] w-full items-center justify-center gap-3 rounded-[120px] bg-[#277ACD] px-7 py-4 text-[18px] font-semibold leading-7 text-[#F7FAFC] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-colors hover:bg-[#0066CC] xl:w-[251px]">
            <span>Schedule Service</span>
            <span className="flex size-6 shrink-0 items-center justify-center" aria-hidden="true">
              <img src="/assets/figma-west-plano-chevron.svg" alt="" className="h-[14px] w-[7px]" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
