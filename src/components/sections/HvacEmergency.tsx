const emergencyItems = [
  'Refrigerator not cooling or completely down',
  'Freezer failure — food spoilage risk',
  'Washer leaking or flooding',
  'Commercial equipment downtime',
];

export function HvacEmergency() {
  return (
    <section className="h-[977.3px] border-y border-t-2 border-[#C5DCFF] bg-white px-5 py-[60px] xl:h-[506.09px] xl:px-20 xl:pb-[61px] xl:pt-[62px]">
      <div className="mx-auto flex h-full w-full max-w-[1280px] flex-col items-start gap-[49px] xl:grid xl:h-[383.09px] xl:grid-cols-[1fr_472px] xl:gap-12">
        <div className="flex w-full flex-col items-start gap-[8.6px] xl:h-[383.09px]">
          <h2 className="w-full text-[32px] font-extrabold leading-[38.4px] text-[#061A33] xl:w-[780px]">
            <span className="xl:hidden">Emergency Appliance Repair in Plano</span>
            <span className="hidden xl:inline">Need Emergency Refrigerator Repair in Plano?</span>
          </h2>

          <p className="w-full pt-[5.4px] text-[16px] font-normal leading-[27.2px] text-[#374255] xl:w-[735px]">
            <span className="xl:hidden">
              Appliance failure does not wait. If your refrigerator stops cooling, washer leaks, freezer fails, or commercial equipment breaks down, our team can help with urgent service in Plano — dispatched as fast as possible.
            </span>
            <span className="hidden xl:inline">
              Refrigerator problems can't wait. Fast response is available for urgent situations, especially when food or business operations are at risk.
            </span>
          </p>

          <ul className="flex w-full flex-col items-start gap-2 pt-[15.4px]">
            {emergencyItems.map((item) => (
              <li key={item} className="flex h-[24.75px] items-center gap-[10px] text-[15px] font-normal leading-[24.75px] text-[#374255]">
                <span className="size-[6px] shrink-0 rounded-[3px] bg-[#2A7AE2]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="hidden h-[65.4px] items-start gap-[10px] pt-[19.4px] xl:flex">
            <a href="#schedule" className="flex h-[46px] items-center justify-center rounded-[90px] bg-[#2A7AE2] px-7 text-[16px] font-semibold leading-4 text-white">
              Request Emergency Service
            </a>
            <a href="tel:+14695550100" className="flex h-[46px] items-center justify-center rounded-[90px] border border-[#2A7AE2] px-[29px] text-[16px] font-semibold leading-4 text-[#2A7AE2]">
              Call Now
            </a>
          </div>
        </div>

        <aside className="flex h-[340.3px] w-full flex-col items-center gap-[6.9px] rounded-[20px] border border-[#C5DCFF] bg-[#F0F6FF] p-[33px] xl:mt-[21.397px] xl:w-[472px]">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-[14px] bg-[#E8F2FF]">
            <img src="/assets/figma-hvac-emergency.svg" alt="" className="size-7" />
          </span>
          <h3 className="w-full pt-[9.1px] text-center text-[16px] font-bold leading-[19.2px] text-[#061A33]">Urgent Repair Response</h3>
          <p className="w-full pb-[13.1px] text-center text-[13px] font-normal leading-[21.45px] text-[#6B7A90]">
            When you can't wait for a standard appointment — call or request emergency service online.
          </p>
          <a href="#schedule" className="flex h-[39px] w-full items-center justify-center rounded-[90px] bg-[#2A7AE2] px-6 py-3 text-center text-[15px] font-semibold leading-[15px] text-white">
            Request Emergency Service
          </a>
          <p className="w-full pt-[4.5px] text-center text-[12px] font-semibold leading-[19.8px] text-[#2A7AE2]">
            Available 7 days · Priority dispatch in<br />Plano
          </p>
        </aside>
      </div>
    </section>
  );
}
