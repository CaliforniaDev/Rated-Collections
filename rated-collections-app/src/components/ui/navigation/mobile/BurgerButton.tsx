import { motion } from 'framer-motion';

type BurgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function BurgerButton({ onClick, isOpen }: BurgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className='lg:hidden stroke-on-surface dark:stroke-on-surface-dark border-primary flex flex-col items-center stroke-[2px]'
    >
      <motion.svg
        animate={isOpen ? 'open' : 'closed'}
        initial='closed'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <motion.path
          strokeLinecap='round'
          variants={{
            closed: { d: 'M 1 1 L 23 1' },
            open: { d: 'M 1 23 L 23 1' },
          }}
        />
        <motion.path
          strokeLinecap='round'
          d='M 1 12 L 23 12'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeLinecap='round'
          variants={{
            closed: { d: 'M 12 23 L 23 23' },
            open: { d: 'M 1 1 L 23 23' },
          }}
        />
      </motion.svg>
    </button>
  );
}