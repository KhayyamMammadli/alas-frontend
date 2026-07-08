import type { HomePageData } from '../../data/homePageData';

type FooterProps = {
  data: HomePageData['footer'];
};

export function Footer({ data }: FooterProps) {
  const serviceLinks = data.services.map((item) => ({
    label: item,
    href: item.includes('24/7') ? '#schedule' : '#appliance-repair',
  }));
  const companyLinks = data.company.map((item) => ({
    label: item,
    href: item.includes('Locations')
      ? '#locations'
      : item.includes('Protection')
        ? '#plans'
        : item.includes('About')
          ? '#about'
          : '#services',
  }));

  return (
    <footer className="mt-24 bg-[#0A1628] px-4 pb-8 pt-16 text-white md:mt-[29px] md:h-[512px] md:px-10 xl:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={data.logo} alt="ALAS" className="h-[54px] w-[185px] object-contain" />
            <p className="mt-4 max-w-[285px] text-sm leading-[1.6] text-[#D1D5DC]">{data.description}</p>
            <div className="mt-4 flex gap-3">
              {['f', 'x', 'in'].map((item) => (
                <span
                  key={item}
                  className="inline-flex size-10 items-center justify-center rounded-lg bg-white/10 text-sm font-bold"
                  aria-hidden="true"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <FooterColumn title="Services" items={serviceLinks} />
          <FooterColumn title="Company" items={companyLinks} />

          <div>
            <h3 className="text-lg font-bold leading-[1.6]">Contact</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm leading-[1.6] text-[#D1D5DC]">
              <div>
                <a href="tel:+14696383215" className="font-semibold">
                  {data.contact.phone}
                </a>
                <p className="text-xs text-[#99A1AF]">{data.contact.support}</p>
              </div>
              <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
              <div>
                {data.contact.coverage.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#364153] pt-8 text-sm leading-[1.6] text-[#99A1AF] md:flex-row md:items-center md:justify-between">
          <p>{data.copyright}</p>
          <div className="flex flex-wrap gap-6">
            {data.legal.map((item) => (
              <span key={item} className="text-[#99A1AF]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-lg font-bold leading-[1.6]">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2 text-sm font-medium leading-[1.48] text-[#D1D5DC]">
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} className={item.label.includes('24/7') ? 'text-[#A6A6A6]' : undefined}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
