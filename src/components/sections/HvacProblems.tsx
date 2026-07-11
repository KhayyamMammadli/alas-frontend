const problems = [
  'Refrigerator not cooling',
  'Freezer icing up',
  'Water leaking',
  'Loud or unusual noises',
  'Ice maker not working',
  'Compressor not running',
  'Door seal issues',
  'Temperature fluctuations',
];

export function HvacProblems() {
  return (
    <section className="bg-white px-5 py-[50px] xl:h-[551px] xl:px-0 xl:py-0">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 xl:pt-[70px]">
        <h2 className="w-full text-center text-[32px] font-bold leading-[1.6] text-[#090A0A] xl:w-[899px] xl:text-[42px] xl:leading-[1.4]">
          Is Your HVAC Not Cooling or Acting Up?
        </h2>

        <div className="flex w-full flex-col items-start gap-8 xl:h-[320px] xl:flex-row xl:gap-[49px]">
          <div className="flex w-full flex-col items-start gap-5 xl:w-[632px]">
            <p className="w-full text-[18px] font-medium leading-[25.5px] text-[#494D52] xl:w-[609px] xl:text-[20px]">
              Refrigerator problems often worsen fast — and waiting can mean food loss or a more expensive repair. If you're seeing any of the following, call a technician today.
            </p>

            <div className="flex w-full flex-wrap items-start gap-2">
              {problems.map((problem) => (
                <span key={problem} className="flex h-[37.44px] items-center rounded-full border border-[#D4DCE8] bg-white px-[14px] text-[13px] font-semibold leading-[21.45px] text-[#374255]">
                  <span className="mr-[7px] size-[6px] rounded-[3px] bg-[#0066CC]" />
                  {problem}
                </span>
              ))}
            </div>

            <p className="flex items-start gap-[7px] text-[13px] font-normal leading-[21.45px] text-[#6B7A90]">
              <span>⚡</span>
              Fast diagnosis can prevent food loss and turn a costly repair into a simple fix.
            </p>
          </div>

          <aside className="flex h-[320px] w-full flex-col items-center gap-[10px] rounded-[14px] border border-[#C5DCFF] bg-[#F0F6FF] p-[25px] xl:w-[514px]">
            <h3 className="w-full text-center text-[16px] font-bold leading-[19.2px] text-[#061A33]">Don't Wait — Act Fast</h3>
            <p className="w-full text-center text-[14px] font-normal leading-[23.8px] text-[#6B7A90]">
              Fast diagnosis can prevent food loss and turn a costly repair into a simple fix. Most Plano appointments are available the same day you call.
            </p>

            <div className="flex w-full flex-col items-center gap-[10px] xl:w-[329px]">
              <a href="#schedule" className="flex h-[52px] w-full items-center justify-center rounded-[120px] bg-[#277ACD] px-7 py-4 text-[14px] font-semibold leading-5 text-[#F5FAFF] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                Schedule Same-Day Repair
              </a>
              <a href="tel:+14695550100" className="flex h-[52px] w-full items-center justify-center gap-3 rounded-[120px] border border-[#2A7AE2] px-7 py-4 text-[14px] font-semibold leading-5 text-[#2A7AE2] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                <img src="/assets/figma-hvac-call.svg" alt="" className="size-6" />
                Call (469) 555-0100
              </a>
            </div>

            <div className="mt-auto w-full border-t border-[#C5DCFF] pt-[17px] text-center text-[12px] font-normal leading-[19.8px] text-[#6B7A90]">
              🔒 Upfront pricing · No surprise fees · 90-day warranty
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
