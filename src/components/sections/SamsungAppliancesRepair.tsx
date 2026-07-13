const appliances = [
  {
    title: 'Samsung Refrigerator Repair',
    description: 'Fast repairs for cooling issues, ice maker problems, leaks, and more. We service all major refrigerator brands.',
    icon: '/assets/figma-samsung-repair-refrigerator.png',
    href: '/protection-plans',
  },
  {
    title: 'Samsung Washer Repair',
    description: 'Expert washing machine repairs including leaks, drainage issues, spin cycle problems, and electrical faults.',
    icon: '/assets/figma-samsung-repair-washer.png',
    href: '/services/appliance-repair',
  },
  {
    title: 'Samsung Dryer Repair',
    description: 'Professional dryer service for heating issues, drum problems, venting concerns, and noise reduction.',
    icon: '/assets/figma-samsung-repair-dryer.png',
    href: '/services/appliance-repair',
  },
  {
    title: 'Samsung Dishwasher Repair',
    description: 'Complete dishwasher repair services for cleaning issues, drainage problems, and door seal replacements.',
    icon: '/assets/figma-samsung-repair-dishwasher.png',
    href: '/services/appliance-repair',
  },
  {
    title: 'Samsung Oven & Range Repair',
    description: 'Reliable oven and range repairs including temperature control, igniter replacement, and heating element service.',
    icon: '/assets/figma-samsung-repair-oven.png',
    href: '/services/appliance-repair',
  },
  {
    title: 'Cooktop Repair in Plano',
    description: 'Expert cooktop repairs for gas and electric models, burner replacement, and ignition system fixes.',
    icon: '/assets/figma-samsung-repair-cooktop.png',
    href: '/services/appliance-repair',
  },
] as const;

export function SamsungAppliancesRepair() {
  return (
    <section className="bg-white px-5 pb-[50px] pt-[50px] xl:h-[723px] xl:px-20 xl:pb-0 xl:pt-[70px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8">
        <h2 className="w-full text-center text-[32px] font-bold leading-[1.6] text-[#090A0A] xl:max-w-[899px] xl:text-[42px] xl:leading-[1.4]">
          Samsung Appliances We Repair
        </h2>

        <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-3">
          {appliances.map((appliance) => (
            <article
              key={appliance.title}
              className="group flex min-h-[206.25px] w-full flex-col items-start gap-[14px] rounded-[14px] border border-[#E5E7EB] bg-white p-6 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[#C5E1FD] hover:shadow-[0_12px_28px_rgba(4,35,48,0.08)] motion-reduce:transform-none xl:p-[25px]"
            >
              <div className="flex min-h-10 w-full items-center gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-[#EFF6FF]">
                  <img src={appliance.icon} alt="" width="24" height="24" className="size-6" />
                </span>
                <h3 className="text-[20px] font-medium leading-[25px] tracking-[-0.4492px] text-[#090A0A]">
                  {appliance.title}
                </h3>
              </div>

              <p className="min-h-[68.25px] w-full max-w-[318px] text-[14px] font-medium leading-[22.75px] tracking-[-0.1504px] text-[#3F4E5C] xl:text-[#454648]">
                {appliance.description}
              </p>

              <a
                href={appliance.href}
                aria-label={`Learn more about ${appliance.title}`}
                className="inline-flex items-center gap-[5px] text-[14px] font-medium leading-5 tracking-[-0.1504px] text-[#0066CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0066CC]"
              >
                <span>Learn more</span>
                <span aria-hidden="true" className="text-[#155DFC] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
