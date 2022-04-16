import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "../Shared/BigButton/Button";
import TextField from "../Shared/TextField/TextField";

const Signup = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="space-y-8">
        <img className="w-52" src={logo} alt="" />
        <form className="space-y-8">
          <TextField placeholder="name" type="text" />
          <TextField placeholder="email" type="email" />
          <TextField placeholder="password" type="password" />
          <Button>sign up</Button>
          <p>
            already regesterd ?{" "}
            <Link className="text-red-500" to="/login">
              login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
