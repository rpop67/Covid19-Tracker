//to fetch data
import axios from "axios";

const url = "https://covid19.mathdro.id/api";

//async to deal with async data
//also  here name export is used and this function will be called inside app.js
export const fetchData = async (country) => {
  let changeableUrl = url;
  //in case the country is not selected then async(country) will be falsey
  //and the fetchData will be called using the initial url

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    // destructuring data from response
    // const { data } = await axios.get(url);
    // const modifiedData = {
    //   confirmed: data.confirmed,
    //   recovered: data.recovered,
    //   deaths: data.deaths,
    //   lastUpdate: data.lastUpdate,
    // };

    // destructuring again to avoid repetition of data.
    const {
      //here data is refering to the label as followed in json format (before destructuring: response.data)refers to the label las followed in json file
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    const modifiedData = {
      confirmed: confirmed,
      //also in JS, confimed :confirmed is equivalent to confirmed as it takes same value.
      recovered: recovered,
      deaths: deaths,
      lastUpdate: lastUpdate,
    };

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    //instead of writing response.data again and again
    //destructuring data here
    const { data } = await axios.get(`${url}/daily`);
    //here dailyData is used as an iterator for each element of data
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    //destructure countries
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    console.log(countries.map((country) => country.name));
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
