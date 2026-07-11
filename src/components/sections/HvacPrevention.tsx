const desktopBenefits = [
  'Reduce repair costs with preventive maintenance',
  'Extend appliance lifespan',
  'Priority scheduling — skip the wait',
];

const memberBenefits = [
  'Priority Booking',
  'Discounted Repairs',
  'Annual Check-Up',
  'Extended Warranty',
  'Emergency Coverage',
  'All Brands',
];

const mobileBenefits = [
  { label: 'Priority same-day scheduling', icon: 'clock' },
  { label: 'Discounted repair rates', icon: 'dollar' },
  { label: 'Preventive maintenance included', icon: 'tools' },
  { label: 'Extended warranty protection', icon: 'shield' },
];

function MobileBenefitIcon({ icon }: { icon: string }) {
  return (
    <span className="relative flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-[#F2F7FF]">
      {icon === 'clock' && (
        <span className="relative size-5">
          <img src="/assets/figma-hvac-prevention-clock-a.svg" alt="" className="absolute inset-[8.33%] size-[83.34%]" />
          <img src="/assets/figma-hvac-prevention-clock-b.svg" alt="" className="absolute left-1/2 top-1/4 h-[33.33%] w-[16.67%]" />
        </span>
      )}
      {icon === 'dollar' && (
        <span className="relative size-5">
          <img src="/assets/figma-hvac-prevention-dollar-a.svg" alt="" className="absolute left-1/2 top-[8.33%] h-[83.34%]" />
          <img src="/assets/figma-hvac-prevention-dollar-b.svg" alt="" className="absolute inset-x-1/4 top-[20.83%] h-[58.34%] w-1/2" />
        </span>
      )}
      {icon === 'tools' && <img src="/assets/figma-hvac-prevention-tools.svg" alt="" className="size-5" />}
      {icon === 'shield' && <img src="/assets/figma-hvac-prevention-shield.svg" alt="" className="size-5" />}
    </span>
  );
}

function ProtectionCard({ mobile = false }: { mobile?: boolean }) {
  const visibleBenefits = mobile ? memberBenefits.filter((item) => !['Annual Check-Up', 'All Brands'].includes(item)) : memberBenefits;

  return (
    <aside className={`flex w-full flex-col items-start justify-center gap-1.5 rounded-[20px] border border-[#C5DCFF] bg-white ${mobile ? 'h-[370px] px-[21px] py-[31px]' : 'h-[369.56px] p-[31px]'}`}>
      <span className="text-[11px] font-bold uppercase leading-[18.15px] tracking-[1.5px] text-[#0066CC]">Protection Plan</span>
      <h3 className="text-[19px] font-extrabold leading-[31.35px] text-[#061A33]">What Members Get</h3>

      {mobile ? (
        <div className="flex w-full flex-wrap items-start gap-x-[7px] gap-y-2 py-3">
          {visibleBenefits.map((benefit) => (
            <span key={benefit} className="flex h-[29.8px] items-center whitespace-nowrap rounded-full bg-[#E8F2FF] px-[13px] py-[5px] text-[12px] font-semibold leading-[19.8px] text-[#0066CC]">{benefit}</span>
          ))}
        </div>
      ) : (
        <div className="flex h-[93.6px] w-full flex-col items-start gap-2 pt-3">
          {[memberBenefits.slice(0, 3), memberBenefits.slice(3)].map((row) => (
            <div key={row[0]} className="flex items-start gap-[7px]">
              {row.map((benefit) => (
                <span key={benefit} className="flex h-[29.8px] items-center whitespace-nowrap rounded-full bg-[#E8F2FF] px-[13px] py-[5px] text-[12px] font-semibold leading-[19.8px] text-[#0066CC]">{benefit}</span>
              ))}
            </div>
          ))}
        </div>
      )}

      <p className="w-full border-t border-[#C5DCFF] pt-[17px] text-[13px] font-normal leading-[21.45px] text-[#6B7A90]">
        Available for both residential and commercial accounts across Plano<br className="hidden xl:block" /> and Greater DFW.
      </p>
    </aside>
  );
}

export function HvacPrevention() {
  return (
    <section className="bg-[#F4F6F8] px-5 py-10 shadow-[0_1px_1.5px_rgba(0,0,0,0.1),0_1px_1px_rgba(0,0,0,0.1)] xl:h-[505.56px] xl:px-20 xl:py-[68px] xl:shadow-none">
      <div className="mx-auto hidden h-[369.56px] w-full max-w-[1280px] grid-cols-2 gap-12 xl:grid">
        <ProtectionCard />

        <div className="flex flex-col items-start self-center gap-[9.6px]">
          <span className="text-[11px] font-bold uppercase leading-[18.15px] tracking-[2px] text-[#0066CC]">Prevention</span>
          <h2 className="text-[30px] font-extrabold leading-9 text-[#061A33]">Prevent Future Refrigerator<br />Problems</h2>
          <p className="pt-[1.29px] text-[16px] font-normal leading-[26.4px] text-[#384455]">
            Most refrigerator failures can be prevented with regular<br />maintenance and early diagnosis. Our protection plans keep your<br />appliances running and your costs predictable.
          </p>
          <ul className="flex w-full flex-col gap-[10px] pt-[8.4px]">
            {desktopBenefits.map((benefit) => (
              <li key={benefit} className="flex h-[24.75px] items-center gap-[10px] text-[15px] font-medium leading-[24.75px] text-[#374255]">
                <img src="/assets/figma-hvac-prevention-check.svg" alt="" className="size-[17px] shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
          <div className="flex h-[46px] items-center gap-[10px]">
            <a href="#residential-plans" className="flex h-[46px] items-center rounded-[90px] bg-[#2A7AE2] px-7 text-[16px] font-semibold leading-4 text-white">View Residential Plans</a>
            <a href="#commercial-plans" className="flex h-[46px] items-center rounded-[90px] border border-[#2A7AE2] px-[29px] text-[16px] font-semibold leading-4 text-[#2A7AE2]">View Commercial Plans</a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[503px] flex-col items-start gap-[10px] xl:hidden">
        <div className="flex w-full flex-col items-start gap-8">
          <div className="flex w-full flex-col items-start gap-3">
            <span className="flex h-7 items-center rounded-full bg-[#F0FFF5] px-3 text-[14px] font-normal leading-5 tracking-[-0.1504px] text-[#00A63E]">Save Money &amp; Time</span>
            <h2 className="text-[24px] font-semibold leading-[30px] text-[#1A1A1A]">Protect Your Appliances in<br />Plano</h2>
            <p className="text-[16px] font-medium leading-6 text-[#364153]">
              Most appliance failures are preventable with proper maintenance. Our protection plans help Plano homeowners and businesses reduce repair costs, get priority scheduling, and extend appliance lifespan.
            </p>
          </div>

          <ul className="flex w-full flex-col gap-6">
            {mobileBenefits.map((benefit) => (
              <li key={benefit.label} className="flex h-10 items-start gap-4">
                <MobileBenefitIcon icon={benefit.icon} />
                <span className="pt-1 text-[16px] font-normal leading-[26px] text-[#364153]">{benefit.label}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-start gap-4">
            <a href="#residential-plans" className="flex h-12 items-center justify-center rounded-[120px] bg-[#0066CC] px-5 text-[16px] font-semibold leading-6 text-[#F5FAFF] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">View Residential Plans</a>
            <a href="#commercial-plans" className="flex h-12 items-center justify-center rounded-[120px] border border-[#003366] bg-[#F5FAFF] px-5 text-[16px] font-semibold leading-6 text-[#003366] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">View Commercial Plans</a>
          </div>
        </div>

        <ProtectionCard mobile />
      </div>
    </section>
  );
}
