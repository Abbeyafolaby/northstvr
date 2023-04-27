import React, { useState } from "react";
import { User } from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn, signInWithGoogle } = User()

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here
    setError("");
    try {
      await signIn(email, password);
      navigate("/");
      toast.success("You have logged in successfully")
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      toast.error(e.message);
    }
  };

  const googleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/")
      toast.success("You have logged in successfully");
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="flex flex-col gap-y-4 justify-center items-center h-screen">
      <h1 className="text-3xl font-Roboto font-medium">
        Log in to you account
      </h1>
      <p className="font-Inter font-normal">
        Don't have an account?{" "}
        <Link to="/register" className="text-[#A93030]">
          Create Account
        </Link>
      </p>
      <form
        className="bg-[#f5f5f5] shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-[#A93030] hover:text-[#A93030] hover:bg-white transition-all duration-500 ease-in-out text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log in
          </button>
        </div>
      </form>
      <button
          onClick={googleLogin}
          className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
          <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
          <span>Login with Google</span>
      </button>
    </div>
  );
}


export default Signin;
