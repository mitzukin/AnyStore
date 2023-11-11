import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs"
import Navbar from "./Components/Navbar/Navbar";


const App = () => {
  return (
    <BrowserRouter>
    <div className="">
      <Navbar />
      <Routes>
        <Route index={true} element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
  }

export default App;