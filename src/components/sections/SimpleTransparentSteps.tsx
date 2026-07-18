const steps = [
  {
    title: 'Choose Plan',
    description: 'Select coverage level',
    icon: '/assets/figma-simple-step-shield.svg',
  },
  {
    title: 'Confirm Appliances',
    description: 'We verify your units',
    icon: '/assets/figma-simple-step-home.svg',
  },
  {
    title: 'Call When Needed',
    description: 'Same-day service',
    icon: '/assets/figma-simple-step-phone.svg',
  },
  {
    title: '$0 Repair Cost',
    description: 'No surprises',
    icon: '/assets/figma-simple-step-dollar.svg',
  },
] as const;

export function SimpleTransparentSteps() {
  return (
    <section className="bg-white px-5 py-[50px] xl:h-[553px] xl:px-20 xl:py-20" aria-labelledby="simple-steps-title">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center xl:h-[393px]">
        <h2 id="simple-steps-title" className="pb-[9.3px] text-center text-[32px] font-bold leading-[1.4] text-[#042330] xl:w-[842px] xl:text-[42px]">
          Simple, transparent, <span className="text-[#00478F]">no surprises</span>
        </h2>

        <p className="mt-[39px] max-w-[1008px] text-center text-[16px] font-normal leading-[1.625] tracking-[-0.4492px] text-[#2A3B4B] xl:text-[20px]">
          Three systems. One team. One number. Stop juggling vendors. ALAS is the only DFW service company covering appliances, HVAC, and ventilation under a single monthly membership.
        </p>

        <ol className="mt-[39px] grid w-full grid-cols-1 justify-between gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          {steps.map((step, index) => (
            <li key={step.title} className="flex h-[181.594px] w-full flex-col items-center text-center xl:w-[249.5px]">
              <div className="relative h-24 w-20 shrink-0">
                <div className="flex size-20 items-center justify-center rounded-full bg-[#003366]">
                  <img src={step.icon} alt="" className="size-8" />
                </div>
                <span className="absolute -right-2 -top-2 flex size-8 items-center justify-center rounded-full bg-[#FF6B35] text-[14px] font-bold leading-5 text-white">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-6 text-[20px] font-bold leading-[1.6] text-[#090A0A]">{step.title}</h3>
              <p className="mt-1 text-[16px] font-normal leading-[1.6] text-[#17181A]">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
