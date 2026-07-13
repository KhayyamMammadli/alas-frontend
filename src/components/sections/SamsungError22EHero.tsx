export function SamsungError22EHero() {
  return (
    <section id="schedule" className="bg-[#0C2D53] px-5 py-12 xl:h-[725px] xl:px-20 xl:pb-[67px] xl:pt-[55px]">
      <div className="mx-auto flex w-full max-w-[913px] flex-col items-center gap-8">
        <h1 className="w-full text-center text-[32px] font-bold leading-[44.8px] text-white sm:text-[40px] sm:leading-[56px] xl:text-[56px] xl:leading-[78.4px]">
          Samsung Refrigerator Error Code 22E — What It Means and How to Fix It
        </h1>

        <p className="w-full text-center text-[16px] font-normal leading-[25.6px] text-[#EFF6FF] xl:text-[20px] xl:leading-7 xl:tracking-[-0.4492px]">
          Seeing error code 22E on your Samsung refrigerator? Here&apos;s what it means, what you can check, and when to call for
          professional repair.
        </p>

        <form
          onSubmit={(event) => event.preventDefault()}
          className="flex w-full max-w-[850px] flex-col items-center gap-[5px] rounded-[14px] bg-white px-5 pb-5 pt-6 shadow-[0_24px_32px_rgba(0,0,0,0.25)] xl:h-[249px] xl:px-[30px] xl:pb-4 xl:pt-[29px]"
        >
          <div className="flex w-full flex-col gap-3 pt-[15px] sm:flex-row sm:gap-2">
            <label className="sr-only" htmlFor="samsung-22e-zip">ZIP code</label>
            <input
              id="samsung-22e-zip"
              name="zip"
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder="ZIP code (e.g. 75024)"
              className="h-[43px] min-w-0 flex-1 rounded-lg border border-[#D1D5DB] bg-white px-[15px] py-3 text-[14px] font-normal leading-normal text-[#090A0A] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#747476] focus:border-[#0066CC] focus:shadow-[0_0_0_3px_rgba(0,102,204,0.14)]"
            />
            <button
              type="submit"
              className="flex h-[43px] shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-[#0066CC] px-[18px] text-center text-[14px] font-bold leading-none text-white transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#0059B3] hover:shadow-[0_8px_18px_rgba(0,102,204,0.24)] active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none"
            >
              Schedule Refrigerator Repair
            </button>
          </div>

          <p className="flex h-[39.79px] items-center justify-center pb-[9.79px] pt-[10px] text-center text-[12px] font-normal leading-[19.8px] text-[#6B7280]">
            — or call us directly —
          </p>

          <a
            href="tel:+14695550100"
            className="group flex h-[70px] w-[268px] items-center gap-[10px] rounded-lg bg-[#F0F6FF] px-4 py-3 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,51,102,0.14)] active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#003366]">
              <img src="/assets/figma-samsung-22e-phone.svg" alt="" className="size-[18px]" />
            </span>
            <span className="flex flex-col items-start">
              <span className="text-[11px] font-normal leading-[18.15px] text-[#3F4E5C]">Call or text anytime</span>
              <strong className="text-[17px] font-bold leading-7 text-[#003366]">(469) 555-0100</strong>
            </span>
          </a>

          <p className="text-center text-[11px] font-normal leading-[19.8px] text-[#3F4E5C] sm:text-[12px]">
            🔒 No credit card required&nbsp; · &nbsp;Free diagnostic estimate
          </p>
        </form>
      </div>
    </section>
  );
}
