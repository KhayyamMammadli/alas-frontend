import type { ServiceCategoryPageData } from '../../data/homePageData';

type ServiceCategoryIntroProps = {
  data: ServiceCategoryPageData['intro'];
};

export function ServiceCategoryIntro({ data }: ServiceCategoryIntroProps) {
  return (
    <section className="w-full max-w-full overflow-hidden bg-[#F5F6F8] px-5 pb-[71px] pt-[72px] md:px-8">
      <div className="mx-auto w-full max-w-[1244px]">
        <header className="mx-auto max-w-[1088px] text-center">
          <h2 className="text-[30px] font-bold leading-[1.32] text-[#062631] md:text-[34px]">
            {data.title}
          </h2>
          <p className="mt-[24px] text-[18px] font-normal leading-[1.52] text-[#4F5056] md:text-[21px]">
            {data.description.map((segment, index) =>
              'href' in segment ? (
                <a
                  key={`${segment.text}-${index}`}
                  href={segment.href}
                  className="text-[#0072F5] underline decoration-[#0072F5] underline-offset-[3px]"
                >
                  {segment.text}
                </a>
              ) : (
                <span key={`${segment.text}-${index}`}>{segment.text}</span>
              ),
            )}
          </p>
        </header>

        <div className="mt-[28px] grid gap-[14px] sm:grid-cols-2 lg:grid-cols-4">
          {data.cards.map((card) => (
            <article
              key={card.title}
              className="flex h-[105px] items-center rounded-[8px] border border-[#DFE6EE] bg-white px-[22px] shadow-[0_1px_2px_rgba(15,23,42,0.02)]"
            >
              <img src={card.iconSrc} alt="" className="size-11 shrink-0 rounded-[8px]" />
              <span className="ml-[16px] min-w-0">
                <strong className="block text-[26px] font-bold leading-[1.15] text-[#062631]">{card.title}</strong>
                <span className="mt-[8px] block text-[14px] font-normal leading-[1.35] text-[#888A8F]">
                  {card.description}
                </span>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
