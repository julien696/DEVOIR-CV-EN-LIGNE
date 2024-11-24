import React from "react";
import { Route, Routes } from "react-router-dom";


import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";
import Legal from "./pages/Legal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App () {
  return(
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/legal" element={<Legal />}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}
