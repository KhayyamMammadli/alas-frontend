import type { ServiceCategoryPageData } from '../../data/homePageData';

type RepairProcessProps = {
  data: ServiceCategoryPageData['repairProcess'];
};

export function RepairProcess({ data }: RepairProcessProps) {
  return (
    <section className="w-full max-w-full overflow-hidden bg-white">
      <div className="relative lg:hidden">
        <div className="absolute left-[-46.6vw] top-[6px] h-[563px] w-[calc(100%+46.6vw)] overflow-hidden rounded-r-[800px]">
          <img src={data.backgroundImage} alt="" className="size-full object-cover" draggable={false} />
          <div className="absolute inset-0 bg-[#173356]/80" />
          <div className="absolute left-[-38%] top-0 h-full w-[118%] -skew-x-[45deg] bg-[#173356]/80" />
        </div>

        <div className="relative px-5 pb-12 pt-[77px] min-[393px]:px-0">
          <div className="mx-auto flex w-full max-w-[350px] flex-col items-start gap-[40px]">
            <div className="flex w-full flex-col gap-[15.3px]">
              <h2 className="text-[42px] font-bold leading-[1.4] tracking-[0] text-white">{data.title}</h2>
              <p className="text-[16px] font-semibold leading-[1.6] tracking-[0] text-white">{data.description}</p>
            </div>

            <a
              href="#schedule"
              className="flex w-full items-center justify-center rounded-[120px] bg-[#277ACD] px-[28px] py-[16px] text-center text-[18px] font-semibold leading-[28px] tracking-[0] text-[#F5FAFF] shadow-[0_1px_2px_rgba(16,24,40,0.05)]"
            >
              {data.action}
            </a>
          </div>

          <div className="relative z-10 mx-auto mt-[-60px] w-full max-w-[352px] rounded-[24px] bg-white p-[24px] shadow-[0_0_0_1px_rgba(10,22,40,0.06),0_24px_48px_rgba(10,22,40,0.2)]">
            <TimelineList steps={data.steps} />
          </div>
        </div>
      </div>

      <div className="relative hidden h-[642px] lg:block">
        <div className="absolute left-0 top-1/2 h-[440px] w-[88%] -translate-y-1/2 overflow-hidden rounded-r-[800px]">
          <img src={data.backgroundImage} alt="" className="size-full object-cover" draggable={false} />
          <div className="absolute inset-0 bg-[#173356]/55" />
          <div className="absolute left-[-20%] top-0 h-full w-[62%] -skew-x-[45deg] bg-[#173356]/80" />
        </div>

        <div className="absolute left-[clamp(48px,5.56vw,80px)] top-1/2 flex w-[min(43.2vw,622px)] -translate-y-1/2 flex-col items-start gap-[40px]">
          <div className="flex w-full flex-col gap-[15.3px]">
            <h2 className="text-[42px] font-bold leading-[1.4] tracking-[0] text-white">{data.title}</h2>
            <p className="w-full max-w-[592px] text-[16px] font-semibold leading-[1.6] tracking-[0] text-white">{data.description}</p>
          </div>

          <a
            href="#schedule"
            className="flex w-[340px] items-center justify-center rounded-[120px] bg-[#277ACD] px-[28px] py-[16px] text-center text-[18px] font-semibold leading-[28px] tracking-[0] text-[#F5FAFF] shadow-[0_1px_2px_rgba(16,24,40,0.05)]"
          >
            {data.action}
          </a>
        </div>

        <div className="absolute right-[clamp(48px,5.56vw,80px)] top-1/2 z-10 w-[min(39.7vw,571px)] -translate-y-1/2 rounded-[24px] bg-white p-[24px] shadow-[0_0_0_1px_rgba(10,22,40,0.06),0_24px_48px_rgba(10,22,40,0.2)]">
          <TimelineList steps={data.steps} />
        </div>
      </div>
    </section>
  );
}

type TimelineListProps = {
  steps: ServiceCategoryPageData['repairProcess']['steps'];
};

function TimelineList({ steps }: TimelineListProps) {
  return (
    <ol className="flex flex-col gap-[16px]">
      {steps.map((step) => (
        <li
          key={step.title}
          className="grid grid-cols-[37px_minmax(0,1fr)] gap-[10px]"
        >
          <img src={step.markerIcon} alt="" className="size-[37px] shrink-0" draggable={false} />
          <span className="flex min-w-0 flex-col gap-[10px] text-[16px] leading-[1.6] tracking-[0]">
            <strong className="block whitespace-normal font-semibold text-[#121315] sm:whitespace-nowrap">
              {step.title}
            </strong>
            <span className="block font-normal text-[#454648]">
              {step.description}
            </span>
          </span>
        </li>
      ))}
    </ol>
  );
}
