'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  title: string;
  href: string;
};

export default function NavLinks() {
  const links: NavLink[] = [
    { title: 'Home', href: '/' },
    { title: 'Shop', href: '/shop' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ];

  const pathname = usePathname();

  return (
    <ul className='text-on-surface dark:text-on-surface-dark text-body-lg flex items-center gap-x-12 uppercase'>
      {links.map(link => (
        <li
          key={link.title}
          className={clsx({
            'text-primary dark:text-primary-dark font-bold':
              pathname === link.href,
          })}
        >
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
}
