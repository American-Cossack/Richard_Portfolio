import "./App.css";

import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Work from "./components/Work";
import About from "./components/About";
// import React, { useState } from "react";

function App() {
  return (
    <div className="demo-wrap">
      <div className="demo-content">
        <header>
          <Nav />
        </header>
        <main className="body">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/work" element={<Work />}></Route>
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
