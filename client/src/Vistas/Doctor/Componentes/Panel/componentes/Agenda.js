import React from 'react';

const Agenda = () => {
    return (
        <div>
            <form>
            <p className="text-[#292F53] text-xl font-poppins  mt-8 ml-4 mb-4">Registra tu  <span className="text-[#1479FF]">agenda</span> para esta semana: </p>
            <br></br>
            <label className="text-[#292F53] font-poppins  mt-4 ml-4">Horas:</label>
            <p></p>
            <input type='text'className="ml-4 bg-[#E7EFFD] w-60" placeholder="ej: 08:00 - 17:00"></input>
            <br></br>
            <button className='font-poppins text-white  focus:bg-[#292F53] rounded bg-[#1479FF] w-40 h-10 ml-4 mt-4 mb-4' >Registrar agenda</button>
        </form>
        </div>
    );
}

export default Agenda;
