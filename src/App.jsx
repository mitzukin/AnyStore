import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Login/Login";
import Registration from "./Login/Registration";
import Preview from "./Pages/Preview/Preview";


const App = () => {
  return (
    <BrowserRouter>
    <div className="">
      <Navbar/>
      <Preview/>
      <Routes>
        <Route index={true} element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
  }

export default App;