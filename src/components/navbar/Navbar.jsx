import React, { useState } from "react";
import "./navbar.css";
import moon from "../../assets/moon.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div className="navbar">
      <h1 onClick={handleClick} style={{ cursor: "pointer" }}>
        Where in the world
      </h1>
      {/* <div className="dark-mood">
        <img src={moon} className="dark-mood-img" />
        <span className="dark-mood-text">Dark Mood</span>
      </div> */}
    </div>
  );
};

export default Navbar;
