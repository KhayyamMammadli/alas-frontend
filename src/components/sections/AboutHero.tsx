export function AboutHero() {
  return (
    <section className="relative h-[900px] overflow-hidden bg-[linear-gradient(157.109deg,#001D3D_0%,#003D7A_50%,#0066CC_100%)] xl:h-[608px]">
      <div className="relative mx-auto h-full w-full max-w-[1280px] px-5 pt-12 xl:h-[540px] xl:px-0 xl:pt-0 xl:top-[34px]">
        <div className="relative z-20 flex w-full flex-col items-start xl:absolute xl:left-6 xl:top-[88px] xl:w-[552px]">
          <div className="flex h-[37.5px] items-center rounded-full border border-white/20 px-4">
            <span className="size-2 shrink-0 rounded-full bg-[#05DF72] opacity-40" />
            <span className="ml-2 text-[12px] font-medium leading-[19.5px] text-white sm:text-[13px]">Dallas–Fort Worth's Trusted Service Team</span>
          </div>

          <h1 className="mt-6 w-full text-[38px] font-black leading-[1.1] tracking-[-0.5px] text-white sm:text-[42px] xl:mt-6 xl:w-[608px] xl:text-[52px] xl:leading-[57.2px]">
            About <span className="text-[#60A5FA]">ALAS</span><br className="xl:hidden" /> Appliance Services
          </h1>

          <p className="mt-5 w-full max-w-[500px] text-[16px] font-normal leading-[27.2px] text-white/75 xl:mt-[14px] xl:text-[17px]">
            Reliable appliance repair, refrigeration, HVAC, and protection plans designed to keep homes and businesses running without interruption.
          </p>

          <div className="mt-7 flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4 xl:mt-8">
            <a href="#schedule" className="flex h-[60px] items-center justify-center rounded-[90px] bg-white px-7 text-center text-[16px] font-bold leading-[22.5px] text-[#0066CC]">
              Schedule Service
            </a>
            <a href="/protection-plans" className="flex h-[60px] items-center justify-center rounded-[90px] border-2 border-white/30 px-[30px] text-center text-[16px] font-semibold leading-[22.5px] text-white">
              View Membership Plans
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 h-[430px] w-[440px] -translate-x-1/2 xl:bottom-auto xl:left-[632px] xl:top-[23px] xl:h-[563px] xl:w-[643px] xl:translate-x-0">
          <div className="absolute bottom-[-45px] right-[-72px] h-[445px] w-[420px] rounded-full border border-white/15 bg-[rgba(255,255,255,0.08)] xl:bottom-auto xl:right-0 xl:top-[3px] xl:h-[600px] xl:w-[568px]" />
          <div className="absolute bottom-0 right-[-48px] h-[330px] w-[310px] overflow-hidden xl:bottom-auto xl:left-[189px] xl:right-auto xl:top-[55px] xl:h-[564px] xl:w-[404px]">
            <img src="/assets/figma-about-appliances.png" alt="Refrigerator, washer, microwave and oven" className="absolute inset-0 size-full object-cover object-right xl:left-[-109.26%] xl:top-0 xl:h-full xl:w-[209.26%] xl:max-w-none xl:object-fill" />
          </div>
          <img src="/assets/figma-about-technician.png" alt="ALAS appliance service technician" className="absolute bottom-0 left-[-16px] h-[420px] w-[280px] object-cover object-top xl:bottom-auto xl:left-0 xl:top-0 xl:h-[587px] xl:w-[392px]" />
        </div>
      </div>
    </section>
  );
}
