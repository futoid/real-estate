import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function SearchSection(props) {
  //This functions are handling the event change in DropDown menu
  //props are passed by App.js

  //Change in PLACE
  const handlePlace = (event) => {
    props.place(event.target.value);
  };

  //Change in TYPE
  const handleType = (event) => {
    props.type(event.target.value);
  };

  //Change in Minimum value
  const handleMin = (event) => {
    props.minValue(event.target.value);
  };

  //Change in Maximum value
  const handleMax = (event) => {
    props.maxValue(event.target.value);
  };

  //Handling the click on FILTER button
  const handleSubmit = () => {
    props.filterData();
  };

  return (
    // This part mainly contains four part to select parameters for filered data
    // 1 --> PLACE
    // 2--> TYPE
    // 3--> PRICE Range
    // 4--> FILTER Button

    <div className="lg:flex">
      {/* This div contains PLACE, TYPE and PRICE RANGE select functionalities*/}
      <div className="lg:flex">
        {/* Select PLACE*/}
        <div className="lg:flex mt-10">
          {/* Price Text */}
          <h1 className="font-bold text-purple-600 lg:text-2xl m-1">Place</h1>

          {/* DropDown for Places */}
          <select
            onChange={handlePlace}
            className="text-xl p-1 rounded-lg bg-slate-200 ml-2"
          >
            <option>All</option>
            <option>Delhi, INDIA</option>
            <option>Banglore, INDIA</option>
            <option>Mumbai, INDIA</option>
          </select>
        </div>

        {/* Select TYPE */}
        <div className="lg:flex mt-10">
          {/* Type Text */}
          <h1 className="text-2xl mt-1 mr-4 font-bold text-purple-600 lg:ml-12 ">
            Type
          </h1>

          {/* DropDown for Types */}
          <select
            onChange={handleType}
            className="text-xl p-1 rounded-lg bg-slate-200"
          >
            <option>All</option>
            <option>flat</option>
            <option>house</option>
            <option>villa</option>
          </select>
        </div>

        {/*Select Price Range*/}
        <div className="lg:flex mt-10">
          {/* Price Text */}
          <h1 className="text-2xl relative mt-1 mr-4 font-bold text-purple-600 lg:ml-12 ">
            Price
          </h1>

          {/* Minimum price*/}
          <div className="flex">
            <div className="ml-5">
              <h1 className="text-sm">from</h1>
              <select
                onChange={handleMin}
                className="text-xl p-1 rounded-lg bg-slate-200"
              >
                <option>All</option>
                <option>500</option>
                <option>1000</option>
                <option>1500</option>
                <option>2000</option>
              </select>
            </div>

            {/* Maximum Price */}
            <div className="ml-5">
              <h1 className="text-sm">to</h1>
              <select
                onChange={handleMax}
                className="text-xl p-1 rounded-lg bg-slate-200"
              >
                <option>All</option>
                <option>2500</option>
                <option>3000</option>
                <option>4000</option>
                <option>6000</option>
                <option>8000</option>
              </select>
            </div>
          </div>
        </div>
      </div>


      {/* This div contains the FILTER Button*/}
      <div>
        <div class="mt-14 ml-20">
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out "
            onClick={handleSubmit}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
