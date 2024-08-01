import React from "react";
import { FaArrowTurnUp } from "react-icons/fa6";


export default function Home() {
  return (
    <main className=" bg-gradient-to-tl from-green-50 to-blue-50  flex items-center justify-between max-h-screen p-5">
      <div className=" flex flex-col gap-5 items-start w-[50%] p-10">
        <h2 className=" max-w-3xl text-7xl font-extrabold">
          A modern, Smart Approach to Sales Tax Compliance
        </h2>
        <p className=" flex text-wrap">
          We help e-commerce businesses to get them complaint with sales tax in the US.
        </p>
        <button className=" bg-orange-600 text-white px-5 py-3 rounded-md">Book a meeting</button>

        <div className=" border w-40"></div>
        <div>
          <h2>Trusted by Big brands</h2>
        </div>

        <div>
          <h3>SAAS</h3>
          <h3>Askimo</h3>
          <h3>Martino</h3>
          <h3>Rocker</h3>
        </div>

      </div>

      <div className=" flex flex-col gap-6 w-[50%] p-10">
        <div className=" flex justify-end">
            <div className=" bg-white flex flex-col justify-between  w-[12vw]  rounded-md border shadow-2xl p-4 h-[25vh]">
              <div className=" flex items-center justify-between">
                <p className=" text-4xl font-bold">34%</p>
                <FaArrowTurnUp className=" text-green-400 text-2xl" />
              </div>
              <p className=" font-bold">Yearly Growth</p>
            </div>
        </div>
        <div className=" bg-white w-[19vw] h-[40vh] border shadow-2xl p-5 flex flex-col items-start rounded-md">
          <div className=" flex flex-col gap-3">
            <h2 className=" font-bold">Take Notes</h2> 
            <div className=" bg-gray-300 w-[15vw] h-2 rounded-full"></div>
            <div className=" bg-gray-300 w-[90%] h-2 rounded-full"></div>
            <div className=" bg-gray-300 w-[75%] h-2 rounded-full"></div>
          </div>
          <div className=" flex">
            <div className=" border-2 w-4 h-4"></div>
            <line className=" bg-gray-300 w-[75%] h-2 rounded-full"></line>
          </div>    
        </div>
      </div>
    </main>
  );
}
