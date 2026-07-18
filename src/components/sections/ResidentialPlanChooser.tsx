import { useState } from 'react';

type PlanName = 'Silver' | 'Gold' | 'Platinum';

const plans = [
  {
    name: 'Silver' as const,
    subtitle: 'Essential Home Care',
    price: 49,
    icon: 'home',
    iconBg: '#F0F6FC',
    stats: [['1', 'HVAC'], ['5', 'Appliances'], ['90d', 'Warranty']],
    features: ['1 HVAC system — spring & fall visits', 'Up to 5 major appliances', '1 annual appliance check-up', '15% off all repair labor', 'HVAC diagnostic just $69', 'HVAC diagnostic just $69', 'HVAC diagnostic just $69'],
    mobileHeight: 'h-[880px]',
  },
  {
    name: 'Gold' as const,
    subtitle: 'Premium Home Care',
    price: 79,
    icon: 'star',
    iconBg: '#FFFBEF',
    badge: '★ MOST POPULAR',
    stats: [['2', 'HVAC'], ['8', 'Appliances'], ['6mo', 'Warranty']],
    features: ['Up to 2 HVAC systems covered', 'Up to 8 major appliances', '1 free HVAC diagnostic/year', '20% off all repair labor', '20% off all repair labor', '20% off all repair labor', 'Same-day priority scheduling'],
    mobileHeight: 'h-[855.73px]',
  },
  {
    name: 'Platinum' as const,
    subtitle: 'Elite Home Protection',
    price: 129,
    icon: 'crown',
    iconBg: '#F5F0FF',
    badge: 'ELITE PROTECTION',
    stats: [['3', 'HVAC'], ['12', 'Appliances'], ['12mo', 'Warranty']],
    features: ['Up to 3 HVAC systems covered', 'Up to 12 major appliances', 'Twice-yearly appliance maintenance', '30% off all repair labor', '30% off all repair labor', '30% off all repair labor', 'Premium member routing'],
    mobileHeight: 'h-[879px]',
  },
] as const;

function PlanIcon({ type }: { type: string }) {
  if (type === 'home') {
    return <span className="relative block h-[44.298px] w-11"><img src="/assets/figma-plan-home-body.svg" alt="" className="absolute inset-[26.27%_14.27%_10.21%_14.27%]" /><img src="/assets/figma-plan-home-roof.svg" alt="" className="absolute inset-x-0 top-[10.21%] h-[46.84%] w-full" /></span>;
  }
  return <img src={type === 'star' ? '/assets/figma-plan-star.svg' : '/assets/figma-plan-crown.svg'} alt="" className="size-11" />;
}

export function ResidentialPlanChooser() {
  const [annual, setAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanName>('Gold');

  return (
    <section className="h-[2992px] bg-white px-5 pt-[50px] font-['Montserrat'] xl:h-[1175px] xl:px-20 xl:pt-16" aria-labelledby="residential-plans-title">
      <div className="mx-auto flex h-[2942px] w-full max-w-[353px] flex-col items-center xl:h-[1111px] xl:max-w-[1280px]">
        <header className="flex h-[186px] w-full flex-col items-center text-center xl:h-[171px]">
          <h2 id="residential-plans-title" className="h-[90px] w-full text-[32px] font-bold leading-[1.4] text-[#090A0A] xl:h-[147px] xl:text-[42px]">
            Protect Your Home.<br /><span className="text-[#00478F]">Choose Your Plan.</span>
          </h2>
          <p className="h-[96px] w-full text-[16px] font-normal leading-6 text-[#454648] xl:h-6 xl:whitespace-nowrap">Trusted by Texas homeowners since 2009. Preventive maintenance, priority service, and repair savings — all under one membership.</p>
        </header>

        <div className="flex h-[84px] items-center justify-center gap-4">
          <span className={`text-[16px] font-semibold leading-[1.6] ${annual ? 'text-[#454648]' : 'text-[#090A0A]'}`}>Monthly</span>
          <button type="button" role="switch" aria-checked={annual} onClick={() => setAnnual(value => !value)} className={`relative h-8 w-14 rounded-full transition-colors ${annual ? 'bg-[#277ACD]' : 'bg-[#E5E7EB]'}`} aria-label="Toggle annual billing">
            <span className={`absolute left-1 top-1 size-6 rounded-full bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.1)] transition-transform ${annual ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
          <span className={`text-[16px] font-semibold leading-[1.6] ${annual ? 'text-[#090A0A]' : 'text-[#454648]'}`}>Annual</span>
          <span className="-ml-3 rounded-[4px] bg-[#DCFCE7] px-2 py-1 text-[12px] font-medium text-[#008236]">Save 15%</span>
        </div>

        <div className="flex h-[2677px] w-full flex-col gap-6 pt-[7.135px] xl:h-[855.73px] xl:flex-row xl:gap-6 xl:pt-0">
          {plans.map(plan => {
            const selected = selectedPlan === plan.name;
            const displayPrice = annual ? Math.round(plan.price * 0.85) : plan.price;
            return (
              <article
                key={plan.name}
                onClick={() => setSelectedPlan(plan.name)}
                className={`relative flex w-full cursor-pointer flex-col items-center overflow-hidden rounded-[28px] border-2 bg-white pb-[27px] pt-px shadow-[0_18px_45px_rgba(15,27,45,0.08)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#277ACD] hover:shadow-[0_22px_50px_rgba(39,122,205,0.16)] ${plan.mobileHeight} xl:h-[855.73px] xl:flex-1 ${selected ? 'border-[#277ACD] shadow-[0_22px_50px_rgba(39,122,205,0.18)]' : 'border-[#E4EAF1]'}`}
              >
                {plan.badge ? <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 whitespace-nowrap rounded-b-[14px] bg-[#277ACD] px-7 pb-3 pt-[10px] text-[11px] font-extrabold tracking-[0.4px] text-white xl:text-[13px]">{plan.badge}</span> : null}

                <div className="flex h-[245px] w-full flex-col items-center gap-2 px-[30px] pb-7 pt-[54px]">
                  <span className="flex size-20 items-center justify-center overflow-hidden rounded-[10px]" style={{ backgroundColor: plan.iconBg }}><PlanIcon type={plan.icon} /></span>
                  <h3 className="pt-[10px] text-[30px] font-extrabold leading-normal text-[#0F1B2D]">{plan.name}</h3>
                  <p className="text-[16px] font-semibold leading-normal text-[#607086]">{plan.subtitle}</p>
                </div>

                <div className="flex h-[122px] w-full items-center justify-center border-y border-[#E4EAF1] text-center">
                  <span className="mt-7 text-[20px] font-bold text-[#667386] xl:text-[25px]">$</span>
                  <strong className="text-[56px] font-extrabold leading-[64px] text-[#277ACD] xl:text-[64px]">{displayPrice}</strong>
                  <span className="mt-8 text-[18px] font-semibold text-[#667386] xl:text-[22px]">/mo</span>
                </div>

                <div className="grid h-[93px] w-full grid-cols-3 bg-[#F0F6FC] px-[10px] py-5">
                  {plan.stats.map(([value, label], index) => <div key={label} className={`flex flex-col items-center gap-1.5 ${index < 2 ? 'border-r border-[#D7E2ED]' : ''}`}><strong className="text-[24px] font-extrabold text-[#277ACD]">{value}</strong><span className="text-[14px] font-semibold text-[#637184]">{label}</span></div>)}
                </div>

                <ul className="flex w-full flex-1 flex-col gap-[15px] px-[34px] pb-[35px] pt-[26px]">
                  {plan.features.map((feature, index) => <li key={`${feature}-${index}`} className="flex min-h-[22.39px] items-start gap-3"><span className="flex h-[22px] min-w-[22px] items-center justify-center rounded-[11px] bg-[#EAF4FF] text-[14px] font-extrabold text-[#277ACD]">✓</span><span className="text-[16px] font-medium leading-[22.4px] text-[#25354A] xl:whitespace-nowrap">{feature}</span></li>)}
                </ul>

                <button type="button" onClick={() => setSelectedPlan(plan.name)} className="mt-auto flex h-[60px] w-[288px] cursor-pointer items-center justify-center rounded-[120px] bg-[#277ACD] px-7 py-4 text-[18px] font-semibold leading-7 text-[#F5FAFF] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                  {selected ? 'Selected Plan' : `Select ${plan.name} Plan`}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
