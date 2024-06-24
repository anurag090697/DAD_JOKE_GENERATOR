/** @format */

import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [failmessage, setFailmessage] = useState("");
  const [userData, setUserData] = useState({
    username: "",
    useremail: "",
    userPassword: "",
  });

  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  async function createUser(e) {
    e.preventDefault();
    if (
      userData.username === "" ||
      userData.useremail === "" ||
      userData.userPassword === ""
    ) {
      alert("Please provide correct inputs...");
    } else {
      try {
        const newUser = await createUserWithEmailAndPassword(
          auth,
          userData.useremail,
          userData.userPassword
        );
        await updateProfile(newUser.user, { displayName: userData.username });
        setUserData({
          username: "",
          useremail: "",
          userPassword: "",
        });
        navigate("/login");
        // console.log(newUser);
      } catch (error) {
        console.error("Error creating user:", error);
        setFailmessage("Email already in use...");
      }
    }
  }

  return (
    <div className='w-fit mx-auto mt-10 border-2 border-blue-700 p-6 rounded-lg shadow-xl bg-gradient-to-r from-indigo-100 to-gray-600'>
      <form onSubmit={createUser} className='flex flex-col gap-8 items-center '>
        <input
          className='text-center text-xl py-2 px-3 rounded border-2 border-indigo-300 focus:border-indigo-500 outline-none'
          type='text'
          name='username'
          onChange={handleChange}
          value={userData.username}
          placeholder='Your Full Name...'
        />
        <input
          className='text-center text-xl py-2 px-3 rounded border-2 border-indigo-300 focus:border-indigo-500 outline-none'
          type='email'
          onChange={handleChange}
          name='useremail'
          value={userData.useremail}
          placeholder='Your Email...'
        />
        <input
          className='text-center text-xl py-2 px-3 rounded border-2 border-indigo-300 focus:border-indigo-500 outline-none'
          type='password'
          onChange={handleChange}
          value={userData.userPassword}
          name='userPassword'
          placeholder='Password...'
        />
        <button
          type='submit'
          className='bg-lime-400 p-2 rounded-lg text-white font-medium border-2 border-lime-500 hover:bg-gray-100 hover:text-lime-600'
        >
          Submit
        </button>
      </form>
      <div className='text-rose-700 text-xl w-fit mx-auto mt-2 underline'>
        <p>{failmessage}</p>
      </div>
    </div>
  );
}

export default SignUp;
