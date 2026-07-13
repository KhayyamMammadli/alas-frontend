const trustItems = [
  { icon: '🛡️', label: 'Licensed & Insured' },
  { icon: '⚡', label: 'Same-Day Availability' },
  { icon: '🏘️', label: 'Residential & Commercial' },
  { icon: '✓', label: '90-Day Warranty' },
  { icon: '📍', label: 'Serving DFW Communities' },
];

export function AboutTrustBar() {
  return (
    <section className="bg-[#0066CC] px-5 py-4 xl:h-[60px] xl:px-20 xl:py-0">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-2 gap-x-4 gap-y-4 xl:flex xl:h-full xl:items-center xl:justify-between xl:gap-0">
        {trustItems.map((item, index) => (
          <div key={item.label} className={`contents xl:flex xl:items-center ${index === trustItems.length - 1 ? '' : 'xl:flex-1'}`}>
            <div className={`flex min-h-6 items-center gap-2 ${index === trustItems.length - 1 ? 'col-span-2 justify-center xl:col-span-1 xl:justify-start' : ''}`}>
              <span className="flex h-6 min-w-4 items-center justify-center text-[16px] font-normal leading-6 text-[#1A2233]">{item.icon}</span>
              <strong className="whitespace-nowrap text-[11px] font-bold leading-[19.5px] text-white sm:text-[13px]">{item.label}</strong>
            </div>
            {index < trustItems.length - 1 ? <span className="mx-auto hidden h-4 w-px shrink-0 bg-white/30 xl:block" /> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
