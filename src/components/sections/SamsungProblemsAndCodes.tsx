const commonProblems = [
  {
    title: 'Refrigerator not cooling',
    description: 'Fridge running but not keeping items cold.',
    href: '/protection-plans',
  },
  {
    title: 'Washer not draining',
    description: 'Water not draining or cycle won’t complete.',
    href: '/services/appliance-repair',
  },
  {
    title: 'Dryer not heating',
    description: 'Clothes take too long or come out still wet.',
    href: '/services/appliance-repair',
  },
  {
    title: 'Error codes on display',
    description: 'Unexpected error codes appearing on your appliance.',
    href: '/guides/samsung-refrigerator-error-codes',
  },
] as const;

const errorCodeGuides = [
  {
    title: 'Samsung Refrigerator Error Codes',
    path: '/samsung-refrigerator-error-codes/',
    href: '/guides/samsung-refrigerator-error-codes',
  },
  {
    title: 'Samsung Washer Error Codes',
    path: '/samsung-washer-error-codes/',
    href: '/services/appliance-repair',
  },
  {
    title: 'Samsung Dryer Error Codes',
    path: '/samsung-dryer-error-codes/',
    href: '/services/appliance-repair',
  },
] as const;

function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CommonProblemsCard() {
  return (
    <article className="flex w-full flex-col gap-[23px] rounded-[28px] bg-white/95 px-3 py-11 shadow-[0_24px_70px_rgba(15,35,70,0.08)] xl:h-[1225.4px] xl:p-11">
      <div className="flex">
        <span className="inline-flex items-center gap-[9px] rounded-full border border-[#FFB8B8] bg-[#FFF1F1] px-[23px] pb-4 pt-[15px] text-[16px] font-bold leading-none tracking-[1.5px] text-[#D60000]">
          <span aria-hidden="true" className="size-[7px] rounded-full bg-current" />
          COMMON ISSUES
        </span>
      </div>

      <h2 className="text-[24px] font-bold leading-[1.45] tracking-[-1.7px] text-[#042330] xl:text-[40px] xl:leading-[61.6px]">
        Common Samsung<br />Appliance Problems
      </h2>

      <p className="text-[22px] font-normal leading-[31.9px] text-[#3F4E5C] xl:text-[#2A3B4B]">
        Quick help for the most frequently reported appliance issues.
      </p>

      <div className="flex flex-col gap-[17px]">
        {commonProblems.map((problem) => (
          <a
            key={problem.title}
            href={problem.href}
            className="group flex min-h-[127.17px] items-center justify-between gap-3 rounded-[18px] border border-[#DC1010] border-l-[6px] bg-[#FFFAFA] py-[21px] pl-[30px] pr-[25px] shadow-[0_10px_14px_rgba(190,40,40,0.05)] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#FFF5F5] hover:shadow-[0_14px_22px_rgba(190,40,40,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#D60000] motion-reduce:transform-none"
          >
            <span className="min-w-0">
              <strong className="block text-[24px] font-bold leading-[28.8px] text-[#042330]">{problem.title}</strong>
              <span className="mt-2 block text-[18px] font-normal leading-[25.2px] text-[#3F4E5C] xl:text-[#2A3B4B]">{problem.description}</span>
            </span>
            <span aria-hidden="true" className="shrink-0 text-[44px] font-medium leading-none text-[#D60000] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">›</span>
          </a>
        ))}
      </div>

      <div className="mt-auto flex min-h-[169.98px] flex-col items-center justify-between gap-6 rounded-[18px] border border-[#FFC3C3] bg-[linear-gradient(112deg,#FFF1F1_0%,#FFFFFF_100%)] px-[25px] pb-[23px] pt-[33px] text-center xl:flex-row xl:gap-5 xl:bg-[linear-gradient(133deg,#FFF1F1_0%,#FFFFFF_100%)] xl:text-left">
        <div>
          <h3 className="text-[24px] font-bold leading-[28.8px] text-[#042330]">Still need help?</h3>
          <p className="mt-2 text-[18px] font-normal leading-[25.2px] text-[#3F4E5C] xl:text-[#2A3B4B]">Our experts are ready to assist.</p>
        </div>
        <a
          href="tel:+14696383215"
          className="group inline-flex h-[54px] w-full shrink-0 items-center justify-center gap-2 rounded-[90px] bg-[linear-gradient(139deg,#E21515_0%,#C50000_100%)] px-5 text-[17px] font-bold text-white shadow-[0_12px_13px_rgba(220,16,16,0.22)] transition-[transform,box-shadow,filter] duration-300 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_16px_20px_rgba(220,16,16,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D60000] motion-reduce:transform-none xl:w-[238px]"
        >
          Get Support Now
          <ArrowIcon className="size-5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
        </a>
      </div>
    </article>
  );
}

function ErrorCodesCard() {
  return (
    <article className="flex w-full flex-col gap-12 rounded-[28px] bg-white/95 px-3 py-11 shadow-[0_24px_70px_rgba(15,35,70,0.08)] xl:h-[1225.4px] xl:justify-between xl:gap-0 xl:p-11">
      <div className="flex flex-col gap-[23px]">
        <div className="flex">
          <span className="inline-flex items-center gap-[9px] rounded-full border border-[#FFD58B] bg-[#FFF8E8] px-[23px] pb-[18px] pt-4 text-[16px] font-bold leading-none tracking-[1.5px] text-[#A94C00]">
            <span aria-hidden="true" className="size-[9px] border-2 border-current" />
            ERROR CODES
          </span>
        </div>

        <h2 className="text-[24px] font-bold leading-[1.45] tracking-[-1.7px] text-[#042330] xl:text-[40px] xl:leading-[61.6px]">
          Samsung Error Codes and<br />Troubleshooting
        </h2>

        <p className="text-[16px] font-normal leading-[31.9px] text-[#3F4E5C] xl:text-[22px] xl:text-[#2A3B4B]">
          Samsung appliances display error codes when something goes wrong. Understanding the code helps you act before the problem worsens.
        </p>

        <div className="flex flex-col gap-[17px]">
          {errorCodeGuides.map((guide) => (
            <a
              key={guide.title}
              href={guide.href}
              className="group flex min-h-[130.78px] items-center justify-between gap-3 rounded-[18px] border border-[#D7E3F1] bg-white px-[21px] py-[21px] shadow-[0_14px_17px_rgba(20,50,90,0.06)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#9DC4F6] hover:shadow-[0_18px_25px_rgba(20,50,90,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0B63E5] motion-reduce:transform-none xl:px-[25px]"
            >
              <span className="min-w-0">
                <strong className="block text-[16px] font-bold leading-[1.35] text-[#042330] xl:text-[24px] xl:leading-[28.8px]">{guide.title}</strong>
                <span className="mt-2 block break-all text-[15px] font-normal leading-[25.2px] text-[#0066CC] xl:text-[18px]">{guide.path}</span>
              </span>
              <span aria-hidden="true" className="flex size-[47.32px] shrink-0 items-center justify-center rounded-full bg-[#0B63E5] text-white shadow-[0_8px_16px_rgba(11,99,229,0.2)] transition-[transform,background-color] duration-300 group-hover:translate-x-1 group-hover:bg-[#084FAF] motion-reduce:transform-none xl:size-[54px]">
                <ArrowIcon className="size-[24.54px] xl:size-7" />
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="flex min-h-[169.97px] flex-col items-center justify-between gap-8 rounded-[18px] border border-[#BCD9FF] bg-[linear-gradient(112deg,#EEF7FF_0%,#FFFFFF_100%)] px-[25px] pb-[23px] pt-[33px] text-center xl:flex-row xl:gap-5 xl:bg-[linear-gradient(133deg,#EEF7FF_0%,#FFFFFF_100%)] xl:text-left">
        <div>
          <h3 className="text-[24px] font-bold leading-[28.8px] text-[#042330]">Can’t find your code?</h3>
          <p className="mt-2 text-[18px] font-normal leading-[25.2px] text-[#3F4E5C] xl:text-[#2A3B4B]">Contact our team for fast, expert help.</p>
        </div>
        <a
          href="tel:+14696383215"
          className="group inline-flex h-[54px] w-full shrink-0 items-center justify-center gap-2 rounded-[90px] bg-[linear-gradient(146deg,#0D6EFD_0%,#064DBB_100%)] px-5 text-[17px] font-bold text-white shadow-[0_12px_13px_rgba(11,99,229,0.22)] transition-[transform,box-shadow,filter] duration-300 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_16px_20px_rgba(11,99,229,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B63E5] motion-reduce:transform-none xl:w-[238px]"
        >
          Contact Us
          <ArrowIcon className="size-5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
        </a>
      </div>
    </article>
  );
}

export function SamsungProblemsAndCodes() {
  return (
    <section className="bg-white px-5 py-[50px] xl:bg-[#F4F6F8] xl:px-20 xl:py-20">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-6 xl:grid-cols-2">
        <CommonProblemsCard />
        <ErrorCodesCard />
      </div>
    </section>
  );
}
