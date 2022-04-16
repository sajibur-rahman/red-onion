import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Button from "../../Shared/BigButton/Button";
import Breakfast from "../Breakfast/Breakfast";

const Meals = () => {
  const location = useLocation();
  const navigate = useNavigate()
  return (
    <div className="max-w-7xl mx-auto my-9 py-9">
      <div className="flex justify-center items-center mb-9">
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

      {
        location.pathname === '/'  ? <Breakfast/> : <Outlet/>
      }
      <div className="flex justify-center items-center mt-9">
        <Button onClick={() => navigate('/review')}>Checkout Your Food</Button>
      </div>
    </div>
  );
};

export default Meals;
