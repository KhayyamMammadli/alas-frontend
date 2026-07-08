import type { HomePageData } from '../../data/homePageData';
import { GreenCheck } from '../ui/Icons';

type MembershipPlansProps = {
  data: HomePageData['membershipPlans'];
};

export function MembershipPlans({ data }: MembershipPlansProps) {
  return (
    <section id="plans" className="bg-white px-4 py-[70px] md:h-[852px] md:px-0 md:py-0">
      <div className="relative mx-auto max-w-[1440px] md:h-full">
        <div className="text-center md:absolute md:left-1/2 md:top-[70px] md:w-[1002px] md:-translate-x-1/2">
          <h2 className="text-[32px] font-bold leading-[1.4] text-[#090A0A] md:h-[59px] md:whitespace-nowrap md:text-[42px]">
            {data.title}
          </h2>
          <div className="mt-[35px] flex flex-wrap justify-center gap-4 md:mx-auto md:h-8 md:w-[616px] md:flex-nowrap md:justify-between md:gap-0">
            {data.benefits.map((benefit, index) => (
              <span
                key={benefit}
                className={`inline-flex items-center gap-3 text-[14px] font-semibold leading-5 ${
                  index === 2 ? 'text-[#454648]' : 'text-[#090A0A]'
                }`}
              >
                <GreenCheck />
                {benefit}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-[72px] grid gap-8 md:absolute md:left-1/2 md:top-[268px] md:mt-0 md:w-[1094px] md:-translate-x-1/2 md:grid-cols-[531px_531px]">
          {data.plans.map((plan) => (
            <article
              key={plan.title}
              className="rounded-[20px] border-2 border-[#E5E7EB] bg-white p-6 md:h-[482px] md:w-[531px]"
            >
              <div>
                <img src={plan.icon} alt={`${plan.title} icon`} className="size-[46px]" />
                <h3 className="mt-4 text-[24px] font-bold leading-[1.6] text-[#090A0A]">{plan.title}</h3>
              </div>
              <p className="mt-6 text-[16px] font-normal leading-[1.6] text-[#454648]">{plan.description}</p>
              <ul className="mt-6 flex flex-col gap-4">
                {plan.items.map((item) => (
                  <li key={item} className="flex h-6 items-center gap-3 text-[16px] font-semibold leading-[1.6] text-[#090A0A]">
                    <PlanCheck color={plan.accent === 'orange' ? '#FF6B35' : '#00478F'} />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#schedule"
                className={`mt-4 inline-flex h-12 items-center justify-center rounded-[120px] px-5 py-3 text-[16px] font-semibold leading-6 text-[#F5FAFF] ${
                  plan.accent === 'orange' ? 'w-[235px] bg-[#FF6B35]' : 'w-[227px] bg-[#277ACD]'
                }`}
                aria-label={plan.action}
              >
                {plan.action}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCheck({ color }: { color: string }) {
  return (
    <svg aria-hidden="true" className="size-[22px] shrink-0" viewBox="0 0 22 22" fill="none">
      <path d="M5 11.3 9 15.3 17.5 6.5" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
