import type { ServiceCategoryPageData } from '../../data/homePageData';

type ServiceCategoryBannerProps = {
  data: ServiceCategoryPageData['banner'];
};

export function ServiceCategoryBanner({ data }: ServiceCategoryBannerProps) {
  return (
    <section className="w-full max-w-full overflow-hidden bg-white">
      <div className="hidden h-[53px] border-b border-[#E5E7EB] bg-[#F4F6F8] px-8 md:block xl:px-20">
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between">
          <nav className="flex items-center gap-2 text-[14px] font-normal leading-[20px]" aria-label="Breadcrumb">
            {data.breadcrumbs.map((item, index) => {
              const isLast = index === data.breadcrumbs.length - 1;

              return (
                <span key={`${item}-${index}`} className="flex items-center gap-2">
                  {isLast ? (
                    <span className="font-semibold text-[#17181A]">{item}</span>
                  ) : (
                    <a href={getBreadcrumbHref(item)} className="text-[#454648] transition hover:text-[#0066CC]">
                      {item}
                    </a>
                  )}
                  {!isLast ? <span className="text-[#6B7280]">/</span> : null}
                </span>
              );
            })}
          </nav>

          <div className="flex items-center gap-6 text-[14px] font-semibold leading-[20px]">
            <span className="flex items-center gap-2 text-[#059669]">
              <img src={data.icons.clock} alt="" className="size-4" />
              {data.openStatus}
            </span>
            <span className="flex items-center gap-2 text-[#042330]">
              <img src={data.icons.pin} alt="" className="size-4" />
              {data.locationStatus}
            </span>
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-full overflow-hidden xl:max-w-[1486px]">
        <picture>
          <source media="(max-width: 767px)" srcSet={data.exactMobileImage} />
          <img
            src={data.exactImage}
            alt=""
            className="block h-auto w-full select-none"
            draggable={false}
          />
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
          className="absolute left-[4.43%] top-[80.75%] h-[9.05%] w-[22.9%] rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#003568] max-md:left-[5.1%] max-md:top-[46.28%] max-md:h-[6.1%] max-md:w-[89.8%]"
        />
        <a
          href="tel:+14696383215"
          aria-label={data.secondaryAction}
          className="absolute left-[27.95%] top-[80.75%] h-[9.05%] w-[13.05%] rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#003568] max-md:left-[5.1%] max-md:top-[54.9%] max-md:h-[6.1%] max-md:w-[89.8%]"
        />
      </div>
    </section>
  );
}

function getBreadcrumbHref(label: string) {
  const targets: Record<string, string> = {
    Home: '/',
    Locations: '/#locations',
    Services: '/services/appliance-repair',
  };

  return targets[label] ?? '/';
}
