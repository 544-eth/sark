import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className=" bg-gradient-to-bl from-blue-50 to-green-50 h-screen ">
          <div className=" flex flex-col w-[80%] m-auto ">
            <div className=" flex items-center justify-between py-16">
              <div className=" flex flex-col">
                <h2 className=" font-extrabold text-3xl ">Take action now to stay complaint.</h2>
                <h2 className=' font-extrabold text-3xl '>Grow Business without tension.</h2>
              </div>
              <button className=" bg-orange-600 py-2 px-5 rounded-md text-white">Book A Call</button>
            </div>
            <div className=" border rounded-full w-full"></div>
            <div className=" flex items-center justify-between py-20">
              <div className=' flex flex-col gap-10'>
                <h3 className=' font-bold'>Company</h3>
                <ul className=' flex flex-col gap-5'>
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
              <div className=' flex flex-col gap-10'>
                <h3 className=' font-bold'>Help</h3>
                <ul className=' flex flex-col gap-5'>
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
              <div className=' flex flex-col gap-10'>
                <h3 className=' font-bold'>Resources</h3>
                <ul className=' flex flex-col gap-5'>
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
              <div className=' flex flex-col gap-10'>
                <h3 className=' font-bold'>Links</h3>
                <ul className=' flex flex-col gap-5'>
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
            <div className=' flex items-center justify-between text-gray-500'>
              <p className=''>&copy; Copyright 2024, All Rights Reserved</p>
              <div className=' flex gap-20'>
                <p>Privacy Policy</p>
                <p>Terms & Condition</p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Footer
