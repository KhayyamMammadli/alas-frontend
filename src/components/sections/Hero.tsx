import type { HomePageData } from '../../data/homePageData';
import { Button } from '../ui/Button';

type HeroProps = {
  data: HomePageData['hero'];
};

export function Hero({ data }: HeroProps) {
  return (
    <section
      id="schedule"
      className="relative -mt-[5px] h-[1102px] overflow-hidden bg-[#003366] xl:mt-0 xl:h-[683px] xl:bg-[#0C2D53]"
    >
      <div className="absolute inset-0 bg-[#003366] xl:left-1/2 xl:top-[23px] xl:h-[654px] xl:w-[1440px] xl:-translate-x-1/2">
        <picture>
          <source media="(max-width: 1279px)" srcSet={data.mobileBackgroundImage} />
          <img
            src={data.backgroundImage}
            alt=""
            className="absolute left-0 top-[-0.79%] h-[101.59%] w-full opacity-40"
          />
        </picture>
      </div>

      <div className="relative mx-auto h-full w-full max-w-[1440px] px-5 md:px-10 xl:px-20">
        <div className="relative z-10 mx-auto flex w-full max-w-[600px] flex-col items-start gap-8 pt-[41px] xl:mx-0 xl:w-[834px] xl:max-w-none xl:gap-[47px] xl:pt-[54px]">
          <div className="flex w-full flex-col items-start gap-8">
            <h1 className="w-full text-[32px] font-bold leading-[1.6] text-white xl:w-[776px] xl:text-[56px] xl:leading-[1.4]">
              <span className="xl:hidden">{data.mobileTitle}</span>
              <span className="hidden xl:inline">{data.title}</span>
            </h1>

            <p className="w-full text-[16px] font-semibold leading-[1.6] text-white xl:w-[638px]">{data.description}</p>

            <div className="flex flex-col items-start justify-center gap-4 xl:flex-row xl:items-center">
              {data.badges.map((badge) => (
                <div key={badge} className="flex items-center gap-3 text-[16px] font-semibold leading-[1.6] text-white/95">
                  <HeroCheck />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-6 xl:flex-row">
            {data.actions.map((action) => (
              <Button
                key={action.label}
                href={action.variant === 'outline' ? '#plans' : '#schedule'}
                aria-label={action.label}
                variant={action.variant === 'outline' ? 'outline' : 'primary'}
                size="lg"
                className={
                  action.variant === 'outline'
                    ? '!h-[60px] !min-h-[60px] w-full px-[28px] xl:w-auto xl:min-w-[301px]'
                    : '!h-[60px] !min-h-[60px] w-full px-[28px] xl:w-auto xl:min-w-[215px]'
                }
              >
                {action.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-[714px] h-[388px] w-[343px] -translate-x-1/2 overflow-hidden xl:left-[782px] xl:top-[24px] xl:h-[666px] xl:w-[573px] xl:translate-x-0">
          <img
            src={data.technicianImages[0]}
            alt="ALAS appliance repair technician"
            className="absolute left-[-83px] top-0 h-[596.923px] w-[397.949px] max-w-none xl:left-[-114px] xl:h-[951px] xl:w-[634px]"
          />
          <img
            src={data.technicianImages[1]}
            alt="ALAS same-day repair specialist"
            className="absolute left-[148.82px] top-[57.12px] h-[360.915px] w-[240.61px] max-w-none xl:left-[255.33px] xl:top-[91px] xl:h-[575px] xl:w-[383.333px]"
          />
        </div>

        <a
          href="https://wa.me/14696383215"
          className="absolute right-[25px] top-[666px] z-20 flex h-12 w-[72px] items-center justify-center rounded-xl bg-white shadow-[5px_5px_10px_rgba(32,32,32,0.05)] xl:right-[49px] xl:top-[570px] min-[1440px]:left-[1319px] min-[1440px]:right-auto"
          aria-label="Contact ALAS Appliance Service on WhatsApp"
        >
          <img src={data.whatsappIcon} alt="" className="h-10 w-[39.7px]" />
        </a>
      </div>
    </section>
  );
}

function HeroCheck() {
  return (
    <span className="inline-flex size-8 shrink-0 items-center justify-center" aria-hidden="true">
      <svg className="size-8" viewBox="0 0 32 32" fill="none">
        <g transform="translate(2.66666 2.65903)">
          <path
            d="M26.6667 12.1143v1.2267a13.3333 13.3333 0 1 1-7.9067-12.1867"
            stroke="#00B700"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.6667 2.6743 13.3333 16.021l-4-4"
            stroke="#00B700"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </span>
  );
}
