import { useState } from 'react';
import type { ReactNode } from 'react';

const phone = '(214) 555-0100';
const tel = 'tel:+12145550100';

const signs = [
  ['🌡', 'Temperature not holding set point — food above 41°F'], ['❄', 'Excessive ice buildup on evaporator coils or walls'],
  ['◉', 'Unusual noises — clicking, banging, or continuous running'], ['♨', 'Water pooling inside or condensation on door frames'],
  ['▯', 'Door seals feeling loose, torn, or not sealing fully'], ['$', 'Sudden spike in energy bills without change in usage'],
];

const coverage = [
  ['Compressor Repair & Replacement', 'Compressor failures are the most common cause of a walk-in not cooling. We carry replacement compressors for all major units.'],
  ['Evaporator Coil Service', 'Frozen or damaged evaporator coils lead to poor airflow and temperature swings. We clean, repair, or replace coils on-site.'],
  ['Refrigerant Leak Detection & Recharge', 'EPA-certified technicians locate and repair the source, and recharge the system with the correct refrigerant type.'],
  ['Condenser Coil Cleaning', 'Dirty condenser coils force your system to overwork. Regular cleaning prevents premature compressor failure.'],
  ['Door Gaskets & Hardware', 'Worn door seals waste energy and risk temperature compliance. We replace gaskets, hinges, latches, and closers same-day.'],
  ['Electrical Controls & Thermostats', 'Faulty thermostats, relays, and control boards repaired or replaced with OEM-compatible components.'],
  ['Fan Motors & Blades', 'Evaporator and condenser fan failures repaired quickly — a key component for maintaining even temperatures throughout the unit.'],
  ['Defrost System Service', 'Defrost timer, heater, and terminator failures cause ice buildup. We diagnose and restore proper defrost cycles.'],
];

const process = [
  ['Call or submit a service request', `Call ${phone} or submit online. We confirm your appointment within 30 minutes and provide a technician ETA.`],
  ['Certified technician arrives in a stocked van', 'A commercial refrigeration specialist arrives carrying parts for all major brands to resolve most issues on the first visit.'],
  ['Full diagnosis and transparent fixed-price quote', 'We diagnose the root cause and provide a written, fixed-price quote before any work begins. No hidden fees.'],
  ['Repair completed with full documentation', 'We verify temperatures and provide detailed service documentation, parts used, labor performed, and a 90-day warranty certificate.'],
];

const costs = [
  ['Door gasket / seal replacement', '$120 – $280', '1–2 hours'], ['Thermostat / controller replacement', '$180 – $420', '1–2 hours'],
  ['Fan motor replacement', '$250 – $550', '2–3 hours'], ['Refrigerant leak repair + recharge', '$350 – $900', '2–4 hours'],
  ['Evaporator coil replacement', '$500 – $1,200', '3–5 hours'], ['Compressor replacement', '$900 – $2,200', '4–6 hours'],
  ['Full condensing unit replacement', '$1,500 – $4,000', '1–2 days'],
];

const faqs = [
  ['How much does commercial walk-in cooler repair cost in Dallas?', 'Most repairs range from $120 to $2,200 depending on the failed component. We provide a written fixed-price quote before work begins.'],
  ['Do you offer emergency walk-in cooler repair in Dallas?', 'Yes. Same-day emergency appointments are available seven days a week throughout Dallas and nearby DFW cities.'],
  ['What are the signs that my walk-in cooler needs repair?', 'Temperature drift, ice buildup, unusual noise, water pooling, damaged seals, and higher energy use are common warning signs.'],
  ['What brands of walk-in coolers do you repair?', 'We service Heatcraft, Bohn, Hussmann, Nor-Lake, Kolpak, True, Tyler, Manitowoc, Copeland, Tecumseh, Carlyle, and most other commercial brands.'],
  ['Is it better to repair or replace a walk-in cooler?', 'A technician will compare unit age, repair cost, refrigerant availability, and efficiency before recommending repair or replacement.'],
  ['How long does a walk-in cooler repair take?', 'Common electrical, fan, thermostat, and gasket repairs take one to three hours. Major compressor or coil work may take longer.'],
  ['Do you provide service documentation for health department compliance?', 'Yes. Completed work includes service details, temperature verification, parts and labor records, and warranty documentation.'],
];

export function CommercialWalkInCoolerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <main className="w-full overflow-x-hidden bg-[#F4F6F8] font-['Montserrat'] text-[#042330] [&_a]:cursor-pointer [&_button]:cursor-pointer">
      <section id="schedule" className="relative min-h-[790px] overflow-hidden bg-white text-white sm:min-h-[820px] lg:min-h-[602px]">
        <svg className="absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1440 602" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 0H1403C1403 206 1344 351 1210 447C963 624 405 639 0 489V0Z" fill="#DCE4EF" />
          <path d="M0 0H1403C1403 190 1344 330 1202 421C943 587 397 610 0 463V0Z" fill="#06164D" />
        </svg>
        <svg className="absolute inset-0 h-full w-full lg:hidden" viewBox="0 0 393 820" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 0H393V725C317 812 124 832 0 778V0Z" fill="#DCE4EF" />
          <path d="M0 0H393V704C306 786 121 805 0 754V0Z" fill="#06164D" />
        </svg>
        <div className="relative z-10 mx-auto grid max-w-[1280px] px-5 pb-10 pt-10 sm:px-8 sm:pt-12 lg:grid-cols-[52%_48%] lg:px-10 lg:pb-0 lg:pt-12 xl:px-0">
          <div className="relative z-20">
            <span className="inline-flex rounded-full border border-white/35 bg-white/10 px-5 py-2 text-[12px] font-bold uppercase tracking-wide">Rated 4.9 · 312 Reviews</span>
            <h1 className="mt-6 max-w-[690px] text-[38px] font-extrabold leading-[1.12] sm:text-[46px] lg:text-[52px] xl:text-[56px]">Commercial <span className="text-[#9BD0FF]">Walk-in Cooler</span> Repair in Dallas, TX</h1>
            <p className="mt-6 max-w-[630px] text-[16px] font-medium leading-7 text-white/80 lg:text-[17px]">Certified commercial refrigeration technicians serving Dallas–Fort Worth. Same-day emergency service available — protecting your inventory and keeping your operation compliant 7 days a week.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={tel} className="flex h-[60px] items-center justify-center rounded-[120px] bg-[#F5FAFF] px-8 text-[17px] font-semibold text-[#003366] shadow-[0_10px_24px_rgba(0,30,80,0.2)] transition hover:-translate-y-0.5 hover:bg-white">Call {phone}</a>
              <a href="#booking" className="flex h-[60px] items-center justify-center rounded-[120px] border border-[#C5E1FD] px-8 text-[17px] font-semibold transition hover:bg-white/10">Schedule Online</a>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-[13px] font-semibold text-white/75"><span>✓ Same-day emergency service</span><span>✓ 90-day warranty</span><span>✓ Commercial certified</span></div>
          </div>
          <div className="pointer-events-none relative mt-5 h-[240px] sm:h-[300px] lg:mt-0 lg:h-[500px]">
            <img src="/assets/figma-city-hero-van.png" alt="ALAS commercial service van" className="absolute bottom-0 left-1/2 w-[430px] max-w-none -translate-x-1/2 object-contain sm:w-[570px] lg:bottom-[-26px] lg:left-[48%] lg:w-[674px]" />
          </div>
        </div>
      </section>

      <section className="bg-[#DCE4EF] px-5 py-7 xl:px-20">
        <div className="mx-auto grid max-w-[1280px] gap-x-7 gap-y-5 text-[13px] font-bold sm:grid-cols-2 lg:grid-cols-5 lg:items-center lg:text-[14px]"><span className="lg:whitespace-nowrap">◷ 1–2 hr emergency response</span><span className="lg:whitespace-nowrap">⌕ Parts stocked for all major brands</span><span className="lg:whitespace-nowrap">▣ Factory-trained technicians</span><span className="lg:whitespace-nowrap">▤ Net 30 invoicing available</span><span className="lg:whitespace-nowrap">♢ 90-day parts &amp; labor warranty</span></div>
      </section>

      <div className="mx-auto flex max-w-[1280px] flex-col px-5 py-16 xl:px-0 xl:py-[70px]">
        <div className="min-w-0 space-y-[30px] xl:space-y-[48px]">
          <section className="rounded-[24px] bg-white p-6 shadow-[0_8px_28px_rgba(0,71,143,0.07)] xl:p-10"><p className="text-[18px] leading-8 text-[#454648]"><strong className="text-[#00478F]">Commercial walk-in cooler repair in Dallas, TX</strong> should be treated as a priority emergency — a malfunctioning unit can result in thousands of dollars in lost inventory, health code violations, and operational shutdown. Our certified technicians respond across Dallas–Fort Worth 7 days a week.</p></section>
          <ContentSection title="Signs Your Walk-in Cooler Needs Repair"><p>Catching a problem early can prevent a full system failure. Watch for these warning signs:</p><div className="mt-6 grid gap-3 md:grid-cols-2">{signs.map(([icon,text])=><div key={text} className="flex min-h-[76px] items-center gap-4 rounded-xl border border-[#B8D8F8] bg-[#F0F6FF] p-5 font-semibold text-[#003366] transition hover:-translate-y-0.5 hover:border-[#0066CC] hover:shadow-[0_10px_24px_rgba(0,71,143,0.12)]"><span className="text-xl text-[#0066CC]">{icon}</span>{text}</div>)}</div><p className="mt-6">If you notice any of these symptoms, call us immediately at <a href={tel} className="font-bold text-[#00478F] underline">{phone}</a>.</p></ContentSection>
          <ContentSection title="What Our Walk-in Cooler Repair Service Covers"><p>Our commercial refrigeration technicians are equipped to diagnose and repair every component of your walk-in cooler system:</p><div className="mt-6 grid gap-3 md:grid-cols-2">{coverage.map(([title,body])=><article key={title} className="rounded-xl border border-[#B9CDF9] bg-[#EEF3FF] p-5"><h3 className="font-bold text-[#0A2B60]">{title}</h3><p className="mt-2 text-[15px] leading-6">{body}</p></article>)}</div></ContentSection>
          <ContentSection title="Walk-in Cooler Brands We Service"><p>Our technicians are trained and stocked for all major commercial refrigeration manufacturers:</p><div className="mt-5 flex flex-wrap gap-3">{['Heatcraft','Bohn','Hussmann','Nor-Lake','Kolpak','True','Tyler','Manitowoc','Copeland','Tecumseh','Carlyle'].map(x=><span key={x} className="rounded-lg border border-[#D7DFEB] bg-white px-5 py-3 font-semibold">{x}</span>)}</div><p className="mt-5">Don&apos;t see your brand? Call us — we service virtually all commercial refrigeration manufacturers.</p></ContentSection>
          <ContentSection title="How Our Walk-in Cooler Repair Process Works"><div className="space-y-6">{process.map(([title,body],i)=><div key={title} className="flex gap-5"><span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#082A60] font-bold text-white">{i+1}</span><div><h3 className="font-bold">{title}</h3><p className="mt-1 leading-7">{body}</p></div></div>)}</div></ContentSection>
          <ContentSection title="Walk-in Cooler Repair Costs in Dallas, TX"><p>Pricing varies by the type and complexity of repair. Here is a general guide:</p><div className="mt-6 space-y-3 md:hidden">{costs.map(([repair,cost,time])=><article key={repair} className="rounded-xl border border-[#D9E7F6] bg-[#F8FAFD] p-4"><h3 className="font-bold leading-6 text-[#082A60]">{repair}</h3><div className="mt-3 grid grid-cols-2 gap-3 border-t border-[#E4E9F0] pt-3"><div><span className="block text-[11px] font-bold uppercase tracking-wide text-[#718096]">Estimated cost</span><strong className="mt-1 block text-[#00478F]">{cost}</strong></div><div><span className="block text-[11px] font-bold uppercase tracking-wide text-[#718096]">Typical time</span><strong className="mt-1 block text-[#042330]">{time}</strong></div></div></article>)}</div><div className="mt-6 hidden overflow-hidden rounded-xl md:block"><table className="w-full text-left"><thead className="bg-[#082A60] text-white"><tr><th className="p-4">Repair Type</th><th className="p-4">Estimated Cost Range</th><th className="p-4">Typical Time</th></tr></thead><tbody>{costs.map((row,i)=><tr key={row[0]} className={i%2?'bg-white':'bg-[#F8FAFD]'}>{row.map(cell=><td key={cell} className="border-b border-[#E4E9F0] p-4">{cell}</td>)}</tr>)}</tbody></table></div><p className="mt-4 text-sm text-[#747B85]">⚠ Estimates are based on typical Dallas-area pricing. Exact cost depends on brand, unit size, refrigerant type, and parts availability.</p></ContentSection>
          <ContentSection title="Walk-in Cooler Repair Service Area — Dallas, TX"><p>We provide commercial walk-in cooler repair throughout Dallas and the surrounding DFW metro area:</p><div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">{['Dallas','Plano','Irving','Garland','Mesquite','Richardson','Carrollton','Frisco','McKinney'].map(x=><a key={x} href="/contact" className="rounded-xl border border-[#DDE3EC] bg-white p-5 font-semibold hover:border-[#0066CC]">⌖ &nbsp;{x}</a>)}</div></ContentSection>
          <ContentSection title="What Dallas Businesses Say"><div className="grid gap-4 md:grid-cols-2"><Testimonial quote="Our walk-in cooler failed on a Friday night during dinner service. ALAS had a tech here within 90 minutes. Fixed on the spot." name="Marcus T." role="Restaurant Owner — Deep Ellum, Dallas"/><Testimonial quote="Professional, fast, and the price matched the quote exactly. They even sent over a service report I could file with insurance." name="Sarah K." role="Grocery Store Manager — Uptown Dallas"/></div></ContentSection>
          <ContentSection title="Frequently Asked Questions — Walk-in Cooler Repair Dallas"><div className="space-y-3">{faqs.map(([q,a],i)=>{const open=openFaq===i;return <article key={q} className="overflow-hidden rounded-xl border border-[#DFE4EC] bg-white"><button className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold" onClick={()=>setOpenFaq(open?null:i)} aria-expanded={open}>{q}<span className={`text-2xl text-[#0A2B60] transition-transform duration-300 ${open?'rotate-180':''}`}>{open?'−':'+'}</span></button><div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${open?'grid-rows-[1fr] opacity-100':'grid-rows-[0fr] opacity-0'}`}><div className="min-h-0 overflow-hidden"><p className="border-t border-[#E8ECF2] px-5 pb-5 pt-4 leading-7 text-[#454B55]">{a}</p></div></div></article>})}</div></ContentSection>
        </div>
        <aside className="mt-[48px] grid gap-5 md:grid-cols-2 xl:grid-cols-3"><BookingCard /><ServiceHours /><RelatedServices /></aside>
      </div>
    </main>
  );
}

function QuoteCard(){return <div className="rounded-[24px] bg-white p-8 text-[#042330] shadow-[0_0_0_1px_rgba(10,22,40,0.06),0_24px_48px_rgba(10,22,40,0.2)]"><h2 className="text-2xl font-bold">Get a Free Quote</h2><p className="mt-3 text-[#454648]">Serving Dallas and surrounding areas. Fast, transparent pricing.</p><a href={tel} className="mt-6 flex h-[60px] items-center gap-4 rounded-[120px] bg-[#0066CC] px-6 text-xl font-semibold text-white">☎ {phone}</a><p className="mt-4 text-center text-sm">Or <a href="#booking" className="font-bold text-[#00478F]">submit a service request online →</a></p><div className="mt-6 grid grid-cols-3 gap-3 text-center"><Stat n="90" t="Day Warranty"/><Stat n="4.9★" t="Avg Rating"/><Stat n="1hr" t="Response Time"/></div></div>}
function Stat({n,t}:{n:string,t:string}){return <div className="rounded-xl bg-[#F0F6FF] p-4"><b className="block text-xl text-[#00478F]">{n}</b><span className="text-[11px] text-[#5B6774]">{t}</span></div>}
function ContentSection({title,children}:{title:string;children:ReactNode}){return <section className="rounded-[24px] bg-white p-6 shadow-[0_8px_28px_rgba(0,71,143,0.07)] xl:p-10"><h2 className="border-b-2 border-[#D9E7F6] pb-4 text-[28px] font-bold leading-[1.4] text-[#042330] xl:text-[42px]">{title}</h2><div className="mt-6 text-[17px] leading-7 text-[#454648]">{children}</div></section>}
function BookingCard(){return <div id="booking" className="rounded-[24px] border border-[#D9E7F6] bg-white p-6 shadow-[0_12px_30px_rgba(0,71,143,0.08)]"><h3 className="text-xl font-bold text-[#042330]">Book a Repair in Dallas</h3><a href={tel} className="mt-5 flex h-[60px] items-center justify-center gap-3 rounded-[120px] bg-[#0066CC] px-6 text-center text-xl font-semibold text-white">☎ {phone}</a><a href="#schedule" className="mt-3 flex h-[56px] items-center justify-center gap-3 rounded-[120px] border border-[#0066CC] bg-[#F5FAFF] px-6 text-center font-semibold text-[#00478F]">▣ Schedule Online</a><p className="mt-4 rounded-xl border border-[#B8D8F8] bg-[#F0F6FF] p-4 text-center font-semibold text-[#00478F]">ϟ Emergency service available 7 days/week</p></div>}
function ServiceHours(){return <div className="rounded-[24px] border border-[#D9E7F6] bg-white p-6 shadow-[0_12px_30px_rgba(0,71,143,0.06)]"><h3 className="text-xl font-bold text-[#042330]">Service Hours — Dallas, TX</h3>{[['Mon – Fri','7:00am – 7:00pm'],['Saturday','8:00am – 5:00pm'],['Sunday','Emergency only'],['Holidays','Emergency only']].map(x=><div key={x[0]} className="flex justify-between border-b border-[#E8ECF2] py-3 last:border-0"><b>{x[0]}</b><span>{x[1]}</span></div>)}</div>}
function RelatedServices(){return <div className="rounded-[24px] border border-[#D9E7F6] bg-white p-6 shadow-[0_12px_30px_rgba(0,71,143,0.06)]"><h3 className="text-xl font-bold text-[#042330]">Related Commercial Services</h3>{['Walk-in Freezer Repair','Reach-in Refrigerator Repair','Blast Chiller Repair','Merchandiser Cooler Repair','All Refrigeration Services'].map(x=><a key={x} href="/services/appliance-repair" className="flex justify-between border-b border-[#E8ECF2] py-4 font-semibold text-[#00478F] transition hover:translate-x-1 last:border-0">❄ {x}<span>›</span></a>)}</div>}
function Testimonial({quote,name,role}:{quote:string;name:string;role:string}){return <article className="rounded-[24px] border border-[#D9E7F6] bg-white p-6 shadow-[0_12px_30px_rgba(0,71,143,0.06)]"><div className="text-xl text-[#0066CC]">★★★★★</div><p className="mt-4 italic leading-7">“{quote}”</p><b className="mt-5 block text-[#042330]">{name}</b><span className="text-sm text-[#5B6774]">{role}</span></article>}
