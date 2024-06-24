/** @format */

import React, { useState, useContext } from "react";
import { userContext } from "../App";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const { user, setUser } = useContext(userContext);
  const [FailMessage, setFailmessage] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState({
    Email: "",
    Password: "",
  });

  function handleChange(e) {
    setFailmessage("");
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function loginOrNot(e) {
    e.preventDefault();
    try {
      const loggedUser = await signInWithEmailAndPassword(
        auth,
        data.Email,
        data.Password
      );
      console.log(loggedUser);
      if (loggedUser) {
        let name = loggedUser.user.displayName;
        let email = loggedUser.user.uid;
        setUser({
          name: name,
          email: email,
        });
        setData({
          Email: "",
          Password: "",
        });
        navigate("/home");
      }
    } catch (error) {
      console.error("Login error:", error);
      setFailmessage("Email / Password Incorrect Try Again...");
      // Handle login error (e.g., show error message to user)
    }
  }

  return (
    <div className='border-2 shadow-xl w-fit mx-auto p-6 rounded border-fuchsia-400 mt-6 bg-gradient-to-r from-indigo-100 to-gray-600'>
      <form
        onSubmit={loginOrNot}
        className='flex flex-col items-center gap-4 '
      >
        <input
          className='text-center text-xl py-2 px-3 rounded border-2 border-fuchsia-300 focus:border-fuchsia-500 outline-none'
          type='email'
          placeholder='Enter Your Email...'
          name='Email'
          value={data.Email}
          onChange={handleChange}
        />
        <input
          className='text-center text-xl py-2 px-3 rounded border-2 border-fuchsia-300 focus:border-fuchsia-500 outline-none'
          type='password'
          placeholder='Enter Password...'
          name='Password'
          value={data.Password}
          onChange={handleChange}
        />
        <button
          type='submit'
          className='bg-indigo-400 p-2 rounded-lg border-2 border-indigo-500 text-white font-medium hover:bg-gray-100 hover:text-indigo-500'
        >
          Submit
        </button>
      </form>
      <p className='text-red-700 w-fit mx-auto mt-4 underline'>{FailMessage}</p>
    </div>
  );
}

export default Login;
