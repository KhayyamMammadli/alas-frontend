import type { FormEvent } from 'react';
import type { HomePageData } from '../../data/homePageData';

type FindTechnicianProps = {
  data: HomePageData['findTechnician'];
};

export function FindTechnician({ data }: FindTechnicianProps) {
  const preventSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

  return (
    <section id="locations" className="relative h-[755px] overflow-hidden bg-[#F0F6FF] xl:h-[581px]">
      <picture>
        <source media="(max-width: 1279px)" srcSet={data.mobileBackgroundImage} />
        <img
          src={data.backgroundImage}
          alt=""
          className="absolute left-[-7.23%] top-[-24.86%] h-[192%] w-full max-w-none xl:inset-0 xl:size-full xl:object-cover xl:rounded-br-[800px] xl:rounded-tr-[800px]"
        />
      </picture>
      <div className="absolute inset-0 bg-black/20 xl:rounded-br-[800px] xl:rounded-tr-[800px]" />

      <div className="pointer-events-none absolute left-[-481px] top-0 h-[680.43px] w-[1187.31px] overflow-hidden xl:left-[-395px] xl:top-[-65.43px]">
        <div className="absolute left-[340px] top-[-141px] h-[962.273px] w-[506.88px] -skew-x-[45deg] scale-y-[0.71] bg-[#00478F] opacity-50" />
      </div>

      <div className="absolute left-[26px] right-[26px] top-[37px] h-[681px] overflow-hidden rounded-[25px] bg-[rgba(0,32,64,0.8)] xl:left-[86px] xl:right-[86px] xl:top-[108.703px] xl:h-[364px]">
        <div className="absolute left-1/2 top-[27px] flex w-[309px] -translate-x-1/2 flex-col items-center gap-3 text-center xl:top-[22.5px] xl:w-[836px]">
          <p className="w-full text-[18px] font-bold leading-[1.6] text-white">{data.eyebrow}</p>
          <h2 className="w-full text-[42px] font-bold leading-[1.4] text-white">{data.title}</h2>
          <p className="w-full text-[16px] font-semibold leading-[1.6] text-white">{data.description}</p>
        </div>

        <form
          onSubmit={preventSubmit}
          className="absolute left-1/2 top-[367px] flex w-[317px] -translate-x-1/2 flex-col items-start gap-6 xl:top-[184.5px] xl:w-[836px] xl:flex-row xl:items-center xl:justify-between xl:gap-0"
        >
          <input
            name="zip"
            aria-label="ZIP code"
            inputMode="numeric"
            autoComplete="postal-code"
            placeholder={data.placeholder}
            className="h-[60px] w-full rounded-[80px] border border-[#E5E7EB] bg-white px-[17px] py-[9px] text-[16px] font-normal leading-[1.6] text-[#454648] outline-none placeholder:text-[#454648] focus:ring-2 focus:ring-[#277ACD] xl:w-[650px]"
          />
          <button
            className="flex h-[60px] w-full shrink-0 items-center justify-center rounded-[120px] bg-[#0066CC] px-7 py-4 text-[18px] font-semibold leading-7 text-[#F5FAFF] shadow-[0_1px_2px_rgba(16,24,40,0.05)] xl:w-auto"
            type="submit"
          >
            {data.action}
          </button>
        </form>

        <div className="absolute left-3 top-[537px] flex w-[317px] flex-wrap items-start justify-center gap-x-[7px] gap-y-[6px] xl:left-1/2 xl:top-[278.5px] xl:w-[562px] xl:-translate-x-1/2">
          {data.cities.map((city) => (
            <a
              key={city}
              href="#locations"
              className="mt-[3px] flex h-[26px] items-center rounded-[100px] border border-white/10 bg-white/[0.08] px-[14px] py-[2.5px] text-[14px] font-medium leading-[1.48] text-white"
              aria-label={`Find appliance repair service in ${city.replace(' ->', '')}`}
            >
              {city.replace(' ->', ' →')}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
