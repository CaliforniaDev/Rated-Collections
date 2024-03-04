import Image from 'next/image';
import SearchBar from '@/components/ui/search/searchbar';
import './styles.css';



export default function Navbar() {

  return (
    <nav className='bg-surface-container fixed h-20 w-screen px-6 py-3 shadow'>
      <div className='flex h-full justify-between gap-12'>
        <div className='flex basis-2/5 items-center'>
          <ul className='text-on-surface text-body-lg flex items-center gap-x-12'>
            <li className='text-primary'>
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
        <div className=' flex  min-w-20 basis-1/5 justify-center'>
          <Image
            src='/images/navigation/logo.svg'
            alt='R8TED Collections'
            width={0}
            height={0}
            style={{ width: '74px', height: 'auto' }}
          />
        </div>
        <div className='flex grow basis-2/5 justify-end'>
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}
