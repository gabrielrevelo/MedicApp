
import React from 'react';

const InfoData = ({className,text,icon,dato}) => {
    return (
        <div className={className}>
            <p className='text-white font-poppins ml-2 text-lg'>{text}</p>
            <div className='flex flex-row justify-around items-center'>   
                <span className='text-white text-3xl'>{icon}</span>
                <span className='font-poppins text-5xl text-white'>{dato}</span>
            </div>
        </div>
    );
}

export default InfoData;