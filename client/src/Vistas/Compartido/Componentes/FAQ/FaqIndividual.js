import React, { useState } from 'react';

const FaqIndividual = ({ title, info, img}) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='m-2 bg-[#f9f9fb] rounded-xl border-l-4 border-b-2 border-b-[#1479FF] border-l-[#1479FF] border-r-transparent border-t-transparent'>
      <header className='p-4 flex'>
      <button  onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <p className='rounded-full pl-2 pr-2 border-2 border-[#1479FF] text-[#1479FF]'>-</p>: <p className='rounded-full pl-[7px] pr-[7px] border-2 border-[#1479FF] text-[#1479FF]'>+</p>}
        </button>
        <h4 className='text-[#1479FF] font-poppins ml-2'>{title}</h4>
      </header>
      <div className='flex lg:flex-row justify-between flex-col items-center'>
      {showInfo &&
        <>
        <p className='ml-6 -mt-2 mb-4 font-raleway flex flex-wrap'>{info}</p>
        <img className='w-40 h-32 m-4 -mt-2' src={img} alt='foto1'/>
        </>
       }

      </div>
    </article>
  );
};

export default FaqIndividual;

