const fixSteps = [
  {
    number: '1',
    title: 'Reset the Refrigerator',
    description: 'Unplug the unit for 5–10 minutes and restart.',
  },
  {
    number: '2',
    title: 'Check for Ice Blockage',
    description: 'If airflow is blocked by ice, defrosting may temporarily restore function.',
  },
  {
    number: '3',
    title: 'Listen for the Fan',
    description: 'If the fan is not running, it may require replacement.',
  },
] as const;

export function SamsungError22EFix() {
  return (
    <section className="bg-white px-5 py-[50px] xl:h-[540px] xl:px-20 xl:py-[70px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8">
        <h2 className="w-full text-center text-[32px] font-bold leading-[44.8px] text-[#090A0A] xl:w-[899px] xl:text-[42px] xl:leading-[58.8px]">
          How to Fix Samsung Error Code 22E
        </h2>

        <p className="w-full max-w-[1048px] text-center text-[16px] font-medium leading-6 tracking-[-0.3125px] text-[#1A2D40]">
          List observable symptoms the user may notice: List observable symptoms the user may notice:List observable symptoms the user may notice:List observable symptoms the user may notice:List observable symptoms the user may notice:
        </p>

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          {fixSteps.map((step) => (
            <article
              key={step.number}
              className="flex min-h-[177.445px] items-center gap-[25px] rounded-3xl border border-[#D8E7F7] bg-white/[0.92] px-[33px] py-[37px] shadow-[0_18px_45px_rgba(19,45,85,0.06)]"
            >
              <span className="flex size-[46px] shrink-0 items-center justify-center rounded-[23px] bg-[linear-gradient(127.95deg,#3C83F6_0%,rgba(31,113,244,0.8)_50%,rgba(31,113,244,0)_100%)] text-center text-[17px] font-black leading-none text-white shadow-[0_10px_22px_rgba(0,102,204,0.25)]">
                {step.number}
              </span>

              <div className={`flex min-w-0 flex-1 flex-col items-start ${step.number === '2' ? 'gap-[7.445px]' : 'gap-3'}`}>
                <h3 className="w-full text-[20px] font-extrabold leading-normal text-[#042330]">{step.title}</h3>
                <p className="w-full text-[17px] font-medium leading-6 text-[#3F4E5C]">{step.description}</p>
              </div>
            </article>
          ))}
        </div>

        <a
          href="#schedule"
          className="group inline-flex items-center justify-center text-center text-[14px] font-medium leading-5 tracking-[-0.1504px] text-[#F47690] transition-colors hover:text-[#E95775] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC]"
        >
          <span>If the error returns, professional repair is recommended.</span>
          <span className="ml-1 text-[#155DFC] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">→</span>
        </a>
      </div>
    </section>
  );
}
