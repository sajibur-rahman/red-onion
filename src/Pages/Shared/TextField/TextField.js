import React from "react";

const TextField = ({ specificClass,...rest  }) => {
  return (
    <input
      className={`w-full leading-10 border-slate-500 px-3 rounded-lg outline-none border-2 ${specificClass ? "cursor-pointer bg-red-600 border-0 text-white w-2/5 mx-auto" : ""}`}
      required
      {...rest}
    />
  );
};

export default TextField;
