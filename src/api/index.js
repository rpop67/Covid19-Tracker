//to fetch data
import axios from "axios";

const url = "https://covid19.mathdro.id/api";

//async to deal with async data
//also  here name export is used and this function will be called inside app.js
export const fetchData = async () => {
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
    } = await axios.get(url);

    const modifiedData = {
      confirmed: confirmed,
      //also in JS, confimed :confirmed is equivalent to confirmed as it takes same value.
      recovered: recovered,
      deaths: deaths,
      lastUpdate: lastUpdate,
    };

    return modifiedData;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const response = await axios.get(`${url}/daily`);
    console.log(response.data);
  } catch (error) {}
};
