const industries = [
  {
    icon: '🍔',
    title: 'Restaurants & Coffee Shops',
    tagline: 'Your kitchen cannot afford to stop.',
    description: 'A broken fryer or walk-in cooler during dinner service means lost revenue, food waste, and angry customers. We keep your kitchen running — or get it back up fast.',
  },
  {
    icon: '🏨',
    title: 'Hotels & Hospitality',
    tagline: 'One broken HVAC = one bad review.',
    description: 'Guest comfort depends entirely on your equipment. From HVAC to commercial laundry, we provide priority service so your guests never notice a problem.',
  },
  {
    icon: '🏥',
    title: 'Senior Living & Healthcare',
    tagline: 'Your residents depend on reliable systems.',
    description: 'Appliance and HVAC failures in care facilities are not just costly — they are a health and safety risk. We treat your operation with the urgency it deserves.',
  },
] as const;

const benefits = [
  'Same-day emergency response',
  'Fryers, coolers, ovens & ranges covered',
  'Hood & ventilation systems included',
  'Quarterly kitchen equipment PM',
] as const;

export function CommercialIndustries() {
  return (
    <section className="relative min-h-[2281px] bg-white xl:h-[955px] xl:min-h-0" aria-labelledby="commercial-industries-title">
      <div className="absolute inset-x-0 top-0 h-[1987px] overflow-hidden bg-[#103057] xl:h-[532px] xl:bg-gradient-to-b xl:from-[#022045] xl:to-[#044FAB]">
        <div className="absolute inset-x-0 top-0 h-[583px] bg-gradient-to-b from-[#022045] to-[#044FAB] xl:hidden" />

        <img
          src="/assets/figma-commercial-languages-technician-left.png"
          alt="ALAS commercial appliance technician"
          className="absolute left-[-49px] top-[344px] h-[274.5px] w-[183px] object-cover xl:left-[-108px] xl:top-4 xl:h-[729px] xl:w-[486px]"
        />
        <img
          src="/assets/figma-commercial-languages-technician-right.png"
          alt="ALAS HVAC technician"
          className="absolute left-[260px] top-[331px] h-[258px] w-[172px] object-cover xl:left-[1120px] xl:top-0 xl:h-[575px] xl:w-[383.33px]"
        />

        <div className="absolute left-1/2 top-[49px] w-[353px] -translate-x-1/2 text-center xl:top-[53px] xl:w-[865px]">
          <h2 id="commercial-industries-title" className="text-[32px] font-bold leading-[1.6] text-[#F5FAFF] xl:text-[42px] xl:leading-[1.4]">
            We speak your language — because we work your hours
          </h2>
          <p className="mx-auto mt-[22px] w-[301px] text-[16px] font-medium leading-[32.5px] tracking-[-0.4492px] text-[#F4F8FF] xl:mt-[17px] xl:w-auto xl:whitespace-nowrap">
            Different businesses. Different equipment. Same commitment: your operation never stops.
          </p>
        </div>
      </div>

      <div className="absolute left-1/2 top-[447px] grid w-[353px] -translate-x-1/2 grid-cols-1 gap-6 xl:top-[335px] xl:w-[1278px] xl:grid-cols-[410px_410px_410px]">
        {industries.map((industry) => (
          <article
            key={industry.title}
            className="group flex w-[353px] flex-col items-start gap-4 rounded-[14px] border-2 border-[#F9F2F1] bg-white px-[30px] py-9 shadow-[0_0_15px_rgba(42,31,188,0.4)] transition-[transform,border-color,box-shadow] duration-300 ease-out motion-safe:hover:-translate-y-2 hover:border-[#C5E1FD] hover:shadow-[0_18px_38px_rgba(42,31,188,0.28)] xl:h-[550.76px] xl:w-[410px]"
          >
            <span className="flex h-[60px] w-full items-center text-[40px] leading-[60px] transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1 motion-safe:group-hover:scale-110" aria-hidden="true">
              {industry.icon}
            </span>
            <h3 className="text-[24px] font-bold leading-[1.6] text-[#003366] xl:whitespace-nowrap">{industry.title}</h3>
            <p className="text-[14px] font-medium leading-[1.48] text-[#FF6B35]">{industry.tagline}</p>
            <p className="text-[16px] font-normal leading-[1.6] text-[#17181A]">{industry.description}</p>

            <ul className="flex w-full flex-col gap-2 xl:gap-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex min-h-[19.19px] items-center gap-2 text-[12px] font-medium leading-[19.2px] text-[#042330] xl:text-[16px]">
                  <span className="size-[5px] shrink-0 rounded-full bg-[#0066CC] transition-transform duration-300 group-hover:scale-125" aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:+14696383215"
              className="flex items-center justify-center rounded-[120px] bg-[#0066CC] px-5 py-3 text-[16px] font-semibold leading-6 text-[#F5FAFF] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-[transform,background-color,box-shadow] duration-300 motion-safe:hover:-translate-y-0.5 hover:bg-[#004F9F] hover:shadow-[0_0_22px_rgba(42,31,188,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066CC]"
            >
              Get a Quote
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
