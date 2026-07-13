const serviceStandards = [
  { icon: '💬', title: 'Proper Communication', description: 'Real-time updates and clear explanations of all work.' },
  { icon: '📅', title: 'Organized Scheduling', description: 'Guaranteed arrival windows with advance notifications.' },
  { icon: '🧹', title: 'Clean Service Practices', description: 'Respectful of your property, leave work areas clean.' },
  { icon: '🎓', title: 'Continuing Education', description: 'Ongoing training on latest appliance technology.' },
  { icon: '🤝', title: 'Long-Term Customer Care', description: 'Building relationships beyond single transactions.' },
];

const benchmarks = [
  { label: 'Same-Day Response Rate', value: 92 },
  { label: 'Customer Satisfaction', value: 97 },
  { label: 'First-Visit Fix Rate', value: 88 },
];

export function AboutProfessionalService() {
  return (
    <section className="bg-white px-5 py-16 xl:h-[987px] xl:px-20 xl:pb-0 xl:pt-[88px]">
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-12 xl:h-[811px] xl:block">
        <div className="w-full xl:absolute xl:left-0 xl:top-[28.71px] xl:w-[674px]">
          <h2 className="w-full text-[38px] font-bold leading-[1.4] text-[#042330] xl:w-[552px] xl:text-[42px]">
            Committed to <span className="text-[#0066CC]">Professional</span> Service
          </h2>
          <p className="mt-5 w-full text-[16px] font-normal leading-[27.2px] text-[#3F4E5C] xl:w-[552px]">
            We maintain high standards across communication, scheduling, cleanliness, and ongoing education to ensure every customer receives consistent, professional service.
          </p>

          <ul className="mt-8 flex w-full flex-col gap-[15.898px]">
            {serviceStandards.map((standard) => (
              <li key={standard.title} className="flex min-h-[93px] w-full items-start gap-4 rounded-xl border border-[#E8ECF2] p-[21px]">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#E8F0FA] text-[24px] font-normal leading-9 text-[#1A2233]">{standard.icon}</span>
                <span className="flex min-w-0 flex-1 flex-col items-start gap-[5.949px]">
                  <strong className="text-[15px] font-extrabold leading-[22.5px] text-[#042330]">{standard.title}</strong>
                  <span className="text-[14px] font-normal leading-[22.4px] text-[#3F4E5C]">{standard.description}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="w-full rounded-[20px] border border-[#E8ECF2] bg-[#F4F6F9] p-6 sm:p-9 xl:absolute xl:right-0 xl:top-[218.79px] xl:h-[592px] xl:w-[552px]">
          <h3 className="text-[16px] font-extrabold leading-6 text-[#042330]">Our Performance Benchmarks</h3>
          <div className="mt-[31.75px] flex flex-col gap-[23.5px]">
            {benchmarks.map((benchmark) => (
              <div key={benchmark.label} className="flex h-20 w-full flex-col items-start gap-[7.75px]">
                <span className="text-[13px] font-semibold leading-[19.5px] text-[#3F4E5C]">{benchmark.label}</span>
                <span className="h-2 w-full overflow-hidden rounded bg-[#E8ECF2]">
                  <span className="block h-full rounded bg-[#0066CC]" style={{ width: `${benchmark.value}%` }} />
                </span>
                <strong className="text-[24px] font-bold leading-9 text-[#0066CC]">{benchmark.value}%</strong>
              </div>
            ))}
          </div>

          <div className="mt-[27.5px] flex flex-col items-center border-t border-[#E8ECF2] pt-[27.75px] text-center">
            <span className="text-[32px] font-normal leading-12 text-[#1A2233]">⭐</span>
            <strong className="mt-[7.5px] text-[26px] font-black leading-[39px] text-[#042330]">4.9/5</strong>
            <span className="mt-[5.25px] text-[13px] font-normal leading-[19.5px] text-[#3F4E5C]">Average Google Rating</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
