'use client'
import React from "react";
import { FaArrowTurnUp, FaMessage, FaPhoneFlip } from "react-icons/fa6";
import { FaCheck, FaVolumeMute } from "react-icons/fa";
import Image from "next/image";
import { FaVideo } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";


export default function Home() {
  return (
    <main className=" bg-gradient-to-tl from-green-50 to-blue-50 h-full">
    {/* <DesktopOnly/> */}
      <div className=" flex h-screen pt-20">
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
      </div>

      {/* THIRD SECTION */}

      <div className=" bg-slate-900  ">
            <div className="">
              <div className=" overflow-hidden">
                <svg class="w-64 h-32 rotate-[137deg]" viewBox="0 0 100 50">
                    <path d="M0 50 Q50 0 100 50" stroke="green" stroke-width="2" fill="transparent"/>
                </svg>
              </div>
            </div>
            <div className=" flex flex-row relative items-center justify-around py-[40px]">
                <div className=" flex flex-col items-center justify-center  ">
                  <h2 className=" text-white text-6xl font-extrabold">110+</h2>
                  <h2 className=" max-w-[250px] text-center text-white ">Automation templates for creating your campaigns quickly</h2> 
                </div>
                <div className=" flex flex-col items-center justify-center ">
                  <h2 className=" text-white text-6xl font-extrabold">4M</h2>
                  <h2 className=" max-w-[250px] text-center text-white ">Automation templates for creating your campaigns quickly</h2> 
                </div>
                <div className=" flex flex-col items-center justify-center ">
                  <h2 className=" text-white text-6xl font-extrabold">99.99%</h2>
                  <h2 className=" max-w-[250px] text-center text-white ">Automation templates for creating your campaigns quickly</h2> 
                </div>
            </div> 
            <div className=" flex items-end justify-end">
              <div className=" overflow-hidden">
                <svg class="w-64 h-32 -rotate-[46deg]" viewBox="0 0 100 50">
                    <path d="M0 50 Q50 0 100 50" stroke="gold" stroke-width="2" fill="transparent"/>
                </svg>
              </div>
            </div>
      </div>

      {/* FOURTH SECTION */}
      <div className=" h-full">
        <div className=" flex flex-col gap-10 items-center p-10 ">
          <div className=" flex">
            <h3 className=" text-center flex text-4xl font-bold max-w-2xl">Simple interface through which task can be easily managed</h3>
          </div>
          <div className=" flex gap-20">
              {/* first call card */}
                <div className=" bg-white rounded-lg w-[27vw] h-[55vh]">
                  <div className=" bg-black flex items-center justify-center h-[8vh] rounded-t-lg">
                    <div className=" flex flex-row gap-36 items-center ">
                      <div>
                          <p className=" text-white">Book next meeting</p> 
                      </div>
                      <div className=" flex gap-1">
                          <div className=" w-[10px] h-[10px] rounded-full bg-red-600"></div>
                          <div className=" w-[10px] h-[10px] rounded-full bg-yellow-500"></div>
                          <div className=" w-[10px] h-[10px] rounded-full bg-blue-600"></div> 
                      </div> 
                    </div>
                  </div>
                  {/* section containing name of caller */}
                  <div>
                    <div className=" bg-green-50 h-14 flex items-center px-3 gap-40">
                      <div className=" flex items-center gap-2">
                          <Image src='/images/pic.jpg' width={37} height={37} alt=" Caller ID" className=" rounded-full"/>
                          <p className=" font-bold">Mike Abel</p>
                      </div>
                      <div>
                        <p className=" text-green-500 flex font-bold">On Call</p>
                      </div>
                    </div>
                  </div>

                   {/* call button */}

                   <div className=" flex items-center justify-center py-5 ">
                      <div className=" bg-green-100 w-[66%] rounded-full py-4">
                        <div className=" flex items-center justify-center gap-2">
                          <div className=" bg-green-500 py-2 px-5 rounded-full">
                            <FaVideo className=""/>
                          </div>
                          <p>02:80</p>
                        </div>  
                      </div>
                      <div>

                      </div>
                   </div>

                   <div className=" flex items-center justify-center py-8 gap-24 px-3">
                      <div className=" flex flex-col gap-2">
                        <div className=" bg-blue-100 p-3 rounded-full">
                          <FaVolumeMute className=" text-blue-600"/>
                        </div>
                        <div className=" border-2 rounded-full"></div>
                      </div>
                      <div className=" flex flex-col gap-2">
                          <div className=" bg-red-100 p-3 rounded-full">
                            <FaPhoneFlip className=" text-red-500"/>
                          </div>
                          <div className=" border-2 rounded-full"></div>
                      </div>
                      <div className=" flex flex-col gap-2">
                        <div className=" bg-orange-100 p-3 rounded-full">
                          <FaFacebookMessenger className=" text-orange-500"/>
                        </div>
                        <div className=" border-2 rounded-full"></div>
                      </div>
                   </div>
                </div>

              {/* second card */}
                <div className=" bg-white rounded-lg w-[27vw] h-[55vh]">
                  <div className=" bg-black flex items-center justify-center h-[8vh] rounded-t-lg">
                    <div className=" flex flex-row gap-36 items-center">
                      <div>
                          <p className=" text-white">Groover tax report 2024</p> 
                      </div>
                      <div className=" flex gap-1">
                          <div className=" w-[10px] h-[10px] rounded-full bg-red-600"></div>
                          <div className=" w-[10px] h-[10px] rounded-full bg-yellow-500"></div>
                          <div className=" w-[10px] h-[10px] rounded-full bg-blue-600"></div> 
                      </div> 
                    </div>
                  </div>
                </div>

              {/* third card */}
                <div className=" bg-white rounded-lg w-[27vw] h-[55vh]">
                  <div className=" bg-black flex items-center justify-center h-[8vh] rounded-t-lg">
                      <div className=" flex flex-row gap-52 items-center">
                        <div>
                            <p className=" text-white">Sales report</p> 
                        </div>
                      <div className=" flex gap-1">
                          <div className=" w-[10px] h-[10px] rounded-full bg-red-600"></div>
                          <div className=" w-[10px] h-[10px] rounded-full bg-yellow-500"></div>
                          <div className=" w-[10px] h-[10px] rounded-full bg-blue-600"></div> 
                      </div> 
                    </div>
                  </div>
                </div>
          </div>
          <div className=" flex flex-row gap-20">
            <div className=" flex flex-col items-center gap-4 w-[27vw]">
              <h3 className=" text-2xl font-extrabold">Book A Call</h3>
              <p className=" text-center text-[]">Customer activity can be easily tracked with one click </p>
            </div>
            <div className=" flex flex-col items-center gap-4 w-[27vw]">
              <h3 className=" text-2xl text-center font-extrabold">Get Proper Tax Instructions</h3>
              <p className=" text-center text-[]">Customers can leave their own comments and feedback</p>
            </div>
            <div className=" flex flex-col items-center gap-4 w-[27vw]">
              <h3 className=" text-2xl font-extrabold">Grow Your Business</h3>
              <p className=" text-center text-[]">The results show how much has been done</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
