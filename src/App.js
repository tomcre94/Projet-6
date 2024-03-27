import "./App.scss";
import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About.jsx";
import Accomodation from "./Pages/Accomodations/Accomodations.jsx";
import Error from "./Pages/Error/Error.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Accomodations/:id" element={<Accomodation />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
