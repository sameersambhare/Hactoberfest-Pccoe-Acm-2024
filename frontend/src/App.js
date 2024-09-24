import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from "./components/Home";
import Projects from "./components/Projects";
const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen relative bg-zinc-950">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
