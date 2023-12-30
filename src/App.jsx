import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Navigation from "./Components/Navigation";
import Hero from "./Pages/Hero";
import Header from "./Components/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import ProductPreview from "./Components/ProductPreview";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Outlet />
    </div>
  );
};

const RegisterLoginLayout = () => {
  return (
    <div>
    <Header />
      <Navigation />
      <Outlet />;
    </div>
  )
};

const router = createBrowserRouter([
  {
    path: "/AnyStore",
    element: <AppLayout />,
    children: [
      {
        path: "/AnyStore",
        element: <Hero />,
      },
      {
        path: "/AnyStore/products",
        element: <Products />,
      },
      {
        path: "/AnyStore/products/:productId",
        element: <ProductPreview />,
      },
      {
        path: "/AnyStore/about",
        element: <About />,
      },
      {
        path: "/AnyStore/contact",
        element: <Contact />,
      },
      {
        path: "/AnyStore/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/AnyStore/register",
    element: <RegisterLoginLayout />,
    children: [
      {
        path: "/AnyStore/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/AnyStore/login",
    element: <RegisterLoginLayout />,
    children: [
      {
        path: "/AnyStore/login",
        element: <Login />,
      },
    ],
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