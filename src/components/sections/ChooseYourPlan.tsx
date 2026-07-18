const planFeatures = [
  'No service fees',
  'No deductibles',
  'Local technicians',
  'Same-day service',
] as const;

const plans = [
  {
    title: 'Residential Membership',
    icon: '/assets/figma-membership-house.svg',
    checkIcon: '/assets/figma-membership-check-blue.svg',
    buttonLabel: 'View Residential Plans',
    buttonClass: 'bg-[#277ACD]',
  },
  {
    title: 'Commercial Membership',
    icon: '/assets/figma-membership-building.svg',
    checkIcon: '/assets/figma-membership-check-orange.svg',
    buttonLabel: 'View Commerical Plans',
    buttonClass: 'bg-[#FF6B35]',
  },
] as const;

export function ChooseYourPlan() {
  return (
    <section className="relative min-h-[1491px] overflow-hidden bg-[#103057] xl:min-h-[936px]" aria-labelledby="choose-your-plan-title">
      <picture className="pointer-events-none absolute inset-x-0 top-0 h-[583px] xl:h-[383px]">
        <source media="(min-width: 1280px)" srcSet="/assets/figma-membership-plan-bg.png" />
        <img
          src="/assets/figma-membership-plan-bg-mobile.png"
          alt=""
          className="size-full object-fill object-bottom"
        />
      </picture>

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 pt-[72px] text-center xl:px-0 xl:pt-[100px]">
        <h1 id="choose-your-plan-title" className="text-[32px] font-bold leading-[1.4] text-[#003366] xl:text-[42px]">
          CHOOSE YOUR PLAN for&nbsp;Homes &amp; Businesses
        </h1>
        <p className="mt-7 max-w-[1008px] text-[16px] font-normal leading-[1.625] tracking-[-0.4492px] text-[#2A3B4B] xl:mt-[35px] xl:text-[20px]">
          Three systems. One team. One number. Stop juggling vendors. ALAS is the only DFW service company covering appliances, HVAC, and ventilation under a single monthly membership.
        </p>
        <ul className="mt-6 flex max-w-[616px] flex-wrap items-center justify-center gap-x-4 gap-y-3 xl:mt-[35px]">
          {['Priority Scheduling', 'Preventive Maintenance', 'Dedicated Support'].map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-[14px] font-semibold leading-5 text-[#042330]">
              <span className="flex size-6 items-center justify-center rounded-full border-2 border-[#00B51A] text-[17px] font-bold leading-none text-[#00B51A]" aria-hidden="true">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mx-auto mt-10 grid w-full max-w-[1094px] grid-cols-1 gap-8 px-5 pb-20 xl:absolute xl:left-1/2 xl:top-[347px] xl:mt-0 xl:-translate-x-1/2 xl:grid-cols-2 xl:px-0 xl:pb-0">
        {plans.map((plan) => (
          <article key={plan.title} className="flex min-h-[482px] flex-col items-start gap-6 rounded-[20px] border-2 border-[#E5E7EB] bg-white p-6 text-left">
            <header className="flex w-full flex-col items-start gap-4">
              <img src={plan.icon} alt="" className="size-[46px]" />
              <h2 className="text-[22px] font-bold leading-[1.6] text-[#090A0A] sm:text-[24px]">{plan.title}</h2>
            </header>
            <p className="text-[16px] font-normal leading-[1.6] text-[#454648]">
              Protect your home appliances with scheduled maintenance, priority service, and repair discounts — so a broken washer never ruins your week.
            </p>
            <div className="flex w-full flex-col items-start gap-4">
              <ul className="flex flex-col gap-4">
                {planFeatures.map((feature) => (
                  <li key={feature} className="flex h-6 items-center gap-3 text-[16px] font-semibold leading-[1.6] text-[#090A0A]">
                    <img src={plan.checkIcon} alt="" className="size-[22px]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#membership-options" className={`inline-flex min-h-12 items-center justify-center rounded-[120px] px-5 py-3 text-[16px] font-semibold leading-6 text-[#F5FAFF] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-opacity hover:opacity-90 ${plan.buttonClass}`}>
                {plan.buttonLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
