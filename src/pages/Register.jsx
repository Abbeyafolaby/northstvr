import React, { useState } from "react";
import { User } from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

 
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const { createUser } = User()



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
      await createUser(email, password)
      navigate('/')
      toast.success("You registration was successful")
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      alert(e.message)
      toast.error(e.message)
    }
  };

  return (
    <div className="flex flex-col gap-y-4 justify-center items-center h-screen">
      <h1 className="text-3xl font-Roboto font-medium">Create your account</h1>
      <p className="font-Inter font-normal">
        Already have an account?{" "}
        <Link to="/signin" className="text-[#A93030]">
          Log in
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
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
