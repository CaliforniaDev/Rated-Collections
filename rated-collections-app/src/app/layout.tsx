import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/ui/navigation/desktop/navbar';

const robotoFlex = Roboto_Flex({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'R8TED Collections',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={robotoFlex.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
