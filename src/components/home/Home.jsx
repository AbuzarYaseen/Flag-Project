import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Vector from "../../assets/Vector.svg";
import Search from "../../assets/Search.svg";
import "./home.css";

const Home = () => {
  //State for storing flags data
  const [flags, setFlags] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  //State for searching
  const [searchFlag, setSearchFlag] = useState("");
  //State for displaying filtered flags
  const [filteredFlags, setFilteredFlags] = useState([]);
  //State for filter data by region
  const [selectedRegion, setSelectedRegion] = useState(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        setFlags(res.data);
        console.log("Countries: ",  res.data)
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredFlags(
      flags.filter(
        (flag) =>
          flag.name.official.toLowerCase().includes(searchFlag.toLowerCase()) ||
          flag.region.toLowerCase().includes(searchFlag.toLowerCase())
      )
    );
  }, [searchFlag, flags]);



  const handleSearchChange = (e) => {
    setSearchFlag(e.target.value);
  };

  return (
    <div className="body">
      <Navbar />
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
          <div className="search-region" onClick={toggleDropdown}>
            <span>{selectedRegion || "Filter by Region"}</span>
            <img
              src={Vector}
              alt="Vector icon"
              style={{ marginLeft: "25px" }}
            />
          </div>
          {showDropdown && (
            <div className="dropdown-content">
              <span onClick={() => filterByRegion("Africa")}>Africa</span>
              <span onClick={() => filterByRegion("America")}>America</span>
              <span onClick={() => filterByRegion("Asia")}>Asia</span>
              <span onClick={() => filterByRegion("Europe")}>Europe</span>
              <span onClick={() => filterByRegion("Oceania")}>Oceania</span>
            </div>
          )}
        </div>

        <div className="flags-list">
          {searchFlag !== ""
            ? filteredFlags.map((flag) => (
                <div key={flag.id} className="flags-card">
                  <img
                    src={flag.flags.png}
                    className="card-img"
                    alt={flag.name.official}
                  />
                  <div className="card-body">
                    <h4>{flag.name.official}</h4>
                    <p>Population: {flag.population}</p>
                    <p>Region: {flag.region}</p>
                    <p>Capital: {flag.capital}</p>
                  </div>
                </div>
              ))
            : flags.map((flag) => (
                <div key={flag.id} className="flags-card">
                  <img
                    src={flag.flags.png}
                    className="card-img"
                    alt={flag.name.official}
                  />
                  <div className="card-body">
                    <h4>{flag.name.official}</h4>
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
