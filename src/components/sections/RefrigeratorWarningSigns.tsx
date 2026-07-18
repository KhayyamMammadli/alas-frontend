const warningSigns = [
  'Food spoiling more quickly than usual',
  'Freezer cold, fridge warm',
  'Loud, clicking, or grinding noise',
  'Unit running constantly without cooling',
] as const;

const repairReasons = [
  'Cooling does not return after your basic checks',
  'The compressor is not running or cycles constantly',
  'The problem keeps recurring after resets',
  'Electrical fault or control board issue suspected',
] as const;

export function RefrigeratorWarningSigns() {
  return (
    <section className="bg-white px-5 py-[50px] font-['Montserrat'] xl:h-[1029px] xl:px-20 xl:py-[70px]">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-16 xl:grid-cols-2 xl:gap-20">
        <div className="flex min-w-0 flex-col items-start gap-[26.9px]">
          <span className="rounded-full border-2 border-[#FFC8C8] bg-[#FFF7F7] px-7 py-4 text-[14px] font-bold uppercase leading-none tracking-[2px] text-[#EF4444]">Warning Signs</span>
          <h2 className="text-[32px] font-extrabold leading-normal tracking-[-2px] text-[#042330] xl:text-[36px]">Signs the Problem Is Getting Worse</h2>

          <div className="flex w-full flex-col gap-[22px] pt-[15.1px]">
            {warningSigns.map(sign => (
              <article key={sign} className="group flex min-h-[122px] cursor-pointer items-center gap-[22px] rounded-[28px] border-2 border-[#FFD8D8] bg-white p-[30px] shadow-[0_8px_15px_rgba(0,0,0,0.04)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#FFB5B5] hover:shadow-[0_14px_30px_rgba(239,68,68,0.10)] xl:min-h-[133px]">
                <span className="flex size-[62px] min-w-[62px] items-center justify-center rounded-[18px] bg-[#FFF3F3]">
                  <img src="/assets/figma-warning-sign-icon.svg" alt="" className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                </span>
                <h3 className="text-[22px] font-bold leading-[1.3] text-[#042330] xl:text-[28px] xl:leading-[36.4px]">{sign}</h3>
              </article>
            ))}
          </div>

          <p className="text-[18px] font-normal leading-normal text-[#3F4E5C] xl:text-[20px]">These signs indicate a repair that should not be delayed.</p>
        </div>

        <div className="flex min-w-0 flex-col items-start gap-[27.2px]">
          <span className="rounded-full border-2 border-[#BFD8FF] bg-[#F4F8FF] px-7 py-4 text-[14px] font-bold uppercase leading-none tracking-[2px] text-[#0066CC]">When to Call</span>
          <h2 className="text-[32px] font-extrabold leading-normal tracking-[-2px] text-[#042330] xl:text-[36px]">When You Need Refrigerator Repair</h2>

          <p className="pt-[14.8px] text-[24px] font-normal leading-[1.7] text-[#3F4E5C] xl:text-[30px] xl:leading-[51px]">Call a technician if any of the following apply:</p>

          <ul className="flex w-full flex-col gap-6 pt-[2.8px]">
            {repairReasons.map(reason => (
              <li key={reason} className="relative pl-[34px] text-[22px] font-medium leading-[1.6] text-[#3F4E5C] xl:text-[30px] xl:leading-[48px]">
                <span className="absolute left-0 top-[15px] size-[10px] rounded-full bg-[#2563EB] xl:top-5" />
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
