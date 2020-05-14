import React from "react";
import styles from "./App.module.css";
import { Cards, Charts, CountryPicker } from "./Components";
//in case of index file there is no need to explicilty mention it in the path
// as './api/index' is equivalent to './api'
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    //await,since we are dealing with asyn function
    const fetchedData = await fetchData();
    console.log("fetched data: ", fetchData);

    console.log("printing this: ", this.data);
    this.setState({ data: fetchedData });
    console.log(fetchedData);
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        {/* here dataProp is the property name and latter data reference is for */}
        {/* state data */}
        <Cards dataProp={data} />
        <CountryPicker />
        <Charts />
      </div>
    );
  }
}

export default App;
