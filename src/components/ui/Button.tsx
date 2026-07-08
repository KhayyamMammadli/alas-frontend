import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'orange';

type BaseButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
};

type ButtonProps =
  | (BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (BaseButtonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

const variantClass: Record<ButtonVariant, string> = {
  primary: 'bg-brand-700 text-brand-0 hover:bg-brand-800',
  outline: 'border border-brand-100 bg-transparent text-white hover:bg-white/10',
  orange: 'bg-orange text-brand-0 hover:bg-orange/90',
};

export function Button({ children, variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) {
  const classes = [
    'inline-flex shrink-0 items-center justify-center rounded-[120px] font-semibold shadow-sm transition',
    size === 'lg'
      ? 'min-h-[60px] px-7 py-4 text-lg leading-7'
      : size === 'sm'
        ? 'min-h-9 px-4 py-2 text-sm leading-5'
        : 'min-h-12 px-5 py-3 text-base leading-6',
    variantClass[variant],
    className,
  ].join(' ');

  if (props.href) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
