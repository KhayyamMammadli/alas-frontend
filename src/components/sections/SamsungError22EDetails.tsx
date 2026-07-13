const symptomItems = [
  'Refrigerator not cooling properly',
  'Warm temperatures inside the fridge',
  'Unusual fan noise or no airflow',
  'Frost or ice buildup in the back panel',
] as const;

const causeItems = [
  'Faulty evaporator fan motor',
  'Ice buildup blocking the fan',
  'Wiring or connection issues',
  'Control board malfunction',
] as const;

const description =
  'List observable symptoms the user may notice: List observable symptoms the user may notice:List observable symptoms the user may notice:List observable symptoms the user may notice:List observable symptoms the user may notice:';

function DetailList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex w-full flex-col items-start gap-6">
      {items.map((item) => (
        <li key={item} className="flex min-h-10 w-full items-start gap-4">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-[#F2F7FF]">
            <img src="/assets/figma-22e-sign-wrench.svg" alt="" className="size-5" />
          </span>
          <a href="#schedule" className="pt-1 text-[16px] font-normal leading-[26px] text-[#1A2D40] underline decoration-current underline-offset-[2px] transition-colors hover:text-[#0066CC] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066CC]">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}

function DetailColumn({ title, items, compactIntro = false }: { title: string; items: readonly string[]; compactIntro?: boolean }) {
  return (
    <article className="flex min-w-0 flex-1 flex-col items-start gap-6 xl:max-w-[532px]">
      <div className={`flex w-full flex-col items-start ${compactIntro ? 'gap-3' : 'gap-6'}`}>
        <h2 className="text-[24px] font-semibold leading-[30px] text-[#121315]">{title}</h2>
        <p className="max-w-[503px] text-[16px] font-medium leading-6 tracking-[-0.3125px] text-[#1A2D40]">{description}</p>
      </div>
      <DetailList items={items} />
    </article>
  );
}

export function SamsungError22EDetails() {
  return (
    <section className="bg-[#F0F6FF] px-5 py-[50px] xl:h-[618px] xl:px-20 xl:pb-[66px] xl:pt-[65.97px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 rounded-2xl border border-[#E6EEF8] bg-white px-6 py-8 shadow-[0_1px_1.5px_rgba(0,0,0,0.10),0_1px_1px_rgba(0,0,0,0.10)] md:px-10 xl:h-[486px] xl:flex-row xl:items-start xl:gap-[59px] xl:px-[49px] xl:py-10">
        <DetailColumn title="Common Signs Associated with Error 22E" items={symptomItems} />

        <div className="h-px w-full shrink-0 bg-[#E6EEF8] xl:h-[325px] xl:w-px" aria-hidden="true" />

        <DetailColumn title="What Causes Error Code 22E?" items={causeItems} compactIntro />
      </div>
    </section>
  );
}
