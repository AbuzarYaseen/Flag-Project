import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import CountryDetails from "./pages/countryDetials/CountryDetails";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.style.setProperty(
        "--background-color",
        "hsl(207, 26%, 17%)"
      );
      document.documentElement.style.setProperty("--text-color", "#fff");
    } else {
      document.documentElement.style.setProperty(
        "--background-color",
        "#f0f0f0"
      );
      document.documentElement.style.setProperty("--text-color", "#333");
    }
  };

  return (
    <Router>
      <div className={`App ${darkMode ? "dark" : ""}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/country-details" element={<CountryDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
