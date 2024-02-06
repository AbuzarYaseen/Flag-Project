import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./details.css";
import arrow from "../../assets/arrow.svg";

const CountryDetails = ({ flag }) => {
  const [details, setDetails] = useState({});

  const { state } = useLocation();
  const { countryDetails, abc } = state;
  console.log(countryDetails);
  useEffect(() => {
    setDetails(countryDetails);
  }, [state]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="flag-details-main">
        <button onClick={handleClick} className="back-button">
          <img src={arrow} className="back-arrow" />
          Back
        </button>
        <div className="details">
          <img src={details?.flags?.png} alt={flag?.name?.official} />
          <div>
            <h2>{details?.name?.official}</h2>
            <div className="details-row">
              <div style={{ marginRight: "12%" }}>
                <p>Population: {details?.population}</p>
                <p>Region: {details?.region}</p>
                <p>Sub Region: {details?.subregion}</p>
                <p>Native Name: {details?.name?.nativeName?.eng?.common}</p>
                <p>Capital: {details?.capital}</p>
              </div>
              <div>
                <p>Currency: {details?.currencies?.EUR?.name}</p>
                <p>Area: {details?.area}</p>
                <p>Top level domain: {details?.tld}</p>
                <p>Language: {details?.languages?.eng}</p>
              </div>
            </div>
            <p>Borders: {details?.borders?.join(", ")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
