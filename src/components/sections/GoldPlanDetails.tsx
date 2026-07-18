import { useState } from 'react';

const hvacCoverage = [
  'Spring cooling maintenance — per covered system',
  'Fall heating maintenance — per covered system',
  'Up to 2 HVAC systems in your home',
  '1 waived HVAC diagnostic per year ($129 value)',
  'Inspect refrigerant, coils, drain, capacitor',
  'Verify thermostat, blower & safety controls',
  'Inspect furnace ignition, gas pressure, heat exchanger',
] as const;

const appliances = ['Refrigerator', 'Freezer', 'Washer', 'Dryer', 'Dishwasher', 'Oven / Range', 'Microwave', 'Disposal', 'Ice Maker'] as const;

const maintenance = [
  '2 HVAC visits per year — per covered system',
  'Ice maker now included in coverage',
  '1 annual appliance check-up visit',
  'Exclusive member pricing: Dryer vent clean $120 (reg. $185)',
  'All Silver appliance services included',
  'Exclusive member pricing: Ice maker clean $70 (reg. $150)',
] as const;

const tabs = [
  ['covered', "What's Covered"],
  ['benefits', 'Member Benefits'],
  ['value', 'Your Annual Value'],
  ['start', 'Get Started'],
] as const;

export function GoldPlanDetails() {
  const [activeTab, setActiveTab] = useState('covered');

  const navigateTab = (id: string) => {
    setActiveTab(id);
    const target = id === 'covered' ? 'gold-covered' : id === 'benefits' ? 'gold-maintenance' : id === 'value' ? 'gold-price' : 'schedule';
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="h-[2375px] bg-white px-5 pt-[33px] font-['Montserrat'] xl:h-[1177.79px] xl:px-20 xl:pt-[100px]" aria-labelledby="gold-plan-details-title">
      <div className="mx-auto h-[2342px] w-full max-w-[353px] overflow-hidden rounded-[28px] border border-[#E8EEF5] bg-white p-px shadow-[0_15px_40px_rgba(39,122,205,0.08)] xl:h-[1043.79px] xl:max-w-[1280px]">
        <header className="flex h-[258px] w-full flex-col items-center justify-center gap-6 py-10 pl-4 pr-10 xl:h-[153px] xl:flex-row xl:justify-between xl:p-10">
          <div className="flex w-[304px] items-center gap-2 xl:w-auto xl:gap-6">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#277ACD] to-[#4DA1F7] xl:size-[70px] xl:rounded-[35px]">
              <img src="/assets/figma-gold-detail-star.svg" alt="" className="size-[20.114px] xl:size-8" aria-hidden="true" />
            </span>
            <span className="flex w-[252px] flex-col items-start gap-[10px] xl:w-auto xl:whitespace-nowrap">
              <h2 id="gold-plan-details-title" className="w-[248px] text-[20px] font-extrabold leading-normal text-[#14213D] xl:w-auto xl:text-[32px]">Gold — Premium Home Care</h2>
              <p className="w-[248px] text-[16px] font-normal leading-normal text-[#6B7280] xl:w-auto xl:text-[18px]">Up to 2 HVAC systems • Up to 8 appliances • 6-month warranty</p>
            </span>
          </div>
          <div id="gold-price" className="flex h-14 items-center rounded-[50px] bg-gradient-to-br from-[#277ACD] to-[#4DA1F7] px-9 py-[18px] text-[16px] font-bold leading-normal text-white xl:h-[73px] xl:text-[30px]">$79 / month</div>
        </header>

        <nav className="flex h-[268px] w-full flex-col items-start border-y border-[#DCE8F5] xl:h-[74px] xl:flex-row" aria-label="Gold plan details">
          {tabs.map(([id, label], index) => (
            <button key={id} type="button" onClick={() => navigateTab(id)} className={`relative flex h-[66.5px] items-center px-[42px] text-[16px] font-semibold leading-normal xl:h-[72px] xl:w-auto ${index === 0 ? 'w-full' : 'w-auto'} ${activeTab === id ? 'bg-[#DDE9FF] text-[#277ACD] xl:bg-transparent' : 'text-[#667085]'}`}>
              {label}
              {activeTab === id ? <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#277ACD]" /> : null}
            </button>
          ))}
        </nav>

        <div className="flex h-[1814px] w-full flex-col gap-6 px-3 py-10 xl:h-[815.79px] xl:p-10">
          <div id="gold-covered" className="flex h-[1398px] w-full flex-col gap-6 xl:h-[451.4px] xl:flex-row">
            <article className="flex h-[695.4px] w-full flex-col gap-6 rounded-[22px] border border-[#DCE8F5] bg-[#F2F8FF] px-[31px] pb-[49px] pt-[31px] xl:h-[451.4px] xl:flex-1">
              <h3 className="text-[16px] font-extrabold leading-normal text-[#14213D] xl:text-[30px]">HVAC COVERAGE</h3>
              <ul className="flex flex-col gap-[17.9px]">
                {hvacCoverage.map(item => <li key={item} className="flex items-start gap-3 text-[18px] font-normal leading-[28.8px] text-[#14213D]"><span className="shrink-0 text-[#277ACD]">●</span><span>{item}</span></li>)}
              </ul>
            </article>

            <article className="flex h-[678px] w-full flex-col gap-6 rounded-[22px] border border-[#DCE8F5] bg-[#F2F8FF] px-[31px] pb-[31px] pt-[31px] xl:h-[451.4px] xl:flex-1 xl:pb-[171.58px]">
              <h3 className="text-[16px] font-extrabold leading-normal text-[#14213D] xl:text-[30px]">COVERED APPLIANCES</h3>
              <div className="grid grid-cols-1 gap-[14px] xl:grid-cols-3">
                {appliances.map(item => <div key={item} className="flex h-[53px] items-center justify-center rounded-[14px] border border-[#DCE8F5] bg-white p-[17px] text-center text-[16px] font-semibold leading-normal text-[#14213D]">{item}</div>)}
              </div>
            </article>
          </div>

          <article id="gold-maintenance" className="flex h-[312px] w-full flex-col gap-6 rounded-[22px] border border-[#DCE8F5] bg-[#F2F8FF] p-[31px] xl:h-[260.39px]">
            <div className="flex items-center gap-[14px]">
              <span className="flex size-[52px] shrink-0 items-center justify-center rounded-[26px] bg-[#277ACD] text-[20px] font-extrabold text-white">✓</span>
              <h3 className="text-[16px] font-extrabold leading-normal text-[#14213D] xl:text-[30px]">MAINTENANCE SCHEDULE</h3>
            </div>
            <div className="grid grid-cols-1 gap-[18px] text-[18px] font-normal leading-[28.8px] text-[#14213D] xl:h-[122.39px] xl:grid-cols-2 xl:grid-rows-[28.9px_28.9px_28.9px] xl:gap-x-10 xl:gap-y-[17.8969px]">
              {maintenance.map((item, index) => <p key={item} className={`flex h-[28.9px] items-start gap-3 ${index > 2 ? 'max-xl:hidden' : ''}`}><span className="w-[15px] shrink-0 font-bold text-[#16A34A]">✓</span><span className="xl:whitespace-nowrap">{item}</span></p>)}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
