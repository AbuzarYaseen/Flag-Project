import React, { useState } from "react";
import "./navbar.css";
import moon from "../../assets/moon.svg";
import { useNavigate } from "react-router-dom";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div className={`navbar ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h1 onClick={handleClick} style={{ cursor: "pointer" }}>
        Where in the world
      </h1>
      <div className="dark-mood" onClick={toggleDarkMode}>
        <img src={moon} className="dark-mood-img" />
        <span className="dark-mood-text">{darkMode ? "Light Mode" : "Dark Mode"}</span>
      </div>
    </div>
  );
};

export default Navbar;
