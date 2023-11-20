
import React from "react";
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
    <div className="app">
        <RouterProvider router={router} />
    </div>
  );
};

export default App;