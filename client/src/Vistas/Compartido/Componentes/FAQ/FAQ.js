import React, { useState } from 'react';
import data from './preguntasFAQ';
import FaqIndividual from './FaqIndividual';

function Faq() {
  const [questions] = useState(data);
  return (
    <main>
      <div className='flex flex-col items-center m-10'>
        <h3 className='font-poppins mb-4'> <span className='text-[#292F53] font-bold text-[45px]'>Preguntas</span> <span className='text-[#1479FF] font-bold text-[45px]'>Frecuentes</span></h3>
        <section className='w-4/5'>
          {questions.map((question) => {
            return (
              <FaqIndividual key={question.id} {...question} />
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default Faq;
