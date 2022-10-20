import React from "react";

export default function Header() {
  //Header Component  
  //This return simple header
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-purple-600 p-6 rounded-b-lg shadow-lg ">
        <div class="flex items-center flex-shrink-0 text-white ml-4">
          <span class="font-bold text-xl tracking-tight">RealEstate</span>
        </div>
      </nav>
    </div>
  );
}
