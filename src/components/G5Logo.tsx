import React from 'react';

interface G5LogoProps {
  className?: string;
  theme?: 'light' | 'dark';
  showMotto?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const G5Logo: React.FC<G5LogoProps> = ({
  className = '',
  theme = 'light',
  showMotto = true,
  size = 'md'
}) => {
  const isDark = theme === 'dark';

  const logoHeight = {
    sm: 'h-11 sm:h-12',
    md: 'h-14 sm:h-16',
    lg: 'h-16 sm:h-20'
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {isDark ? (
        /* Dark Theme presentation: Clean architectural light-backed badge so the authentic green logo remains 100% true to brand specifications */
        <div className="flex items-center gap-3 bg-white/95 px-3 py-1.5 rounded-xs border border-white/20 shadow-xs">
          <img
            src="/assets/g5_logo_transparent.png"
            alt="G5 Engineering Solutions"
            className={`${logoHeight} w-auto object-contain`}
          />
        </div>
      ) : (
        /* Light Theme presentation: Direct clean official logo */
        <img
          src="/assets/g5_logo_transparent.png"
          alt="G5 Engineering Solutions"
          className={`${logoHeight} w-auto object-contain drop-shadow-2xs`}
        />
      )}
    </div>
  );
};
