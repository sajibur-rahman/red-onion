import React from 'react';

const Meal = ({meal}) => {
    const {picture,name,discreption,balance} = meal;
    return (
        <div className='p-5 text-center w-72 cursor-pointer shadow-lg rounded-lg'>
            <div className='p-3'>
                <img className='w-52' src={picture} alt="" />
            </div>
            <div className='p-5 space-y-2 text-center'>
                <h3 className='text-2xl'>{name}</h3>
                <p className='text-sm'>{discreption}</p>
                <p className='text-4xl'>{balance}</p>
            </div>
        </div>
    );
};

export default Meal;