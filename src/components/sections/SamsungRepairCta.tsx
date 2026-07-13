const benefits = ['Same-Day Service', '90-Day Warranty', 'Licensed & Insured', 'Upfront Pricing'] as const;

export function SamsungRepairCta() {
  return (
    <section className="bg-[#F4F6F8] xl:h-[505px] xl:px-20 xl:py-[45px]">
      <div className="mx-auto hidden h-[415px] w-full max-w-[1280px] flex-col items-center justify-center rounded-[49px] bg-[linear-gradient(157.43deg,#002756_0%,#0E55B1_50%,rgba(56,132,232,0.71)_100%)] px-[105px] py-16 xl:flex">
        <p className="text-center text-[11px] font-bold uppercase leading-[18.15px] tracking-[2px] text-white">Ready When You Are</p>

        <div className="mt-[10px] flex w-[1112px] flex-col items-center gap-[47px]">
          <h2 className="h-12 whitespace-nowrap text-center text-[40px] font-extrabold leading-[48px] text-white">
            Need Help Fixing Your Samsung Refrigerator?
          </h2>

          <ul className="flex h-8 items-start gap-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex h-8 items-center gap-4 text-[14px] font-semibold leading-5 text-white/90">
                <img src="/assets/figma-samsung-cta-check.png" alt="" className="size-8 shrink-0" />
                <span className="whitespace-nowrap">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <a href="#schedule" className="group flex h-[60px] w-[251px] shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-[120px] bg-[#F5FAFF] px-7 text-[18px] font-semibold leading-7 text-[#003366] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-[transform,box-shadow,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_28px_rgba(0,25,64,0.24)] active:translate-y-0 active:scale-[0.97] motion-reduce:transform-none motion-reduce:transition-none">
              <span>Schedule Service</span>
              <img src="/assets/figma-samsung-error-chevron.svg" alt="" className="size-6 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transform-none" />
            </a>
            <a href="tel:+14696383215" className="flex h-[60px] w-[138px] shrink-0 items-center justify-center whitespace-nowrap rounded-[120px] border border-[#C5E1FD] px-7 text-[18px] font-semibold leading-7 text-[#F7FAFC] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-white hover:bg-white/10 hover:shadow-[0_12px_28px_rgba(0,25,64,0.22)] active:translate-y-0 active:scale-[0.97] motion-reduce:transform-none motion-reduce:transition-none">
              <span className="whitespace-nowrap">Call Now</span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex h-[714px] w-full flex-col items-center justify-center bg-[linear-gradient(113.23deg,#002756_0%,#0E55B1_50%,rgba(56,132,232,0.71)_100%)] px-6 py-16 xl:hidden">
        <div className="flex w-full max-w-[345px] flex-col items-center gap-[47px]">
          <div className="flex w-full flex-col items-start gap-7">
            <p className="text-center text-[11px] font-bold uppercase leading-[18.15px] tracking-[2px] text-white">Ready When You Are</p>
            <h2 className="w-full text-[40px] font-extrabold leading-[48px] text-white">Need Samsung Appliance Repair?</h2>
            <ul className="flex w-full flex-col items-start gap-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex h-8 items-center gap-3 text-[14px] font-semibold leading-5 text-white/90">
                  <img src="/assets/figma-samsung-cta-check.png" alt="" className="size-8 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex w-full max-w-[339px] flex-col items-start gap-6">
            <a href="#schedule" className="group flex h-[60px] w-full items-center justify-center gap-3 whitespace-nowrap rounded-[120px] bg-[#F5FAFF] px-7 text-[18px] font-semibold leading-7 text-[#003366] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-[transform,box-shadow,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_28px_rgba(0,25,64,0.24)] active:translate-y-0 active:scale-[0.97] motion-reduce:transform-none motion-reduce:transition-none">
              <span>Schedule Service</span>
              <img src="/assets/figma-samsung-error-chevron.svg" alt="" className="size-6 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transform-none" />
            </a>
            <a href="tel:+14696383215" className="flex h-[60px] w-full items-center justify-center whitespace-nowrap rounded-[120px] border border-[#C5E1FD] px-7 text-[18px] font-semibold leading-7 text-[#F7FAFC] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-white hover:bg-white/10 hover:shadow-[0_12px_28px_rgba(0,25,64,0.22)] active:translate-y-0 active:scale-[0.97] motion-reduce:transform-none motion-reduce:transition-none">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
