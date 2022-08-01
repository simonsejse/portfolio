import React from 'react';

const MyHistory = () => {
  return (
    <div className='bg-gray-900 overflow-hidden'>
      <section className='bg-gray-900 overflow-hidden'>
        <div className='mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 py-12 xl:py-20'>
          <div className='max-w-xl mx-auto px-5'>
            <div className='mb-4'>
              <div className='flex justify-center items-center'>
                <span
                  className='text-sm font-black uppercase text-center text-gray-500 dark:text-gray-400'
                  style={{ letterSpacing: '0.35em' }}
                >
                  🖥 min historik ⌨️
                </span>
              </div>
            </div>
            <h1 className='text-center text-[48px] font-black mb-4 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400'>
              Min historie
            </h1>
          </div>
        </div>
      </section>
      <div className='mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 py-12 lg:py-20 flex flex-col space-y-4 flex-no-wrap items-start border-b-2 border-gray-600'>
        {/* Subtract 33% because it's the width of the div (w-1/3) */}
        <div className='bg-[#67ecd0] p-5 w-full lg:w-1/3 lg:ml-[calc(100%-33%)] flex items-center rounded-md shadow-[#76EDD4] shadow-lg'>
          <div className='flex-1 mr-5'>
            <h1 className='text-gray-900 font-thin text-lg'>
              BS.c. Computer Science
            </h1>
            <h1 className='text-gray-700 font-light text-lg'>
              Studerer Datalogi på KU
            </h1>
          </div>
          <h1 className='text-gray-800 font-thin text-xl'>22 ~</h1>
        </div>
        {/* Subtract 33% because it's the width of the div (w-1/3) */}
        <div className='bg-[#67ecd0] p-5 w-full lg:w-1/3 lg:ml-[calc(66%-33%)] flex items-center rounded-md shadow-[#76EDD4] shadow-lg'>
          <div className='flex-1 mr-5'>
            <h1 className='text-gray-900 font-thin text-lg'>Sabbatår</h1>
            <h1 className='text-gray-700 font-light text-lg'>
              begyndte at lege med Spring Boot, React/React Native og udfoldede
              mine kompetencer meget i mit sabbatår.
            </h1>
          </div>
          <h1 className='text-gray-800 font-thin text-xl'>21-22</h1>
        </div>
        <div className='bg-[#67ecd0] p-5 w-full lg:w-1/3 flex items-center rounded-md shadow-[#76EDD4] shadow-lg'>
          <div className='flex-1 mr-5'>
            <h1 className='text-gray-900 font-thin text-lg'>Autodidakt</h1>
            <h1 className='text-gray-700 font-light text-lg'>
              Her påbegyndte min karriere indenfor Java udvikling.
            </h1>
          </div>
          <h1 className='text-gray-800 font-thin text-xl'>15-21</h1>
        </div>
      </div>
    </div>
  );
};

export default MyHistory;
