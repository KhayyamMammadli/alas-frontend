type SectionHeaderProps = {
  title: string;
  description?: string;
  inverse?: boolean;
  className?: string;
};

export function SectionHeader({ title, description, inverse = false, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mx-auto flex max-w-5xl flex-col items-center gap-6 text-center ${className}`}>
      <h2 className={`pb-[9.3px] text-[32px] font-bold leading-[1.4] md:text-[42px] ${inverse ? 'text-white' : 'text-ink-900'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`max-w-[844px] text-base font-semibold leading-[1.6] ${inverse ? 'text-white' : 'text-ink-600'}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
