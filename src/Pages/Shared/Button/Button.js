import React from 'react';

const Button = ({children,...rest}) => {
    return (
        <button className={`px-10 py-2 bg-red-500 rounded-full text-white ${rest}`}>
            {children}
        </button>
    );
};

export default Button;