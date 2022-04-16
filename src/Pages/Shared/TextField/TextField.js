import React from 'react';

const TextField = ({...rest}) => {
    return (
        <input className='w-full leading-10 border-slate-500 px-3 rounded-lg outline-none border-2'   required {...rest} />
    );
};

export default TextField;