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
      <div className='bg-opaque-bg absolute inset-0 '></div>
    </div>
  );
}
