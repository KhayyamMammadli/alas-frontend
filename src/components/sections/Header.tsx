import { useEffect, useState } from 'react';
import type { HomePageData } from '../../data/homePageData';
import { Button } from '../ui/Button';
import { ChevronDown } from '../ui/Icons';

type HeaderProps = {
  data: HomePageData['navigation'];
};

const dropdownMenus: Record<string, readonly { label: string; description: string; href: string }[]> = {
  Services: [
    { label: 'All Appliance Repair', description: 'Explore every repair service', href: '/services/appliance-repair' },
    { label: 'Refrigerator Repair', description: 'Cooling and refrigerator service', href: '/services/refrigerator-repair' },
    { label: 'Washer Repair', description: 'Washer and laundry emergencies', href: '/services/washer-repair' },
    { label: 'HVAC Repair', description: 'Heating and cooling support', href: '/services/hvac-repair' },
    { label: 'Commercial Walk-in Cooler', description: 'Dallas commercial refrigeration', href: '/services/commercial-walk-in-cooler-repair' },
  ],
  Brands: [
    { label: 'Samsung Appliance Repair', description: 'Specialized Samsung technicians', href: '/brands/samsung-appliance-repair' },
    { label: 'Samsung Error Codes', description: 'Refrigerator error-code library', href: '/guides/samsung-refrigerator-error-codes' },
    { label: 'Samsung Error 22E', description: 'Meaning, checks, and repair help', href: '/guides/samsung-refrigerator-error-code-22e' },
  ],
  'Protection Plans': [
    { label: 'Protection Plan Overview', description: 'Compare coverage options', href: '/protection-plans' },
    { label: 'Residential Plans', description: 'Protection for your home', href: '/blog-guides' },
    { label: 'Commercial Plans', description: 'Coverage for your business', href: '/careers' },
    { label: 'Plan Questions', description: 'Talk with our service team', href: '/contact' },
  ],
  'Service areas': [
    { label: 'West Plano', description: 'Local appliance repair', href: '/services/refrigerator-repair' },
    { label: 'Plano Emergency Service', description: 'Same-day emergency support', href: '/services/washer-repair' },
    { label: 'Samsung Service Area', description: 'Samsung repair coverage', href: '/locations/samsung-refrigerator-error-code-22e' },
    { label: 'Find Local Service', description: 'Contact the nearest team', href: '/contact' },
  ],
};

export function Header({ data }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setOpenMobileDropdown(null);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white shadow-soft">
      <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-5 md:px-10 xl:h-[88px] xl:px-20">
        <a href="/" className="shrink-0" aria-label="ALAS Appliance Service home">
          <img src={data.logo} alt="ALAS Appliance Service" className="h-9 w-[122px] object-contain" />
        </a>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          {data.links.map((link) => {
            const items = dropdownMenus[link];
            if (!items) {
              return <a key={link} href="/about" className="text-base font-semibold leading-[1.6] text-ink-900 transition-colors hover:text-[#0066CC]">{link}</a>;
            }

            return (
              <div key={link} className="group relative flex h-[88px] items-center">
                <button type="button" className="inline-flex items-center gap-1 text-base font-semibold leading-[1.6] text-ink-900 transition-colors group-hover:text-[#0066CC] group-focus-within:text-[#0066CC]" aria-haspopup="true">
                  {link}
                  <ChevronDown className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-[76px] w-[336px] -translate-x-1/2 translate-y-2 rounded-2xl border border-[#E5EAF0] bg-white p-2 opacity-0 shadow-[0_20px_50px_rgba(10,22,40,0.16)] transition-[opacity,transform,visibility] duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <span className="absolute -top-2 left-1/2 size-4 -translate-x-1/2 rotate-45 border-l border-t border-[#E5EAF0] bg-white" />
                  {items.map((item) => (
                    <a key={item.label} href={item.href} className="relative flex min-h-[50px] items-center rounded-xl px-4 py-2 transition-colors hover:bg-[#F0F6FF] focus:bg-[#F0F6FF] focus:outline-none">
                      <span className="text-[15px] font-semibold leading-6 text-[#042330]">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden w-[382px] items-center justify-end gap-4 xl:flex">
          <div className="flex items-center gap-2">
            <div className="relative size-9 overflow-hidden rounded-full">
              <img src={data.expert.avatar} alt="" className="size-full object-cover" />
              <span className="absolute bottom-0 right-0 size-2 rounded-full bg-[#1AD598] ring-2 ring-white" />
            </div>
            <div>
              <p className="text-xs font-medium text-ink-900">{data.expert.label}</p>
              <p className="text-base font-semibold leading-[1.6] text-ink-500">{data.expert.phone}</p>
            </div>
          </div>
          <Button href="#schedule" aria-label="Schedule appliance repair service">
            {data.cta}
          </Button>
        </div>

        <div className="flex items-center gap-5 xl:hidden">
          <a
            href="tel:+14696383215"
            className="flex h-12 items-center justify-center rounded-[120px] bg-[#0066CC] px-5 text-[16px] font-semibold leading-6 text-[#F5FAFF] shadow-[0_1px_2px_rgba(16,24,40,0.05)]"
          >
            Call now
          </a>
          <button
            type="button"
            className="inline-flex size-6 items-center justify-center"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg aria-hidden="true" className="size-6" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="#042330" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={`absolute left-0 top-0 z-[60] max-h-[calc(100vh-12px)] w-full overflow-y-auto border-b border-[rgba(0,10,20,0.08)] bg-white pb-px shadow-[0_1px_1.5px_rgba(0,0,0,0.1),0_1px_1px_rgba(0,0,0,0.1)] transition-[transform,opacity,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0 xl:hidden ${
          isMenuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible pointer-events-none -translate-y-3 opacity-0'
        }`}
      >
          <div className="flex w-full flex-col items-start gap-4 px-4 pb-5 pt-4">
            <div className="flex h-10 w-full shrink-0 items-center justify-between">
              <a href="/" aria-label="ALAS Appliance Service home" onClick={() => setIsMenuOpen(false)}>
                <img src={data.logo} alt="ALAS Appliance Service" className="h-8 w-[108.656px] object-contain" />
              </a>
              <button
                type="button"
                className="flex size-10 items-center justify-center"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg aria-hidden="true" className="size-6" viewBox="0 0 24 24" fill="none">
                  <path d="m7.5 7.5 9 9M16.5 7.5l-9 9" stroke="#0A1628" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="flex w-full shrink-0 flex-col items-start gap-1 border-t border-[#F3F4F6] pt-[17px]" aria-label="Mobile navigation">
              {Object.entries(dropdownMenus).map(([label, items]) => {
                const isOpen = openMobileDropdown === label;
                return (
                  <div key={label} className="w-full border-b border-[#F3F4F6]">
                    <button type="button" className="flex h-12 w-full items-center justify-between text-[16px] font-semibold leading-6 text-[#0A1628]" aria-expanded={isOpen} onClick={() => setOpenMobileDropdown(isOpen ? null : label)}>
                      {label}
                      <ChevronDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0066CC]' : ''}`} />
                    </button>
                    <div className={`grid transition-[grid-template-rows,opacity] duration-200 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="min-h-0 overflow-hidden">
                        <div className="mb-3 flex flex-col gap-1 rounded-xl bg-[#F7FAFC] p-2">
                          {items.map((item) => (
                            <a key={item.label} href={item.href} className="rounded-lg px-3 py-3 transition-colors hover:bg-[#EAF3FF]" onClick={() => { setIsMenuOpen(false); setOpenMobileDropdown(null); }}>
                              <span className="block text-[14px] font-semibold leading-5 text-[#042330]">{item.label}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <a href="/about" className="flex h-12 w-full items-center border-b border-[#F3F4F6] text-[16px] font-semibold leading-6 text-[#0A1628]" onClick={() => setIsMenuOpen(false)}>About us</a>

              <div className="flex w-full shrink-0 flex-col items-start gap-3 pt-[17px]">
                <a href="tel:+14696383215" className="flex h-[37.5px] items-center">
                  <span className="relative size-9 shrink-0 overflow-hidden rounded-full">
                    <img src={data.expert.avatar} alt="" className="size-full object-cover" />
                    <span className="absolute bottom-0 right-0 size-2 rounded-full border-2 border-white bg-[#1AD598]" />
                  </span>
                  <span className="ml-2 flex h-[37.5px] flex-col items-start">
                    <span className="text-[11px] font-medium leading-[16.5px] text-[#000A14]">{data.expert.label}</span>
                    <span className="text-[14px] font-semibold leading-[21px] text-[#575757]">{data.expert.phone}</span>
                  </span>
                </a>

                <a
                  href="#schedule"
                  className="flex h-[45px] w-full shrink-0 items-center justify-center rounded-full bg-[#0066CC] px-5 py-3 text-center text-[14px] font-semibold leading-[21px] text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {data.cta}
                </a>
              </div>
            </nav>
          </div>
      </div>
    </header>
  );
}
