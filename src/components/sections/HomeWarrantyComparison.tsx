const comparisonItems = [
  'No service fees',
  'No deductibles',
  'Local technicians',
  'Same-day service',
  'Direct scheduling',
  'No middleman',
] as const;

const advantages = [
  { icon: '/assets/figma-compare-local.svg', title: 'Local Technicians', description: 'Know your neighborhood' },
  { icon: '/assets/figma-compare-sameday.svg', title: 'Same-Day Service', description: 'No waiting weeks' },
  { icon: '/assets/figma-compare-contact.svg', title: 'Direct Contact', description: 'No call centers' },
  { icon: '/assets/figma-compare-deductible.svg', title: 'No Deductibles', description: 'True $0 repairs' },
] as const;

export function HomeWarrantyComparison() {
  return (
    <section className="bg-[#F0F6FF] px-5 py-[50px] font-['Montserrat'] xl:h-[938px] xl:px-[120px] xl:py-16" aria-labelledby="home-warranty-comparison-title">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center">
        <h2 id="home-warranty-comparison-title" className="w-full text-center text-[32px] font-bold leading-[1.6] text-[#090A0A] xl:h-[68px] xl:text-[42px] xl:leading-[1.4]">
          How We Compare to <span className="text-[#00478F]">Home Warranties</span>
        </h2>
        <p className="mt-[27px] hidden w-full text-center text-[16px] font-semibold leading-[1.6] text-[#003366] xl:block">
          One low monthly fee covers repairs for all your major appliances. No deductibles. No surprise bills. Same-day service from your local Plano technician.
        </p>

        <div className="mt-[30px] flex w-full flex-col gap-8 xl:mt-[27px] xl:w-[1094px]">
          <div className="flex flex-col gap-8 xl:flex-row">
            <article className="group flex h-[428px] w-full cursor-pointer flex-col gap-6 rounded-[16px] border-2 border-[#2A7AE2] bg-white px-[34px] pb-0 pt-[34px] shadow-[0_0_30px_rgba(42,31,188,0.40)] transition-transform duration-300 hover:-translate-y-1 xl:flex-1">
              <header className="flex flex-col items-center gap-4">
                <img src="/assets/figma-compare-alas-shield.png" alt="" className="size-16 object-contain transition-transform duration-300 group-hover:scale-105" aria-hidden="true" />
                <h3 className="text-center text-[24px] font-bold leading-[1.6] text-[#090A0A]">ALAS Plans</h3>
              </header>
              <ul className="flex h-[224px] flex-col gap-4">
                {comparisonItems.map(item => (
                  <li key={item} className="flex h-6 items-center gap-3 text-[16px] font-semibold leading-[1.6] text-[#090A0A]">
                    <img src="/assets/figma-compare-check.svg" alt="" className="size-6 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="group flex h-[428px] w-full cursor-pointer flex-col gap-6 rounded-[16px] border-2 border-[#E5E7EB] bg-white px-[34px] pb-0 pt-[34px] opacity-75 shadow-[0_20px_25px_rgba(0,0,0,0.10)] transition-[transform,opacity] duration-300 hover:-translate-y-1 hover:opacity-90 xl:flex-1">
              <header className="flex flex-col items-center gap-4">
                <img src="/assets/figma-compare-warranty-home.svg" alt="" className="size-16 transition-transform duration-300 group-hover:scale-105" aria-hidden="true" />
                <h3 className="text-center text-[24px] font-bold leading-[1.6] text-[#454648]">Home Warranty</h3>
              </header>
              <ul className="flex h-[224px] flex-col gap-4">
                {comparisonItems.map(item => (
                  <li key={item} className="flex h-6 items-center gap-3 text-[16px] font-semibold leading-[1.6] text-[#454648]">
                    <img src="/assets/figma-compare-cross.svg" alt="" className="size-6 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[24.5px]">
            {advantages.map(item => (
              <article key={item.title} className="group flex h-[176px] cursor-pointer flex-col items-center justify-center gap-3 rounded-[12px] bg-[#D5E1FA] px-5 py-6 transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-1 hover:bg-[#C9D9F7] hover:shadow-[0_14px_30px_rgba(39,122,205,0.18)]">
                <span className="flex size-14 items-center justify-center rounded-full bg-[#D5E1FA]">
                  <img src={item.icon} alt="" className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                </span>
                <h3 className="text-center text-[18px] font-bold leading-[1.6] text-[#090A0A]">{item.title}</h3>
                <p className="text-center text-[14px] font-normal leading-5 text-[#454648]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
