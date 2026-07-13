const includedRepairs = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: 'Comprehensive Diagnosis',
  description: 'Complete inspection of all refrigerator components to identify the root cause',
}));

export function RefrigeratorRepairIncluded() {
  return (
    <section className="h-[1191.5px] bg-white px-[15px] py-[50px] xl:h-[544px] xl:px-20 xl:py-[70px]">
      <div className="mx-auto flex w-[353px] flex-col items-center gap-[30px] xl:w-full xl:max-w-[1280px] xl:gap-8">
        <h2 className="w-full text-center text-[24px] font-bold leading-[1.6] text-[#090A0A] xl:w-[899px] xl:text-[42px] xl:leading-[1.4]">
          What's Included in <span className="text-[#00478F]">Our Repair</span>
        </h2>

        <ul className="grid w-full grid-cols-1 gap-6 xl:grid-cols-3">
          {includedRepairs.map((item) => (
            <li
              key={item.id}
              className="flex h-[144.25px] w-full items-start gap-4 rounded-2xl border border-[#F4F6F8] bg-white px-[25px] pb-px pt-[25px] shadow-[0_4px_18px_rgba(10,22,40,0.08)]"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(0,102,204,0.08)]">
                <img src="/assets/figma-refrigerator-repair-check.svg" alt="" className="size-6" />
              </span>
              <span className="flex h-[96.25px] min-w-0 flex-1 flex-col items-start gap-1">
                <strong className="h-6 whitespace-nowrap text-[16px] font-semibold leading-[1.6] text-[#17181A] max-[392px]:text-[15px] xl:text-[16px]">{item.title}</strong>
                <span className="w-[221px] text-[14px] font-normal leading-[1.6] text-[#454648]">{item.description}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
