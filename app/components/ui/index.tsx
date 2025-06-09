import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 's' | 'm' | 'l';
  weight?: 'default' | 'strong';
  prefixIcon?: string;
  href?: string;
  'data-border'?: 'rounded' | 'square';
}

export function Button({
  children,
  variant = 'primary',
  size = 'm',
  weight = 'default',
  prefixIcon,
  href,
  'data-border': border,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center transition-colors';
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    tertiary: 'bg-transparent text-primary hover:bg-primary/10',
  };
  const sizeClasses = {
    s: 'text-sm px-3 py-1.5',
    m: 'text-base px-4 py-2',
    l: 'text-lg px-6 py-3',
  };
  const weightClasses = {
    default: 'font-normal',
    strong: 'font-semibold',
  };
  const borderClasses = {
    rounded: 'rounded-full',
    square: 'rounded-md',
  };

  const className = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${weightClasses[weight]} ${borderClasses[border || 'square']}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {prefixIcon && <span className="mr-2">{prefixIcon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {prefixIcon && <span className="mr-2">{prefixIcon}</span>}
      {children}
    </button>
  );
}

interface HeadingProps {
  children: React.ReactNode;
  variant?: 'display-strong-s' | 'display-strong-m' | 'display-strong-l';
}

export function Heading({ children, variant = 'display-strong-m' }: HeadingProps) {
  const classes = {
    'display-strong-s': 'text-2xl font-bold',
    'display-strong-m': 'text-3xl font-bold',
    'display-strong-l': 'text-4xl font-bold',
  };

  return <h1 className={classes[variant]}>{children}</h1>;
}

interface TextProps {
  children: React.ReactNode;
  variant?: 'body-default-s' | 'body-default-m' | 'body-default-l';
  onBackground?: 'neutral-weak' | 'neutral-medium' | 'neutral-strong';
}

export function Text({
  children,
  variant = 'body-default-m',
  onBackground = 'neutral-weak',
}: TextProps) {
  const variantClasses = {
    'body-default-s': 'text-sm',
    'body-default-m': 'text-base',
    'body-default-l': 'text-lg',
  };
  const backgroundClasses = {
    'neutral-weak': 'text-gray-500',
    'neutral-medium': 'text-gray-700',
    'neutral-strong': 'text-gray-900',
  };

  return (
    <p className={`${variantClasses[variant]} ${backgroundClasses[onBackground]}`}>
      {children}
    </p>
  );
}

interface RowProps {
  children?: React.ReactNode;
  gap?: '12' | '16' | '24';
  vertical?: 'start' | 'center' | 'end';
  horizontal?: 'start' | 'center' | 'end';
  fillWidth?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  paddingLeft?: string;
  hide?: 'm' | 'l';
  onBackground?: 'neutral-weak' | 'neutral-medium' | 'neutral-strong';
  textVariant?: string;
  fitHeight?: boolean;
  position?: 'sticky';
  top?: string;
}

export function Row({
  children,
  gap = '16',
  vertical = 'start',
  horizontal = 'start',
  fillWidth,
  maxWidth,
  paddingLeft,
  hide,
  onBackground,
  textVariant,
  fitHeight,
  position,
  top,
}: RowProps) {
  const gapClasses = {
    '12': 'gap-3',
    '16': 'gap-4',
    '24': 'gap-6',
  };
  const verticalClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  };
  const horizontalClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
  };
  const hideClasses = {
    m: 'hidden md:flex',
    l: 'hidden lg:flex',
  };
  const backgroundClasses = {
    'neutral-weak': 'bg-gray-100',
    'neutral-medium': 'bg-gray-200',
    'neutral-strong': 'bg-gray-300',
  };
  const maxWidthClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  const className = `flex ${gapClasses[gap]} ${verticalClasses[vertical]} ${horizontalClasses[horizontal]} ${
    fillWidth ? 'w-full' : ''
  } ${maxWidth ? maxWidthClasses[maxWidth] : ''} ${paddingLeft ? `pl-${paddingLeft}` : ''} ${
    hide ? hideClasses[hide] : ''
  } ${onBackground ? backgroundClasses[onBackground] : ''} ${textVariant ? textVariant : ''} ${
    fitHeight ? 'h-fit' : ''
  } ${position ? `position-${position}` : ''} ${top ? `top-${top}` : ''}`;

  return <div className={className}>{children}</div>;
}

interface ColumnProps {
  children: React.ReactNode;
  gap?: '12' | '16' | '24';
  as?: 'section' | 'article' | 'div';
  fillWidth?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  paddingLeft?: string;
  hide?: 'm' | 'l';
  fitHeight?: boolean;
  position?: 'sticky';
  top?: string;
}

export function Column({
  children,
  gap = '16',
  as: Component = 'div',
  fillWidth,
  maxWidth,
  paddingLeft,
  hide,
  fitHeight,
  position,
  top,
}: ColumnProps) {
  const gapClasses = {
    '12': 'gap-3',
    '16': 'gap-4',
    '24': 'gap-6',
  };
  const maxWidthClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };
  const hideClasses = {
    m: 'hidden md:flex',
    l: 'hidden lg:flex',
  };

  const className = `flex flex-col ${gapClasses[gap]} ${fillWidth ? 'w-full' : ''} ${
    maxWidth ? maxWidthClasses[maxWidth] : ''
  } ${paddingLeft ? `pl-${paddingLeft}` : ''} ${hide ? hideClasses[hide] : ''} ${
    fitHeight ? 'h-fit' : ''
  } ${position ? `position-${position}` : ''} ${top ? `top-${top}` : ''}`;

  return <Component className={className}>{children}</Component>;
}

interface AvatarGroupProps {
  avatars: Array<{ src: string }>;
  size?: 's' | 'm' | 'l';
}

export function AvatarGroup({ avatars, size = 'm' }: AvatarGroupProps) {
  const sizeClasses = {
    s: 'w-6 h-6',
    m: 'w-8 h-8',
    l: 'w-10 h-10',
  };

  return (
    <div className="flex -space-x-2">
      {avatars.map((avatar, index) => (
        <img
          key={index}
          src={avatar.src}
          alt=""
          className={`${sizeClasses[size]} rounded-full border-2 border-white`}
        />
      ))}
    </div>
  );
}

interface IconProps {
  name: string;
  size?: 'xs' | 's' | 'm' | 'l';
}

export function Icon({ name, size = 'm' }: IconProps) {
  const sizeClasses = {
    xs: 'w-3 h-3',
    s: 'w-4 h-4',
    m: 'w-5 h-5',
    l: 'w-6 h-6',
  };

  return (
    <span className={`inline-block ${sizeClasses[size]}`}>
      {/* You can replace this with your preferred icon library */}
      {name}
    </span>
  );
}

interface HeadingNavProps {
  fitHeight?: boolean;
}

export function HeadingNav({ fitHeight }: HeadingNavProps) {
  return (
    <nav className={`flex flex-col ${fitHeight ? 'h-full' : ''}`}>
      {/* Add your navigation content here */}
    </nav>
  );
} 