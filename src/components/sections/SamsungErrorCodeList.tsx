const errorCodes = [
  {
    code: '22E / 22C',
    title: 'Fan Error',
    description: 'Evaporator or condenser fan not operating correctly',
  },
  {
    code: '33E',
    title: 'Ice Maker Error',
    description: 'Ice maker motor or sensor failure detected',
  },
  {
    code: '5E',
    title: 'Defrost Sensor Error',
    description: 'Defrost sensor or fuse issue in the freezer section',
  },
  {
    code: '8E',
    title: 'Ice Maker Sensor Issue',
    description: 'Ice maker sensor malfunction affecting ice production',
  },
  {
    code: '24E',
    title: 'Freezer Defrost Error',
    description: 'Freezer defrost heater circuit failure or ice buildup',
  },
] as const;

export function SamsungErrorCodeList() {
  return (
    <section className="bg-white px-5 pb-[50px] pt-[50px] xl:h-[731px] xl:px-0 xl:py-[70px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-3">
        <h2 className="w-full text-center text-[32px] font-bold leading-[1.6] text-[#090A0A] xl:text-[42px] xl:leading-[1.4] xl:text-[#042330]">
          Common Samsung Refrigerator Error Codes
        </h2>

        <div className="mt-[13px] flex w-full max-w-[346px] flex-col gap-4 xl:hidden">
          {errorCodes.map((item, index) => (
            <article
              key={item.code}
              className={`flex w-full flex-col items-start rounded-[4px] border border-[#DFDFDF] bg-white px-[18px] py-[21px] ${index === 0 ? 'min-h-[187px]' : 'min-h-[171px]'}`}
            >
              <CodeBadge code={item.code} mobile />
              <div className="mt-5 flex w-full flex-col items-start gap-0.5">
                <h3 className="text-[14px] font-bold leading-[23.8px] text-[#0D1B2A]">{item.title}</h3>
                <p className="text-[14px] font-semibold leading-5 text-[#5C6E82]">{item.description}</p>
                <a href="#schedule" className="text-[16px] font-semibold leading-6 text-[#0066CC]">View Details</a>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden w-[1052px] overflow-hidden rounded-[20px] border border-[#D6E4F5] bg-white/0 pb-[15.8px] pt-[31.79px] shadow-[0_2px_16px_rgba(0,102,204,0.08)] xl:block">
          <div className="grid h-[47.69px] grid-cols-[130px_minmax(0,1fr)_160px] items-center gap-4 border-b border-[#D6E4F5] bg-[#003366] px-6">
            <span className="text-[11px] font-bold uppercase leading-[18.7px] tracking-[1px] text-white">Error Code</span>
            <span className="text-[11px] font-bold uppercase leading-[18.7px] tracking-[1px] text-white">What It Means</span>
            <span className="text-[11px] font-bold uppercase leading-[18.7px] tracking-[1px] text-white">Details</span>
          </div>

          {errorCodes.map((item, index) => (
            <article
              key={item.code}
              className={`grid h-[88.89px] grid-cols-[130px_minmax(0,1fr)_160px] items-center gap-4 px-6 ${index < errorCodes.length - 1 ? 'border-b border-[#D6E4F5]' : ''}`}
            >
              <div><CodeBadge code={item.code} /></div>
              <div className="flex min-w-0 flex-col items-start gap-0.5">
                <h3 className="text-[14px] font-bold leading-[23.8px] text-[#0D1B2A]">{item.title}</h3>
                <p className="text-[13px] font-normal leading-[22.1px] text-[#5C6E82]">{item.description}</p>
              </div>
              <a href="#schedule" className="flex items-center justify-end gap-1.5 text-[13px] font-semibold leading-[22.1px] text-[#0066CC]">
                <span>View Details</span>
                <img src="/assets/figma-samsung-error-chevron.svg" alt="" className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CodeBadge({ code, mobile = false }: { code: string; mobile?: boolean }) {
  return (
    <span className={`flex h-9 items-center justify-center rounded-md bg-[#0066CC] px-[14px] font-mono text-[14px] font-bold leading-[23.8px] tracking-[0.5px] text-white ${mobile && code !== '22E / 22C' ? 'w-[108px]' : ''}`}>
      {code}
    </span>
  );
}
