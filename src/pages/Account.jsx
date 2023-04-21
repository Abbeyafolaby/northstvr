// import React from "react";
import profileImg from "../assets/no-profile.jpg";
import { useNavigate } from "react-router-dom";
import { User } from "../context/UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Account() {
  const navigate = useNavigate();
  const { logout, user } = User();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("You've logged out");
      navigate("/");
    } catch (e) {
      console.log(e.message);
      toast.error(e.message)
    }
  };

  return (
    <>
      <div className="flex flex-col items-center pt-16">
        <h1 className="text-2xl font-Inter font-medium">My Profile</h1>
        <img
          className="h-20 w-20 rounded-full object-cover my-4"
          src={user ? user.photoURL : profileImg}
          alt="Profile"
        />
        <div className="my-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder={user ? user.displayName : "Star User"}
            disabled
          />
        </div>
        <div className="my-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder={user ? user.email : "staruser@email.com"}
            disabled
          />
        </div>
        <button onClick={handleLogout} className="border px-6 py-2 my-4">
          Logout
        </button>
      </div>
    </>
  );
}

export default Account;

