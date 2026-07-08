type IconProps = {
  className?: string;
};

export function CheckCircle({ className = '' }: IconProps) {
  return (
    <span className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white ${className}`}>
      <svg aria-hidden="true" className="size-4" viewBox="0 0 20 20" fill="none">
        <path d="M5 10.3 8.2 13.5 15 6.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function GreenCheck({ className = '' }: IconProps) {
  return (
    <span className={`inline-flex size-8 shrink-0 items-center justify-center text-[#18D21E] ${className}`}>
      <svg aria-hidden="true" className="size-8" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12.5" stroke="currentColor" strokeWidth="3" />
        <path d="M10 16.2 14 20.2 22.5 11.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function SmallCheck({ className = '' }: IconProps) {
  return (
    <span className={`inline-flex size-[22px] shrink-0 items-center justify-center rounded-full bg-brand-700 text-white ${className}`}>
      <svg aria-hidden="true" className="size-3.5" viewBox="0 0 20 20" fill="none">
        <path d="M5 10.3 8.2 13.5 15 6.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function ArrowRight({ className = '' }: IconProps) {
  return (
    <svg aria-hidden="true" className={`size-4 ${className}`} viewBox="0 0 20 20" fill="none">
      <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronDown({ className = '' }: IconProps) {
  return (
    <svg aria-hidden="true" className={`size-4 ${className}`} viewBox="0 0 20 20" fill="none">
      <path d="m5 8 5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
