import { motion } from 'framer-motion';

import NavLinks from '@/components/ui/navigation/nav-links/NavLinks';

type MobileMenuProps = {
  isOpen: boolean;
  onClose?: () => void;
};

const variants = {
  open: {
    x: 0,
    transition: {
      duration: 0.2,
      type: 'tween',
    },
  },
  closed: {
    x: '100%',
    transition: {
      duration: 0.3,
      type: 'tween',
    },
  },
};

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  return (
    <motion.div
      variants={variants}
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      className='bg-surface-container dark:bg-surface-container-dark fixed right-0 top-0 -z-50 h-dvh w-1/3 px-12 py-20 shadow lg:hidden '
    >
      <NavLinks />
    </motion.div>
  );
}
