import type { HomePageData } from '../../data/homePageData';
import { Button } from '../ui/Button';
import { ChevronDown } from '../ui/Icons';

type HeaderProps = {
  data: HomePageData['navigation'];
};

export function Header({ data }: HeaderProps) {
  const linkTargets: Record<string, string> = {
    Services: '/services/appliance-repair',
    Brands: '/#brands',
    'Protection Plans': '/#plans',
    'Service areas': '/#locations',
    'About us': '/#about',
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white shadow-soft">
      <div className="mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between px-4 md:px-10 xl:px-20">
        <a href="/" className="shrink-0" aria-label="ALAS Appliance Service home">
          <img src={data.logo} alt="ALAS Appliance Service" className="h-9 w-[122px] object-contain" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
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

        <div className="hidden w-[382px] items-center justify-end gap-4 lg:flex">
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

        <button className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 lg:hidden" aria-label="Open menu">
          <span className="h-0.5 w-5 bg-ink-900 before:block before:h-0.5 before:w-5 before:-translate-y-1.5 before:bg-ink-900 after:block after:h-0.5 after:w-5 after:translate-y-1 after:bg-ink-900" />
        </button>
      </div>
    </header>
  );
}
