import type { HomePageData } from '../../data/homePageData';

type MembershipPlansProps = {
  data: HomePageData['membershipPlans'];
};

export function MembershipPlans({ data }: MembershipPlansProps) {
  return (
    <section id="plans" className="relative h-[1479px] overflow-hidden bg-white xl:h-[852px]">
      <div className="absolute left-5 top-[50px] flex w-[353px] flex-col items-start gap-[23px] max-[392px]:left-4 max-[392px]:right-4 max-[392px]:w-auto xl:left-1/2 xl:top-[70px] xl:w-[1094px] xl:-translate-x-1/2 xl:gap-[72px]">
        <div className="flex w-full flex-col items-start gap-[35px] xl:items-center">
          <h2 className="w-full text-[32px] font-bold leading-[1.6] text-[#090A0A] xl:w-[1002px] xl:text-center xl:text-[42px] xl:leading-[1.4] xl:whitespace-nowrap">
            {data.title}
          </h2>

          <div className="flex w-full flex-col items-start justify-center gap-4 xl:w-auto xl:flex-row xl:items-center">
            {data.benefits.map((benefit, index) => (
              <div key={benefit} className="flex items-center gap-3 xl:mr-0">
                <BenefitCheck />
                <span className={`whitespace-nowrap text-[14px] font-semibold leading-5 ${index === 2 ? 'text-[#454648]' : 'text-[#090A0A]'}`}>
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-6 xl:flex-row xl:gap-8">
          {data.plans.map((plan) => (
            <PlanCard key={plan.title} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: HomePageData['membershipPlans']['plans'][number] }) {
  const isOrange = plan.accent === 'orange';
  const checkIcon = isOrange ? '/assets/figma-plan-check-orange.svg' : '/assets/figma-plan-check-blue.svg';

  return (
    <article className="flex h-[508px] w-full flex-col items-start gap-6 rounded-[20px] border-2 border-[#E5E7EB] bg-white p-6 xl:h-[482px] xl:w-[531px]">
      <div className="flex w-full flex-col items-start gap-4">
        <img src={plan.icon} alt="" className="size-[46px]" />
        <h3 className="whitespace-nowrap text-[24px] font-bold leading-[1.6] text-[#090A0A]">{plan.title}</h3>
      </div>

      <p className="w-full text-[16px] font-normal leading-[1.6] text-[#454648]">{plan.description}</p>

      <ul className="flex w-full flex-col items-start gap-4">
        {plan.items.map((item) => (
          <li key={item} className="flex h-6 w-full items-center gap-3 text-[16px] font-semibold leading-[1.6] text-[#090A0A]">
            <span className="relative size-[22px] shrink-0 overflow-hidden">
              <img src={checkIcon} alt="" className="absolute inset-[10.57%_6.15%] h-[78.86%] w-[87.7%] max-w-none" />
            </span>
            {item}
          </li>
        ))}
        <a
          href="#schedule"
          className={`flex h-12 shrink-0 items-center justify-center rounded-[120px] px-5 py-3 text-[16px] font-semibold leading-6 text-[#F5FAFF] shadow-[0_1px_2px_rgba(16,24,40,0.05)] ${
            isOrange ? 'bg-[#FF6B35]' : 'bg-[#277ACD]'
          }`}
          aria-label={plan.action}
        >
          {plan.action}
        </a>
      </ul>
    </article>
  );
}

function BenefitCheck() {
  return (
    <svg aria-hidden="true" className="size-8 shrink-0" viewBox="0 0 32 32" fill="none">
      <g transform="translate(2.66666 2.65903)">
        <path d="M26.6667 12.1143v1.2267a13.3333 13.3333 0 1 1-7.9067-12.1867" stroke="#00B700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26.6667 2.6743 13.3333 16.021l-4-4" stroke="#00B700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
