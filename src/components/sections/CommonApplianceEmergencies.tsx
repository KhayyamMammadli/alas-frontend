const emergencies = [
  {
    title: 'Refrigerator Failures',
    items: ['Not cooling at all', 'Temperature above 45°F', 'Freezer not freezing', 'Active water leak', 'Strange burning smell'],
    desktopOrder: 'xl:order-1',
  },
  {
    title: 'Dishwasher Problems',
    items: ['Water leaking onto floor', "Won't stop filling", "Water won't drain (flooding risk)", 'Electrical burning smell', "Door won't close/lock"],
    desktopOrder: 'xl:order-3',
  },
  {
    title: 'Oven/Range Emergencies',
    items: ['Gas smell or suspected leak', "Oven won't turn off", 'Electrical sparking', "Door won't close properly", 'Control panel malfunction'],
    desktopOrder: 'xl:order-4',
  },
  {
    title: 'Washer/Dryer Issues',
    items: ['Washer actively leaking', "Water won't stop filling", 'Dryer making loud grinding noise', 'Burning smell from dryer', 'Gas smell near dryer'],
    desktopOrder: 'xl:order-2',
  },
] as const;

export function CommonApplianceEmergencies() {
  return (
    <section className="bg-white px-5 py-[50px] xl:h-[903px] xl:px-20 xl:pb-[70px] xl:pt-[70px]" aria-labelledby="common-appliance-emergencies-title">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[30px] xl:gap-[67px]">
        <div className="flex w-full max-w-[849px] flex-col items-center gap-3 text-center">
          <h2 id="common-appliance-emergencies-title" className="w-full text-[32px] font-bold leading-[1.6] text-[#090A0A] xl:text-[42px] xl:leading-[1.4]">
            Common Appliance <span className="block text-[#00478F] xl:inline">Emergencies</span>
          </h2>
          <p className="w-full text-[16px] font-normal leading-[1.6] text-[#17181A]">
            An appliance emergency is any failure that poses immediate risk to your property, causes active damage, or creates an urgent need for resolution. Common scenarios include:
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-2">
          {emergencies.map((emergency) => (
            <article key={emergency.title} className={`flex h-[250px] w-full flex-col items-start gap-3 rounded-r-lg border-l-4 border-[#DC2626] bg-[#FEF2F2] pl-7 pr-6 pt-6 ${emergency.desktopOrder}`}>
              <h3 className="flex h-7 items-center gap-2 text-[20px] font-semibold leading-[1.6] text-[#DC2626]">
                <img src="/assets/figma-appliance-emergency-alert.svg" alt="" className="size-5 shrink-0" />
                {emergency.title}
              </h3>
              <ul className="flex h-[162px] w-full flex-col items-start gap-2">
                {emergency.items.map((item) => (
                  <li key={item} className="h-[26px] text-[16px] font-normal leading-[1.6] text-[#090A0A]">· {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
