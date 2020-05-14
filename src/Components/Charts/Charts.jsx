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
//data will be used for barhcart
const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

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

  //barchart

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(250, 234, 11, 0.719)",
              "rgba(15, 170, 36, 0.596)",
              "rgba(187, 6, 6, 0.822)",
            ],
            //latter data is coming from props dataProp
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Cuurent state in ${country}` },
      }}
    />
  ) : null;

  return (
    // if country is selected then display barchart else line chart
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Charts;
