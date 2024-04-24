import Button from '@/components/ui/buttons/Button';

export default function Header() {
  return (
    <header className='text-display-lg relative w-4/6 '>
      <h1 className='text-display-sm md:text-display-md lg:text-display-md uppercase'>
        <span className='text-primary dark:text-primary-dark'>R8ted </span>
        or Not Here We Come!
      </h1>
      <div className='mt-7 flex gap-4'>
        <Button route='/shop' variant='filled'>
          Shop Now
        </Button>
        <Button variant='outlined'>Subscribe</Button>
      </div>
    </header>
  );
}
