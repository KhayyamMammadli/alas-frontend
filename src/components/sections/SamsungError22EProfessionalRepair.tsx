const repairReasons = [
  'The error code comes back after reset',
  'The refrigerator is not cooling',
  'Grinding noise or no fan noise is present',
  'The issue persists after defrosting',
] as const;

const relatedRepairs = [
  { label: 'Samsung Refrigerator Repair', href: '/protection-plans' },
  { label: 'Appliance Repair Services', href: '/services/appliance-repair' },
  { label: 'Samsung Error Code Lis', href: '/guides/samsung-refrigerator-error-codes' },
  { label: 'Samsung Error Code Lis', href: '/guides/samsung-refrigerator-error-codes' },
  { label: 'Samsung Error Code Lis', href: '/guides/samsung-refrigerator-error-codes' },
] as const;

function RelatedLink({ item }: { item: (typeof relatedRepairs)[number] }) {
  return (
    <a
      href={item.href}
      className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full border border-[#B9DCFF] bg-[#EEF7FF] px-[23px] py-3 text-[13px] font-black uppercase leading-none tracking-[2px] text-[#0066CC] transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#0066CC] hover:bg-[#E2F1FF] active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none"
    >
      {item.label}
    </a>
  );
}

export function SamsungError22EProfessionalRepair() {
  return (
    <section className="bg-[#F0F6FF] px-5 py-[50px] xl:h-[673.5px] xl:px-20 xl:py-[70px]">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-6 xl:grid-cols-2">
        <article className="flex min-h-[533.5px] flex-col items-start gap-6 rounded-[28px] border border-[#DCE9F8] bg-white p-8 shadow-[0_20px_25px_rgba(11,67,138,0.08)] sm:p-[47px]">
          <h2 className="w-full text-[32px] font-black leading-[40px] tracking-[-1px] text-[#042330] xl:text-[38px] xl:leading-[47.5px]">
            When You Need Professional Repair
          </h2>

          <p className="text-[19px] font-medium leading-[33px] text-[#3F4E5C] xl:text-[21px] xl:leading-[36.75px]">Call a technician if:</p>

          <ul className="flex w-full flex-1 flex-col items-start justify-center gap-6">
            {repairReasons.map((reason) => (
              <li key={reason} className="relative min-h-[37.75px] w-full pl-[30px] text-[18px] font-medium leading-[31px] text-[#3F4E5C] xl:w-[478px] xl:whitespace-nowrap xl:text-[21px] xl:leading-[36.75px]">
                <span className="absolute left-0 top-[14px] size-[9px] rounded-[4.5px] bg-[#FF9F0A] xl:top-[19px]" aria-hidden="true" />
                {reason}
              </li>
            ))}
          </ul>
        </article>

        <article className="flex min-h-[533.475px] flex-col items-start gap-[23.1px] rounded-[28px] border-[3px] border-[#0B6ED0] bg-white px-8 pb-10 pt-9 shadow-[0_20px_25px_rgba(11,67,138,0.08)] sm:px-[49px] sm:pb-[54.5px] sm:pt-[49px]">
          <h2 className="w-full text-[32px] font-black leading-[40px] tracking-[-1px] text-[#042330] xl:text-[38px] xl:leading-[47.5px]">
            Related Samsung Refrigerator Repairs
          </h2>

          <RelatedLink item={relatedRepairs[0]} />

          <p className="text-[16px] font-medium leading-normal text-[#3F4E5C]">Call a technician if:</p>

          {relatedRepairs.slice(1).map((item, index) => (
            <RelatedLink key={`${item.label}-${index}`} item={item} />
          ))}
        </article>
      </div>
    </section>
  );
}
