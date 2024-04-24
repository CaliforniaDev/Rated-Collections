import Image from 'next/image';
import bgImage from '@/../public/images/background/hollywood-sunset.webp';

export default function BgImage() {
  return (
    <div className='fixed h-screen w-screen'>
      <Image
        src={bgImage}
        alt='image of hollywood sign and palm trees.'
        fill
        className='-z-10 object-cover'
        placeholder='blur'
        sizes='100vw'
      />
      <div className=' bg-surface-container dark:bg-surface-container-dark absolute inset-0 opacity-70 dark:opacity-80 '></div>
    </div>
  );
}
