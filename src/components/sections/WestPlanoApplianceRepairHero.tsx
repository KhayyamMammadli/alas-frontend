const assurances = ['Same-Day Service', '90-Day Warranty', 'Licensed & Insured'];

function CheckCircle() {
  return (
    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#E5F8EC]" aria-hidden="true">
      <svg viewBox="0 0 20 20" className="size-5" fill="none">
        <circle cx="10" cy="10" r="9" stroke="#16A34A" strokeWidth="2" />
        <path d="m6.2 10.1 2.35 2.35 5.25-5.25" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function WestPlanoApplianceRepairHero() {
  return (
    <section className="bg-white font-['Montserrat']" aria-labelledby="west-plano-appliance-repair-title">
      <div className="flex h-[39px] items-center border-b border-[#E5E7EB] bg-[#F4F6F8] px-5 xl:h-[53px] xl:px-20">
        <nav aria-label="Breadcrumb" className="mx-auto flex w-full max-w-[1280px] items-center gap-2 text-[14px] leading-5">
          <a href="/" className="font-normal text-[#747476] hover:text-[#0066CC]">Home</a>
          <span className="text-[#6B7280]">/</span>
          <a href="#locations" className="font-normal text-[#747476] hover:text-[#0066CC]">Locations</a>
          <span className="text-[#6B7280]">/</span>
          <span className="font-semibold text-[#042330]">Plano, TX</span>
        </nav>
      </div>

      <div className="relative h-[998px] overflow-hidden bg-white xl:h-[679px]">
        <img
          src="/assets/figma-west-plano-hero-desktop.png"
          alt=""
          className="absolute inset-0 hidden size-full object-cover xl:block"
        />

        <div className="absolute bottom-0 left-[15px] h-[362.435px] w-[calc(100%-25px)] overflow-hidden xl:hidden">
          <img
            src="/assets/figma-west-plano-appliances-mobile.png"
            alt="Refrigerator, washer, microwave, and oven"
            className="absolute left-[-173.76%] top-[-27.48%] h-[136.17%] w-[273.77%] max-w-none object-contain"
          />
        </div>

        <div className="absolute left-5 top-[41px] flex w-[calc(100%-34px)] flex-col items-start xl:left-[calc((100%-1280px)/2)] xl:top-[calc(50%-73px)] xl:w-auto xl:-translate-y-1/2">
          <div className="flex h-[48px] w-full items-center gap-[14px] rounded-full bg-[#EAF4FF] py-3 pl-[14px] pr-7 xl:h-[72px] xl:w-auto">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-xl bg-white text-[9px] shadow-[0_4px_6px_rgba(7,91,232,0.15)] xl:size-12 xl:rounded-3xl xl:text-[18px] xl:shadow-[0_8px_12px_rgba(7,91,232,0.15)]" aria-hidden="true">📍</span>
            <span className="whitespace-nowrap text-[13px] font-bold uppercase leading-normal tracking-[1px] text-[#0066CC] xl:text-[14px]">Your Neighborhood, Our Priority</span>
          </div>

          <div className="mt-8 flex w-full flex-col items-start gap-8 xl:w-auto">
            <h1 id="west-plano-appliance-repair-title" className="w-full text-[32px] font-bold leading-[1.6] text-[#042330] xl:w-[830px] xl:text-[56px] xl:leading-[1.4]">
              Appliance Repair in <span className="text-[#0066CC]">West Plano, TX</span>
            </h1>

            <p className="w-full text-[14px] font-semibold leading-5 text-[#042330] xl:w-[623px]">
              Fast, reliable appliance repair for homes and businesses in West Plano. Same-day service available with experienced local technicians.
            </p>

            <ul className="flex flex-col items-start gap-4 xl:flex-row xl:items-center">
              {assurances.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[14px] font-semibold leading-5 text-[#042330]">
                  <CheckCircle />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex w-full flex-col gap-6 xl:flex-row xl:items-center">
            <a href="#schedule" className="flex h-[60px] w-full items-center justify-center gap-3 rounded-[120px] bg-[#277ACD] px-7 py-4 text-[18px] font-semibold leading-7 text-[#F7FAFC] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-colors hover:bg-[#0066CC] xl:w-auto">
              <span>Schedule Service</span>
              <span className="flex size-6 shrink-0 items-center justify-center" aria-hidden="true">
                <img src="/assets/figma-west-plano-chevron.svg" alt="" className="h-[14px] w-[7px]" />
              </span>
            </a>
            <a href="tel:+18005551234" className="flex h-[60px] w-full items-center justify-center rounded-[120px] border border-[#277ACD] bg-[#CDE6FF] px-7 py-4 text-[18px] font-semibold leading-7 text-[#0066CC] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-colors hover:bg-[#B9DAFC] xl:w-auto">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
