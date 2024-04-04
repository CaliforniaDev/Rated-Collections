type BurgerButtonProps = {
  onClick: () => void;
};

export default function BurgerButton({ onClick }: BurgerButtonProps) {
  return (
    <button onClick={onClick} className='flex items-center lg:hidden'>
      <svg
        className='h-6 w-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M4 6h16M4 12h16m-7 6h7'
        />
      </svg>
    </button>
  );
}
