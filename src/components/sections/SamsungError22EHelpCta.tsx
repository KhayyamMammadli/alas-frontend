const helpBenefits = ['Same-day service available', 'Experienced with Samsung systems', 'Transparent pricing'] as const;

export function SamsungError22EHelpCta() {
  return (
    <section className="relative overflow-hidden bg-[#1A2233] px-5 pb-0 pt-[50px] xl:h-[575px] xl:px-0 xl:py-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[71px] top-0 hidden size-96 bg-[radial-gradient(circle,rgba(0,102,204,0.12)_0%,rgba(0,0,0,0)_70%)] xl:block"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-start xl:block xl:h-full">
        <div className="flex w-full max-w-[637px] flex-col items-start xl:absolute xl:left-0 xl:top-20">
          <p className="text-[11px] font-extrabold uppercase leading-[16.5px] tracking-[1.5px] text-[#93C5FD]">Expansion</p>
          <h2 className="mt-[12px] text-[32px] font-black leading-[42px] tracking-[-1px] text-white xl:mt-[11.5px] xl:whitespace-nowrap xl:text-[40px] xl:leading-[60px]">
            Need Help Fixing Error Code 22E?
          </h2>
          <p className="mt-[8px] w-full text-[16px] font-normal leading-[27.2px] text-white/65 xl:mt-[9.5px]">
            Brief trust-building statement. Include:
          </p>
        </div>

        <ul className="mt-10 flex w-full max-w-[478px] flex-col items-start gap-6 xl:absolute xl:left-0 xl:top-[241.5px] xl:mt-0">
          {helpBenefits.map((benefit) => (
            <li key={benefit} className="relative min-h-[37.75px] w-full pl-[30px] text-[18px] font-medium leading-[31px] text-[#CFD5DC] xl:text-[21px] xl:leading-[36.75px]">
              <span className="absolute left-0 top-[14px] size-[9px] rounded-[4.5px] bg-[#FF9F0A] xl:top-[19px]" aria-hidden="true" />
              {benefit}
            </li>
          ))}
        </ul>

        <a
          href="#schedule"
          className="mt-8 flex h-[53px] w-[249px] items-center justify-center rounded-[90px] bg-white px-10 py-[15px] text-center text-[15px] font-bold leading-[22.5px] text-[#0066CC] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#F0F6FF] hover:shadow-[0_12px_28px_rgba(0,0,0,0.24)] active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none xl:absolute xl:left-0 xl:top-[453.5px] xl:mt-0"
        >
          Schedule Repair Now
        </a>

        <div className="relative mt-10 h-[360px] w-full overflow-hidden xl:absolute xl:left-[640px] xl:top-[31.5px] xl:mt-0 xl:h-[543.062px] xl:w-[658.418px]">
          <img
            src="/assets/figma-22e-help-appliances.png"
            alt="Samsung refrigerator, washer and dryer"
            className="absolute left-1/2 top-0 h-auto w-[675px] max-w-none -translate-x-1/2 xl:left-[-698px] xl:top-[-223px] xl:h-[766px] xl:w-[1435px] xl:translate-x-0"
          />
        </div>
      </div>
    </section>
  );
}
