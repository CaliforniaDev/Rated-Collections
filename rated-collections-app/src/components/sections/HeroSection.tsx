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
          className="object-cover object-center"
          alt='Hero Image'
        />
      </div>
      <div
        className='absolute inset-0 flex p-12'
        style={{ backgroundColor: overlayColor }}
      >
        {children}
      </div>
    </div>
  );
}

export default HeroSection;
