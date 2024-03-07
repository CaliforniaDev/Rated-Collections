import './styles.css';
import Image from 'next/image';

import SearchBar from '@/components/ui/search/searchbar';
import BagIcon from '@/assets/svg/navigation/BagIcon';
import { ThemeSwitcher } from '@/theme/ThemeSwitcher';

export default function Navbar() {
  return (
    <nav className='bg-surface-container dark:bg-surface-container-dark fixed h-20 w-screen px-6 py-3 shadow'>
      <div className='flex h-full justify-between gap-12'>
        <div className=' flex  min-w-20 basis-1/5 justify-center'>
          <Image
            src='/images/navigation/logo.svg'
            alt='R8TED Collections'
            width={0}
            height={0}
            style={{ width: '74px', height: 'auto' }}
          />
        </div>

        <div className='flex basis-3/5 items-center justify-center'>
          <ul className='text-on-surface dark:text-on-surface-dark text-body-lg flex items-center gap-x-12'>
            <li className='text-primary dark:text-primary-dark'>
              <a href='/'>HOME</a>
            </li>
            <li className='hover:text-secondary'>
              <a href='/'>SHOP</a>
            </li>
            <li>
              <a href='/about'>ABOUT</a>
            </li>
            <li>
              <a href='/contact'>CONTACT</a>
            </li>
          </ul>
        </div>

        <div className='flex grow basis-1/5 items-center justify-end gap-4'>
          <BagIcon className="fill-on-surface dark:fill-on-surface-dark"/>
          <div className='w-6'>
            <ThemeSwitcher />
          </div>
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}
