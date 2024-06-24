/** @format */

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Home";
import Login from "./assets/Login";
import SignUp from "./assets/SignUp";
import { createContext, useContext } from "react";
import Header from "./assets/Header";
import "./App.css";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({});

  return (
    <div className='container min-w-full'>
      <BrowserRouter>
        <userContext.Provider value={{ user, setUser }}>
          <Header></Header>
          <Routes>
            <Route path='/' element={<SignUp></SignUp>}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
          </Routes>
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
