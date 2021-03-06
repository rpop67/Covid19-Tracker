import React, { Component } from "react";
// install @material-ui/core
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
//to use multiple style classes we will use cx method of classnames as
import cx from "classnames";
//destruction confirmed,recovered and 2 other
const Cards = ({ dataProp: { confirmed, recovered, deaths, lastUpdate } }) => {
  console.log("printing this in cards.js: ", this);

  if (!confirmed) {
    return "Loading....";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {/* here..we will be using xs for setting width of mobile screen */}
        <Grid
          itemm
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            {/* Typography is used in replacement of p and h tag */}
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            {/* why value? bcz that's what used in json data for value field*/}
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of covid19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          itemm
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            {/* Typography is used in replacement of p and h tag */}
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveried from covid19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          itemm
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            {/* Typography is used in replacement of p and h tag */}
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by covid19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
