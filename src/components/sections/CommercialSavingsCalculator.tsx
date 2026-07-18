import { useState } from 'react';

const businessTypes = ['Restaurant / Café', 'Hotel', 'Senior Living', 'Other'] as const;

const money = (value: number) => `$${Math.round(value).toLocaleString('en-US')}`;

export function CommercialSavingsCalculator() {
  const [businessType, setBusinessType] = useState<(typeof businessTypes)[number]>('Restaurant / Café');
  const [repairs, setRepairs] = useState(5);
  const [repairCost, setRepairCost] = useState(350);

  const withoutAlas = repairs * repairCost;
  const discountedRepairs = withoutAlas * 0.75;
  const withAlas = 420 + discountedRepairs;
  const savings = Math.max(0, withoutAlas - withAlas);

  return (
    <section className="h-[2221.3px] bg-white px-5 py-[50px] xl:h-[1073px] xl:px-20 xl:py-[72px]" aria-labelledby="commercial-savings-title">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[30px]">
        <header className="flex h-[224.3px] w-full flex-col items-center gap-[15px] pb-[9.3px] text-center xl:h-[148.3px]">
          <h2 id="commercial-savings-title" className="w-full text-[32px] font-bold leading-[1.6] text-[#090A0A] xl:w-[1008px] xl:text-[42px] xl:leading-[1.4]">How much could you save?</h2>
          <p className="w-full text-[16px] font-normal leading-[32.5px] tracking-[-0.4492px] text-[#2A3B4B] xl:w-[672px] xl:text-[20px]">Protect your commercial appliances and HVAC systems with one simple plan. Fast response, expert service, zero surprises.</p>
        </header>

        <div className="grid h-[1867px] w-full grid-cols-1 gap-[30px] xl:h-[713px] xl:w-[1180px] xl:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] xl:gap-7 xl:pt-[34px]">
          <div className="flex h-[726px] flex-col items-start rounded-[26px] border border-[#DBE7F6] bg-white/[0.88] px-[35px] py-[25px] shadow-[0_24px_70px_rgba(18,48,92,0.1)] backdrop-blur-[9px] xl:h-[679px] xl:pb-[35px] xl:pt-[35px]">
            <div className="h-[194px] w-full border-b border-[#E4EDF8] pb-[27px]">
              <div className="flex items-center gap-[14px]">
                <span className="flex size-12 items-center justify-center rounded-[16px] bg-[#EEF5FF] text-[22px] font-extrabold text-[#0967E8]">▣</span>
                <h3 className="text-[20px] font-bold text-[#042330]">Your Business Type</h3>
              </div>
              <div className="mt-[22px] flex flex-wrap gap-x-3 gap-y-[9px]">
                {businessTypes.map((type) => (
                  <button key={type} type="button" onClick={() => setBusinessType(type)} className={`h-11 rounded-[16px] border border-[#D8E4F4] px-[19px] text-[13.3px] font-bold transition-[transform,background-color,color,box-shadow] duration-200 motion-safe:hover:-translate-y-0.5 ${businessType === type ? 'bg-gradient-to-br from-[#075EE8] to-[#004BD6] text-white shadow-[0_8px_18px_rgba(0,75,214,0.2)]' : 'bg-white text-[#3F4E5C] hover:bg-[#EEF5FF]'}`}>{type}</button>
                ))}
              </div>
            </div>

            <div className="h-[141px] w-full border-b border-[#E4EDF8] pb-[27px] pt-[26px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[14px]"><span className="flex size-12 items-center justify-center rounded-[16px] bg-[#EEF5FF] text-[22px]">🔧</span><h3 className="text-[16px] font-bold text-[#042330] xl:text-[20px]">Repairs per year</h3></div>
                <strong className="text-[20px] font-bold text-[#0066CC] xl:text-[30px]">{repairs}</strong>
              </div>
              <div className="mt-[22px] grid grid-cols-[42px_minmax(0,1fr)_42px] items-center gap-4 text-[16px] font-bold text-[#5B6774]">
                <span>1</span><input className="commercial-savings-range" style={{ background: `linear-gradient(90deg, #0967e8 0%, #0967e8 ${((repairs - 1) / 14) * 100}%, #d8e4f4 ${((repairs - 1) / 14) * 100}%, #d8e4f4 100%)` }} type="range" min="1" max="15" step="1" value={repairs} onChange={(event) => setRepairs(Number(event.target.value))} aria-label="Repairs per year" /><span className="text-right">15</span>
              </div>
            </div>

            <div className="h-[141px] w-full border-b border-[#E4EDF8] pb-[27px] pt-[26px]">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-[14px]"><span className="flex size-12 items-center justify-center rounded-[16px] bg-[#EEF5FF] text-[16px] font-bold text-[#0967E8]">$</span><h3 className="text-[16px] font-bold text-[#042330]">Average repair cost</h3></div>
                <strong className="whitespace-nowrap text-[20px] font-bold text-[#0066CC] xl:text-[16px]">{money(repairCost)}</strong>
              </div>
              <div className="mt-[22px] grid grid-cols-[42px_minmax(0,1fr)_42px] items-center gap-4 text-[16px] font-bold text-[#5B6774]">
                <span>$100</span><input className="commercial-savings-range" style={{ background: `linear-gradient(90deg, #0967e8 0%, #0967e8 ${((repairCost - 100) / 500) * 100}%, #d8e4f4 ${((repairCost - 100) / 500) * 100}%, #d8e4f4 100%)` }} type="range" min="100" max="600" step="50" value={repairCost} onChange={(event) => setRepairCost(Number(event.target.value))} aria-label="Average repair cost" /><span className="text-right">$600</span>
              </div>
            </div>

            <div className="mt-0 h-[200px] w-full rounded-[18px] border border-[#C8DEFA] bg-gradient-to-br from-[#EDF6FF] to-[#F7FBFF] p-[23px] xl:mt-0 xl:h-auto">
              <p className="text-[16px] font-normal leading-[25.6px] text-[#2A3B4B]"><strong className="font-bold text-[#0066CC]">Note:</strong> Calculator uses our Complete plan at $420/yr with 25% repair discount. Actual savings may vary based on your equipment and plan selection.</p>
            </div>
          </div>

          <div className="grid h-[1111px] w-full grid-cols-1 gap-[28px] xl:relative xl:block xl:h-[679px] xl:w-[590.06px]">
            <div className="flex h-[248px] flex-col items-center gap-4 rounded-[26px] bg-[radial-gradient(circle_at_65%_15%,rgba(0,120,255,0.28),transparent_36%),linear-gradient(134deg,#071225,#071B36)] p-[42px] shadow-[0_28px_40px_rgba(7,18,37,0.24)] xl:absolute xl:inset-x-0 xl:top-0">
              <p className="text-center text-[13.3px] font-bold tracking-[2px] text-[#AEBBD0]">YOUR ESTIMATED ANNUAL SAVINGS</p>
              <strong className="bg-gradient-to-b from-[#B8F0FF] to-[#0868FF] bg-clip-text text-[76px] font-bold leading-none tracking-[-4px] text-transparent">{money(savings)}</strong>
              <p className="text-center text-[16px] font-normal text-white">with an ALAS Complete Coverage plan</p>
            </div>

            <div className="grid h-[599px] grid-cols-1 gap-5 xl:absolute xl:inset-x-0 xl:top-[258px] xl:h-[290px] xl:grid-cols-2">
              <div className="flex h-[290px] flex-col gap-[14px] rounded-[22px] border border-[#FFC6C6] bg-[#FFF2F2] px-[29px] pb-[57px] pt-[29px]">
                <p className="text-[13px] font-bold tracking-[1.5px] text-[#D72835]">WITHOUT ALAS</p>
                <strong className="pb-[9px] pt-1 text-[42px] font-bold tracking-[-1px] text-[#D72835]">{money(withoutAlas)}</strong>
                <div className="flex justify-between border-b border-black/[0.08] py-[10px] text-[16px] text-[#042330]"><span>{repairs} repairs × {money(repairCost)}</span><strong>{money(withoutAlas)}</strong></div>
                <p className="text-[16px] font-bold text-[#D72835]">No discounts. No PM. Full price.</p>
              </div>
              <div className="flex h-[289px] flex-col rounded-[22px] border border-[#A7EFD2] bg-[#ECFFF7] p-[29px]">
                <p className="text-[13px] font-bold tracking-[1.5px] text-[#07966A]">WITH ALAS COMPLETE</p>
                <strong className="pb-[23px] pt-[18px] text-[42px] font-bold tracking-[-1px] text-[#07966A]">{money(withAlas)}</strong>
                <div className="flex justify-between border-b border-black/[0.08] py-[10px] text-[16px] text-[#042330]"><span>Annual plan</span><strong>$420</strong></div>
                <div className="flex justify-between border-b border-black/[0.08] py-[10px] text-[16px] text-[#042330]"><span>Repairs 25% off</span><strong>{money(discountedRepairs)}</strong></div>
                <div className="flex justify-between border-b border-black/[0.08] py-[10px] text-[16px] font-bold text-[#042330]"><span>Total</span><strong>{money(withAlas)}</strong></div>
              </div>
            </div>

            <div className="flex h-[208px] flex-col items-center justify-between gap-6 rounded-[22px] border border-[#DBE7F6] bg-white p-[27px] text-center shadow-[0_20px_30px_rgba(18,48,92,0.09)] xl:absolute xl:inset-x-0 xl:top-[558px] xl:h-[121px] xl:flex-row xl:gap-0 xl:text-left">
              <div className="xl:h-[75px] xl:w-[289px] xl:shrink-0"><h3 className="whitespace-nowrap text-[21px] font-bold leading-[27px] text-[#042330]">Lock in your rate today</h3><p className="mt-[7px] text-[16px] leading-5 text-[#3F4E5C] xl:w-[289px]">Free equipment assessment included. No commitment required.</p></div>
              <a href="tel:+14696383215" className="flex h-[57px] w-[229px] shrink-0 items-center justify-center whitespace-nowrap rounded-[90px] bg-gradient-to-br from-[#075EE8] to-[#003FD2] px-[15px] text-[16px] font-bold text-white shadow-[0_18px_17px_rgba(0,82,220,0.28)] transition-transform duration-200 motion-safe:hover:-translate-y-1 xl:underline">Get My Custom Quote →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
