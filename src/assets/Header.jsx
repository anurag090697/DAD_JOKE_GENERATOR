/** @format */

import { useContext } from "react";
import React from "react";
import { userContext } from "../App";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth"; // Import this if you're using Firebase
import { auth } from "../firebase"; // Import your Firebase auth instance

function Header() {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // If using Firebase, sign out the user
      await signOut(auth);

      // Clear the user state
      setUser(null);

      // Optionally, redirect to the home page or login page
      navigate("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const logio = (
    <div className='flex gap-3 items-center'>
      {user?.name ? (
        <>
          <p>Welcome</p>
          <p className='text-green-700 underline'> {user.name}</p>
          <button
             onClick={handleLogout}
            className='text-red-600 hover:text-rose-900'
          >
            LogOut
          </button>
        </>
      ) : (
        <div>
          <NavLink to='/login' className="hover:text-blue-700">Login</NavLink> /{" "}
          <NavLink to='/' className="hover:text-blue-700">SignUp</NavLink>{" "}
        </div>
      )}
    </div>
  );
 

  return (
    <nav className='text-indigo-500 rounded flex py-3 px-5 justify-between items-center text-xl bg-gradient-to-r from-emerald-300 from-10% via-sky-500 via-30% to-indigo-200 to-90%'>
      <h1 className='text-amber-700 text-2xl font-bold'>DadJokes</h1>
      {logio}
    </nav>
  );
}

export default Header;
