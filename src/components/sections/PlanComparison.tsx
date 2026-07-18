const comparisonRows = [
  ['Starting Price', 'From $15/month', 'Custom Quote'],
  ['Coverage Type', 'Household appliances', 'Commercial equipment + HVAC'],
  ['Preventive Maintenance', '1-2 visits/year', '2-4 visits/year'],
  ['Priority Scheduling', 'Yes', 'Same-day emergency'],
  ['Labor Discount', 'Up to 30%', 'Up to 30%'],
  ['Multi-location Support', '—', 'Yes'],
  ['Service Credit', '—', 'Annual credit'],
] as const;

export function PlanComparison() {
  return (
    <section className="h-[822px] bg-white pt-[50px] xl:h-[932px] xl:px-20 xl:py-20" aria-labelledby="plan-comparison-title">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center">
        <h2 id="plan-comparison-title" className="w-[353px] text-center text-[24px] font-bold leading-[1.6] text-[#090A0A] xl:w-[996px] xl:pb-[9.3px] xl:text-[42px] xl:leading-[1.4]">
          <span className="text-[#00478F]">Residential vs. Commercial </span>
          <span>at a glance</span>
        </h2>

        <p className="mt-[39px] hidden w-[1008px] text-center text-[20px] font-normal leading-[32.5px] tracking-[-0.4492px] text-[#2A3B4B] xl:block">
          Three systems. One team. One number. Stop juggling vendors. ALAS is the only DFW service company covering appliances, HVAC, and ventilation under a single monthly membership.
        </p>

        <div className="mt-[52px] h-[561px] w-[calc(100%-15px)] self-end overflow-x-auto overflow-y-hidden rounded-[16px] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] xl:mt-[39px] xl:w-[1100px] xl:self-auto xl:overflow-hidden">
          <div className="h-[561px] w-[1100px]">
            <div className="grid h-[61px] grid-cols-[550px_261px_261px_28px] items-center bg-[#003366] text-[16px] font-semibold leading-[1.6] text-white">
              <div className="pl-7">Feature</div>
              <div className="text-center">Residential</div>
              <div className="text-center">Commercial</div>
              <div />
            </div>

            {comparisonRows.map(([feature, residential, commercial], index) => (
              <div key={feature} className="grid h-[62px] grid-cols-[550px_261px_261px_28px] items-center border-b border-[#F8F2F1] text-[16px] font-normal leading-[1.6] text-[#090A0A]">
                <div className="pl-7">{feature}</div>
                <div className="text-center">
                  {index === 1 ? (
                    <a href="/protection-plans" className="text-[#388BDD] underline">
                      {residential}
                    </a>
                  ) : residential}
                </div>
                <div className="text-center">{commercial}</div>
                <div />
              </div>
            ))}

            <div className="grid h-[66px] grid-cols-[550px_261px_261px_28px] items-center text-[16px] font-normal leading-[1.6] text-[#090A0A]">
              <div className="pl-7">Best For</div>
              <div className="flex justify-center">
                <span className="rounded-[100px] bg-[rgba(0,51,102,0.08)] px-[10px]">Homeowners</span>
              </div>
              <div className="flex justify-center">
                <span className="rounded-[100px] bg-[rgba(255,107,53,0.1)] px-[10px] text-[#FF6B35]">Restaurants, Hotels</span>
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
