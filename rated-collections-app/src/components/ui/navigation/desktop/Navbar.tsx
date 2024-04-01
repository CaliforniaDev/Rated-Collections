import './styles.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/svg/navigation/logo.svg';
import SearchBar from '@/components/ui/search/searchbar';
import BagIcon from '@/assets/svg/navigation/BagIcon';
import { ThemeSwitcher } from '@/theme/ThemeSwitcher';
import NavLinks from '@/components/ui/navigation/nav-links/NavLinks';

export default function Navbar() {
  return (
    <header className='fixed z-50 w-screen shadow'>
      <nav className='bg-surface-container dark:bg-surface-container-dark h-20 px-12 py-3'>
        {/* Content parent wrapper */}
        <div className='flex h-full justify-between gap-12'>
          {/* Logo */}
          <div className=' flex  min-w-20 basis-1/5'>
            <Link href='/'>
              <Image
                src={logo}
                alt='R8TED Collections'
                width={74}
              />
            </Link>
          </div>

          {/* Nav Links */}
          <div className='flex basis-3/5 items-center justify-center'>
            <NavLinks />
          </div>

          {/* Search and Bag Icons, Theme Switcher */}
          <div className='flex grow basis-1/5 items-center justify-end gap-10'>
            <BagIcon className='fill-on-surface dark:fill-on-surface-dark' />
            <div className='w-6'>
              <ThemeSwitcher />
            </div>
            <SearchBar />
          </div>
        </div>
      </nav>
    </header>
  );
}
