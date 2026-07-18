import type { CSSProperties } from 'react';

const coverageGroups = [
  {
    icon: '❄️',
    title: 'Refrigeration',
    color: '#00478F',
    items: ['Walk-in coolers & freezers', 'Reach-in coolers', 'Prep tables', 'Display cases', 'Ice machines'],
  },
  {
    icon: '🔥',
    title: 'Cooking Equipment',
    color: '#BA7517',
    items: ['Commercial fryers', 'Convection ovens', 'Ranges & griddles', 'Steamers', 'Warming equipment'],
  },
  {
    icon: '🌬️',
    title: 'HVAC Systems',
    color: '#059669',
    items: ['Rooftop units', 'Split systems', 'Make-up air units', 'Exhaust systems', 'Air handlers'],
  },
  {
    icon: '💧',
    title: 'Vent Hood',
    color: '#534AB7',
    items: ['Commercial dishwashers', 'Water heaters', 'Vent Hood', 'Commercial laundry', 'Garbage disposals'],
  },
] as const;

export function CommercialWhatWeCover() {
  return (
    <section className="min-h-[2372.1px] bg-[#F6FAFF] px-5 py-[72px] font-['Montserrat'] xl:min-h-0 xl:h-[874px]">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="flex flex-col gap-[30px]">
          <header className="mx-auto flex min-h-[205.3px] max-w-[1008px] flex-col items-center justify-start text-center xl:min-h-[148.3px]">
            <h2 className="text-[32px] font-bold leading-[1.6] text-black xl:text-[42px] xl:leading-[1.4]">
              What we cover
            </h2>
            <p className="mt-[7px] max-w-[672px] text-[20px] font-normal leading-[32.5px] tracking-[-0.449px] text-[#2A3B4B]">
              Protect your commercial appliances and HVAC systems with one simple plan. Fast response,
              expert service, zero surprises.
            </p>
          </header>

          <div className="grid gap-[30px] xl:grid-cols-4">
            {coverageGroups.map((group, groupIndex) => (
              <article
                key={group.title}
                style={{ '--group-color': group.color } as CSSProperties}
                className="group flex h-[397.95px] flex-col gap-4 rounded-[16px] border border-[#E0E8F2] bg-white px-[21px] py-[23px] transition-[transform,box-shadow,border-color] duration-300 motion-safe:hover:-translate-y-1.5 motion-safe:hover:border-[var(--group-color)] motion-safe:hover:shadow-[0_18px_38px_rgba(18,48,92,0.12)]"
              >
                <div className="flex h-12 items-center text-[32px] leading-[48px] transition-transform duration-300 motion-safe:group-hover:scale-110 motion-safe:group-hover:-rotate-3">
                  {group.icon}
                </div>
                <div className="flex h-12 items-center py-3">
                  <h3 className="text-[24px] font-bold leading-[22.4px] tracking-[-0.14px]" style={{ color: group.color }}>
                    {group.title}
                  </h3>
                </div>
                {group.items.map((item, itemIndex) => (
                  <div
                    key={item}
                    className={`flex h-[32.19px] items-start border-[#E0E8F2] ${itemIndex < group.items.length - 1 ? 'border-b' : ''}`}
                  >
                    <span
                      className="mt-[7px] h-1 w-1 shrink-0 rounded-full transition-transform duration-300 motion-safe:group-hover:scale-150"
                      style={{ backgroundColor: group.color }}
                    />
                    <a
                      href="#schedule"
                      className={`ml-3 text-[16px] font-medium leading-[19.2px] text-[#2A3B4B] transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 ${
                        groupIndex === 0 ? 'xl:text-[#388BDD] xl:underline xl:decoration-1 xl:underline-offset-2' : ''
                      } hover:text-[var(--group-color)] hover:underline hover:decoration-1 hover:underline-offset-2 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--group-color)]`}
                    >
                      {groupIndex === 3 && itemIndex === 2 ? (
                        <><span className="xl:hidden">Hood ventilation</span><span className="hidden xl:inline">Vent Hood</span></>
                      ) : item}
                    </a>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </div>

        <div className="mt-[33px] flex min-h-[278px] flex-col items-center justify-center gap-6 rounded-[22px] border border-[#DBE7F6] bg-white p-[27px] text-center shadow-[0_20px_30px_rgba(18,48,92,0.09)] xl:mt-[32.75px] xl:h-[121px] xl:min-h-0 xl:flex-row xl:justify-between xl:text-left">
          <div className="max-w-[731px]">
            <h3 className="text-[21px] font-bold leading-[27px] text-[#042330]">Don't see your equipment listed?</h3>
            <p className="mt-[7px] text-[16px] font-normal leading-[24px] text-[#3F4E5C]">
              We cover more than most. Call for a free assessment — we'll confirm what's included before you sign anything.
            </p>
          </div>
          <a
            href="tel:+14696383215"
            className="group/call flex min-h-[57px] shrink-0 items-center justify-center gap-[10px] rounded-[90px] bg-gradient-to-r from-[#075EE8] to-[#003FD2] px-[30px] py-[18px] text-[16px] font-bold leading-[19px] text-white shadow-[0_12px_24px_rgba(7,94,232,0.22)] transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_16px_30px_rgba(7,94,232,0.34)]"
          >
            <img src="/assets/figma-commercial-cover-call.svg" alt="" className="h-6 w-6 transition-transform duration-300 motion-safe:group-hover/call:rotate-12" />
            <span>Call 098 909 990 99</span>
          </a>
        </div>
      </div>
    </section>
  );
}
