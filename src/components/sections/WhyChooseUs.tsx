import type { HomePageData } from '../../data/homePageData';

type WhyChooseUsProps = {
  data: HomePageData['whyChooseUs'];
};

export function WhyChooseUs({ data }: WhyChooseUsProps) {
  return (
    <section id="about" className="relative h-[939px] overflow-hidden bg-[#F0F6FF] xl:h-[581px]">
      <div className="pointer-events-none absolute left-[-481px] top-0 h-[680.43px] w-[1187.31px] overflow-hidden xl:left-[-395px] xl:top-[-65.43px]">
        <div className="absolute left-[340px] top-[-141px] h-[962.273px] w-[506.88px] -skew-x-[45deg] scale-y-[0.71] bg-[#00478F] opacity-50 xl:left-[340px]" />
      </div>

      <div className="absolute left-[26px] right-[26px] top-[37px] h-[865px] overflow-hidden rounded-[25px] bg-[rgba(0,32,64,0.8)] xl:left-[86px] xl:right-auto xl:top-16 xl:h-[453px] xl:w-[633px]">
        <div className="absolute left-1/2 top-[29px] flex w-[275px] -translate-x-1/2 flex-col items-center gap-[34px] xl:top-[25.356px] xl:w-[566px] xl:gap-6">
          <h2 className="w-[275px] text-center text-[32px] font-bold leading-[1.6] text-white xl:w-[566px]">
            {data.title}
          </h2>

          <div className="flex w-[275px] flex-col items-start gap-3 xl:w-[566px] xl:flex-row xl:gap-4">
            <div className="flex w-full flex-col gap-[10px] xl:w-[275px]">
              {data.features.slice(0, 2).map((feature, index) => (
                <FeatureCard key={`${feature.title}-${index}`} feature={feature} />
              ))}
            </div>
            <div className="flex w-full flex-col gap-[10px] xl:w-[275px]">
              {data.features.slice(2).map((feature, index) => (
                <FeatureCard key={`${feature.title}-${index + 2}`} feature={feature} compact={index === 1} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden xl:block">
        {data.testimonials.map((item, index) => (
          <TestimonialCard key={`${item.name}-${index}`} item={item} starIcon={data.starIcon} quoteIcon={data.quoteIcon} index={index} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  compact = false,
}: {
  feature: HomePageData['whyChooseUs']['features'][number];
  compact?: boolean;
}) {
  return (
    <article
      className={`flex w-[274.43px] flex-col items-start gap-2 rounded-[12.967px] border-[0.648px] border-white/10 bg-white/[0.06] p-[23px] ${
        compact ? 'h-[157.644px] py-[22px]' : 'h-[159.644px]'
      }`}
    >
      <ChoiceCheck />
      <h3 className="h-[17.505px] whitespace-nowrap text-[11.67px] font-extrabold leading-[17.505px] text-white">
        {feature.title}
      </h3>
      <p className="w-[228.43px] text-[10px] font-normal leading-[16.046px] text-white/70">{feature.description}</p>
    </article>
  );
}

function TestimonialCard({ item, starIcon, quoteIcon, index }: {
  item: HomePageData['whyChooseUs']['testimonials'][number];
  starIcon: string;
  quoteIcon: string;
  index: number;
}) {
  return (
    <article
      className="absolute top-[129px] h-[322px] w-[305px] p-[2px]"
      style={{ left: index === 0 ? 761 : 1090, top: index === 0 ? 129 : 131 }}
    >
      <div className="relative flex h-[318px] w-[301px] flex-col items-start gap-2 rounded-[33px] bg-white p-5">
        <span className="absolute right-0 top-0 flex size-[50px] items-center justify-center rounded-br-[50px] rounded-tl-[50px] rounded-tr-[50px] bg-[#00478F]">
          <img src={quoteIcon} alt="" className="h-[28.3px] w-[35px]" />
        </span>
        <div className="flex w-full gap-1 pb-2 pt-[6px]" aria-label="5 stars">
          {Array.from({ length: 5 }, (_, star) => (
            <img key={star} src={starIcon} alt="" className="h-4 w-[18px] -scale-y-100" />
          ))}
        </div>
        <p className="w-full text-[16px] font-normal leading-[1.6] text-[#17181A]">{item.quote}</p>
        <div className="mt-auto flex w-full items-center gap-3 border-t border-dashed border-[#00478F] pt-[21px]">
          <img src={item.avatar} alt={`${item.name} testimonial`} className="size-[55px] rounded-full object-cover" />
          <div>
            <h3 className="whitespace-nowrap text-[18px] font-semibold leading-[1.6] text-[#003366]">{item.name}</h3>
            <p className="whitespace-nowrap text-[16px] font-semibold leading-[1.6] text-[#F7931E]">{item.service}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

function ChoiceCheck() {
  return (
    <svg aria-hidden="true" className="size-8 shrink-0" viewBox="0 0 32 32" fill="none">
      <g transform="translate(2.66666 2.65903)">
        <path d="M26.6667 12.1143v1.2267a13.3333 13.3333 0 1 1-7.9067-12.1867" stroke="#00B700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26.6667 2.6743 13.3333 16.021l-4-4" stroke="#00B700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
