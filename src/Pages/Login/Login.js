import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import auth from "../../firebase";
import TextField from "../Shared/TextField/TextField";


const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate =  useNavigate()
      if(user){
          navigate('/')
      }
      const handleLoginForm = (e) => {
          e.preventDefault();
          signInWithEmailAndPassword(email,password);

      }
  return (
    <div className="flex justify-center items-center">
      <div className="space-y-8">
        <img className="w-52" src={logo} alt="" />
        <form onSubmit={handleLoginForm} className="space-y-8">
          <TextField onBlur={(e) => setEmail(e.target.value)} placeholder="email" type = "email"/>
          <TextField onBlur={(e) => setPassword(e.target.value)} placeholder="password" type = "password" />
          <TextField type="submit" value="login" specificClass={true} />
          <p>New to red onion ? <Link  className="text-red-500" to="/signup">signup</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
