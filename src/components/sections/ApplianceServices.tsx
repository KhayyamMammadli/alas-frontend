import { useState } from 'react';
import type { HomePageData } from '../../data/homePageData';

type ApplianceServicesProps = {
  data: HomePageData['applianceServices'];
};

export function ApplianceServices({ data }: ApplianceServicesProps) {
  const [activeTab, setActiveTab] = useState(0);
  const isCommercial = activeTab === 1;

  return (
    <section id="appliance-repair" className="relative w-full max-w-full overflow-hidden bg-[#003366] px-4 py-20 md:px-6 xl:h-[801px] xl:px-0 xl:py-0">
      <img src={data.backgroundImage} alt="" className="absolute inset-0 size-full object-cover opacity-40" />
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 hidden h-[50px] w-full bg-white md:block"
        style={{ clipPath: 'polygon(6.5% 0, 10% 50px, 90% 50px, 93.5% 0)' }}
      />
      <div className="relative z-20 mx-auto flex w-full max-w-[1280px] flex-col items-center xl:pt-[120px]">
        <div className="flex w-full flex-col items-center text-center xl:h-[118.3px]">
          <h2 className="w-full max-w-[980px] text-[32px] font-bold leading-[1.4] text-white md:text-[42px] xl:h-[59px] xl:max-w-none xl:whitespace-nowrap">
            {data.title}
          </h2>
          <p className="mt-6 w-full max-w-[980px] text-base font-semibold leading-[1.6] text-white xl:mt-[24px] xl:h-[26px] xl:max-w-none">
            {data.description}
          </p>
        </div>

        <div className="mt-[50px] flex h-[73px] w-full max-w-[450px] items-center rounded-[90px] bg-[#062547] px-2 py-[9px]">
          {data.tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`h-[55px] w-[217px] rounded-[90px] px-[10px] py-[13px] text-center text-lg font-bold leading-[1.6] ${
                activeTab === index ? 'bg-white text-black' : 'text-[#BFBFBF]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {isCommercial ? <CommercialServices data={data.commercial} /> : <ResidentialServices services={data.services} />}
      </div>
    </section>
  );
}

function ResidentialServices({ services }: { services: HomePageData['applianceServices']['services'] }) {
  return (
    <div className="mt-[50px] grid w-full grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-[repeat(6,198px)] xl:justify-between">
      {services.map((service) => (
        <article
          key={service.name}
          className="flex h-[140px] flex-col items-center justify-center gap-3 rounded-md border border-[rgba(0,51,102,0.6)] bg-[rgba(0,30,60,0.6)] p-[13px]"
        >
              <img src={service.icon} alt={`${service.name} repair service`} className="size-[65px] object-contain" />
          <h3 className="text-center text-sm font-semibold uppercase leading-[16.5px] tracking-[0.88px] text-white/75">
            {service.name}
          </h3>
        </article>
      ))}
    </div>
  );
}

function CommercialServices({ data }: { data: HomePageData['applianceServices']['commercial'] }) {
  return (
    <div className="mt-[44px] flex w-full flex-col items-center">
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-5 md:justify-center xl:grid-cols-[repeat(5,198px)]">
        {data.categories.map((category) => (
          <article
            key={category.name}
            className={`flex h-[140px] flex-col items-center justify-center gap-3 rounded-md bg-[rgba(0,30,60,0.6)] p-[13px] md:w-[198px] ${
              category.active ? 'border border-white/80' : 'border border-[rgba(0,51,102,0.6)]'
            }`}
          >
            <img src={category.icon} alt={`${category.name} commercial appliance service`} className="size-[65px] object-contain" />
            <h3 className="text-center text-sm font-semibold uppercase leading-[16.5px] tracking-[0.88px] text-white/75">
              {category.name}
            </h3>
          </article>
        ))}
      </div>

      <div className="mt-[26px] w-full max-w-[800px] rounded-[14px] border border-[#1C5A95] bg-[rgba(0,30,60,0.22)] px-5 py-4">
        <div className="flex flex-wrap gap-2 text-[11px] font-bold leading-[16px] text-white">
          <span>{data.panelTitle}</span>
          <span>{data.panelSubtitle}</span>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {data.options.map((option) => (
            <button
              key={option}
              className="h-[34px] rounded-[8px] border border-[#1E66A5] bg-[rgba(0,51,102,0.18)] px-4 text-left text-[11px] font-medium leading-[14px] text-white"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
