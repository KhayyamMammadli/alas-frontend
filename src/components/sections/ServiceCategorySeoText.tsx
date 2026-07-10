import type { ServiceCategoryPageData } from '../../data/homePageData';

type ServiceCategorySeoTextProps = {
  data: ServiceCategoryPageData['seoTextArea'];
};

export function ServiceCategorySeoText({ data }: ServiceCategorySeoTextProps) {
  return (
    <section className="bg-[#F4F6F8] px-5 pb-[64px] pt-[64px] md:px-8 md:pb-[66px] md:pt-[70px]">
      <div className="mx-auto w-full max-w-[1280px]">
        <h2 className="text-center text-[34px] font-bold uppercase leading-[43px] text-[#090A0A] md:text-[42px] md:leading-[52px]">
          {data.title}
        </h2>

        <div className="mt-[49px] grid gap-[29px] md:grid-cols-2 md:gap-x-[30px] md:gap-y-[30px]">
          {data.cards.map((card, index) => (
            <article
              key={`service-seo-card-${index}`}
              className="min-h-[300px] rounded-[3px] border border-[#EEF1F4] bg-white px-[20px] pb-[24px] pt-[25px] shadow-[0_2px_6px_rgba(15,23,42,0.035)] md:h-[300px]"
            >
              <h3 className="text-[17px] font-bold leading-[24px] text-[#090A0A]">
                {card.title.map((segment, segmentIndex) => (
                  <span
                    key={`${segment.text}-${segmentIndex}`}
                    className={'accent' in segment && segment.accent ? 'text-[#004F9E]' : undefined}
                  >
                    {segment.text}
                  </span>
                ))}
              </h3>

              <div className="mt-[15px] space-y-[18px]">
                {card.paragraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={`service-seo-paragraph-${paragraphIndex}`}
                    className="text-[15px] font-normal leading-[22px] text-[#111111]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
