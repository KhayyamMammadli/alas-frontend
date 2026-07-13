const benefits = [
  {
    icon: '/assets/figma-22e-fast-response.svg',
    title: 'Fast Response',
    description: 'Same-day service available',
  },
  {
    icon: '/assets/figma-22e-local-technicians.svg',
    title: 'Local Technicians',
    description: 'Plano-based repair experts',
  },
  {
    icon: '/assets/figma-22e-transparent-pricing.svg',
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprises',
  },
  {
    icon: '/assets/figma-22e-warranty.svg',
    title: 'Warranty Included',
    description: '90-day parts & labor guarantee',
  },
  {
    icon: '/assets/figma-22e-same-day.svg',
    title: 'Same-Day Availability',
    description: 'Emergency repairs when you need them',
  },
] as const;

export function SamsungError22EMeaning() {
  return (
    <section className="bg-white px-5 py-[50px] xl:h-[406px] xl:px-20 xl:py-10">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-[26px]">
        <h2 className="w-full text-[32px] font-bold leading-[44.8px] text-[#090A0A] xl:whitespace-nowrap xl:text-[42px] xl:leading-[58.8px]">
          What Does Samsung Error Code 22E Mean?
        </h2>

        <p className="w-full text-[16px] font-normal leading-[25.6px] text-[#1A2D40] xl:text-[18px] xl:leading-[29.25px] xl:tracking-[-0.4395px]">
          Direct, factual explanation. Example: Error code 22E (or 22C) typically indicates a problem with the refrigerator&apos;s
          evaporator fan system. The fan that circulates cold air is not functioning properly, which can affect cooling performance.
        </p>

        <div className="grid w-full grid-cols-2 justify-items-center gap-x-4 gap-y-8 pt-1 sm:grid-cols-3 xl:flex xl:h-[156px] xl:items-start xl:justify-between xl:gap-0 xl:pt-0">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className={`flex min-h-[156px] w-full max-w-[211.2px] flex-col items-center text-center ${index === benefits.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_1px_1.5px_rgba(0,0,0,0.10),0_1px_1px_rgba(0,0,0,0.10)]">
                <img src={benefit.icon} alt="" className="size-8" />
              </span>
              <h3 className="mt-4 text-[18px] font-medium leading-7 tracking-[-0.4395px] text-[#090A0A]">{benefit.title}</h3>
              <p className="mt-2 text-[14px] font-normal leading-5 tracking-[-0.1504px] text-[#2A3B4B]">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
