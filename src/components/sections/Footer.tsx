import type { HomePageData } from '../../data/homePageData';

type FooterProps = {
  data: HomePageData['footer'];
};

const socialLinks = [
  { label: 'Facebook', icon: '/assets/figma-footer-facebook.svg', href: '#' },
  { label: 'Instagram', icon: '/assets/figma-footer-instagram.svg', href: '#' },
  { label: 'LinkedIn', icon: '/assets/figma-footer-linkedin.svg', href: '#' },
];

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
    <footer className="h-[1056px] overflow-hidden bg-[#0A1628] px-5 pt-[50px] text-white xl:h-[466px] xl:px-20 xl:pb-0 xl:pt-16">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="flex flex-col items-start gap-8 xl:grid xl:h-[232px] xl:grid-cols-4 xl:gap-8">
          <section className="flex h-[232px] w-full flex-col items-start gap-4">
            <img src="/assets/figma-footer-logo.png" alt="ALAS Appliance Services" className="h-[54.481px] w-[185px] object-cover" />
            <p className="h-[60px] w-full max-w-[353px] text-[14px] font-normal leading-[1.6] text-[#D1D5DC] xl:max-w-[285px]">{data.description}</p>
            <div className="flex h-10 items-start gap-3">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} aria-label={item.label} className="flex size-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20">
                  <img src={item.icon} alt="" className="size-5" />
                </a>
              ))}
            </div>
          </section>

          <FooterColumn title="Services" items={serviceLinks} />
          <FooterColumn title="Company" items={companyLinks} />

          <section className="flex h-[232px] w-full flex-col items-start gap-4">
            <h3 className="h-7 text-[18px] font-bold leading-[1.6] text-white">Contact</h3>
            <ul className="flex w-full flex-col items-start gap-3 text-[14px] font-normal leading-[1.6] text-[#D1D5DC]">
              <li className="flex h-10 items-start gap-2">
                <img src="/assets/figma-footer-phone.svg" alt="" className="mt-0.5 size-5 shrink-0" />
                <div className="h-10">
                  <a href="tel:+18005551234" className="block h-5 font-semibold leading-5">{data.contact.phone}</a>
                  <span className="block text-[12px] font-normal leading-[1.6] text-[#99A1AF]">{data.contact.support}</span>
                </div>
              </li>
              <li className="flex h-[22px] items-start gap-2">
                <img src="/assets/figma-footer-email.svg" alt="" className="mt-0.5 size-5 shrink-0" />
                <a href={`mailto:${data.contact.email}`} className="leading-5">{data.contact.email}</a>
              </li>
              <li className="flex min-h-10 items-start gap-2">
                <img src="/assets/figma-footer-location.svg" alt="" className="mt-0.5 size-5 shrink-0" />
                <span className="whitespace-nowrap leading-5 xl:whitespace-normal">
                  <span>{data.contact.coverage[0]}</span>
                  <span className="ml-1 xl:ml-0 xl:block">{data.contact.coverage[1]}</span>
                </span>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-12 hidden h-[55.398px] items-start justify-between border-t border-[#364153] pt-8 text-[14px] font-normal leading-[1.6] text-[#99A1AF] xl:flex">
          <p>{data.copyright}</p>
          <nav aria-label="Legal links" className="flex items-start gap-6">
            {data.legal.map((item) => <a key={item} href="#" className="text-[#99A1AF]">{item}</a>)}
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: readonly { label: string; href: string }[] }) {
  return (
    <section className="flex h-[232px] w-full flex-col items-start gap-4">
      <h3 className="h-7 text-[18px] font-bold leading-[1.6] text-white">{title}</h3>
      <ul className="flex h-[188px] flex-col items-start gap-2 text-[14px] font-medium leading-[1.48] text-[#D1D5DC]">
        {items.map((item) => (
          <li key={item.label} className="h-5">
            <a href={item.href} className={item.label.includes('24/7') ? 'text-[#A6A6A6]' : 'transition-colors hover:text-white'}>{item.label}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
