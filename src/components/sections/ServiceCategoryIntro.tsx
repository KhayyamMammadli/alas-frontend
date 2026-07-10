import type { ServiceCategoryPageData } from '../../data/homePageData';

type ServiceCategoryIntroProps = {
  data: ServiceCategoryPageData['intro'];
};

export function ServiceCategoryIntro({ data }: ServiceCategoryIntroProps) {
  return (
    <section className="w-full max-w-full overflow-hidden bg-[#F4F6F8] px-5 py-[50px] md:px-8 md:py-[64px]">
      <div className="mx-auto flex w-full max-w-[1119px] flex-col items-center gap-[21px]">
        <header className="w-full text-center md:max-w-[967px]">
          <h2 className="text-[30px] font-bold leading-[36px] tracking-[0.3955px] text-[#042330]">
            <span className="hidden md:inline">{data.title}</span>
            <span className="md:hidden">{data.mobileTitle}</span>
          </h2>
          <p className="mt-[24px] text-[18px] font-normal leading-[29.25px] tracking-[-0.4395px] text-[#454648]">
            {data.description.map((segment, index) =>
              'href' in segment ? (
                <a
                  key={`${segment.text}-${index}`}
                  href={segment.href}
                  className="text-[#0066CC] underline decoration-[#0066CC] underline-offset-[3px]"
                >
                  {segment.text}
                </a>
              ) : (
                <span key={`${segment.text}-${index}`}>{segment.text}</span>
              ),
            )}
          </p>
        </header>

        <div className="grid w-full gap-[12px] md:grid-cols-4">
          {data.cards.map((card) => (
            <article
              key={card.title}
              className="flex h-[95.09px] items-center gap-[14px] rounded-[10px] border border-[#E8ECF4] bg-white px-[21px] py-[19px]"
            >
              <span className="flex size-[40px] shrink-0 items-center justify-center rounded-[9px] bg-[#E8F2FF]">
                <img src={card.iconSrc} alt="" className="size-[20px]" />
              </span>
              <span className="min-w-0">
                <strong className="block whitespace-nowrap text-[22px] font-black leading-[36.3px] text-[#042330]">{card.title}</strong>
                <span className="block whitespace-nowrap text-[12px] font-normal leading-[19.8px] text-[#747476] md:text-[#747476]">
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
