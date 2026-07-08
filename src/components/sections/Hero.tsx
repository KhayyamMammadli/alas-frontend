import type { HomePageData } from '../../data/homePageData';
import { Button } from '../ui/Button';
import { GreenCheck } from '../ui/Icons';

type HeroProps = {
  data: HomePageData['hero'];
};

export function Hero({ data }: HeroProps) {
  return (
    <section id="schedule" className="relative h-auto min-h-[683px] overflow-hidden bg-[#0C2D53] md:h-[683px] md:min-h-0">
      <div className="absolute left-1/2 top-[23px] h-[654px] w-[1440px] -translate-x-1/2 bg-brand-900">
        <img src={data.backgroundImage} alt="" className="absolute left-0 top-[-0.79%] h-[101.59%] w-full object-cover opacity-40" />
      </div>

      <div className="relative mx-auto h-full w-full max-w-[1440px] px-4 pb-14 pt-[54px] md:px-10 xl:px-20">
        <div className="relative z-10 max-w-[834px]">
          <h1 className="max-w-[776px] text-[38px] font-bold leading-[1.22] text-white md:text-[56px] md:leading-[1.4]">
            {data.title}
          </h1>
          <p className="mt-8 max-w-[638px] text-base font-semibold leading-[1.6] text-white">{data.description}</p>

          <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3">
            {data.badges.map((badge) => (
              <div key={badge} className="flex items-center gap-[12px] text-base font-semibold leading-[1.6] text-white/95">
                <GreenCheck />
                <span>{badge}</span>
              </div>
            ))}
          </div>

          <div className="mt-[47px] flex flex-col gap-4 sm:flex-row sm:gap-6">
            {data.actions.map((action) => (
              <Button
                key={action.label}
                href={action.variant === 'outline' ? '#plans' : '#schedule'}
                aria-label={action.label}
                variant={action.variant === 'outline' ? 'outline' : 'primary'}
                size="lg"
                className={
                  action.variant === 'outline'
                    ? '!h-[60px] !min-h-[60px] min-w-[301px] px-[28px]'
                    : '!h-[60px] !min-h-[60px] min-w-[215px] px-[28px]'
                }
              >
                {action.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute left-[782px] top-[24px] hidden h-[666px] w-[573px] overflow-hidden lg:block">
          <img
            src={data.technicianImages[0]}
            alt="ALAS appliance repair technician"
            className="absolute left-[-114px] top-0 h-[951px] w-[634px] object-cover"
          />
          <img
            src={data.technicianImages[1]}
            alt="ALAS same-day repair specialist"
            className="absolute left-[255.33px] top-[91px] h-[575px] w-[383.33px] object-cover"
          />
        </div>

        <a
          href="https://wa.me/14696383215"
          className="absolute left-[1319px] top-[570px] hidden h-12 w-[72px] items-center justify-center rounded-xl bg-white shadow-[5px_5px_10px_rgba(32,32,32,0.05)] md:flex"
          aria-label="Contact ALAS Appliance Service on WhatsApp"
        >
          <img src={data.whatsappIcon} alt="" className="h-10 w-[39.7px]" />
        </a>
      </div>
    </section>
  );
}
