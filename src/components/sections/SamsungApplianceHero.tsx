const trustItems = ['Same-Day Service', '90-Day Warranty', 'Licensed & Insured'] as const;

export function SamsungApplianceHero() {
  return (
    <section className="relative h-[1071px] overflow-hidden bg-[#003366] xl:h-[585px]">
      <picture>
        <source media="(max-width: 1279px)" srcSet="/assets/figma-samsung-appliance-bg-mobile.jpg" />
        <img
          src="/assets/figma-samsung-appliance-bg-desktop.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="absolute left-0 top-[-0.79%] h-[101.59%] w-full object-cover opacity-40"
        />
      </picture>

      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        <div className="absolute left-5 top-8 z-10 flex w-[calc(100%-40px)] flex-col items-start gap-8 xl:left-20 xl:top-[42px] xl:w-[638px]">
          <h1 className="w-full text-[32px] font-bold leading-[1.6] text-white xl:w-[1106px] xl:text-[56px] xl:leading-[1.4]">
            Samsung Appliance
            <br />
            Repair Services
          </h1>

          <p className="w-full text-[16px] font-semibold leading-[1.6] text-white/70 xl:w-[638px]">
            Fast, reliable repair for Samsung appliances — including refrigerators, washers, dryers, and more. Serving both residential and commercial customers.
          </p>

          <div className="order-3 flex w-full flex-wrap items-center gap-4 xl:order-4 xl:w-auto xl:flex-nowrap">
            {trustItems.map((item) => (
              <div key={item} className="flex shrink-0 items-center gap-3 text-[16px] font-semibold leading-[1.6] text-white/90">
                <SamsungCheckIcon />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="order-4 flex w-full flex-col items-start gap-6 xl:order-3 xl:w-auto xl:flex-row">
            <a
              id="schedule"
              href="tel:+14696383215"
              className="group flex h-[60px] w-full items-center justify-center rounded-[120px] bg-[#0066CC] px-7 text-[18px] font-semibold leading-7 text-[#F5FAFF] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#0059B3] hover:shadow-[0_10px_24px_rgba(0,0,0,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none xl:w-auto"
            >
              Schedule Samsung Repair
            </a>
            <a
              href="tel:+14696383215"
              className="flex h-[60px] w-full items-center justify-center rounded-[120px] border border-[#C5E1FD] px-7 text-[18px] font-semibold leading-7 text-[#F7FAFC] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-[transform,background-color,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none xl:w-auto"
            >
              Call us
            </a>
          </div>
        </div>

        <div className="absolute left-5 top-[647px] h-[329px] w-[calc(100%-40px)] overflow-hidden xl:left-[746.38px] xl:top-[23px] xl:h-[499.163px] xl:w-[623.732px] xl:overflow-visible">
          <picture>
            <source media="(max-width: 1279px)" srcSet="/assets/figma-samsung-appliance-hero-mobile.png" />
            <img
              src="/assets/figma-samsung-appliance-hero-desktop.png"
              alt="Samsung washer, dryer and refrigerator"
              width="1403"
              height="1122"
              fetchPriority="high"
              className="absolute left-[-29px] top-0 h-[329px] w-[411.103px] max-w-none object-cover xl:inset-0 xl:size-full"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

function SamsungCheckIcon() {
  return (
    <svg aria-hidden="true" className="size-8 shrink-0" viewBox="0 0 32 32" fill="none">
      <g transform="translate(2.66666 2.65903)">
        <path d="M26.6667 12.1143v1.2267a13.3333 13.3333 0 1 1-7.9067-12.1867" stroke="#00B700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26.6667 2.6743 13.3333 16.021l-4-4" stroke="#00B700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
