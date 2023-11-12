import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Header from "./Components/Header";

const HeroLayout = () => {
  return (
    <div>
      <Header />
  <Navigation />
      <Outlet />
    </div>
  );
};

const RegisterLayout = () => {
  return (
    <div>
    <Outlet />
    </div>
  )
}

const LoginLayout = () => {
  return (
    <div>
    <Outlet />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/AnyStore",
    element: <HeroLayout />,
    children: [
      
      {
        path: "/AnyStore",
        element: <Hero />,
      },
    ],
  },
  {
    path: "/AnyStore/register",
    element: <RegisterLayout />,
    children: [
      {
        path: "/AnyStore/register",
        element: <Register />
      }
    ]
  },
  {
    path: "/AnyStore/login",
    element: <LoginLayout />,
    children: [
      {
        path: "/AnyStore/login",
        element: <Login />
      }
    ]
  },
]);

const App = () => {
  return (
    <div className="app">
        <RouterProvider router={router} />
    </div>
  );
};

export default App;
