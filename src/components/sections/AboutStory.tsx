const storySteps = [
  { icon: '🌍', title: 'The Beginning', description: 'Started as a small local repair business focused on residential appliances in Plano, TX.' },
  { icon: '💡', title: 'Recognizing the Problem', description: 'Customers consistently complained about scheduling uncertainty and lack of preventive care.' },
  { icon: '🏗️', title: 'Building ALAS', description: 'Developed structured service systems, membership plans, and real-time communication tools.' },
  { icon: '📈', title: 'Growing Across DFW', description: 'Expanded to serve 8+ major cities with both residential and commercial expertise.' },
];

const industryProblems = [
  'Inconsistent communication',
  'Unreliable scheduling',
  'Poor customer experience',
  'Reactive repairs only',
];

const alasDifferences = [
  'Real-time scheduling updates',
  'Guaranteed arrival windows',
  'Professional communication',
  'Preventive maintenance focus',
  '90-day repair warranty',
];

export function AboutStory() {
  return (
    <section className="bg-white px-5 py-16 xl:h-[966px] xl:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 xl:h-[790px] xl:flex-row xl:justify-between xl:gap-0">
        <div className="w-full xl:w-[552px]">
          <span className="text-[11px] font-extrabold uppercase leading-[16.5px] tracking-[1.5px] text-[#0066CC]">Our Journey</span>
          <h2 className="mt-[11.61px] text-[38px] font-bold leading-[1.4] text-[#042330] xl:text-[42px]">
            Our <span className="text-[#0066CC]">Story</span>
          </h2>
          <p className="mt-5 w-full text-[16px] font-normal leading-[27.2px] text-[#3F4E5C] xl:w-[659px]">
            ALAS Appliance Services was built from a vision to create a more professional, reliable, and customer-focused service company. After transitioning from a background in technology and systems, our founder recognized major problems in the service industry:
          </p>

          <ol className="mt-12 flex w-full flex-col gap-[32.297px] xl:h-[469px]">
            {storySteps.map((step, index) => (
              <li key={step.title} className={`flex items-start gap-6 ${index === storySteps.length - 1 ? 'min-h-[75px]' : 'min-h-[99px]'}`}>
                <span className={`flex w-12 shrink-0 flex-col items-center ${index === storySteps.length - 1 ? 'h-[75px]' : 'h-[99px]'}`}>
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-[3px] border-[#0066CC] bg-[rgba(0,102,204,0.1)] text-[20px] font-normal leading-[30px] text-[#1A2233]">{step.icon}</span>
                  {index < storySteps.length - 1 ? <span className="mt-2 h-[35px] w-0.5 bg-[#E8F0FA]" /> : null}
                </span>
                <span className="flex min-w-0 flex-1 flex-col items-start gap-[7.648px]">
                  <strong className="text-[15px] font-extrabold leading-[22.5px] text-[#042330]">{step.title}</strong>
                  <span className="text-[14px] font-normal leading-[22.4px] text-[#3F4E5C]">{step.description}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <aside className="w-full rounded-[20px] border border-[#E8ECF2] bg-[#F4F6F9] p-6 sm:p-9 xl:my-[31.5px] xl:h-[727px] xl:w-[552px]">
          <ComparisonGroup title="Industry Problems We Solved" items={industryProblems} tone="problem" />
          <div className="my-6 h-px w-full bg-[#E8ECF2]" />
          <ComparisonGroup title="The ALAS Difference" items={alasDifferences} tone="difference" />
        </aside>
      </div>
    </section>
  );
}

function ComparisonGroup({ title, items, tone }: { title: string; items: string[]; tone: 'problem' | 'difference' }) {
  const isProblem = tone === 'problem';

  return (
    <section>
      <h3 className="text-[16px] font-extrabold leading-6 text-[#042330]">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className={`flex h-12 items-center rounded-md border-l-[3px] px-4 text-[14px] font-semibold leading-[21px] ${isProblem ? 'border-[#EF4444] bg-[#FEF2F2] text-[#DC2626]' : 'border-[#10B981] bg-[#F0FDF4] text-[#059669]'}`}>
            {isProblem ? '✗' : '✓'}&nbsp; {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
