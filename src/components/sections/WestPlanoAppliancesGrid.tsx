const repairServices = [
  {
    number: '01',
    title: 'Refrigerator Repair in Plano',
    description: 'Help for refrigerators not cooling, leaking water, making noise, or having ice maker issues across all brands.',
    linkLabel: 'Learn about refrigerator repair →',
    href: '/services/refrigerator-repair',
  },
  {
    number: '02',
    title: 'Washer Repair in Plano',
    description: 'Repair for washers that will not drain, spin, fill, or complete cycles — top-load and front-load models.',
    linkLabel: 'Learn about washer repair →',
    href: '#washer-repair',
  },
  {
    number: '03',
    title: 'Dryer Repair in Plano',
    description: 'Service for dryers not heating, taking too long, making noise, or failing to start — gas and electric.',
    linkLabel: 'Learn about dryer repair →',
    href: '#dryer-repair',
  },
  {
    number: '04',
    title: 'Dishwasher Repair in Plano',
    description: 'Repair for dishwashers that do not clean, drain, fill, or latch properly — all major brands serviced.',
    linkLabel: 'Learn about dishwasher repair →',
    href: '#dishwasher-repair',
  },
] as const;

export function WestPlanoAppliancesGrid() {
  return (
    <section className="bg-[#F4F6F8] px-5 py-[50px] font-['Montserrat'] xl:h-[553px] xl:px-20 xl:py-[63px]" aria-labelledby="west-plano-appliances-title">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center">
        <div className="flex w-full flex-col items-center gap-4 pb-[10px] text-center">
          <h2 id="west-plano-appliances-title" className="w-full text-[32px] font-bold leading-[1.6] text-[#090A0A] xl:w-[890px] xl:text-[42px] xl:leading-[1.4]">
            Appliances We Repair <span className="text-[#0066CC]">in West Plano</span>
          </h2>
          <p className="w-full text-[16px] font-normal leading-[26.4px] text-[#454648]">
            Quick access to our most requested local repair services.
          </p>
        </div>

        <div className="mt-0 flex w-full flex-col gap-5 xl:mt-[21.4px] xl:grid xl:grid-cols-2 xl:gap-4">
          {repairServices.map((service) => (
            <article key={service.number} className="group flex w-full items-start gap-4 rounded-[10px] border border-[#E8ECF4] bg-white px-[25px] py-[23px] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[#0066CC]/40 hover:shadow-[0_8px_24px_rgba(0,71,143,0.08)] xl:h-[141.81px]">
              <div className="h-[30px] w-7 shrink-0 pt-0.5">
                <span className="flex size-7 items-center justify-center rounded-[7px] bg-[#E8F2FF] pb-[4.4px] pt-[3.6px] text-center text-[12px] font-extrabold leading-[19.8px] text-[#0066CC]">
                  {service.number}
                </span>
              </div>

              <div className="flex min-w-0 flex-1 flex-col items-start gap-[3.8px] pb-[2.44px]">
                <h3 className="w-full text-[15px] font-bold leading-[18px] text-[#042330]">{service.title}</h3>
                <p className="w-full pb-[6.725px] text-[14px] font-normal leading-[21.7px] text-[#454648]">{service.description}</p>
                <a href={service.href} className="border-b border-[#0066CC]/30 text-[13px] font-semibold leading-[21.45px] text-[#00478F] transition-colors group-hover:border-[#0066CC] group-hover:text-[#0066CC]">
                  {service.linkLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
