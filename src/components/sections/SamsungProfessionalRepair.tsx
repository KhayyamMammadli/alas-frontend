const desktopReasons = [
  'The error code keeps returning',
  'The refrigerator is not cooling',
  'Unusual noises are present',
  'The issue affects food storage',
] as const;

const mobileReasons = [
  'Dirty condenser coils',
  'Stop Active Leaks',
  'Clear Drain Filters',
  'Clear Drain Filters',
] as const;

const desktopDescription = 'Call us or book online. We offer same-day appointments and flexible time windows to fit your schedule.';
const mobileDescription = "Condenser coils dissipate heat from the refrigerant. When coated with dust and debris, they can't cool efficiently";

export function SamsungProfessionalRepair() {
  return (
    <section className="bg-white">
      <div className="mx-auto hidden h-[581px] w-full max-w-[1440px] px-20 py-[70px] xl:block">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8">
          <h2 className="w-full text-center text-[42px] font-bold leading-[1.4] text-[#042330]">
            When You Need Professional Refrigerator Repair
          </h2>
          <p className="w-[854px] text-center text-[16px] font-normal leading-[1.6] text-[#454648]">
            {desktopDescription}
          </p>

          <div className="grid w-full grid-cols-2 gap-x-4 gap-y-5">
            {desktopReasons.map((title) => (
              <article key={title} className="flex h-[136px] flex-col items-start gap-2 rounded-lg border-l-4 border-[#059669] bg-white py-6 pl-7 pr-6 shadow-[0_4px_3px_rgba(0,0,0,0.1),0_2px_2px_rgba(0,0,0,0.1)]">
                <div className="flex h-7 w-full items-center gap-2">
                  <img src="/assets/figma-professional-repair-check.svg" alt="" className="size-5 shrink-0" />
                  <h3 className="whitespace-nowrap text-[20px] font-semibold leading-[1.6] text-[#090A0A]">{title}</h3>
                </div>
                <p className="max-w-[494px] text-[16px] font-normal leading-[1.6] text-[#454648]">{desktopDescription}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-5 px-5 pb-16 pt-[50px] xl:hidden">
        <h2 className="w-full max-w-[353px] text-[32px] font-bold leading-[1.6] text-[#090A0A]">
          When You Need Professional Refrigerator Repair
        </h2>
        <p className="w-full max-w-[353px] text-[16px] font-normal leading-[31.9px] text-[#3F4E5C]">
          Samsung appliances display error codes when something goes wrong. Understanding the code helps you act before the problem worsens.
        </p>

        <div className="flex w-full max-w-[353px] flex-col items-start gap-5">
          {mobileReasons.map((title, index) => (
            <article key={`${title}-${index}`} className="flex h-[188px] w-full flex-col items-start justify-center gap-2 rounded-lg border-l-4 border-[#059669] bg-white py-6 pl-7 pr-6 shadow-[0_4px_3px_rgba(0,0,0,0.1),0_2px_2px_rgba(0,0,0,0.1)]">
              <h3 className="h-7 whitespace-nowrap text-[20px] font-semibold leading-[1.6] text-[#090A0A]">{title}</h3>
              <p className="text-[16px] font-normal leading-[1.6] text-[#454648]">{mobileDescription}</p>
            </article>
          ))}

          <p className="w-full text-[16px] font-semibold leading-[1.6] text-[#090A0A]">
            Most cooling failures trace back to one of these six causes. For a full technical overview of refrigerator components and their roles, refer to the{' '}
            <a href="https://www.energy.gov/energysaver/appliances-and-electronics" className="text-[#277ACD] underline" target="_blank" rel="noreferrer">
              U.S. Department of Energy&apos;s appliance guidance.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
