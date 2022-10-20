import React, { useState } from "react";
import styles from "./App.module.css";
import Cards from "./components/cards/cards";
import Header from "./components/header/header";
import SearchSection from "./components/searchSection/searchSection";
import posts from "./data/posts";

const App = () => {

  //varialbles to handle the fitler data
  const [place, setPlace] = useState("All");
  const [type, setType] = useState("All");
  const [data, setData] = useState(posts);
  const [minValue, setMinValue] = useState(500);
  const [maxValue, setMaxValue] = useState(10000);
  
  //functions handling changes on the data of the filter  [all functions]
  const changePlace = (value) => {
    setPlace(value);
  };
  const changeType = (value) => {
    setType(value);
  };
  const changeMinValue = (value) => {
    setMinValue(value);
  };
  const changeMaxValue = (value) => {
    setMaxValue(value);
  };

  //handling the click of submit button
  const filterSubmitClicked = () => {
    //filter our data acc. to the values by user

    //filtering data acc. to PLACE
    const placeData = posts.filter((element) => {
      if (place === "All") {
        return 1;
      } else {
        return place === element.city;
      }
    });

    //filtering data acc. to TYPE (house , flat , villa)
    const typeData = placeData.filter((element) => {
      if (type === "All") {
        return 1;
      } else {
        return type === element.type;
      }
    });

      //filtering data acc. to PRICE (maximum and minimum value of price)
    const valueData = typeData.filter((element) => {
      if (minValue ==="All" && maxValue === "All") return 1;
      else if (minValue === "All") return Number(element.price) <= maxValue;
      else if (maxValue === "All") return Number(element.price) >= minValue;
      else
        return (
          Number(element.price) >= minValue && Number(element.price) <= maxValue
        );
    });


    //after all filtering updating the new data
    setData(valueData);
  };

  return (
    <>
      <main>

      {/* Header Component */}
        <Header />
      </main>

      {/* This part contains Search Section and Cards components*/}
      <main className={styles.section}>

      {/* Text on top */}
        <div className={styles.text}>Find Best Properties to rent</div>
        
      {/* Search Section passing [all function] to handle changes in data inside Search section*/}  
        <SearchSection
          type={changeType}
          place={changePlace}
          minValue={changeMinValue}
          maxValue={changeMaxValue}
          filterData={filterSubmitClicked}
        />

        {/* Paasing the required data to show in cards */}
        <Cards result={data} type={type} place={place} />
      </main>
    </>
  );
};

export default App;
