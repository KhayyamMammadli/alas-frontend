import { useEffect, useState } from 'react';
import type { HomePageData } from '../../data/homePageData';
import { Button } from '../ui/Button';
import { ChevronDown } from '../ui/Icons';

type HeaderProps = {
  data: HomePageData['navigation'];
};

export function Header({ data }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isMenuOpen]);

  const linkTargets: Record<string, string> = {
    Services: '/services/appliance-repair',
    Brands: '/services/hvac-repair',
    'Protection Plans': '/protection-plans',
    'Service areas': '/guides/samsung-refrigerator-error-codes',
    'About us': '/about',
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white shadow-soft">
      <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-5 md:px-10 xl:h-[88px] xl:px-20">
        <a href="/" className="shrink-0" aria-label="ALAS Appliance Service home">
          <img src={data.logo} alt="ALAS Appliance Service" className="h-9 w-[122px] object-contain" />
        </a>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          {data.links.map((link) => (
            <a
              key={link}
              href={linkTargets[link] ?? '#'}
              className="inline-flex items-center gap-1 text-base font-semibold leading-[1.6] text-ink-900"
            >
              {link}
              {link !== 'About us' ? <ChevronDown /> : null}
            </a>
          ))}
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
        className={`absolute left-0 top-0 z-[60] h-[434px] w-full border-b border-[rgba(0,10,20,0.08)] bg-white pb-px shadow-[0_1px_1.5px_rgba(0,0,0,0.1),0_1px_1px_rgba(0,0,0,0.1)] transition-[transform,opacity,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0 xl:hidden ${
          isMenuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible pointer-events-none -translate-y-3 opacity-0'
        }`}
      >
          <div className="flex h-[432.5px] w-full flex-col items-start gap-4 px-4 pt-4">
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

            <nav className="flex h-[344.5px] w-full shrink-0 flex-col items-start gap-3 border-t border-[#F3F4F6] pt-[17px]" aria-label="Mobile navigation">
              {[
                ['Services', '/services/appliance-repair'],
                ['Brands', '/services/hvac-repair'],
                ['Protection Plans', '/protection-plans'],
                ['Service areas', '/guides/samsung-refrigerator-error-codes'],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="flex h-10 w-full shrink-0 items-center text-[16px] font-semibold leading-6 text-[#0A1628]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              ))}

              <div className="flex h-[111.5px] w-full shrink-0 flex-col items-start gap-3 border-t border-[#F3F4F6] pt-[17px]">
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
