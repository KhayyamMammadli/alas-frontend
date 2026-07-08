import type { ServiceCategoryPageData } from '../../data/homePageData';

type RepairProcessProps = {
  data: ServiceCategoryPageData['repairProcess'];
};

export function RepairProcess({ data }: RepairProcessProps) {
  return (
    <section className="w-full max-w-full overflow-hidden bg-white py-[90px] md:py-[92px] max-md:pb-[58px] max-md:pt-0">
      <div className="md:hidden">
        <div className="relative w-full overflow-hidden">
          <img src={data.mobileImage} alt="" className="block h-auto w-full" draggable={false} />
          <div className="sr-only">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <TimelineList steps={data.steps} compact />
          </div>
        </div>
      </div>

      <div className="mx-auto hidden max-w-[1260px] items-center gap-8 px-5 md:grid md:px-8 lg:grid-cols-[690px_500px] lg:gap-0">
        <div className="relative overflow-hidden bg-[#123B63]">
          <img src={data.backgroundImage} alt="" className="block h-auto w-full" draggable={false} />
          <div className="sr-only">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
          <a
            href="#schedule"
            aria-label={data.action}
            className="absolute left-[10.2%] top-[68.9%] h-[13.6%] w-[43.1%] rounded-[999px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#123B63]"
          />
        </div>

        <div className="relative z-10 rounded-[20px] border border-[#E0E0E0] bg-white px-[28px] py-[25px] shadow-[0_18px_35px_rgba(15,23,42,0.12)] lg:-ml-[1px]">
          <TimelineList steps={data.steps} />
        </div>
      </div>
    </section>
  );
}

type TimelineListProps = {
  steps: ServiceCategoryPageData['repairProcess']['steps'];
  compact?: boolean;
};

function TimelineList({ steps, compact = false }: TimelineListProps) {
  return (
    <ol className={compact ? 'space-y-[18px]' : 'space-y-[19px]'}>
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={compact ? 'grid grid-cols-[34px_minmax(0,1fr)] gap-[12px]' : 'grid grid-cols-[36px_minmax(0,1fr)] gap-[14px]'}
        >
          <StepMarker number={index + 1} />
          <span>
            <strong className={compact ? 'block text-[15px] font-bold leading-[1.25] text-[#161616]' : 'block text-[16px] font-bold leading-[1.25] text-[#161616]'}>
              {step.title}
            </strong>
            <span className={compact ? 'mt-[9px] block text-[13.5px] font-normal leading-[1.55] text-[#5D5D5D]' : 'mt-[9px] block text-[15.5px] font-normal leading-[1.46] text-[#5D5D5D]'}>
              {step.description}
            </span>
          </span>
        </li>
      ))}
    </ol>
  );
}

function StepMarker({ number }: { number: number }) {
  return (
    <svg aria-hidden="true" className="mt-[1px] size-[34px] shrink-0" viewBox="0 0 34 34" fill="none">
      <path d="M2 5.5H22.6L31.8 17L22.6 28.5H2V5.5Z" fill="#FF9A3D" />
      <path d="M5 2.5H24.1L32.2 17L24.1 31.5H5" stroke="#FF9A3D" strokeWidth="1.25" strokeLinejoin="round" />
      <text
        x="13.5"
        y="22.2"
        fill="white"
        fontFamily="Montserrat, Arial, sans-serif"
        fontSize="16"
        fontWeight="700"
        textAnchor="middle"
      >
        {number}
      </text>
    </svg>
  );
}
