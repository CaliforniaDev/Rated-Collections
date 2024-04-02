import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import heroImage from '@/assets/images/woman-wearing-black.webp';
import heroBg from '@/assets/images/hollywood-sunset.webp';
import Button from '@/components/ui/button/Button';
export default function Home() {
  return (
    <main className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20'>
      <HeroSection backgroundImage={heroBg} overlayColor='rgba(18,29,25, 0.9)'>
        <div className='bg-primary relative flex h-full w-full overflow-hidden rounded-xl'>
          <Image
            priority
            src={heroImage}
            fill
            quality={100}
            placeholder='blur'
            className='object-cover object-right'
            sizes='(min-width: 1200px) 1300px, (min-width: 768px) 650px, 100vw'
            alt="Woman wearing a black shirt with logo 'Rated Collection' on it."
          />
          <header className='text-display-lg absolute ml-28 mt-40 w-2/5 uppercase'>
            <h1>
              <span className='text-primary dark:text-primary-dark'>
                R8ted{' '}
              </span>
              or not here we come!
            </h1>
            <div className="flex gap-4 mt-7">
              <Button>Shop Now</Button>
              <Button variant='outlined'>Subscribe</Button>
            </div>
          </header>
        </div>
      </HeroSection>
    </main>
  );
}
