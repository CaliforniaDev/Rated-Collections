import Image from 'next/image';
type HeroProps = {
  backgroundImage: string;
  overlayColor: string;
  children: React.ReactNode;
};

function HeroSection({ backgroundImage, overlayColor, children }: HeroProps) {
  return (
    <div className='fullscreen-minus-nav relative w-full border'>
      <div className='-z-10'>
        <Image
          priority
          src={backgroundImage}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          alt='Hero Image'
        />
      </div>
      <div
        className='absolute inset-0'
        style={{ backgroundColor: overlayColor}}
      >
        {children}
      </div>
    </div>
  );
}

export default HeroSection;
