import './styles.css';
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from '@/components/ui/search/searchbar';
import BagIcon from '@/assets/svg/navigation/BagIcon';
import { ThemeSwitcher } from '@/theme/ThemeSwitcher';
import NavLinks from '@/components/ui/navigation/nav-links/NavLinks';

export default function Navbar() {
  return (
    <nav className='bg-surface-container dark:bg-surface-container-dark fixed h-20 w-screen px-6 py-3 shadow'>
      <div className='flex h-full justify-between gap-12'>
        <div className=' flex  min-w-20 basis-1/5 justify-center'>
          <Link href='/'>
            <Image
              src='/images/navigation/logo.svg'
              alt='R8TED Collections'
              width={0}
              height={0}
              style={{ width: '74px', height: 'auto' }}
            />
          </Link>
        </div>

        <div className='flex basis-3/5 items-center justify-center'>
          <NavLinks />
        </div>

        <div className='flex grow basis-1/5 items-center justify-end gap-10'>
          <BagIcon className='fill-on-surface dark:fill-on-surface-dark' />
          <div className='w-6'>
            <ThemeSwitcher />
          </div>
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}
