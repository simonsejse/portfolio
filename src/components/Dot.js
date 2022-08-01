import React from 'react';

export default function Dot({ text }) {
  return (
    <div className='flex justify-start items-center py-2 leading-tight lg:w-2/5 text-lg'>
      <div className='flex justify-center items-center min-w-[1.25rem] w-[1.25rem] h-[1.25rem] rounded-full mr-4 text-sm bg-pink-100 text-pink-500 dark:bg-pink-500 dark:text-white'>
        <svg
          stroke='currentColor'
          fill='none'
          strokeWidth={2}
          viewBox='0 0 24 24'
          strokeLinejoin='round'
          strokeLinecap='round'
          height='1em'
          width='1em'
        >
          <polyline points='20 6 9 17 4 12'></polyline>
        </svg>
      </div>
      <span class='dark:text-gray-100 text-pink-500'>{text}</span>
    </div>
  );
}
