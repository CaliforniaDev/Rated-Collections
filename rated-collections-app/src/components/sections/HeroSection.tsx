import Image, { StaticImageData } from 'next/image';
type HeroProps = {
  backgroundImage: StaticImageData | string;
  overlayColor: string;
  children: React.ReactNode;
};

function HeroSection({ backgroundImage, overlayColor, children }: HeroProps) {
  return (
    <div className='fullscreen-minus-nav relative flex w-full items-center justify-center'>
      <div className='-z-10'>
        <Image
          priority
          src={backgroundImage}
          fill
          className='object-cover object-center'
          alt='Background image of hollywood sign'
        />
      </div>
      <div
        className='absolute inset-0 flex flex-col p-6 md:p-12'
        style={{ backgroundColor: overlayColor }}
      >
        {children}
      </div>
    </div>
  );
}

export default HeroSection;
