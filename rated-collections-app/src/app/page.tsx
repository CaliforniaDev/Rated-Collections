import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl'>Welcome to Rated Collections</h1>
      <Image
        src='/images/navigation/logo.svg'
        alt='R8TED Collections'
        width={400}
        height={400}
      />
    </main>
  );
}
