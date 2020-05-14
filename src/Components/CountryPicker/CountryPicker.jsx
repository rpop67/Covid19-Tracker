import React, { useState, useEffect } from "react";

import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  console.log(fetchedCountries);

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect
        defaultVale=""
        //here e if for event in callback function
        //now passing the chosen country from dropdown using e.target.value
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="global">Global</option>
        {/* //we need to fetch countries from api instead of hardcoding it */}
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
