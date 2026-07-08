import type { ServiceCategoryPageData } from '../../data/homePageData';

type CitiesWeServeProps = {
  data: ServiceCategoryPageData['citiesWeServe'];
};

function MapPinIcon({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s6.4-5.7 6.4-12A6.4 6.4 0 0 0 5.6 9c0 6.3 6.4 12 6.4 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function CityItem({ city }: { city: string }) {
  return (
    <li className="flex items-center gap-[10px] text-[14px] font-bold leading-[20px] text-[#111111] md:gap-[9px] md:text-[15px] md:leading-[20px]">
      <MapPinIcon className="size-[15px] shrink-0 text-[#0A73D9] md:size-[14px]" />
      <span>{city}</span>
    </li>
  );
}

function MapCard({ data }: CitiesWeServeProps) {
  return (
    <div className="flex h-[230px] w-full flex-col items-center justify-center rounded-[14px] border border-[#DCE2EA] bg-[#E6E9EE] text-center shadow-[0_22px_36px_rgba(15,23,42,0.12)] md:h-[450px] md:w-[560px] md:rounded-[18px]">
      <MapPinIcon className="size-[54px] text-[#747C8A] md:size-[62px]" />
      <p className="mt-[18px] text-[13px] font-bold leading-[18px] text-[#747C8A] md:mt-[18px] md:text-[15px] md:leading-[20px]">
        {data.mapTitle}
      </p>
      <p className="mt-[3px] text-[12px] font-normal leading-[18px] text-[#8E96A3] md:text-[13px] md:leading-[18px]">{data.mapSubtitle}</p>
    </div>
  );
}

export function CitiesWeServe({ data }: CitiesWeServeProps) {
  return (
    <section className="overflow-hidden bg-white px-6 pb-[66px] pt-[59px] md:px-0 md:pb-[66px] md:pt-[72px]">
      <div className="mx-auto hidden h-[450px] w-full max-w-[1280px] items-center md:flex">
        <div className="relative z-10 shrink-0">
          <MapCard data={data} />
        </div>

        <div className="-ml-[84px] flex h-[420px] flex-1 items-center rounded-r-full bg-[#F2F4F7] pl-[165px] pr-[76px]">
          <div className="w-full max-w-[636px]">
            <div className="h-[2px] w-[88px] bg-[#0A73D9]" />
            <h2 className="mt-[42px] text-[32px] font-bold leading-[40px] text-[#090A0A]">{data.desktopTitle}</h2>
            <p className="mt-[22px] max-w-[600px] text-[13px] font-normal leading-[20px] text-[#5D6570]">{data.description}</p>

            <ul className="mt-[22px] grid grid-cols-3 gap-x-[52px] gap-y-[16px]">
              {data.cities.map((city) => (
                <CityItem key={city} city={city} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[345px] md:hidden">
        <h2 className="text-[26px] font-bold leading-[38px] text-[#090A0A]">{data.mobileTitle}</h2>
        <p className="mt-[18px] text-[12px] font-normal leading-[18px] text-[#5D6570]">{data.description}</p>

        <ul className="mt-[18px] flex flex-col gap-[13px]">
          {data.cities.map((city) => (
            <CityItem key={city} city={city} />
          ))}
        </ul>

        <div className="mt-[37px]">
          <MapCard data={data} />
        </div>
      </div>
    </section>
  );
}
