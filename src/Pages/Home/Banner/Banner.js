import React from "react";
import Button from "../../Shared/Button/Button";

const Banner = () => {
  return (
    <div className="flex justify-center items-center bg-gray-300 h-96">
      <div className="space-y-7">
        <h1 className="text-5xl">Best food waiting for your belly</h1>
        <div className="flex justify-center items-center">
          <input
            className="leading-10 rounded-full w-4/5 outline-none px-3"
            type="text"
            name="search"
            id="search"
          />
          <Button className="relative left-2">search</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
