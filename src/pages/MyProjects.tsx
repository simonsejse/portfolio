import React from 'react';

export default function MyProjects() {
  return (
    <>
      <section className='bg-gray-900 overflow-hidden'>
        <div className='mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 py-12 xl:py-20'>
          <div className='max-w-xl mx-auto px-5'>
            <div className='mb-4'>
              <div className='flex justify-center items-center'>
                <span
                  className='text-sm font-black uppercase text-center text-gray-500 dark:text-gray-400'
                  style={{ letterSpacing: '0.35em' }}
                >
                  🖥 Mine projekter ⌨️
                </span>
              </div>
            </div>
            <h1 className='text-center text-[48px] font-black mb-4 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400'>
              Projekter
            </h1>
          </div>
        </div>
      </section>
      <section className='bg-gray-900 overflow-hidden'>
        <div className='mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 py-12 xl:py-20'>
          <h2 className='mt-0 mb-4 text-gray-900 dark:text-gray-100 text-2xl sm:text-3xl font-extrabold'>
            Ingen projekter endnu
          </h2>
          <p className='text-lg sm:text-xl mb-6 text-gray-700 dark:text-gray-300'>
            Jeg har endnu ikke tilføjet nogle projekter her endnu.
          </p>
          <a
            href='https://github.com/simonsejse'
            className='border-2 border-indigo-500 rounded-lg p-3 text-white'
          >
            Github for eventuelle projekter
          </a>
        </div>
      </section>
    </>
  );
}
