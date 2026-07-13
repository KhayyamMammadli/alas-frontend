const features = [
  {
    title: '24/7 Availability',
    description: 'We’re here when\nyou need us most.',
  },
  {
    title: 'Fast Response',
    description: 'Same-day service in\nmost cases.',
  },
  {
    title: 'Expert Technicians',
    description: 'Certified and background-\nchecked.',
  },
  {
    title: 'Local & Trusted',
    description: 'Plano and surrounding\nareas.',
  },
] as const;

export function SamsungErrorCodesHero() {
  return (
    <section className="relative h-[1295px] overflow-hidden bg-[linear-gradient(179.38deg,#00173F_0.16%,#00143B_57.05%)] xl:h-[775px] xl:bg-[#00173F]">
      <img
        src="/assets/figma-samsung-error-hero-desktop.png"
        alt="Samsung refrigerator with washer and dryer"
        className="absolute inset-0 hidden size-full object-cover xl:block"
      />

      <div className="absolute left-5 top-[9px] z-10 flex w-[calc(100%-40px)] max-w-[353px] flex-col items-start xl:left-20 xl:top-[55px] xl:w-[871px] xl:max-w-none">
        <div className="flex w-full flex-col items-start gap-8 xl:w-[768px] xl:gap-6">
          <h1 className="w-full text-[32px] font-bold leading-[1.6] text-white xl:text-[48px] xl:leading-[57.6px]">
            Samsung Refrigerator Error Codes — What They Mean and How to Fix Them
          </h1>

          <p className="w-full text-[16px] font-semibold leading-[1.6] text-white/80 xl:w-[694px] xl:text-[24px] xl:font-medium xl:leading-[39.6px]">
            Seeing an error code on your Samsung refrigerator? Here&apos;s what it means, what you can try, and when to call for professional repair.
          </p>

          <ul className="flex w-full flex-col items-start gap-4 xl:hidden">
            {features.map((feature) => (
              <li key={feature.title} className="flex h-8 items-center gap-3 text-[16px] font-semibold leading-[1.6] text-white">
                <CheckCircle />
                <span>{feature.title}</span>
              </li>
            ))}
          </ul>

          <div className="flex w-full flex-col gap-6 xl:flex-row">
            <a
              href="#schedule"
              className="flex h-[60px] w-full items-center justify-center gap-3 rounded-[120px] bg-[#DC2626] px-7 text-[18px] font-semibold leading-7 text-[#F7FAFC] shadow-[0_1px_2px_rgba(16,24,40,0.05)] xl:w-auto"
            >
              <span>Schedule Refrigerator Repair</span>
              <ChevronRight />
            </a>
            <a
              href="tel:+14696383215"
              className="flex h-[60px] w-full items-center justify-center rounded-[120px] border border-[#C5E1FD] px-7 text-[18px] font-semibold leading-7 text-[#F7FAFC] shadow-[0_1px_2px_rgba(16,24,40,0.05)] xl:w-auto"
            >
              Chat us now!
            </a>
          </div>
        </div>

        <div className="mt-[46px] hidden h-[132px] w-[871px] overflow-hidden rounded-[18px] border border-white/20 bg-white/5 pt-4 backdrop-blur-[7px] xl:flex">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex h-full min-w-0 flex-1 flex-col justify-center gap-2 px-[14px] py-6 ${index < features.length - 1 ? 'border-r border-white/15' : ''}`}
            >
              <strong className="whitespace-pre-line text-[17px] font-bold leading-normal text-white">
                {feature.title === 'Expert Technicians' ? 'Expert\nTechnicians' : feature.title}
              </strong>
              <span className="whitespace-pre-line text-[14px] font-normal leading-[21px] text-white/70">{feature.description}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-0 top-[843px] h-[435px] w-full overflow-hidden xl:hidden">
        <img
          src="/assets/figma-samsung-error-hero-mobile.png"
          alt=""
          className="absolute left-1/2 top-0 h-[427px] w-[800px] max-w-none -translate-x-[55%] object-cover"
        />
      </div>
    </section>
  );
}

function CheckCircle() {
  return (
    <svg aria-hidden="true" className="size-8 shrink-0" viewBox="0 0 32 32" fill="none">
      <path d="M29.333 14.773V16A13.333 13.333 0 1 1 21.427 3.813" stroke="#00D10A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m29.333 5.333-13.333 13.347-4-4" stroke="#00D10A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg aria-hidden="true" className="size-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
