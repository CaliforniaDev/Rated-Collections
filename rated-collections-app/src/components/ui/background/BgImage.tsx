import Image from 'next/image';
import bgImage from '@/../public/images/background/hollywood-sunset.webp';

export default function BgImage() {
  return (
    <div className='fixed'>
      <Image
        src={bgImage}
        placeholder='blur'
        sizes='100vw'
        style={{
          objectFit: 'cover',
          zIndex: '-1',
        }}
        alt='background image of hollywood sign.'
      />
      <div className=' bg-surface-container dark:bg-surface-container-dark absolute inset-0 opacity-70 dark:opacity-80 '></div>
    </div>
  );
}
