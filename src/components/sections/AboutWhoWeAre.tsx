const specialties = [
  'Refrigerator & Freezer Repair',
  'Washer & Dryer Repair',
  'Commercial Refrigeration',
  'HVAC Services',
  'Preventive Maintenance Plans',
];

const companyStatements = [
  { label: 'OUR MISSION', height: 'xl:h-[188px]' },
  { label: 'OUR VISSION', height: 'xl:h-[180px]' },
];

export function AboutWhoWeAre() {
  return (
    <section className="bg-[#F7F9FC] px-5 py-14 xl:h-[756px] xl:px-20 xl:py-[88px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 xl:h-[580px] xl:flex-row xl:justify-between xl:gap-0">
        <div className="flex w-full flex-col items-start xl:w-[552px]">
          <span className="text-[11px] font-extrabold uppercase leading-[16.5px] tracking-[1.5px] text-[#0066CC]">Our Company</span>
          <h2 className="mt-[11.61px] text-[38px] font-bold leading-[1.4] text-[#042330] xl:text-[42px]">
            Who We <span className="text-[#0066CC]">Are</span>
          </h2>
          <div className="mt-5 text-[16px] font-normal leading-[27.2px] text-[#3F4E5C]">
            <p>ALAS Appliance Services is a residential and commercial appliance repair company serving homeowners, restaurants, facilities, and businesses across the Dallas–Fort Worth area</p>
            <p>We specialize in:</p>
          </div>

          <ul className="mt-[31.64px] flex w-full flex-col gap-[11.5px]">
            {specialties.map((specialty) => (
              <li key={specialty} className="flex h-[57px] items-center gap-3 rounded-xl border border-[#E8ECF2] bg-white px-[21px] py-[17px]">
                <span className="size-2 shrink-0 rounded bg-[#0066CC]" />
                <span className="text-[15px] font-semibold leading-[22.5px] text-[#042330]">{specialty}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex w-full flex-col items-start gap-[15.844px] xl:h-[580px] xl:w-[552px]">
          {companyStatements.map((statement) => (
            <article key={statement.label} className={`flex min-h-[180px] w-full flex-col items-start rounded-[20px] bg-[linear-gradient(161.5deg,#0066CC_0%,#0052A3_100%)] px-7 pt-10 sm:px-10 ${statement.height}`}>
              <span className="text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.2px] text-white/60">{statement.label}</span>
              <p className="mt-[15.844px] max-w-[472px] text-[18px] font-semibold leading-[28.8px] text-white">
                Deliver reliable service, build long-term relationships, and help customers avoid costly breakdowns before they happen.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
