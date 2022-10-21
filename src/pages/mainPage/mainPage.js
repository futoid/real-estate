import React, { useState, Suspense } from "react";
import posts from "../../data/posts";
import Header from "../../components/header/header";
import SearchSection from "../../components/searchSection/searchSection";
const Cards = React.lazy(() => import("../../components/cards/cards"));

export default function MainPage() {
  //varialbles to handle the fitler data
  const [place, setPlace] = useState("All");
  const [type, setType] = useState("All");
  const [data, setData] = useState(posts);
  const [minValue, setMinValue] = useState(500);
  const [maxValue, setMaxValue] = useState(10000);

  //This function is handling if no DATA found
  const isData = () => {
    if (data.length !== 0) {
      return (

        //Lazy Loading for cards
        <Suspense
          fallback={<div className="text-2xl mt-10 font-mono">Loading...</div>}
        >
          <Cards result={data} type={type} place={place} />
        </Suspense>
      );
    } else {
      return (
        <>
          <h1 className="text-5xl text-gray-500 mt-16">No Results :(</h1>
          <h1 className="text-2xl font-mono">
            Try <span className="text-purple-500">Different</span>
          </h1>
        </>
      );
    }
  };

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
      if (minValue === "Min" && maxValue === "Max") return 1;
      else if (minValue === "Min") return Number(element.price) <= maxValue;
      else if (maxValue === "Max") return Number(element.price) >= minValue;
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
      <main className=" bg-gray-100 w-full h-[100rem] lg:pt-20 lg:pr-28 lg:pl-28 p-10 text-center">
        {/* Text on top */}
        <div className="font-bold text-3xl lg:text-5xl tracking-tight leading-none text-gray-700 mb-5 lg:flex">
          <h1 className="text-5xl mt-2 font-bold ">Find Best </h1>
          <h1 className="text-purple-700 mx-4 mt-1 font-bold text-6xl">RENT</h1>
          <h1 className="text-5xl mt-2 font-bold ">Deals </h1>
        </div>

        {/* Search Section passing [all function] to handle changes in data inside Search section*/}
        <SearchSection
          type={changeType}
          place={changePlace}
          minValue={changeMinValue}
          maxValue={changeMaxValue}
          filterData={filterSubmitClicked}
        />

        {/* Paasing the required data to show in cards also handling if no data found*/}
        {isData()}
      </main>
    </>
  );
}
