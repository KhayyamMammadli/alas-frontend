const commonProblems = [
  'Faulty thermostat',
  'Compressor failure',
  'Temperature control failure',
  'Evaporator fan issues',
  'Defrost system problems',
  'Defrost system problems',
];

export function HvacCommonProblems() {
  return (
    <section className="h-[701px] bg-white px-5 py-[50px] xl:h-[371px] xl:px-0 xl:py-0">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 xl:pt-[70px]">
        <h2 className="w-full text-center text-[32px] font-bold leading-[1.6] text-[#000A14] xl:w-[899px] xl:text-[42px] xl:leading-[1.4]">
          <span className="xl:hidden">Common Refrigerator Problems We Fix</span>
          <span className="hidden xl:inline">Common Problems We Fix</span>
        </h2>

        <div className="grid w-full grid-cols-1 gap-4 xl:w-[1352px] xl:self-start xl:grid-cols-[440px_440px_440px] xl:gap-x-4 xl:gap-y-7">
          {commonProblems.map((problem, index) => (
            <article
              key={`${problem}-${index}`}
              className="flex h-14 w-full items-center gap-3 rounded-[14px] bg-[#F8F9FB] p-4 shadow-[0_1px_1.5px_rgba(0,0,0,0.1),0_1px_1px_rgba(0,0,0,0.1)] xl:w-[440px]"
            >
              <img src="/assets/figma-hvac-problem-check.svg" alt="" className="size-5 shrink-0" />
              <span className="whitespace-nowrap text-[16px] font-normal leading-6 tracking-[-0.3125px] text-[#364153]">
                {problem}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
