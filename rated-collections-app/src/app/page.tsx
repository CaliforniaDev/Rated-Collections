import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';

export default function Home() {
  return (
    <main className='flex min-h-screen gap-4 flex-col p-24'>
      <Button color="primary" className="dark:primary" variant="solid" radius="md">Click Me!</Button>
      <div className="size-40 text-primary-foreground bg-primary">
        <p>Hello Next JS</p>
      </div>
      <ThemeSwitcher />
    </main>
  );
}
