import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "../Shared/BigButton/Button";
import TextField from "../Shared/TextField/TextField";

const Login = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="space-y-8">
        <img className="w-52" src={logo} alt="" />
        <form className="space-y-8">
          <TextField placeholder="email" type = "email"/>
          <TextField placeholder="password" type = "password" />
          <Button>Login</Button>
          <p>New to red onion ? <Link  className="text-red-500" to="/signup">signup</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
