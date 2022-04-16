import React from 'react';

const Button = ({children,specificStyles,...rest}) => {
    return (
        <button className={`px-10 py-2 bg-red-500 rounded-full text-white ${specificStyles ? "bg-slate-600" : ""}`} {...rest}>
            {children}
        </button>
    );
};

export default Button;