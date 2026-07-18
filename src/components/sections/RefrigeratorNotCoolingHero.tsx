const benefits = ['Same-Day Service', '90-Day Warranty', 'Licensed & Insured'] as const;

export function RefrigeratorNotCoolingHero() {
  return (
    <section className="bg-white font-['Montserrat']" aria-labelledby="refrigerator-not-cooling-title">
      <div className="flex h-[53px] items-center border-b border-[#E5E7EB] bg-[#F4F6F8] px-5 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between">
          <nav className="flex items-center gap-2 text-[14px] leading-5" aria-label="Breadcrumb">
            <a href="/" className="text-[#747476] transition-colors hover:text-[#00478F]">Home</a>
            <span className="text-[#6B7280]">/</span>
            <a href="/services/appliance-repair" className="text-[#747476] transition-colors hover:text-[#00478F]">Locations</a>
            <span className="text-[#6B7280]">/</span>
            <span className="font-semibold text-[#042330]">Plano, TX</span>
          </nav>

          <div className="hidden items-center gap-6 text-[14px] font-semibold leading-5 xl:flex">
            <span className="flex items-center gap-2 text-[#059669]"><span className="flex size-4 items-center justify-center rounded-full border border-current text-[10px]">◷</span>Open Today · 7AM - 9PM</span>
            <span className="flex items-center gap-2 text-[#042330]"><span className="text-[#FF6B35]">⌖</span>Serving Plano Since 2009</span>
          </div>
        </div>
      </div>

      <div className="relative h-[740px] overflow-hidden bg-[#001A4E] xl:h-[626px]">
        <img src="/assets/figma-contact-hero-bg.png" alt="" className="absolute inset-0 h-full w-full object-cover" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col px-5 pb-0 pt-10 xl:px-[85px]">
          <div className="flex w-full max-w-[830px] flex-col items-start gap-8">
            <h1 id="refrigerator-not-cooling-title" className="text-[36px] font-bold leading-[1.4] text-white sm:text-[42px] xl:text-[42px]">
              Refrigerator Not Cooling?<br />Causes, Fixes, and When to Call
            </h1>
            <p className="w-full max-w-[623px] text-[14px] font-semibold leading-5 text-white/90">
              If your refrigerator isn't keeping food cold, here's what might be wrong, what you can safely check yourself, and when professional repair is the right call.
            </p>

            <ul className="flex flex-col gap-4">
              {benefits.map(benefit => (
                <li key={benefit} className="flex items-center gap-3 text-[14px] font-semibold leading-5 text-white/90">
                  <span className="flex size-7 items-center justify-center rounded-full border-[3px] border-[#00C853] text-[18px] font-bold leading-none text-[#00C853]">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4 xl:gap-6">
              <a href="#schedule" className="group flex h-[60px] cursor-pointer items-center justify-center gap-3 rounded-[120px] bg-[#F5FAFF] px-7 text-[18px] font-semibold leading-7 text-[#003366] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.22)]">
                Schedule Service
                <span className="flex size-6 shrink-0 items-center justify-center" aria-hidden="true">
                  <img src="/assets/figma-contact-hero-chevron.svg" alt="" className="h-[15.5px] w-[8.5px] transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
              <a href="tel:+14696383215" className="flex h-[60px] cursor-pointer items-center justify-center rounded-[120px] border border-[#C5E1FD] px-7 text-[18px] font-semibold leading-7 text-[#F7FAFC] transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-white/10">Call Now</a>
            </div>
          </div>

          <img src="/assets/figma-contact-hero-appliances.png" alt="Refrigerator, washer and dryer protected by ALAS" className="pointer-events-none absolute bottom-[-35px] right-[-120px] w-[530px] max-w-none object-contain sm:right-[-80px] sm:w-[650px] xl:bottom-[-85px] xl:right-[-50px] xl:w-[877.33px]" />
        </div>
      </div>
    </section>
  );
}
