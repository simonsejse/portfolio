import React, { useState } from 'react';
import Dot from '../components/Dot';

export const Experience = () => {
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
                  🖥 mine kompetencer ⌨️
                </span>
              </div>
            </div>
            <h1 className='text-center text-[48px] font-black mb-4 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400'>
              Mine teknologier
            </h1>
          </div>
        </div>
      </section>
      <section class='bg-white dark:bg-gray-900 overflow-hidden'>
        <div className='mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 py-12 lg:py-5 flex flex-no-wrap md:items-start md:space-x-8 items-start flex-col-reverse md:flex-row-reverse md:space-x-reverse'>
          <div className='w-full md:flex-1 flex flex-col md:pl-1/10'>
            <h2 className='mt-0 mb-4 text-gray-900 dark:text-gray-100 text-2xl sm:text-3xl font-extrabold'>
              Frontend development
            </h2>
            <p className='text-lg sm:text-xl mb-3 text-gray-700 dark:text-gray-300'>
              Her er teknologier som jeg har arbejdet med indenfor frontend!
            </p>
            <div className='mt-4 w-full flex flex-col lg:flex-row lg:flex-wrap lg:justify-between space-y-1'>
              <Dot text='React / React Native' />
              <Dot text='HTML, CSS, Javascript (ES6), JSX' />
              <Dot text='React Redux' />
              <Dot text='Tailwind CSS' />
            </div>
          </div>
          <div className='w-full mt-0 mb-10 md:w-2/5 md:mt-0 md:mb-0'>
            <img
              src='https://images.reactbricks.com/original/360e9b50-f8ba-4de4-a24c-925d0e4d2af8.webp'
              sizes='100vw'
              alt='Image'
              width='301'
              height='167'
              loading='lazy'
              decoding='async'
              className='rb-lazy rounded-lg shadow-2xl'
            />
          </div>
        </div>
      </section>
      <section className='bg-gray-900 overflow-hidden'>
        <div className='mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 py-12 lg:py-10 flex flex-no-wrap md:items-start md:space-x-8 items-start flex-col-reverse md:flex-row-reverse md:space-x-reverse'>
          <div className='w-full md:flex-1 flex flex-col md:pl-1/10'>
            <h2 className='mt-0 mb-4 text-gray-900 dark:text-gray-100 text-2xl sm:text-3xl font-extrabold'>
              Backend development
            </h2>
            <p className='text-lg sm:text-xl mb-3 text-gray-700 dark:text-gray-300'>
              Her er teknologier som jeg har arbejdet med indenfor backend!
            </p>
            <div className='mt-4 w-full flex flex-col lg:flex-row lg:flex-wrap lg:justify-between space-y-1'>
              <Dot text='Java (Spring Boot, MVC & REST)' />
              <Dot text='MySQL, MariaDB, SQL & JPQL' />

              <Dot text='Node.js' />
            </div>
          </div>
          <div className='w-full mt-0 mb-10 md:w-2/5 md:mt-0 md:mb-0'>
            <img
              src='https://images.reactbricks.com/original/1e8901b6-8a41-4803-a266-9392966d7f44.webp'
              sizes='100vw'
              alt='Image'
              width='301'
              height='167'
              loading='lazy'
              decoding='async'
              className='rb-lazy rounded-lg shadow-2xl'
            />
          </div>
        </div>
      </section>
    </>
  );
};
