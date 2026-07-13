const refrigeratorIssues = [
  { label: 'Refrigerator not cooling', icon: '/assets/figma-refrigerator-issue-temperature.svg' },
  { label: 'Freezer icing up', icon: '/assets/figma-refrigerator-issue-snowflake.svg' },
  { label: 'Water leaking', icon: '/assets/figma-refrigerator-issue-water.svg' },
  { label: 'Loud or unusual noises', icon: '/assets/figma-refrigerator-issue-sound.svg' },
  { label: 'Ice maker not working', icon: '/assets/figma-refrigerator-issue-snowflake.svg' },
  { label: 'Compressor not running', icon: '/assets/figma-refrigerator-issue-tool.svg' },
];

export function RefrigeratorIssues() {
  return (
    <section className="h-[867px] bg-white py-[50px] xl:h-[520px] xl:py-[70px]">
      <div className="mx-auto flex w-[353px] flex-col items-start gap-[30px] xl:w-full xl:max-w-[1280px] xl:items-center xl:gap-8">
        <h2 className="w-full text-center text-[32px] font-bold leading-[1.6] text-[#090A0A] xl:w-[899px] xl:text-[42px] xl:leading-[1.4]">
          Is Your Refrigerator Not Cooling or Acting Up?
        </h2>

        <p className="w-full text-center text-[16px] font-normal leading-6 tracking-[-0.3125px] text-[#454648] xl:w-[672px]">
          When your refrigerator isn't working properly, it can lead to spoiled food and costly replacements. We diagnose and fix these common issues fast.
        </p>

        <ul className="grid w-full grid-cols-1 gap-4 xl:w-[1152px] xl:grid-cols-3 xl:gap-x-6 xl:gap-y-6">
          {refrigeratorIssues.map((issue) => (
            <li key={issue.label} className="flex h-[63px] w-full items-center rounded-lg border border-[#E8E8E8] bg-white px-[15px]">
              <img src={issue.icon} alt="" className="size-6 shrink-0" />
              <span className="ml-3 text-[18px] font-semibold leading-[27px] tracking-[-0.4395px] text-[#090A0A]">{issue.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
