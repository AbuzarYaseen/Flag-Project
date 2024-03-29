import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Vector from "../../assets/Vector.svg";
import Search from "../../assets/Search.svg";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  //State for storing flags data
  const [flags, setFlags] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  //State for searching
  const [searchFlag, setSearchFlag] = useState("");
  //State for displaying filtered flags
  const [filteredFlags, setFilteredFlags] = useState([]);
  //State for loading state
  const [isLoading, setLoading] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Start loading
        setLoading(true);
        const res = await axios.get("https://restcountries.com/v3.1/all");
        setFlags(res.data);
        setLoading(false);
        console.log("Countries: ", res.data);
      } catch (error) {
        console.error("Error occurred:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredFlags(
      flags.filter(
        (flag) =>
          flag.name.official.toLowerCase().includes(searchFlag.toLowerCase()) &&
          (selectedRegion
            ? flag.region.toLowerCase() === selectedRegion.toLowerCase()
            : true),
        console.log(selectedRegion)
      )
    );
  }, [searchFlag, flags, selectedRegion]);

  const handleSearchChange = (e) => {
    setSearchFlag(e.target.value);
  };

  // Function to handle card click
  const handleCardClick = (flag) => {
    console.log("Country Detail", flag);
    navigate("/country-details", {
      state: { countryDetails: flag, abc: "1231" },
    });
  };

  return (
    <div className="body">
      <div className="main">
        <div className="search-filter">
          <div className="input-main">
            <img src={Search} className="search-img" alt="Search icon" />
            <input
              placeholder="Search for a country"
              className="input"
              onChange={handleSearchChange}
            />
          </div>
          {/* <div className="search-region" onClick={toggleDropdown}>
            <span>Filter by Region</span>
            <img
              src={Vector}
              alt="Vector icon"
              style={{ marginLeft: "25px" }}
            />
          </div> */}
          {showDropdown && (
            <div className="dropdown-content">
              <span>All</span>
              <span>Africa</span>
              <span>Americas</span>
              <span>Asia</span>
              <span>Europe</span>
              <span>Oceania</span>
            </div>
          )}
        </div>
        {isLoading && (
          <div className="loading-container">
            <div className="spinner-border  " role="status"></div>
          </div>
        )}{" "}
        <div className="flags-list">
          {searchFlag !== ""
            ? filteredFlags.map((flag) => (
                <div
                  key={flag.id}
                  className="flags-card"
                  onClick={() => {
                    handleCardClick(flag);
                  }}
                >
                  <img
                    src={flag.flags.png}
                    className="card-img"
                    alt={flag.name.official}
                  />
                  <div className="card-body">
                    <p>{flag.name.official}</p>
                    <p>Population: {flag.population}</p>
                    <p>Region: {flag.region}</p>
                    <p>Capital: {flag.capital}</p>
                  </div>
                </div>
              ))
            : flags.map((flag) => (
                <div
                  key={flag.id}
                  className="flags-card"
                  onClick={() => {
                    handleCardClick(flag);
                  }}
                >
                  <img
                    src={flag.flags.png}
                    className="card-img"
                    alt={flag.name.official}
                  />
                  <div className="card-body">
                    <p style={{ fontSize: "14px", fontWeight: "600" }}>
                      {flag.name.official}
                    </p>
                    <p>Population: {flag.population}</p>
                    <p>Region: {flag.region}</p>
                    <p>Capital: {flag.capital}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
