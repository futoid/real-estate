import React, { useState } from "react";
import styles from "./App.module.css";
import Cards from "./components/cards/cards";
import Header from "./components/header/header";
import SearchSection from "./components/searchSection/searchSection";
import posts from "./data/posts";

const App = () => {
  const [place, setPlace] = useState("All");
  const [type, setType] = useState("All");
  const [data, setData] = useState(posts);
  const changePlace = (value) => {
    setPlace(value);
  };
  const changeType = (value) => {
    setType(value);
  };
  const filterSubmitClicked = () => {
    console.log("hi");
    const placeData = posts.filter((element) => {
      if (place === "All") {
        return 1;
      } else {
        return place === element.city;
      }
    });

    const typeData = placeData.filter((element) => {
      if (type === "All") {
        return 1;
      } else {
        return type === element.type;
      }
    });

    setData(typeData);
    return <>hi</>;
  };

  return (
    <>
      <main>
        <Header />
      </main>

      <main className={styles.section}>
        <div className={styles.text}>Find Best Properties to rent</div>
        <SearchSection
          type={changeType}
          place={changePlace}
          filterData={filterSubmitClicked}
        />
        <Cards result={data} type={type} place={place} />
      </main>
    </>
  );
};

export default App;
