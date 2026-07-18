const trustItems = [
  ['🛡️', 'Licensed & Insured'],
  ['⚡', 'EPA Certified'],
  ['🏘️', 'BBB Accredited'],
  ['✓', '90-Day Warranty'],
  ['📍', '24/7 Emergency'],
] as const;

export function CommercialTrustBar() {
  return (
    <section className="hidden h-[60px] items-center justify-center bg-[#0066CC] px-20 xl:flex" aria-label="Commercial service credentials">
      <div className="flex h-6 w-full max-w-[1280px] items-center justify-between">
        {trustItems.map(([icon, label], index) => (
          <div key={label} className="contents">
            <div className="flex h-6 items-center gap-[36.54px]">
              <span className="w-4 text-[16px] font-normal leading-6 text-[#1A2233]" aria-hidden="true">{icon}</span>
              <span className="whitespace-nowrap text-[13px] font-bold leading-[19.5px] text-white">{label}</span>
            </div>
            {index < trustItems.length - 1 ? <span className="h-4 w-px bg-white/30" aria-hidden="true" /> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
