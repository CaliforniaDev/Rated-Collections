export default function Shop() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl font-bold'>Shop</h1>
      <div className='grid grid-cols-3 gap-4'>
        <div className='flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg'>
          <div className='w-40 h-40 bg-gray-300 rounded-full'></div>
          <h2 className='text-xl font-bold mt-4'>Product 1</h2>
          <p className='text-gray-500'>Description of product 1</p>
          <p className='text-gray-500'>$100</p>
        </div>
        <div className='flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg'>
          <div className='w-40 h-40 bg-gray-300 rounded-full'></div>
          <h2 className='text-xl font-bold mt-4'>Product 2</h2>
          <p className='text-gray-500'>Description of product 2</p>
          <p className='text-gray-500'>$200</p>
        </div>
        <div className='flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg'>
          <div className='w-40 h-40 bg-gray-300 rounded-full'></div>
          <h2 className='text-xl font-bold mt-4'>Product 3</h2>
          <p className='text-gray-500'>Description of product 3</p>
          <p className='text-gray-500'>$300</p>
        </div>
      </div>
    </main>
  );
}