import React from "react";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryDetails from "./pages/countryDetials/CountryDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/country-details" element={<CountryDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
