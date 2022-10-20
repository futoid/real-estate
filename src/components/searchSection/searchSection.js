import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function SearchSection(props) {

   // This part mainly contains four part to select parameters for filered data
  // 1 --> PLACE
  // 2--> TYPE
  // 3--> PRICE Range
  // 4--> FILTER Button


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
    <div className="w-full bg-gray-300 p-3 rounded-lg md:flex">
      <div className="lg:flex lg:ml-5">
        {/* Price Text */}
        <h1 className="font-bold text-black text-2xl m-1">Place</h1>

        {/* DropDown for Places */}
        <select
          onChange={handlePlace}
          className="text-xl p-1 rounded-lg bg-purple-50"
        >
          <option>All</option>
          <option>Delhi, INDIA</option>
          <option>Banglore, INDIA</option>
          <option>Mumbai, INDIA</option>
        </select>
      </div>

      <div className="lg:flex lg:ml-16">
        {/* Price Text */}
        <h1 className="font-bold text-black text-2xl m-1">Type</h1>

        {/* DropDown for Type */}
        <select
          onChange={handleType}
          className="text-xl p-1 rounded-lg bg-purple-50"
        >
          <option>All</option>
          <option>house</option>
          <option>flat</option>
          <option>villa</option>
        </select>
      </div>

        {/* DropDown for Price */}
      <div className="lg:flex lg:ml-16">
        {/* Price Text */}
        <h1 className="font-bold text-black text-2xl lg:mt-1">Price</h1>
        
        {/* Minimum Price */}
        <div className="flex mt-1">
        <h1 className="text-sm ml-4 mt-2 mr-2">from</h1>
        <select
              onChange={handleMin}
              className="text-xl p-1 rounded-lg bg-purple-50"
            >
              <option>All</option>
              <option>500</option>
              <option>1000</option>
              <option>1500</option>
              <option>2000</option>
            </select>
        </div>

        {/* Maximum Price */}
        <div className="flex mt-1">
        <h1 className="text-sm ml-4 mt-2 mr-2">to</h1>
        <select
              onChange={handleMax}
              className="text-xl p-1 rounded-lg bg-purple-50"
            >
              <option>All</option>
              <option>1500</option>
              <option>2000</option>
              <option>2500</option>
              <option>3000</option>
              <option>4000</option>
              <option>6000</option>
              <option>8000</option>
            </select>
        </div>
       
      </div>

      {/* Submit Button*/}
      <div className="lg:flex lg:ml-56 ">
      <button
          type="button"
          class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out "
          onClick={handleSubmit}
        >
          Filter
        </button>
      </div>

    </div>
  );
 
}
