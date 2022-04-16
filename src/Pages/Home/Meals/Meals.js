import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Button from "../../Shared/BigButton/Button";

const Meals = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center items-center">
        <NavLink
          className="mr-7"
          style={({ isActive }) =>
            isActive ? { color: "goldenrod" } : { color: "black" }
          }
          to="/breakfast"
        >
          Breakfast
        </NavLink>
        <NavLink
          className="mr-7"
          style={({ isActive }) =>
            isActive ? { color: "goldenrod" } : { color: "black" }
          }
          to="/launch"
        >
          Lanch
        </NavLink>
        <NavLink
          className="mr-7"
          style={({ isActive }) =>
            isActive ? { color: "goldenrod" } : { color: "black" }
          }
          to="/dinner"
        >
          Dinner
        </NavLink>
      </div>
      <Outlet />
      <div className="flex justify-center items-center">
      <Button>Checkout Your Food</Button>
      </div>
    </div>
  );
};

export default Meals;
