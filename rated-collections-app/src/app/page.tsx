import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import heroImage from '@/assets/images/woman-wearing-black.webp';
import heroBg from '@/assets/images/hollywood-sunset.webp';
import Button from '@/components/ui/buttons/Button';
export default function Home() {
  return (
    <main className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20'>
      <HeroSection backgroundImage={heroBg} overlayColor='rgba(18,29,25, 0.9)'>
        <div className='bg-primary relative flex h-2/3 w-full overflow-hidden rounded-xl lg:h-full'>
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

          {/* Shows only on tablet or desktop devices */}
          <header className='text-display-lg absolute ml-10 mt-20 hidden w-3/5 flex-col uppercase sm:flex md:w-2/5 lg:ml-28 lg:mt-40'>
            <h1 className='text-display-sm md:text-display-md lg:text-display-lg'>
              <span className='text-primary dark:text-primary-dark'>
                R8ted{' '}
              </span>
              or not here we come!
            </h1>
            <div className='mt-7 flex gap-4'>
              <Button route='/shop' variant='filled'>
                Shop Now
              </Button>
              <Button variant='outlined'>Subscribe</Button>
            </div>
          </header>
          
        </div>

        {/* Shows only on mobile devices */}
        <div className='mt-6 flex flex-col gap-6 sm:hidden'>
          <Button route='/shop' variant='filled'>
            Shop Now
          </Button>
          <Button variant='outlined'>Subscribe</Button>
        </div>
      </HeroSection>
    </main>
  );
}
