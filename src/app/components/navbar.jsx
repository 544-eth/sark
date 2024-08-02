import React from 'react'
import Link from 'next/link'
import styles from './sarklogo.module.css'

const Navbar = () => {
  return (
    <div className=' bg-blue-50'>
        <div className=' flex items-center justify-between m-auto w-[92%] text-black py-3 '>
          {/* LOGO SECTION */}
          <div >
            <Link href='/' className=' flex'>
              {/* <Image src='/images/logo1.png' alt='logo' width={50} height={50} className=' rounded-full'/> */}
              <h1 className={styles.h1}>Sarky</h1>
            </Link>
          </div>
          {/* NAVBAR SECTION */}
          <div className=' flex items-center gap-20'>
            <div className=' flex gap-5'>
              <Link href='/' className='text-[18px]' >Demo</Link>
              <Link href='/' className='text-[18px]' >About</Link>
              <Link href='/' className='text-[18px]' >Blog</Link>
              <Link href='/' className='text-[18px]' >Page</Link>
              <Link href='/' className='text-[18px]' >Contact</Link>
            </div>
            <div className=''>
              <button className=' bg-orange-600 px-5 py-2 rounded-md text-white'>Book a meeting</button>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Navbar
