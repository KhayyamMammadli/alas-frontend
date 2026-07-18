export function ResidentialProtectionHero() {
  return (
    <section className="relative h-[524px] overflow-hidden bg-[#103057] font-['Montserrat'] xl:h-[712px] xl:bg-gradient-to-b xl:from-[#022045] xl:to-[#044FAB]" aria-labelledby="residential-protection-title">
      <picture className="absolute inset-x-0 top-0 h-[583px] xl:h-[414px]">
        <source media="(min-width: 1280px)" srcSet="/assets/figma-residential-hero-bg-desktop.png" />
        <img src="/assets/figma-residential-hero-bg-mobile.png" alt="" className="size-full object-cover object-bottom" aria-hidden="true" />
      </picture>

      <div className="absolute left-5 top-[31px] z-10 flex w-[353px] flex-col items-center gap-2 text-center xl:left-[120px] xl:right-[120px] xl:top-[50px] xl:w-auto">
        <div className="flex h-[36px] w-[261px] items-center justify-center rounded-[100px] border border-[rgba(0,51,102,0.4)] bg-[rgba(0,51,102,0.15)] px-[13px] py-[7px] xl:w-[363.906px]">
          <span className="whitespace-nowrap text-[14px] font-medium leading-[1.48] text-[#003366]">RESIDENTIAL PROTECTION PLAN</span>
        </div>

        <h1 id="residential-protection-title" className="w-full text-[32px] font-bold leading-[1.6] text-[#003366] xl:w-[728px] xl:text-[42px] xl:leading-[1.4]">
          Appliance Protection Plans &amp; Memberships | Plano, TX
        </h1>

        <p className="w-full text-[16px] font-semibold leading-[1.6] text-[#003366] xl:w-[728px]">
          <span className="xl:hidden">Reduce downtime. Prevent failures. Keep your operation running — no surprises, no emergency scrambling.</span>
          <span className="hidden xl:inline">One low monthly fee covers repairs for all your major appliances. No deductibles. No surprise bills. Same-day service from your local Plano technician.</span>
        </p>

        <div className="mt-[46px] hidden items-start justify-end gap-5 xl:flex">
          <a href="#schedule" className="flex h-12 items-center justify-center rounded-[120px] bg-[#277ACD] px-5 py-3 text-[16px] font-semibold leading-6 text-[#F5FAFF] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-colors hover:bg-[#1E68B2]">Get a Quote</a>
          <a href="https://wa.me/14696383215" className="flex h-12 items-center justify-center rounded-[120px] border border-[#0066CC] bg-white px-5 py-3 text-[16px] font-semibold leading-6 text-[#0066CC] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-colors hover:bg-[#F5FAFF]">Chat&nbsp; with us</a>
        </div>
      </div>

      <picture className="absolute left-[-49px] top-[344px] h-[274.5px] w-[183px] xl:left-[-23px] xl:top-[165px] xl:h-[563px] xl:w-[486px]">
        <source media="(min-width: 1280px)" srcSet="/assets/figma-residential-hero-man-desktop.png" />
        <img src="/assets/figma-residential-hero-man-mobile.png" alt="ALAS appliance service technician" className="size-full object-cover object-top" />
      </picture>

      <picture className="absolute left-[260px] top-[331px] h-[258px] w-[172px] xl:left-[calc(100%-459px)] xl:top-[198px] xl:h-[655.543px] xl:w-[459px]">
        <source media="(min-width: 1280px)" srcSet="/assets/figma-residential-hero-woman-desktop.png" />
        <img src="/assets/figma-residential-hero-woman-mobile.png" alt="ALAS home appliance repair technician" className="size-full object-cover object-top" />
      </picture>
    </section>
  );
}
