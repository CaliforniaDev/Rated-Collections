'use client';

import './styles.css';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import NavLinks from '@/components/ui/navigation/nav-links/NavLinks';
import logo from '@/assets/svg/navigation/logo.svg';
import BagIcon from '@/assets/svg/navigation/BagIcon';

import SearchBar from '@/components/ui/search/searchbar';
import { ThemeSwitcher } from '@/theme/ThemeSwitcher';

// Mobile Navigation
import BurgerButton from '@/components/ui/navigation/mobile/BurgerButton';
import MobileMenu from '@/components/ui/navigation/mobile/MobileMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className='fixed z-50 w-screen shadow'>
      <nav className='h-nav relative px-6 py-3 md:px-12'>
        {/* Content parent wrapper */}
        <div className='flex h-full justify-between gap-12'>
          {/* Logo */}
          <div className=' flex  min-w-20 basis-1/5'>
            <Link href='/'>
              <Image src={logo} alt='R8TED Collections' width={74} />
            </Link>
          </div>

          {/* Nav Links */}
          <div className='hidden basis-3/5 items-center justify-center lg:flex'>
            <NavLinks />
          </div>

          {/* Nav Icon Buttons */}
          <div className='flex grow basis-1/5 items-center justify-end gap-10'>
            <BagIcon className='fill-on-surface dark:fill-on-surface-dark' />
            <div className='w-6'>
              <ThemeSwitcher />
            </div>
            <SearchBar />
            <MobileMenu isOpen={isMenuOpen} />
            <BurgerButton
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>

          {/* Mobile Navigation */}
        </div>
      </nav>
    </header>
  );
}
{
  /* <nav className='bg-surface-container dark:bg-surface-container-dark relative h-20 px-6 py-3 md:px-12'> */
}
