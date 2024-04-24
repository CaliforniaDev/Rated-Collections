type HeroProps = {
  children: React.ReactNode;
};

function HeroSection({ children }: HeroProps) {
  return (
    <div className='fullscreen-minus-nav relative grid md:grid-cols-3 gap-4 p-6 md:p-12 '>
      {children}
    </div>
  );
}

export default HeroSection;
