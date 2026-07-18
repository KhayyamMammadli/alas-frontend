const problems = [
  {
    icon: '/assets/figma-commercial-cost-icon.svg',
    title: 'Unexpected Costs',
    description: 'A single HVAC failure in summer can cost $2,400+ in repairs and lost productivity. Those emergency calls add up fast.',
    quote: '"We spent over $8K last year on emergency repairs. ALAS would have saved us thousands."',
  },
  {
    icon: '/assets/figma-commercial-downtime-icon.svg',
    title: 'Downtime Kills Revenue',
    description: 'Every hour your business is closed due to equipment failure is money lost. Quick response times matter.',
    quote: '"Our AC broke on a Saturday. We had to close for 3 days. Never again."',
  },
  {
    icon: '/assets/figma-commercial-maintenance-icon.svg',
    title: 'Maintenance Headaches',
    description: "Tracking service schedules, finding reliable technicians, and managing vendors takes time you don't have.",
    quote: '"I was spending 5+ hours a month just coordinating repairs. ALAS handles it all."',
  },
  {
    icon: '/assets/figma-commercial-warning-icon.svg',
    title: 'No Warning Signs',
    description: 'Equipment failures often happen without warning. Preventive maintenance catches issues before they become disasters.',
    quote: '"Our freezer died overnight. Lost $3K in inventory. Wish we had preventive service."',
  },
] as const;

export function CommercialBusinessProblems() {
  return (
    <section
      className="bg-white bg-[url('/assets/figma-commercial-problems-bg.png')] bg-cover bg-center px-5 py-[50px] xl:h-[1131px] xl:px-20 xl:pb-0 xl:pt-[92px]"
      aria-labelledby="commercial-problems-title"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[30px]">
        <div className="flex w-full flex-col items-center gap-[15px] pb-[9.3px] text-center">
          <h2
            id="commercial-problems-title"
            className="w-full max-w-[1008px] text-[32px] font-bold leading-[1.6] text-[#090A0A] xl:text-[42px] xl:leading-[1.4]"
          >
            Running a business is hard enough{' '}
            <span className="text-[#00478F]">without&nbsp;equipment disasters</span>
          </h2>
          <p className="w-full max-w-[672px] text-[20px] font-normal leading-[32.5px] tracking-[-0.4492px] text-[#2A3B4B]">
            Protect your commercial appliances and HVAC systems with one simple plan. Fast response, expert service, zero surprises.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-2">
          {problems.map((problem) => (
            <article
              key={problem.title}
              className="flex flex-col items-start gap-[21px] rounded-[20px] border border-[rgba(229,231,235,0.5)] bg-white/80 p-4 py-6 shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] transition-[transform,border-color,box-shadow,background-color] duration-300 ease-out motion-safe:hover:-translate-y-1.5 hover:border-[#B7D4F8] hover:bg-white/95 hover:shadow-[0_20px_38px_rgba(18,102,214,0.14)] xl:p-[33px]"
            >
              <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#FFE4DA]">
                <img src={problem.icon} alt="" className="size-7" aria-hidden="true" />
              </div>
              <h3 className="text-[24px] font-bold leading-8 tracking-[0.0703px] text-[#042330]">
                {problem.title}
              </h3>
              <p className="text-[16px] font-medium leading-[26px] tracking-[-0.3125px] text-[#2A3B4B]">
                {problem.description}
              </p>
              <blockquote className="flex min-h-[74px] w-full items-start rounded-[14px] border-l-8 border-[#E77979] bg-[rgba(255,224,220,0.5)] px-[17px] pb-px pt-[17px] text-[14px] font-medium leading-5 tracking-[-0.1504px] text-[#1A2D40]">
                {problem.quote}
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
