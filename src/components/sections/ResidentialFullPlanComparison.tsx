const plans = [
  { name: 'Silver', level: 'Essential', color: '#2563EB', background: '#F3F8FF', icon: '/assets/figma-comparison-silver.svg' },
  { name: 'Gold', level: 'Premium', color: '#E67900', background: '#FFF8E8', icon: '/assets/figma-comparison-gold.svg' },
  { name: 'Platinum', level: 'Elite', color: '#7C3AED', background: '#F5F0FF', icon: '/assets/figma-comparison-platinum.svg' },
] as const;

const rows = [
  { icon: '🏷', label: 'Monthly price', values: ['$49/mo', '$79/mo', '$129/mo'], price: true },
  { icon: '📋', label: 'HVAC systems covered', values: ['1 system', 'Up to 2', 'Up to 3'] },
  { icon: '▣', label: 'Appliances covered', values: ['Up to 5', 'Up to 8', 'Up to 12'] },
  { icon: '🗓', label: 'HVAC maintenance visits/year', values: ['2 visits', '2 visits', '2 Premium visits'] },
  { icon: '🔧', label: 'Appliance visits/year', values: ['1 visit', '1 visit', '2 visits ★'] },
  { icon: '⏱', label: 'Priority scheduling', values: ['Within 48 hrs', 'Same/Next-day', 'Highest priority'] },
  { icon: '%', label: 'Repair labor discount', values: ['15% off', '20% off', '30% off'] },
  { icon: '🛡', label: 'Repair warranty', values: ['90 days', '6 months', '12 months'] },
  { icon: '🔍', label: 'HVAC diagnostic fee', values: ['$69 (reg. $129)', '1 Free/yr ($129 value)', 'Waived*'] },
  { icon: '▣', label: 'Appliance diagnostic fee', values: ['$49 (reg. $99)', '$39', '$29'] },
  { icon: '📄', label: 'No long-term contracts', values: ['✓', '✓', '✓'], check: true },
] as const;

export function ResidentialFullPlanComparison() {
  return (
    <section className="bg-white px-5 pb-20 pt-[85px] font-['Montserrat'] xl:px-20 xl:pb-0" aria-labelledby="full-plan-comparison-title">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[40px] xl:gap-[67px]">
        <h2 id="full-plan-comparison-title" className="text-center text-[32px] font-bold leading-[1.4] text-[#090A0A] xl:text-[42px]">
          Full Plan Comparison
        </h2>

        <div className="w-full overflow-x-auto rounded-[24px] border border-[#E1E8F0] bg-white shadow-[0_22px_55px_rgba(39,122,205,0.10)] [scrollbar-width:thin] [scrollbar-color:#277ACD_#E1E8F0]">
          <div className="min-w-[1000px] xl:min-w-[1278px]">
            <div className="grid h-[172.5px] grid-cols-[32.84%_20.02%_25.49%_21.65%] border-b border-[#E1E8F0]">
              <div className="flex items-center px-5 text-[18px] font-bold text-[#172033]">PLAN COMPARISON</div>
              {plans.map(plan => (
                <div key={plan.name} className="flex flex-col items-center justify-center gap-[5px]" style={{ backgroundColor: plan.background }}>
                  <img src={plan.icon} alt="" className="size-11" aria-hidden="true" />
                  <strong className="pt-[3px] text-[24px] font-extrabold leading-none" style={{ color: plan.color }}>{plan.name}</strong>
                  <span className="text-[14px] font-bold leading-none" style={{ color: plan.color }}>{plan.level}</span>
                </div>
              ))}
            </div>

            <div>
              {rows.map((row, rowIndex) => (
                <div key={row.label} className={`grid grid-cols-[35.82%_17.12%_25.48%_21.58%] border-b border-[#E1E8F0] ${rowIndex === 0 ? 'h-[75px]' : rowIndex === 2 || rowIndex === 9 ? 'h-[68px]' : rowIndex === 10 ? 'h-[71px]' : 'h-[65px]'}`}>
                  <div className={`flex items-center gap-3 px-[26px] text-[18px] font-bold text-[#172033] ${rowIndex % 2 ? 'bg-[#F5F9FD]' : 'bg-white'}`}>
                    <span className="flex w-5 shrink-0 justify-center text-[20px] leading-none text-[#277ACD]">{row.icon}</span>
                    <span className="whitespace-nowrap">{row.label}</span>
                  </div>
                  {row.values.map((value, planIndex) => {
                    const plan = plans[planIndex];
                    const base = rowIndex % 2 ? '#F5F9FD' : '#FFFFFF';
                    const background = planIndex === 1 ? (rowIndex % 2 ? '#FFF9EA' : 'rgba(255,248,232,.55)') : base;
                    return (
                      <div key={plan.name} className="flex items-center justify-center px-3 text-center text-[18px] leading-none" style={{ backgroundColor: background, color: planIndex === 0 && !row.price && !row.check && rowIndex < 5 ? '#111827' : plan.color, fontWeight: planIndex === 0 && !row.price && !row.check && rowIndex < 5 ? 400 : 800 }}>
                        {row.check ? (
                          <span className="flex size-[30px] items-center justify-center rounded-full border-[3px] border-[#22B862] text-[18px] font-extrabold text-[#22B862]">✓</span>
                        ) : rowIndex === 8 && planIndex < 2 ? (
                          <span>{value.split(' (')[0]} <small className="text-[15px] font-inherit">({value.split(' (')[1]}</small></span>
                        ) : rowIndex === 9 && planIndex === 0 ? (
                          <span>$49 <small className="text-[15px] font-normal text-[#111827]">(reg. $99)</small></span>
                        ) : value}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="-mt-7 text-center text-[12px] font-semibold text-[#667085] xl:hidden">Swipe to compare all plans →</p>
      </div>
    </section>
  );
}
