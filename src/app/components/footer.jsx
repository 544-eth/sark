import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className=" bg-gradient-to-bl from-blue-50 to-green-50 lg:h-screen ">
          <div className=" flex flex-col w-[80%] m-auto py-6 ">
            <div className=" flex items-center justify-between py-8 lg:py-16">
              <div className=" flex flex-col">
                <h2 className=" font-extrabold lg:text-3xl text-[13px] ">Take action now to stay complaint.</h2>
                <h2 className=' font-extrabold lg:text-3xl text-[13px] '>Grow Business without tension.</h2>
              </div>
              <button className=" bg-orange-600 lg:py-2 lg:px-5 px-2.5 rounded-md text-[10px] lg:text-[17px] text-white">Book A Call</button>
            </div>
            <div className=" border rounded-full w-full"></div>
            <div className=" flex flex-col md:grid-cols-2 md:grid lg:flex-row lg:items-center gap-10 lg:gap-0 items-start lg:justify-between py-10 lg:py-20">
              <div className=' flex flex-col  gap-3 lg:gap-10'>
                <h3 className=' font-bold text-[13px] lg:text-[17px]'>Company</h3>
                <ul className=' flex flex-col gap-5 text-[11px] lg:text-[15px]'>
                  <Link href='/'>
                    <li className=' '>About</li>
                  </Link>
                  <Link href='/'>
                    <li>Features</li>
                  </Link>
                  <Link href='/'>
                    <li>Works</li>
                  </Link>
                  <Link href='/'>
                    <li>Career</li>
                  </Link>
                </ul>
              </div>
              <div className=' flex flex-col gap-3 lg:gap-10'>
                <h3 className=' font-bold text-[13px] lg:text-[17px]'>Help</h3>
                <ul className=' flex flex-col gap-5 text-[11px] lg:text-[15px]'>
                  <Link  href='/'>
                    <li>Customer Support</li>
                  </Link>
                  <Link  href='/'>
                    <li> Delivery Details</li>
                  </Link>
                  <Link  href='/'>
                    <li>Terms & Condition</li>
                  </Link>
                  <Link  href='/'>
                    <li>Privacy Policy</li>
                  </Link>
                </ul>
              </div>
              <div className=' flex flex-col gap-3 lg:gap-10'>
                <h3 className=' font-bold text-[13px] lg:text-[17px]'>Resources</h3>
                <ul className=' flex flex-col gap-5  text-[11px] lg:text-[15px]'>
                  <Link href='/'>
                    <li>Free eBooks</li>
                  </Link>
                  <Link href='/'>
                    <li>Development Tutorial</li>
                  </Link>
                  <Link href='/'>
                    <li>How to Blog</li>
                  </Link>
                  <Link href='/'>
                    <li>Youtube Playlist</li>
                  </Link>
                </ul>
              </div>
              <div className=' flex flex-col gap-3 lg:gap-10'>
                <h3 className=' font-bold text-[13px] lg:text-[17px]'>Links</h3>
                <ul className=' flex flex-col gap-5  text-[11px] lg:text-[15px]'>
                  <Link href='/'>
                    <li>Free eBooks</li>
                  </Link>
                  <Link href='/'>
                    <li>Development Tutorial</li>
                  </Link>
                  <Link href='/'>
                    <li>How to Blog</li>
                  </Link>
                  <Link href='/'>
                    <li>Youtube Playlist</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className=' flex items-center justify-between py-6 text-gray-500'>
              <p className=' text-[10px]'>&copy; Copyright 2024, All Rights Reserved</p>
              <div className=' flex gap-1 lg:gap-20 text-[10px]'>
                <Link href='/'>
                  <p>Privacy Policy</p>
                </Link>
                <Link href='/'>
                  <p>Terms & Condition</p>
                </Link>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Footer
