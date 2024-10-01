import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Schedule from "./components/Schedule";
import Leaderboard from "./components/Leaderboard";
import About from "./components/About";
import Help from "./components/Help";
import Register from "./components/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar2 from "./components/Navbar2";
const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen relative bg-zinc-950 overflow-hidden">
        <Navbar2 />
        <div className="w-full md:h-[6.3vw] h-[8vh] bg-zinc-950"></div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/schedule" element={<Schedule />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/leaderboard" element={<Leaderboard />}></Route>
          <Route path="/help" element={<Help />}></Route>
        </Routes>
        <ToastContainer theme="dark" />
      </div>
    </BrowserRouter>
  );
};

export default App;
