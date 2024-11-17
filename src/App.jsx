import React from "react";
import { Route, Routes, Link } from "react-router-dom";


import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";
import Legal from "./pages/Legal";

export default function App () {
  return(
    <div>
     
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/legal" element={<Legal />}></Route>
      </Routes>
    </div>
  )
}
