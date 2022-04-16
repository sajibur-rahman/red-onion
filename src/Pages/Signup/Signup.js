import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import auth from "../../firebase";
import TextField from "../Shared/TextField/TextField";

const Signup = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, signUpError] =
    useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);
  if (user) {
    navigate("/");
  }
  const handleSignupForm = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({displayName})
  };

  return (
    <div className="flex justify-center items-center">
      <div className="space-y-8 w-2/4">
        <img className="w-52" src={logo} alt="" />
        <form onSubmit={handleSignupForm} className="space-y-8">
          <TextField
            onBlur={(e) => setDisplayName(e.target.value)}
            placeholder="name"
            type="text"
          />
          <TextField
            onBlur={(e) => setEmail(e.target.value)}
            placeholder="email"
            type="email"
          />
          <TextField
            onBlur={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
          />
          <TextField type="submit" value="sign up" specificClass={true} />
          
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
