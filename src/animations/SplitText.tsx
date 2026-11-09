import React from 'react';

interface SplitTextProps {
  text: string;
  mode?: 'words' | 'characters';
  wordClassName?: string;
}

export const SplitText: React.FC<SplitTextProps> = ({ text, mode = 'words', wordClassName }) => {
  if (mode === 'characters') {
    return (
      <span aria-hidden="true">
        {Array.from(text).map((character, index) => (
          <span key={`${character}-${index}`} data-nav-char className="inline-block">
            {character === ' ' ? '\u00a0' : character}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span aria-hidden="true">
      {text.split(/(\s+)/).map((part, index) =>
        /^\s+$/.test(part) ? part : (
        <span key={`${part}-${index}`} data-hero-word className={wordClassName ?? 'inline-block'}>
            {part}
          </span>
        )
      )}
    </span>
  );
};
