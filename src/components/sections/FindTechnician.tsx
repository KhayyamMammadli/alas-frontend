import type { HomePageData } from '../../data/homePageData';

type FindTechnicianProps = {
  data: HomePageData['findTechnician'];
};

export function FindTechnician({ data }: FindTechnicianProps) {
  return (
    <section id="locations" className="bg-[#F0F6FF] md:h-[581px]">
      <div className="relative min-h-[581px] w-full overflow-hidden md:h-[581px] md:min-h-0">
        <div className="absolute inset-0 overflow-hidden rounded-r-[180px] md:rounded-r-[800px]">
          <img src={data.backgroundImage} alt="" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-[#0075B7]/15" />
        </div>

        <div className="relative z-10 mx-4 flex min-h-[363px] flex-col items-center rounded-[20px] bg-[#00315C]/90 px-4 py-8 text-center md:absolute md:left-[85px] md:top-[108px] md:mx-0 md:h-[363px] md:w-[1270px] md:min-h-0 md:px-0 md:py-0">
          <p className="text-[16px] font-bold leading-[1.6] text-white md:mt-[21px]">{data.eyebrow}</p>
          <h2 className="mt-[12px] text-[32px] font-bold leading-[1.4] text-white md:text-[42px]">{data.title}</h2>
          <p className="mt-[13px] text-[16px] font-semibold leading-[1.6] text-white">{data.description}</p>

          <form className="mt-[23px] flex w-full max-w-[822px] flex-col gap-[14px] sm:flex-row md:h-[60px]">
            <input
              name="zip"
              aria-label="ZIP code"
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder={data.placeholder}
              className="h-[60px] flex-1 rounded-[80px] border border-[#E5E7EB] bg-white px-[17px] text-[16px] font-normal leading-[1.6] text-[#454648] outline-none placeholder:text-[#454648] focus:ring-2 focus:ring-[#277ACD] md:w-[650px] md:flex-none"
            />
            <button
              className="inline-flex h-[60px] w-full shrink-0 items-center justify-center rounded-[120px] bg-[#0B7CE3] px-7 py-4 text-[18px] font-semibold leading-7 text-[#F5FAFF] shadow-sm md:w-[170px]"
              type="submit"
            >
              {data.action}
            </button>
          </form>

          <div className="mt-[31px] flex max-w-[562px] flex-wrap justify-center gap-x-2 gap-y-[6px]">
            {data.cities.map((city) => (
              <a
                key={city}
                href={city.includes('All') ? '#locations' : `#locations`}
                className="inline-flex h-[23px] items-center rounded-full border border-white/15 bg-white/10 px-3.5 text-[14px] font-medium leading-[1.48] text-white"
                aria-label={`Find appliance repair service in ${city.replace(' ->', '')}`}
              >
                {city}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
