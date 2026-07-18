const checks = [
  {
    title: 'Check the Power',
    description: 'Verify the appliance is plugged in securely. Check your circuit breaker and reset if tripped. Some appliances have a dedicated outlet',
    desktopOrder: 'xl:order-1',
  },
  {
    title: 'Stop Active Leaks',
    description: 'For washing machines or dishwashers, turn off the water supply valve (usually behind or under the unit). Place towels to prevent water damage.',
    desktopOrder: 'xl:order-3',
  },
  {
    title: 'Clear Drain Filters',
    description: 'For washers and dishwashers, a clogged filter can cause drainage issues. Check your manual for filter location and cleaning instructions.',
    desktopOrder: 'xl:order-4',
  },
  {
    title: 'Look for Error Codes',
    description: 'Many modern appliances display error codes on their control panel. Write down any codes you see — this helps our technician diagnose faster.',
    desktopOrder: 'xl:order-2',
  },
] as const;

export function EmergencyQuickChecks() {
  return (
    <section className="bg-white px-5 py-[50px] xl:h-[621px] xl:bg-[#F4F6F8] xl:px-20 xl:pb-0 xl:pt-[70px]" aria-labelledby="emergency-quick-checks-title">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-[30px] xl:gap-3">
        <h2 id="emergency-quick-checks-title" className="w-full text-center text-[32px] font-bold leading-[1.6] text-[#000A14] xl:text-[42px] xl:leading-[1.4]">
          Check These First <span className="block text-[#00478F] xl:inline">(Takes 5 Minutes)</span>
        </h2>

        <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-x-4 xl:gap-y-5">
          {checks.map((check) => (
            <article key={check.title} className={`flex w-full flex-col items-start gap-2 rounded-lg border-l-4 border-[#059669] bg-white py-6 pl-7 pr-6 shadow-[0_4px_3px_rgba(0,0,0,0.1),0_2px_2px_rgba(0,0,0,0.1)] xl:h-[136px] xl:py-0 xl:pt-6 ${check.desktopOrder}`}>
              <h3 className="flex h-7 items-center gap-2 text-[20px] font-semibold leading-[1.6] text-[#090A0A]">
                <img src="/assets/figma-emergency-check-icon.svg" alt="" className="size-5 shrink-0" />
                {check.title}
              </h3>
              <p className={`w-full text-[16px] font-normal text-[#454648] ${check.title === 'Look for Error Codes' ? "font-['Nunito'] leading-[26px]" : 'leading-[1.6]'}`}>
                {check.description}
              </p>
            </article>
          ))}

          <aside className="order-5 flex w-full flex-col items-start gap-8 rounded-r-lg border-l-4 border-[#FF6B35] bg-[#FFF7ED] py-4 pl-7 pr-6 xl:col-span-2 xl:flex-row xl:items-center xl:justify-between xl:gap-4">
            <p className="w-full text-[16px] font-semibold leading-6 text-[#090A0A] xl:w-[812px]">
              If none of these resolve the issue — you need a licensed technician. Book same-day service NOW.
            </p>
            <a href="#schedule" className="flex h-[60px] w-full shrink-0 items-center justify-center rounded-[120px] bg-[#DC2626] px-7 text-[18px] font-semibold leading-7 text-[#F5FAFF] shadow-[0_1px_1px_rgba(16,24,40,0.05)] transition-colors hover:bg-[#BE1E1E] xl:w-auto">
              Get Same-Day Service
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
