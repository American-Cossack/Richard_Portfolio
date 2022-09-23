import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Work from "./components/Work";
import About from "./components/About";
// import React, { useState } from "react";

function App() {
  return (
    <div>
      <header>
        <Router>
          <Nav />
        </Router>
      </header>
      <main>
        <Router>
          <Routes className="body">
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/work" element={<Work />}></Route>
          </Routes>
        </Router>
      </main>
      <div></div>
    </div>
  );
}

export default App;
