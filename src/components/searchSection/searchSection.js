import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import posts from "../../data/posts";

export default function SearchSection(props) {
  const location = new Set();
  posts.map((locations) => {
    location.add(locations.city);
  });

  const handlePlace = (event) => {
    props.place(event.target.value);
  };
  const handleType = (event) => {
    props.type(event.target.value);
  };
  const handleSubmit = () => {
    props.filterData();
  };

  return (
    <div className="lg:flex">
      <div className="lg:flex">
        <div className="lg:flex mt-10">
          <h1 className="font-bold text-purple-600 lg:text-2xl m-1">
            Place
          </h1>
          <select
            onChange={handlePlace}
            className="text-xl p-1 rounded-lg bg-slate-200"
          >
            <option>All</option>
            <option>Delhi, INDIA</option>
            <option>Banglore, INDIA</option>
          </select>
        </div>
        <div className="lg:flex mt-10">
          <h1 className="text-2xl relative mt-1 mr-4 font-bold text-purple-600 ml-12 ">
            Type
          </h1>
          <select
            onChange={handleType}
            className="text-xl p-1 rounded-lg bg-slate-200"
          >
            <option>All</option>
            <option>flat</option>
            <option>house</option>
          </select>
        </div>
      </div>

      <div>
        <div class="mt-10">
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out lg:ml-[40rem]"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
