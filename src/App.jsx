import React from "react";
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Login/Login";
import Registration from "./Login/Registration";
import Preview from "./Pages/Preview/Preview";
=======
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Navigation from "./Components/Navigation";
import Hero from "./Pages/Hero";
import Header from "./Components/Header";
import About from "./Pages/About";
import Contact from './Pages/Contact'
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import ProductPreview from "./Components/ProductPreview";
>>>>>>> 4401a8a335db597424d57609e5be547184eb3274


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
    <Header />
  <Navigation />
    <Outlet />
    </div>
  )
}

const ProductLayout = () => {
  return (
    <div>
    <Header />
  <Navigation />
    <Outlet />
    </div>
  )
}

const AboutLayout = () => {
  return (
    <div>
    <Header />
  <Navigation />
    <Outlet />
    </div>
  )
}

const CartLayout = () => {
  return (
    <div>
    <Header />
  <Navigation />
    <Outlet />
    </div>
  )
}

const ContactLayout = () => {
  return (
    <div>
    <Header />
  <Navigation />
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
  {
    path: "/AnyStore/products",
    element: <ProductLayout />,
    children: [
      {
        path: "/AnyStore/products",
        element: <Products />
      },
      {
        path: ":productId",
        element: <ProductPreview />
      },
    ]
  },
  {
    path: "/AnyStore/about",
    element: <AboutLayout />,
    children: [
      {
        path: "/AnyStore/about",
        element: <About />
      }
    ]
  },
  {
    path: "/AnyStore/contact",
    element: <ContactLayout />,
    children: [
      {
        path: "/AnyStore/contact",
        element: <Contact />
      }
    ]
  },
  {
    path: "/AnyStore/cart",
    element: <CartLayout />,
    children: [
      {
        path: "/AnyStore/cart",
        element: <Cart />
      }
    ]
  },
]);

const App = () => {
  return (
<<<<<<< HEAD
    <BrowserRouter>
    <div className="">
      <Navbar/>
      <Preview/>
      <Routes>
        <Route index={true} element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
      </Routes>
=======
    <div className="app">
        <RouterProvider router={router} />
>>>>>>> 4401a8a335db597424d57609e5be547184eb3274
    </div>
  );
};

export default App;
