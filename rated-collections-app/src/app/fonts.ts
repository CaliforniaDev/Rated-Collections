import { Roboto_Flex } from 'next/font/google';
import { Montserrat } from 'next/font/google';

export const roboto_flex = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-flex',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});
