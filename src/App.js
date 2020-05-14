import React from "react";
import styles from "./App.module.css";
import { Cards, Charts, CountryPicker } from "./Components";
//in case of index file there is no need to explicilty mention it in the path
// as './api/index' is equivalent to './api'
import { fetchData } from "./api";
import coronaImage from "./images/covid19i.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    //await,since we are dealing with asyn function
    const fetchedData = await fetchData();

    console.log("printing this: ", this.data);
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log("fetched data: ", fetchedData);

    //set the data
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        {/* here dataProp is the property name and latter data reference is for */}
        {/* state data */}
        <Cards dataProp={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
