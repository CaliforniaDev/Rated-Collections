'use client';

import clsx from 'clsx';
import { useState, useRef } from 'react';
import SearchIcon from '@/assets/svg/navigation/SearchIcon';

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
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
        'bg-surface-container-high dark:bg-surface-container-high-dark relative overflow-hidden rounded-full transition-all duration-500 ease-in-out',
        isOpen ? 'w-full' : 'h-12 w-12',
      )}
    >
      <input
        ref={inputRef}
        type='search'
        className='bg-surface-container-high text-on-surface dark:text-on-surface-dark dark:bg-surface-container-high-dark caret-primary dark:caret-primary-dark size-14 w-full rounded-full px-2 pl-7 pr-14 focus:outline-none'
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
            'h-12 w-12': !isOpen,
          },
        )}
      >
        <SearchIcon className='fill-on-surface dark:fill-on-surface-dark' />
      </button>
    </div>
  );
}
