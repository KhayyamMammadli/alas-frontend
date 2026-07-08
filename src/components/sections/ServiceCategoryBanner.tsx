import type { ServiceCategoryPageData } from '../../data/homePageData';

type ServiceCategoryBannerProps = {
  data: ServiceCategoryPageData['banner'];
};

export function ServiceCategoryBanner({ data }: ServiceCategoryBannerProps) {
  return (
    <section className="w-full max-w-full overflow-hidden bg-white">
      <div className="relative mx-auto w-full max-w-full overflow-hidden xl:max-w-[1486px]">
        <picture>
          <source media="(max-width: 639px)" srcSet={data.exactMobileImage} />
          <img src={data.exactImage} alt="" className="block h-auto w-full" draggable={false} />
        </picture>

        <div className="sr-only">
          <p>{data.rating}</p>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <ul>
            {data.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>

        <a
          href="#schedule"
          aria-label={data.action}
          className="absolute left-[5.1%] top-[46.28%] h-[6.1%] w-[89.8%] rounded-[999px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#003568] sm:left-[4.43%] sm:top-[80.9%] sm:h-[8.9%] sm:w-[23%]"
        />
        <a
          href="tel:+14696383215"
          aria-label={data.secondaryAction}
          className="absolute left-[5.1%] top-[54.9%] h-[6.1%] w-[89.8%] rounded-[999px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#003568] sm:left-[28.0%] sm:top-[80.9%] sm:h-[8.9%] sm:w-[13.1%]"
        />
      </div>
    </section>
  );
}
