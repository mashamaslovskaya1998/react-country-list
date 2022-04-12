import React from "react";
import CountryList from "./components/CountryList";
import countryData from "./country-data.json";

const App = () => {
  const countries = countryData.map((country) => ({
    name: country.name.common,
    region: country.region,
    capital: country.capital,
    flag: country.flags.svg,
    area: country.area,
    population: country.population,
  }));
  return (
    <div className="container">
      <h1 className="my-3 px-4">Country List</h1>
      <CountryList countries={countries} />
    </div>
  );
};

export default App;
