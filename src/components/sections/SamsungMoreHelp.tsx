const helpCards = [
  {
    title: 'amsung Appliance Repair',
    description:
      'Verify the appliance is plugged in securely. Check your circuit breaker and reset if tripped. Some appliances have a dedicated outlet',
  },
  {
    title: 'Samsung Washer Error Codes',
    description:
      'Many modern appliances display error codes on their control panel. Write down any codes you see — this helps our technician diagnose faster.',
  },
] as const;

function HelpIcon() {
  return <img src="/assets/figma-samsung-more-help-icon.svg" alt="" className="size-5 shrink-0" />;
}

export function SamsungMoreHelp() {
  return (
    <section className="bg-white">
      <div className="mx-auto hidden h-[559px] w-full max-w-[1440px] px-20 pt-[70px] xl:block">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-3">
          <h2 className="w-[986px] text-center text-[42px] font-bold leading-[58.8px] text-[#042330]">
            More Samsung Appliance Help
          </h2>

          <p className="w-[986px] text-center text-[16px] font-normal leading-[25.6px] text-[#17181A]">
            An appliance emergency is any failure that poses immediate risk to your property, causes active damage, or creates an
            <br />
            urgent need for resolution. Common scenarios include:
          </p>

          <div className="flex w-full flex-col gap-5">
            <div className="grid w-full grid-cols-2 gap-4">
              {helpCards.map((card) => (
                <article
                  key={card.title}
                  className="flex h-[136px] flex-col gap-2 rounded-lg border-l-4 border-[#ED6E60] bg-white pb-6 pl-7 pr-6 pt-6 shadow-[0_4px_3px_rgba(0,0,0,0.10),0_2px_2px_rgba(0,0,0,0.10)]"
                >
                  <h3 className="flex h-7 items-center gap-2 text-[20px] font-semibold leading-8 text-[#090A0A]">
                    <HelpIcon />
                    <span>{card.title}</span>
                  </h3>
                  <p className="text-[16px] font-normal leading-[26px] text-[#454648]">{card.description}</p>
                </article>
              ))}
            </div>

            <div className="flex h-[92px] w-full items-center justify-between rounded-r-lg border-l-4 border-[#FF6B35] bg-[#FFF7ED] py-4 pl-7 pr-6">
              <p className="text-[16px] font-semibold leading-6 text-[#090A0A]">Refrigerator Not Working?</p>
              <a
                href="#schedule"
                className="flex h-[60px] w-[310px] items-center justify-center rounded-[120px] bg-[#DC2626] px-7 text-[18px] font-semibold leading-7 text-[#F5FAFF] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-[transform,box-shadow,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#C91F1F] hover:shadow-[0_10px_24px_rgba(220,38,38,0.24)] active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none"
              >
                Request Emergency Repair
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-[1012px] w-full max-w-[393px] items-center px-5 py-[50px] xl:hidden">
        <div className="flex w-full flex-col items-start gap-[30px]">
          <h2 className="w-full text-center text-[32px] font-bold leading-[51.2px] text-[#090A0A]">
            Common Appliance <span className="block text-[#00478F]">Emergencies</span>
          </h2>

          <div className="flex w-full flex-col gap-6">
            <p className="h-[130px] w-full text-center text-[16px] font-normal leading-[25.6px] text-[#17181A]">
              An appliance emergency is any failure that poses immediate risk to your property, causes active damage, or creates an urgent
              need for resolution. Common scenarios include:
            </p>

            {[0, 1].map((card) => (
              <article
                key={card}
                className="flex h-[188px] w-full flex-col gap-2 rounded-lg border-l-4 border-[#ED6E60] bg-white py-6 pl-7 pr-6 shadow-[0_4px_3px_rgba(0,0,0,0.10),0_2px_2px_rgba(0,0,0,0.10)]"
              >
                <h3 className="flex h-7 items-center gap-2 whitespace-nowrap text-[20px] font-semibold leading-8 text-[#090A0A]">
                  <HelpIcon />
                  <span>Samsung Appliance Repair</span>
                </h3>
                <p className="w-[308px] text-[16px] font-normal leading-[25.6px] text-[#454648]">
                  Verify the appliance is plugged in securely. Check your circuit breaker and reset if tripped. Some appliances have a
                  dedicated outlet
                </p>
              </article>
            ))}
          </div>

          <div className="flex h-[196px] w-full flex-col gap-8 rounded-r-lg border-l-4 border-[#FF6B35] bg-[#FFF7ED] py-4 pl-7 pr-6">
            <p className="text-[16px] font-semibold leading-6 text-[#090A0A]">
              If none of these resolve the issue — you need a licensed technician. Book same-day service NOW.
            </p>
            <a
              href="#schedule"
              className="flex h-[60px] w-full items-center justify-center whitespace-nowrap rounded-[120px] bg-[#DC2626] px-7 text-[18px] font-semibold leading-7 text-[#F5FAFF] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-[transform,box-shadow,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#C91F1F] hover:shadow-[0_10px_24px_rgba(220,38,38,0.24)] active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none"
            >
              Get Same-Day Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
