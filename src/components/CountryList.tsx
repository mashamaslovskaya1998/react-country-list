import { userInfo } from "os";
import React from "react";
import { ICountry } from "../types";
import CountryItem from "./CountryItem";

interface ICountryList {
  countries: ICountry[];
}

const CountryList = ({ countries }: ICountryList) => {
  return (
    <ul>
      {countries.map((country) => (
        <CountryItem key={country.name} {...country} />
      ))}
    </ul>
  );
};
export default CountryList;
