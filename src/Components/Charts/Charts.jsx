import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Charts.module.css";

//Declaring a new state varibale, called dailyData
//useState returns a pair of values:the current state
//and a functions that updates it.
//dailyData and setDailyData is similar to this.state.dailyData and this.setState in class
//initial state is passed as a parameter to useState henc {} empty obj is passed

//dailyData will be set to first alue returned bu useState
//setDailyData will be set to second value returned by useState

// useEffect Hook, you tell React that your component needs to do something after render

const Charts = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    console.log(dailyData);
    fetchAPI();
  }, [dailyData]);

  //for global display
  const lineChart =
    dailyData.length !== 0 ? (
      <Line
        data={{
          //map funcio{n which returns array of all the dates
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255,0,0,0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Charts;
