const benefits = [
  ['Predictable Costs', 'One monthly fee covers preventive care and reduces repair expenses'],
  ['Priority Service', 'Members skip the line with same-day and next-day scheduling'],
  ['Reduced Downtime', 'Regular maintenance prevents failures before they happen'],
  ['Local Technicians', 'Fast response from certified techs who know your equipment'],
  ['No Deductibles', 'No hidden fees, deductibles, or surprise charges on covered repairs'],
  ['Flexible Coverage', 'Scale up or down as your needs change, cancel anytime'],
] as const;

export function ProtectionPlanSavings() {
  return (
    <section
      className="relative min-h-[1829.31px] overflow-hidden bg-[#003366] px-4 pb-[220px] pt-[120px] xl:h-[875.31px] xl:min-h-0 xl:px-20"
      aria-labelledby="protection-savings-title"
    >
      <picture className="pointer-events-none absolute inset-0 opacity-40">
        <source media="(min-width: 1280px)" srcSet="/assets/figma-savings-bg-desktop.png" />
        <img src="/assets/figma-savings-bg-mobile.png" alt="" className="size-full object-cover" />
      </picture>

      <div
        className="pointer-events-none absolute inset-x-4 top-0 h-[50px] bg-white [mask-position:center] [mask-repeat:no-repeat] [mask-size:100%_50px] xl:hidden"
        style={{
          maskImage: "url('/assets/figma-savings-mask-mobile.svg')",
          WebkitMaskImage: "url('/assets/figma-savings-mask-mobile.svg')",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-20 top-0 hidden h-[50px] bg-white [mask-position:center] [mask-repeat:no-repeat] [mask-size:100%_50px] xl:block"
        style={{
          maskImage: "url('/assets/figma-savings-mask-desktop.svg')",
          WebkitMaskImage: "url('/assets/figma-savings-mask-desktop.svg')",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[50px]">
        <header className="flex w-full max-w-[692px] flex-col items-center gap-[21px] text-center">
          <h2
            id="protection-savings-title"
            className="text-[24px] font-bold leading-[1.6] text-white xl:text-[42px] xl:leading-[1.4]"
          >
            How Much Could You Save With a Protection Plan?
          </h2>
          <p className="text-[16px] font-semibold leading-[1.6] text-[#E6E6E6]">
            Enter your appliances below to see your estimated annual repair costs vs. plan cost.
          </p>
        </header>

        <div className="grid w-full max-w-[1100px] grid-cols-1 gap-0.5 overflow-hidden rounded-[12px] bg-white/[0.03] xl:h-[433px] xl:grid-cols-3">
          {benefits.map(([title, description], index) => (
            <article key={title} className="h-[215.797px] bg-white/[0.03] px-7 pt-8">
              <p className="text-[40px] font-extrabold leading-[60px] text-[rgba(255,107,53,0.4)]">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 text-[18px] font-bold leading-[1.6] text-white">
                {title}
              </h3>
              <p className="mt-2 max-w-[310px] text-[16px] font-normal leading-[1.6] text-white/50">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
