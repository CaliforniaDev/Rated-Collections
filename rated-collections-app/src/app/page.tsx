import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between py-20'>
      <HeroSection
        backgroundImage='/images/hero/hollywood-sunset.webp'
        overlayColor='#181D19'
      >
        <h1 className='text-4xl'>Welcome to Rated Collections</h1>
        <Image
          src='/images/navigation/logo.svg'
          alt='R8TED Collections'
          width={400}
          height={400}
        />
      </HeroSection>
    </main>
  );
}
