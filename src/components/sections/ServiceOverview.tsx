import type { HomePageData } from '../../data/homePageData';
import { ArrowRight } from '../ui/Icons';

type ServiceOverviewProps = {
  data: HomePageData['serviceOverview'];
};

export function ServiceOverview({ data }: ServiceOverviewProps) {
  const [titleLead, titleRest] = data.title.split(', ');

  return (
    <section id="services" className="bg-white px-4 py-16 md:h-[717px] md:px-0 md:py-0">
      <div className="mx-auto max-w-[1280px] md:pt-16">
        <div className="mx-auto flex w-full flex-col items-center text-center">
          <h2 className="w-full max-w-[774px] text-[32px] font-bold leading-[1.4] text-[#090A0A] md:text-[42px]">
            <span>{titleLead},</span>
            <br />
            <span>{titleRest}</span>
          </h2>
          <p className="mt-[19px] w-full max-w-[844px] text-base font-semibold leading-[1.6] text-[#17181A]">
            {data.description}
          </p>
        </div>

        <div className="mt-[19px] grid gap-6 lg:grid-cols-[400px_400px_400px] lg:gap-10">
          {data.cards.map((card) => (
            <article
              key={card.title}
              className="h-auto overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_4px_18px_rgba(10,22,40,0.08)] md:h-[344px] md:w-[400px]"
            >
              <img src={card.icon} alt={`${card.title} icon`} className="size-11" />
              <h3 className="mt-[14px] text-lg font-semibold leading-[1.6] text-[#042330]">{card.title}</h3>
              <p className="mt-[14px] text-base font-semibold leading-[1.6] text-[#454648]">{card.description}</p>
              <a
                href={card.title === 'Appliance Repair Services' ? '/services/appliance-repair' : '#services'}
                className="mt-[14px] inline-flex items-center gap-1 text-[13px] font-semibold leading-[23.64px] text-[#0066CC]"
                aria-label={`Explore ${card.title}`}
              >
                Explore more
                <ArrowRight />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
