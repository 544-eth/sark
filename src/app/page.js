'use client'
import React from "react";
import { FaArrowTurnUp, FaPhoneFlip, FaStar } from "react-icons/fa6";
import { FaCheck, FaVolumeMute } from "react-icons/fa";
import Image from "next/image";
import { FaVideo } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import CurvedLineChart from "./components/chart";


export default function Home() {
  return (
    <main className=" bg-gradient-to-tl from-green-50 to-blue-50 h-full">
    {/* <DesktopOnly/> */}
      <div className=" flex h-screen pt-20">
      {/* FIRST SECTION */}
        <div className="  flex flex-col gap-5 items-start w-[50%] p-3 lg:p-10 h-[70vh]">
          <h2 className=" text-2xl  max-w-3xl lg:text-6xl font-extrabold">
            A modern, Smart Approach to Sales Tax Compliance
          </h2>
          <p className=" text-[12px] lg:text-[19px] flex text-wrap">
            We help e-commerce businesses to get them complaint with sales tax in the US.
          </p>
          <button className="  bg-orange-600 text-white px-3 py-1 text-[12px] lg:text-[19px] lg:px-5 lg:py-3  rounded-md">Book a meeting</button>

          <div className=" border w-28 lg:w-40  "></div>
          <div>
            <h2 className=" text-gray-500 text-[12px] lg:text-[17px] ">Trusted by Big brands</h2>
          </div>

          <div className=" flex items-center relative gap-4 md:gap-6 lg:gap-12">
            <div className=" flex items-center gap-1">
              <div>
                <div className=" lg:border-8 border-4 w-4 h-4 lg:w-10 lg:h-10 rounded-full border-gray-300"></div>
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
                <div className="text-gray-400 font-bold lg:text-[25px] md:text-[17px] text-[10px] ">Martino</div>
                <div className=" flex items-center justify-end">
                  <p className=" md:text-[6px] text-[2px] ">Colors of your life</p>
                </div>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <div className="text-gray-700 flex relative items-center">
                <div className=" flex flex-col gap-1 ">
                  <div className=" border border-gray-400 lg:w-4 w-2  rounded-full -rotate-[45deg]"></div>
                  <div className=" border border-gray-400 lg:w-4 w-2  rounded-full -rotate-[45deg]"></div>
                  <div className=" border border-gray-400 lg:w-4 w-2  rounded-full -rotate-[45deg]"></div>
                  <div className=" border border-gray-400 lg:w-4 w-2  rounded-full -rotate-[45deg]"></div>              </div>
                <div className=" flex flex-col gap-1 ">
                  <div className=" border border-gray-400 lg:w-4 w-2  rounded-full rotate-[45deg]"></div>
                  <div className=" border border-gray-400 lg:w-4 w-2  rounded-full rotate-[45deg]"></div>
                  <div className=" border border-gray-400 lg:w-4 w-2  rounded-full rotate-[45deg]"></div>
                  <div className=" border border-gray-400 lg:w-4 w-2  rounded-full rotate-[45deg]"></div>
                </div>
              </div>
              <h3 className="text-gray-400 font-bold lg:text-[25px] md:text-[17px] text-[10px]">Rocker</h3>
            </div>
          </div>

        </div>
      {/* SECOND SECTION */}
        <div className=" flex flex-col gap-6 w-[50%] lg:p-10">
          <div className=" flex justify-end">
              <div className=" bg-white flex flex-col justify-between w-[24vw] h-[10.5vh] md:w-[24vw] md:h-[13vh] lg:w-[12vw]  rounded-md border shadow-2xl p-1 lg:p-4 lg:h-[25vh]">
                <div className=" flex items-center justify-between">
                  <p className=" text-[16px] lg:text-4xl font-bold">34%</p>
                  <FaArrowTurnUp className=" text-green-400 text-[16px] lg:text-2xl" />
                </div>
                <p className=" text-[12px] lg:text-xl font-bold">Yearly Growth</p>
              </div>
          </div>
          <div className=" bg-white place-self-end w-fit md:w-[15vw] md:h-[30vh] lg:w-[19vw] lg:h-[40vh] border shadow-2xl p-2 lg:p-5 flex flex-col items-start rounded-md">
            <div className=" flex flex-col gap-1 md:gap-2 lg:gap-3">
              <h2 className=" font-bold text-[12px] ">Take Notes</h2> 
              <div className=" bg-gray-300 w-[55%] h-1 lg:h-2 rounded-full"></div>
              <div className=" bg-gray-300 w-[90%] h-1 lg:h-2 rounded-full"></div>
              <div className=" bg-gray-300 w-[75%] h-1 lg:h-2 rounded-full"></div>
            </div>
            <div className=" flex gap-2 py-1 lg:py-3 items-center ">
              <div className=" relative flex items-center justify-center">
                <div className=" border-2 w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"></div>
                <FaCheck className=" absolute text-green-500 text-[10px] lg:text-2xl font-bold " />
              </div>
              <div className=" flex gap-1 flex-col ">
                <div className=" bg-gray-300 border w-[30px] h-1 lg:h-2 rounded-full"></div>
                <div className=" bg-gray-300 border w-[60px] h-1 lg:h-2 rounded-full"></div>
                <div className=" bg-gray-300 border w-[70px] h-1 lg:h-2 rounded-full"></div>
              </div>
            </div>    
            <div className=" flex gap-2 py-3 items-center">
              <div className=" relative flex items-center justify-center">
                <div className=" border-2 w-4 h-4 md:w-8 md:h-8  lg:w-10 lg:h-10"></div>
                <FaCheck className=" absolute text-green-500 text-[10px] lg:text-2xl font-bold " />
              </div>
              <div className=" flex gap-1 flex-col">
                <div className=" bg-gray-300 border w-[30px] h-1 lg:h-2 rounded-full"></div>
                <div className=" bg-gray-300 border w-[60px] h-1 lg:h-2 rounded-full"></div>
                <div className=" bg-gray-300 border w-[70px] h-1 lg:h-2 rounded-full"></div>
              </div>
            </div>    
          </div>
        </div>
      </div>

      {/* THIRD SECTION */}

      <div className=" bg-slate-900  ">
            <div className="">
              <div className=" overflow-hidden">
                <svg className="lg:w-64 lg:h-32 w-10 h-10 md:w-28 md:h-28 rotate-[137deg]" viewBox="0 0 100 50">
                    <path d="M0 50 Q50 0 100 50" stroke="green" stroke-width="2" fill="transparent"/>
                </svg>
              </div>
            </div>
            <div className=" flex flex-row relative items-center justify-around py-[40px]">
                <div className=" flex flex-col items-center justify-center  ">
                  <h2 className="text-white lg:text-6xl text-[14px] font-extrabold">110+</h2>
                  <h2 className=" max-w-[250px] text-center text-[12px] text-white ">Automation templates for creating your campaigns quickly</h2> 
                </div>
                <div className=" flex flex-col items-center justify-center ">
                  <h2 className="text-white lg:text-6xl text-[14px] font-extrabold">4M</h2>
                  <h2 className=" max-w-[250px] text-center text-[12px] text-white ">Automation templates for creating your campaigns quickly</h2> 
                </div>
                <div className=" flex flex-col items-center justify-center ">
                  <h2 className="text-white lg:text-6xl text-[14px] font-extrabold">99.99%</h2>
                  <h2 className=" max-w-[250px] text-center text-[12px] text-white ">Automation templates for creating your campaigns quickly</h2> 
                </div>
            </div> 
            <div className=" flex items-end justify-end">
              <div className=" overflow-hidden">
                <svg class="lg:w-64 lg:h-32 w-10 h-10 md:w-28 md:h-28  -rotate-[46deg]" viewBox="0 0 100 50">
                    <path d="M0 50 Q50 0 100 50" stroke="gold" stroke-width="2" fill="transparent"/>
                </svg>
              </div>
            </div>
      </div>

      {/* FOURTH SECTION */}
      <div className=" h-full">
        <div className=" flex flex-col gap-10 items-center p-10 ">
          <div className=" flex">
            <h3 className=" text-center flex lg:text-4xl text-[19px] font-bold max-w-2xl">Simple interface through which task can be easily managed</h3>
          </div>
          <div className=" flex flex-col items-center lg:flex-row gap-20">
              {/* first call card */}
              <div className=" flex flex-col gap-5 ">
                <div className=" bg-white rounded-lg w-fit lg:w-[27vw] h-[45vh] sm:h-[25vh] lg:h-[55vh]">
                  <div className=" bg-black flex items-center justify-center h-[8vh] rounded-t-lg">
                    <div className=" flex flex-row gap-16 lg:gap-36 items-center ">
                      <div>
                          <p className=" text-white text-[12px] lg:text-[17px]">Book next meeting</p> 
                      </div>
                      <div className=" flex gap-1">
                          <div className=" w-[5px] h-[5px] lg:w-[10px] lg:h-[10px] rounded-full bg-red-600"></div>
                          <div className=" w-[5px] h-[5px] lg:w-[10px] lg:h-[10px] rounded-full bg-yellow-500"></div>
                          <div className=" w-[5px] h-[5px] lg:w-[10px] lg:h-[10px] rounded-full bg-blue-600"></div> 
                      </div> 
                    </div>
                  </div>
                  {/* section containing name of caller */}
                  <div>
                    <div className=" bg-green-50 h-14 flex items-center px-3 gap-14 lg:gap-40">
                      <div className=" flex items-center gap-2">
                          <Image src='/images/pic.jpg' width={37} height={37} alt=" Caller ID" className=" rounded-full"/>
                          <p className=" font-bold text-[12px] lg:text-[17px]">Mike Abel</p>
                      </div>
                      <div>
                        <p className=" text-green-500 flex font-bold text-[12px] lg:text-[17px]">On Call</p>
                      </div>
                    </div>
                  </div>

                   {/* call button */}

                   <div className=" flex items-center justify-center py-5 ">
                      <div className=" bg-green-100 w-[39%] lg:w-[66%] rounded-full py-2 lg:py-4">
                        <div className=" flex items-center justify-center gap-2">
                          <div className=" bg-green-500  py-1 px-2.5 lg:py-2 lg:px-5 rounded-full">
                            <FaVideo className=" text-[12px] md:text-[17px]"/>
                          </div>
                          <p className=" text-[12px] md:text-[17px]">02:80</p>
                        </div>  
                      </div>
                      <div>

                      </div>
                   </div>

                   <div className=" flex items-center justify-center py-8 gap-8 lg:gap-24 px-3">
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
                <div className=" flex flex-col items-center gap-4 lg:w-[27vw]">
                  <h3 className=" text-2xl font-extrabold">Book A Call</h3>
                  <p className=" text-center text-[]">Customer activity can be easily tracked with one click </p>
                </div>
              </div>

              {/* second card */}
                <div className=" flex flex-col gap-5">
                  <div className=" bg-white rounded-lg w-fit lg:w-[27vw] h-[45vh] sm:h-[25vh] lg:h-[55vh]">
                    <div className=" bg-black flex items-center justify-center h-[8vh] rounded-t-lg">
                      <div className=" flex flex-row gap-16 px-2 lg:gap-36 items-center">
                        <div>
                            <p className=" text-white text-[12px] lg:text-[17px]">Groover tax report 2024</p> 
                        </div>
                        <div className=" flex gap-1">
                            <div className="  w-[5px] h-[5px] lg:w-[10px] lg:h-[10px] rounded-full bg-red-600"></div>
                            <div className="  w-[5px] h-[5px] lg:w-[10px] lg:h-[10px] rounded-full bg-yellow-500"></div>
                            <div className="  w-[5px] h-[5px] lg:w-[10px] lg:h-[10px] rounded-full bg-blue-600"></div> 
                        </div>
                        
                      </div>
                        
                    </div>

                    <div className=" bg-green-100 w-full h-14">
                      <div className=" font-bold text-2xl ">
                        <h3 className=" flex items-center justify-center top-0 bottom-0 py-3 text-[12px] lg:text-[17px]">Tax Report</h3>
                      </div>
                    </div>
                    <div className=" p-4 "> 
                        <div className=" flex flex-col gap-2 pb-5">
                            <div className=" bg-gray-300 w-full lg:h-2 h-1 rounded-full"></div>
                            <div className=" bg-gray-300 w-[45%] lg:h-2 h-1 rounded-full"></div>
                            <div className=" bg-gray-300 w-[60%] lg:h-2 h-1 rounded-full"></div>
                        </div>
                      <div className=" flex flex-col gap-8">
                        <div className=" flex flow-row w-full items-center gap-2">
                          <div className=" lg:border-4 border-2 w-5 h-5 lg:w-10 lg:h-10 border-gray-400 text-green-600 flex items-center justify-center"><FaCheck className=" lg:text-2xl "/></div>
                          <div className=" flex flex-col gap-2">
                            <div className=" bg-gray-300 w-[10vw] lg:h-2 h-1 rounded-full"></div>
                            <div className=" bg-gray-300 w-[15vw] lg:h-2 h-1 rounded-full"></div>
                            <div className=" bg-gray-300 w-[18vw] lg:h-2 h-1 rounded-full"></div>
                          </div>
                        </div>
                        <div className=" flex flow-row w-full items-center gap-2">
                          <div className=" lg:border-4 border-2 w-5 h-5 lg:w-10 lg:h-10 border-gray-400 text-green-600 flex items-center justify-center"><FaCheck className=" text-2xl"/></div>
                          <div className=" flex flex-col gap-2">
                            <div className=" bg-gray-300 w-[10vw] lg:h-2 h-1 rounded-full"></div>
                            <div className=" bg-gray-300 w-[15vw] lg:h-2 h-1 rounded-full"></div>
                            <div className=" bg-gray-300 w-[18vw] lg:h-2 h-1 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col items-center gap-4 lg:w-[27vw]">
                    <h3 className=" text-2xl text-center font-extrabold">Get Proper Tax Instructions</h3>
                    <p className=" text-center text-[]">Customers can leave their own comments and feedback</p>
                  </div>
                </div>

              {/* third card */}
                <div className=" flex flex-col gap-5">   
                  <div className=" bg-white rounded-lg w-fit lg:w-[27vw] h-[45vh] sm:h-[25vh] lg:h-[55vh]">
                    <div className=" bg-black flex items-center justify-center h-[8vh] rounded-t-lg">
                        <div className=" flex flex-row gap-16 px-2 lg:gap-36 items-center">
                          <div>
                              <p className=" text-white">Sales report</p> 
                          </div>
                        <div className=" flex gap-1">
                            <div className=" lg:w-[10px] lg:h-[10px] w-[5px] h-[5px] rounded-full bg-red-600"></div>
                            <div className=" lg:w-[10px] lg:h-[10px] w-[5px] h-[5px] rounded-full bg-yellow-500"></div>
                            <div className=" lg:w-[10px] lg:h-[10px] w-[5px] h-[5px] rounded-full bg-blue-600"></div> 
                        </div>



                      </div>
                    </div>

                    <div className=" flex md:py-16 pr-12 py-6">
                      <CurvedLineChart/>
                    </div>
                  </div>
                  <div className=" flex flex-col items-center gap-4 lg:w-[27vw]">
                    <h3 className=" text-2xl font-extrabold text-center">Grow Your Business</h3>
                    <p className=" text-center text-[]">The results show how much has been done</p>
                  </div>
                </div>
          </div>
        </div>
      </div>

      {/* FIFTH SECTION */}
      <div className=" flex flow-row items-center justify-around bg-white w-full h-screen">
        <div className=" w flex items-center justify-center relative">
          <Image src='/images/person.png' width={500} height={500} alt="A lady working" className=" rounded-lg" />
          
            <div className=" bg-slate-100 absolute flex items-center justify-center bottom-8 right-8 w-28 h-28">
              <div className=" flex flex-col items-center gap-1">
                <div className=" flex items-center gap-4">
                  <h2 className=" font-extrabold text-[27px]">27%</h2>
                  <FaArrowTurnUp className=" text-green-500 "/>
                </div>
                <h3 className=" text-sm flex px-4 text-center">Yearly Tax Saving</h3>
              </div>
            </div>  
          
        </div>
        <div className=" flex flex-col max-w-lg">
          <div className=" flex flex-col gap-5">
            <h2 className=" font-bold text-3xl">Meet tax expert online & solve tax problems fast</h2>
            <h3 className=" font-bold">Tax specialists assist in preparing quarterly and annual tax provision and performing tax accounting duties.</h3>
            <p>Tax consultants help clients with a variety of tax-related issues. Mainly, they make sure clients comply with tax rule regulations, they also help individuals and businesses pay what they owe.</p>
          </div>
        </div>
      </div>

      {/* SIXTH SECTION */}
      <div className=" flex items-center justify-between px-20 m-auto w-[100%] h-[70vh]">
        <div className=" flex flex-col gap-3 max-w-md">
          <div className="">
            <h2 className=" text-3xl font-extrabold">Reduce your risk of errors and missed deadlines</h2>
          </div>
          <div>
            <p>The profile of tax has become much visible not only from an investor and board perspective but also from a tax authority and public perspective also needs to take control of risk.</p>
          </div>
          <div>
              <button className=" bg-orange-600 py-2 px-5 rounded text-white font-bold">Book A Call</button>
          </div>
        </div>

        <div className=" bg-white w-[27vw] h-[60vh]">
          <div className=" bg-black h-[10vh] flex items-center justify-between px-2">
            <div className="  text-white">
              <h3>Taking control of risk</h3>
            </div>
            <div className=" flex gap-1">
              <div className=" w-3 h-3 bg-red-600 rounded-full"></div>
              <div className=" w-3 h-3 bg-yellow-600 rounded-full"></div>
              <div className=" w-3 h-3 bg-blue-600 rounded-full "></div>
            </div>
          </div>

          <div className=" flex flex-col  px-5">
            <div className=" flex items-center justify-between py-5">
              <h3>CSP Score</h3>
              <p>view Details</p>
            </div>
              <div className=" flex flex-row relative items-center justify-center gap-3">
                  <div className=" w-3 h-[180px] rounded-full bg-gray-300 relative">
                    <div className=" w-3 bg-blue-600 bottom-0 h-[100px] rounded-full absolute"></div>
                  </div>
                  <div className=" w-3 h-[180px] rounded-full bg-gray-200 relative">
                    <div className=" w-3 bg-yellow-400 bottom-0 h-[50px] rounded-full absolute"></div>
                  </div>
                  <div className=" w-3 h-[180px] rounded-full bg-gray-200 relative">
                    <div className=" w-3 bg-red-600 bottom-0 h-[20px] rounded-full absolute"></div>
                  </div>
                  <div className=" w-3 h-[180px] rounded-full bg-gray-200 relative">
                    <div className=" w-3 bg-blue-600 bottom-0 h-[70px] rounded-full absolute"></div>
                  </div>
                  <div className=" w-3 h-[180px] rounded-full bg-gray-200 relative">
                    <div className=" w-3 bg-yellow-400 bottom-0 h-[50px] rounded-full absolute"></div>
                  </div>
                  <div className=" w-3 h-[180px] rounded-full bg-gray-200 relative">
                    <div className=" w-3 bg-red-600 bottom-0 h-[40px] rounded-full absolute"></div>
                  </div>
                  <div className=" w-3 h-[180px] rounded-full bg-gray-200 relative">
                    <div className=" w-3 bg-blue-600 bottom-0 h-[60px] rounded-full absolute"></div>
                  </div>
                  <div className=" w-3 h-[180px] rounded-full bg-gray-200 relative">
                    <div className=" w-3 bg-yellow-400 bottom-0 h-[90px] rounded-full absolute"></div>
                  </div>
                  <div className=" w-3 h-[180px] rounded-full bg-gray-200 relative">
                    <div className=" w-3 bg-red-600 bottom-0 h-[50px] rounded-full absolute"></div>
                  </div>
                  <div className=" w-3 h-[180px] rounded-full bg-gray-200 relative">
                    <div className=" w-3 bg-blue-600 bottom-0 h-[100px] rounded-full absolute"></div>
                  </div>
                  <div className=" w-3 h-[180px] rounded-full bg-gray-200 relative">
                    <div className=" w-3 bg-yellow-400 bottom-0 h-[70px] rounded-full absolute"></div>
                  </div>
                  <div className=" w-3 h-[180px] rounded-full bg-gray-200 relative">
                    <div className=" w-3 bg-red-600 bottom-0 h-[50px] rounded-full absolute"></div>
                  </div>
              </div>
            <div className=" flex justify-around items-center">
              <div className=" flex flex-col gap-2 items-center">
                <div>Good</div>
                <div className=" flex flex-row gap-1 items-center">
                  <div className=" w-2 h-2 rounded-full bg-blue-600"></div>
                  <div className=" text-[10px]">70%</div>
                </div>
              </div>
              <div className=" flex flex-col gap-2 items-center">
                <div>Average</div>
                <div className=" flex flex-row gap-1 items-center">
                  <div className=" w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className=" text-[10px]">20%</div>
                </div>
              </div>
              <div className=" flex flex-col gap-2 items-center">
                <div>Bad</div>
                <div className=" flex flex-row gap-1 items-center">
                  <div className=" w-2 h-2 rounded-full bg-red-600"></div>
                  <div className=" text-[10px]">10%</div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* seventh section */}
      
        <div className=" relative bg-gray-950 h-screen w-[100%] flex ">
          <div className=" bg-blue-500 relative left-20 bottom-32 rounded-full w-72 h-28 place-self-end z-10 "></div>
          <div className=" bg-red-500 relative left-20 bottom-[20px] rounded-full w-72 h-28 place-self-end z-10 "></div>
          <div className=" absolute w-[100%] backdrop-blur blur-3xl h-screen z-20"></div>
          <div className=" flex flex-col items-center gap-10 justify-center absolute z-30 right-0 left-0 top-0 bottom-0">
              <div>
                <p className=" text-gray-400">2,157 people have said how good Rareblocks</p>
              </div>
              <div className=" font-extrabold text-white text-3xl">
                <h3>Our happy clients say about us</h3>
              </div>
              <div className=" flex flex-row items-center gap-28">
                <div className=" bg-white w-72 h-72">
                  <div className=" flex flex-col gap-3 p-4">
                    <div className=" flex gap-1 text-[gold]">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    <div className=" text-black py-5">
                      <p>You made it so simple, My new site is so much faster and easier to work with than my old site. i just choose the page, make the change</p>
                    </div>
                    <div className=" flex gap-5">
                      <Image src='/images/pic.jpg' width={50} height={50} alt="Founder" className=" rounded-full" />
                      <div className=" flex flex-col">
                        <h3 className=" font-extrabold">Leslie Alexander</h3>
                        <p className=" text-sm">Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" bg-white w-72 h-72">
                  <div className=" flex flex-col gap-3 p-4">
                      <div className=" flex gap-1 text-[gold]">
                          <FaStar/>
                          <FaStar/>
                          <FaStar/>
                          <FaStar/>
                          <FaStar/>
                      </div>
                      <div className=" text-black py-8">
                        <p>Simply the best. Better than all the rest, I&lsquo;d recommend this product to beginners and advanced users</p>
                      </div>
                      <div className=" flex gap-5">
                        <Image src='/images/logo1.png' width={50} height={50} alt="Founder" className=" rounded-full" />
                        
                        <div className=" flex flex-col">
                          <h3 className=" font-extrabold">Jenny Wilson</h3>
                          <p className=" text-sm">Chief Marketing Office</p>
                        </div>
                      </div>
                    </div>
                </div>
                <div className=" bg-white w-72 h-72">
                <div className=" flex flex-col gap-3 p-4">
                    <div className=" flex gap-1 text-[gold]">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    <div className=" text-black py-5">
                      <p>I cannot believe that I got a brand new landing page after getting Omega, it was super easy to edit and faster and easier to work</p>
                    </div>
                    <div className=" flex gap-5">
                      <Image src='/images/pic.jpg' width={50} height={50} alt="Founder" className=" rounded-full" />
                      <div className=" flex flex-col">
                        <h3 className=" font-extrabold">Jason Jones</h3>
                        <p className=" text-sm">Co-Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border-b border-white">
                <button className=" text-white">Check all 2,157 reviews</button>
              </div>
            </div>
        </div>

        {/*  Eight section  */}

        <div className=" bg-white h-screen w-[100%] flex flex-col items-center justify-center">
          <div className=" flex flex-col items-center justify-center gap-10">
            <div className=" flex flex-col items-center justify-center gap-10">
              <h3 className=" text-3xl font-extrabold">Read our blog</h3>
              <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            </div>
            <div className=" flex flex-row gap-5">
                <div className=" flex flex-col gap-5">
                    <Image src='/images/image6.png' alt="" width={300} height={300} className=" w-fit h-full rounded-md"/>
                    <date> Fri Aug 09 2024 </date>
                    <h3 className=" font-extrabold text-2xl max-w-lg">A Holiday Tradition: Tax Extenders Slated to Expire at End of 2021.</h3>
                </div>
                <div className=" flex flex-col gap-5">
                    <Image src='/images/cine4.png' alt="" width={300} height={300} className=" w-fit h-full rounded-md"/>
                    <date> Mon Jan 19 2020 </date>
                    <h3 className=" font-extrabold text-2xl max-w-lg">What Do Global Minimum Tax Rules Mean for Corporate Tax Policies?</h3>
                </div>
            </div>
          </div>
        </div>

        {/* NINTH SECTION */}
        
      
    </main>
  );
}
