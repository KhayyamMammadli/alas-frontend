import type { HomePageData } from '../../data/homePageData';

type SeoTextAreaProps = {
  data: HomePageData['seoTextArea'];
};

export function SeoTextArea({ data }: SeoTextAreaProps) {
  return (
    <section className="bg-[#F0F6FF] px-4 py-16 md:h-[854px] md:px-0 md:py-0">
      <div className="mx-auto md:w-[1280px] md:pt-[70px]">
        <h2 className="text-center text-[32px] font-bold leading-[1.4] text-[#090A0A] md:h-[59px] md:text-[42px]">{data.title}</h2>
        <div className="mt-[29px] grid gap-[29px] md:grid-cols-[620px_620px]">
          {data.cards.map((card, index) => (
            <article
              key={`${card.title}-${index}`}
              className="h-[300px] overflow-hidden rounded border border-[#F1F5F7] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] md:w-[620px]"
            >
              <h3 className="text-[16px] font-bold leading-[1.4] text-[#090A0A]">
                {card.title}
              </h3>
              <div className="mt-3 max-h-[224px] overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <p className="text-[14px] font-normal leading-[1.4] text-[#090A0A]">{card.body}</p>
                <p className="mt-3 text-[14px] font-normal leading-[1.4] text-[#090A0A]">{card.body2}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
