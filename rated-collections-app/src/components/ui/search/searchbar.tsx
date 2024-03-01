'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    console.log(document.activeElement);
    if (isFocused) {
      inputRef.current?.blur();
      inputRef.current?.value && inputRef.current.select();
      setIsOpen(false);
      setIsFocused(false);
    } else {
      setIsOpen(true);
      inputRef.current?.focus();
      setIsFocused(true);
    }
  };

  return (
    <div
      className={clsx(
        ' transition-width max-w-xlg ease bg-surface-container-high relative size-14 justify-self-end overflow-hidden rounded-full duration-300',
        {
          'w-full': isOpen,
        },
      )}
    >
      <input
        ref={inputRef}
        type='search'
        className={clsx(
          'bg-surface-container-high caret-primary size-14 w-full rounded-full px-2 pl-7 pr-14 focus:outline-none',
        )}
        placeholder={isOpen ? 'Search' : ''}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      />
      <button
        onClick={handleButtonClick}
        className={clsx(
          'absolute bottom-0 right-0 top-0 flex size-14 transform items-center justify-center transition-transform duration-300 ease-in-out',
          {
            '-rotate-270': isOpen,
          },
        )}
      >
        <Image
          src='/images/navigation/search-icon.svg'
          alt='Search Icon'
          priority={true}
          width={0}
          height={0}
          style={{ width: '24px', height: 'auto' }}
        />
      </button>
    </div>
  );
}
