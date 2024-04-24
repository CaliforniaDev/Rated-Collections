import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import Header from '@/components/ui/hero/Header';

import heroImage from '@/../public/images/hero/bi-racial-couple_purple-white.webp';
import smallHeroImage from '@/../public/images/hero/female-prince-hero.webp';
import Overlay from '@/components/ui/overlay/Overlay';
export default function Home() {
  return (
    <main className='pt-nav-height relative flex min-h-screen flex-col overflow-hidden'>
      <HeroSection>
        <div className='hidden bg-primary relative col-span-2 md:flex items-end overflow-hidden rounded-xl p-10 h-full'>
          <Image
            priority
            src={heroImage}
            fill
            quality={85}
            placeholder='blur'
            className='object-cover'
            sizes='(min-width: 1200px) 1300px, (min-width: 768px) 650px, 100vw'
            alt="Woman wearing a black shirt with logo 'Rated Collection' on it."
          />
          <Overlay />
          <Header />
        </div>
        <div className='relative overflow-hidden rounded-xl'>
          <Image
            priority
            src={smallHeroImage}
            fill
            quality={85}
            placeholder='blur'
            className='object-cover'
            alt='woman wearing white t shirt'
          />
          <Overlay />
        </div>

        {/* Shows only on mobile devices
        <div className='mt-6 flex flex-col gap-6 sm:hidden'>
          <Button route='/shop' variant='filled'>
            Shop Now
          </Button>
          <Button variant='outlined'>Subscribe</Button>
        </div> */}
      </HeroSection>
    </main>
  );
}
