import React from "react";
import { FaArrowTurnUp } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";



export default function Home() {
  return (
    <main className=" bg-gradient-to-tl from-green-50 to-blue-50  flex items-center justify-between min-h-screen p-5">
    {/* FIRST SECTION */}
      <div className=" flex flex-col gap-5 items-start w-[50%] p-10">
        <h2 className=" max-w-3xl text-6xl font-extrabold">
          A modern, Smart Approach to Sales Tax Compliance
        </h2>
        <p className=" flex text-wrap">
          We help e-commerce businesses to get them complaint with sales tax in the US.
        </p>
        <button className=" bg-orange-600 text-white px-5 py-3 rounded-md">Book a meeting</button>

        <div className=" border w-40"></div>
        <div>
          <h2 className=" text-gray-500">Trusted by Big brands</h2>
        </div>

        <div className=" flex items-center relative gap-12">
          <div className=" flex items-center gap-1">
            <div>
              <div className=" border-8 w-10 h-10 rounded-full border-gray-300"></div>
            </div>
            <div className=" saas">
              <h3 className=''>SAAS</h3>
              <h3 className="">TODAY</h3> 
            </div>
          </div>
          <div className=" flex items-center">
            <div className="askimo">Askimo</div>
          </div>
          <div className=" flex items-center gap-2">
            <div className=" flex flex-col gap-1 rotate-90">
              <div className=" parallelogram "></div>
              <div className=" parallelogram "></div>
              <div className=" parallelogram "></div>
            </div>
            <div className=" items-center">
              <div className="text-gray-400 font-bold text-[25px]">Martino</div>
              <div className=" flex items-center justify-end">
                <p className=" text-[6px]">Colors of your life</p>
              </div>
            </div>
          </div>
          <div className=" flex items-center gap-2">
            <div className="text-gray-700 flex relative items-center">
              <div className=" flex flex-col gap-1 ">
                <div className=" border border-gray-400 w-4 rounded-full -rotate-[45deg]"></div>
                <div className=" border border-gray-400 w-4 rounded-full -rotate-[45deg]"></div>
                <div className=" border border-gray-400 w-4 rounded-full -rotate-[45deg]"></div>
                <div className=" border border-gray-400 w-4 rounded-full -rotate-[45deg]"></div>              </div>
              <div className=" flex flex-col gap-1 ">
                <div className=" border border-gray-400 w-4 rounded-full rotate-[45deg]"></div>
                <div className=" border border-gray-400 w-4 rounded-full rotate-[45deg]"></div>
                <div className=" border border-gray-400 w-4 rounded-full rotate-[45deg]"></div>
                <div className=" border border-gray-400 w-4 rounded-full rotate-[45deg]"></div>
              </div>
            </div>
            <h3 className="text-gray-400 font-bold text-[25px]">Rocker</h3>
          </div>
        </div>

      </div>
{/* SECOND SECTION */}
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
          <div className=" flex gap-2 py-3 items-center">
            <div className=" relative flex items-center justify-center">
              <div className=" border-2 w-10 h-10"></div>
              <FaCheck className=" absolute text-green-500 text-2xl font-bold " />
            </div>
            <div className=" flex gap-1 flex-col">
               <div className=" bg-gray-300 border w-32 h-2 rounded-full"></div>
               <div className=" bg-gray-300 border w-20 h-2 rounded-full"></div>
               <div className=" bg-gray-300 border w-28 h-2 rounded-full"></div>
            </div>
          </div>    
          <div className=" flex gap-2 py-3 items-center">
            <div className=" relative flex items-center justify-center">
              <div className=" border-2 w-10 h-10"></div>
              <FaCheck className=" absolute text-green-500 text-2xl font-bold " />
            </div>
            <div className=" flex gap-1 flex-col">
               <div className=" bg-gray-300 border w-32 h-2 rounded-full"></div>
               <div className=" bg-gray-300 border w-20 h-2 rounded-full"></div>
               <div className=" bg-gray-300 border w-28 h-2 rounded-full"></div>
            </div>
          </div>    
        </div>
      </div>
    </main>
  );
}
