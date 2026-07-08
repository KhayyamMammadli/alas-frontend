import type { HomePageData } from '../../data/homePageData';
import { GreenCheck } from '../ui/Icons';

type WhyChooseUsProps = {
  data: HomePageData['whyChooseUs'];
};

export function WhyChooseUs({ data }: WhyChooseUsProps) {
  return (
    <section id="about" className="overflow-hidden bg-[#F0F6FF] py-16 md:h-[581px] md:py-0">
      <div className="relative mx-auto max-w-[1440px] px-4 md:h-full md:px-10 xl:px-20">
        <div
          className="pointer-events-none absolute left-0 top-0 hidden h-full w-[753px] bg-[#00478F] opacity-50 md:block"
          style={{ clipPath: 'polygon(0 24%, 30% 0, 100% 0, 20% 100%, 0 100%)' }}
        />

        <div className="rounded-[25px] bg-[#002040]/80 p-6 md:absolute md:left-[86px] md:top-16 md:h-[453px] md:w-[633px] md:p-[34px]">
          <h2 className="text-center text-[28px] font-bold leading-[1.6] text-white md:text-[32px]">{data.title}</h2>
          <div className="mt-6 grid gap-[10px] sm:grid-cols-2">
            {data.features.map((feature, index) => (
              <article
                key={`${feature.title}-${index}`}
                className="h-[159.64px] rounded-[12.967px] border border-white/10 bg-white/[0.06] p-[23px]"
              >
                <GreenCheck className="size-8" />
                <h3 className="mt-2 text-[11.67px] font-extrabold leading-[17.505px] text-white md:whitespace-nowrap">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[10px] font-normal leading-[16.046px] text-white/70">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:absolute md:left-[761px] md:top-[129px] md:mt-0 md:w-[634px] md:gap-6">
          {data.testimonials.map((item, index) => (
            <article key={`${item.name}-${index}`} className="relative h-[322px] w-full rounded-[33px] bg-white p-5 md:w-[305px]">
              <img src={data.quoteIcon} alt="" className="absolute right-0 top-0 size-[50px]" />
              <div className="flex gap-1 pb-2 pt-[6px] text-[16px] leading-none text-[#F7931E]" aria-label="5 stars">
                {Array.from({ length: 5 }, (_, star) => (
                  <span key={star}>★</span>
                ))}
              </div>
              <p className="text-base font-normal leading-[1.6] text-[#17181A]">{item.quote}</p>
              <div className="mt-5 flex items-center gap-3 border-t border-dashed border-[#00478F] pt-[21px]">
                <img src={item.avatar} alt={`${item.name} testimonial`} className="size-[55px] rounded-full object-cover" />
                <div>
                  <h3 className="text-lg font-semibold leading-[1.6] text-[#003366]">{item.name}</h3>
                  <p className="text-base font-semibold leading-[1.6] text-[#F7931E]">{item.service}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
