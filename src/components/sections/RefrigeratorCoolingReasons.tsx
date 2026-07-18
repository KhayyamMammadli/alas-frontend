const reasons = [
  'Dirty condenser coils',
  'Look for Error Codes',
  'Stop Active Leaks',
  'Clear Drain Filters',
] as const;

const description = "Condenser coils dissipate heat from the refrigerant. When coated with dust and debris, they can't cool efficiently";

export function RefrigeratorCoolingReasons() {
  return (
    <section className="bg-[#F4F6F8] px-5 py-[50px] font-['Montserrat'] xl:h-[622px] xl:px-20 xl:py-[70px]" aria-labelledby="refrigerator-cooling-reasons-title">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-5">
        <h2 id="refrigerator-cooling-reasons-title" className="w-full max-w-[899px] text-center text-[32px] font-bold leading-[1.6] text-[#090A0A] xl:text-[42px] xl:leading-[1.4]">
          Common Reasons a Refrigerator Stops Cooling
        </h2>

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-4">
          {reasons.map(reason => (
            <article key={reason} className="flex min-h-[136px] cursor-pointer flex-col items-start gap-2 rounded-[8px] border-l-4 border-[#E77070] bg-white pb-5 pl-7 pr-6 pt-6 shadow-[0_4px_6px_rgba(0,0,0,0.10)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#D95757] hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
              <h3 className="text-[20px] font-semibold leading-[1.6] text-[#090A0A]">{reason}</h3>
              <p className="text-[16px] font-normal leading-[1.6] text-[#454648]">{description}</p>
            </article>
          ))}
        </div>

        <p className="w-full text-[16px] font-normal leading-[1.48] text-[#090A0A]">
          Most cooling failures trace back to one of these six causes. For a full technical overview of refrigerator components and their roles, refer to the{' '}
          <a href="https://www.energy.gov/energysaver/refrigerators-and-freezers" target="_blank" rel="noreferrer" className="cursor-pointer text-[#277ACD] underline underline-offset-2 transition-colors hover:text-[#00478F]">
            U.S. Department of Energy&apos;s appliance guidance
          </a>.
        </p>
      </div>
    </section>
  );
}
