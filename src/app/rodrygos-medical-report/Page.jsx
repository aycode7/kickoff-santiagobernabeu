'use client'
import { useState } from "react"
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import Link from "next/link"
import Image from "next/image"
import './page.css'
import React from 'react'
import logo from './Image/madrid_icon.png'
import rodrygo from './Image/rodrygo_med.jpg'

const Page = () => {

  // aos
  useEffect(()=> {
    Aos.init({duration: 1100});
  }, [])

  // navbar click functionality
  const [tap, setTap] = useState(true);
  const [tap2, setTap2] = useState(false);
  const [tap3, setTap3] = useState(false);
  const [tap4, setTap4] = useState(false);

  const handleTap = () => {
    setTap(true)
    setTap2(false)
    setTap3(false)
    setTap4(false)

  }

  const handleTap2 = () => {
    setTap(false)
    setTap2(true)
    setTap3(false)
    setTap4(false)

  }

  const handleTap3 = () => {
    setTap(false)
    setTap2(false)
    setTap3(true)
    setTap4(false)

  }

  const handleTap4 = () => {
    setTap(false)
    setTap2(false)
    setTap3(false)
    setTap4(true)

  }

  // feedback
  const [notlike, setNotlike] = useState(true);
  const [like, setLike] = useState(false);

  const handleNotlike = () => {
    setNotlike(true)
    setLike(false)

  }

  const handleLike = () => {
    setNotlike(false)
    setLike(true)

  }

  // dropdown
  const [dropdownIcon, setDropdownIcon] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleDropdownIcon = () => {
    setDropdown(!dropdown)

  }

  return (
    <div>

        {/* big laptop */}
        <div id='big' className='hidden md:hidden lg:hidden xl:block'>

        {/* navbar */}
        <div className="topnav">

            <div id='big' className='navbar'>
            <Link href="/">
            <div className="left">
                <h1>KickOff</h1>
                <Image style={{cursor:'pointer'}} src={logo} width={90} alt='' priority />
            </div>
            </Link>

            <div className="middle">
                <Link href="/">
                <h2 onClick={handleTap} className={tap === true ? 'tap' : ''}>News</h2>
                </Link>
                <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
                <h2 onClick={handleTap3} className={tap3 === true ? 'tap' : ''}>Standings</h2>
                <h2 onClick={handleTap4} className={tap4 === true ? 'tap' : ''}>Players</h2>
            </div>

            </div>

        </div>

        {/* news */}
        <div className='news'>

        <div data-aos="fade-right" className="text">
            <h1>Rodrygo medical report</h1>

            <p>MEDICAL REPORT 24/10/2024</p>

            <p>The following test carried out on Real Madrid player Rodrygo goes by the Real Madrid medical service, he has been diagnosed with an injury to the biceps femoris muscle in his right thigh. His recovery would be assessed.</p>

        </div>

        <div data-aos="fade-left" className="image">
            <Image className='img' src={rodrygo} alt='' priority />
        </div>

        </div>
        </div>

        {/* small laptop */}
        <div id='big' className='hidden md:hidden lg:block xl:hidden'>

        {/* navbar */}
        <div className="topnav">

        <div id='big' className='navbar'>
        <Link href="/">
        <div className="left">
            <h1>KickOff</h1>
            <Image style={{cursor:'pointer'}} src={logo} width={90} alt='' priority />
        </div>
        </Link>

        <div className="middle">
            <Link href="/">
            <h2 onClick={handleTap} className={tap === true ? 'tap' : ''}>News</h2>
            </Link>
            <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
            <h2 onClick={handleTap3} className={tap3 === true ? 'tap' : ''}>Standings</h2>
            <h2 onClick={handleTap4} className={tap4 === true ? 'tap' : ''}>Players</h2>
        </div>

        </div>

        </div>

        {/* news */}
        <div className='news'>

        <div data-aos="fade-right" className="text">
        
            <h1>Rodrygo medical report</h1>

            <p>MEDICAL REPORT 24/10/2024</p>

            <p>The following test carried out on Real Madrid player Rodrygo goes by the Real Madrid medical service, he has been diagnosed with an injury to the biceps femoris muscle in his right thigh. His recovery would be assessed.</p>

        </div>

        <div data-aos="fade-left" className="image">
        <Image className='img' src={rodrygo} alt='' priority />
        </div>

        </div>

        </div>

        {/* tablet */}
        <div id='big' className='hidden md:block lg:hidden xl:hidden'>

        {/* navbar */}
        <div className="topnav">

        <div id='big' className='navbar'>
        <Link href="/">
        <div className="left">
            <h1>KickOff</h1>
            <Image style={{cursor:'pointer'}} src={logo} width={90} alt='' priority />
        </div>
        </Link>

        <div className="middle">
            <Link href="/">
            <h2 onClick={handleTap} className={tap === true ? 'tap' : ''}>News</h2>
            </Link>
            <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
            <h2 onClick={handleTap3} className={tap3 === true ? 'tap' : ''}>Standings</h2>
            <h2 onClick={handleTap4} className={tap4 === true ? 'tap' : ''}>Players</h2>
        </div>

        </div>

        </div>

        {/* news */}
        <div className='news_tablet'>

        <div data-aos="fade-right" className="text">
        
            <h1>Rodrygo medical report</h1>

            <p>MEDICAL REPORT 24/10/2024</p>

            <p>The following test carried out on Real Madrid player Rodrygo goes by the Real Madrid medical service, he has been diagnosed with an injury to the biceps femoris muscle in his right thigh. His recovery would be assessed.</p>

        </div>

        <div data-aos="fade-left" className="image">
        <Image className='img' src={rodrygo} alt='' priority />
        </div>

        </div>
        </div>

        {/* phone */}
        <div id='mobile' className='block md:hidden lg:hidden xl:hidden'>

        {/* navbar_phone */}
        <div className="topnav_phone">

        <div className="navbar_phone">

        <Link href="/">
        <div className="left">
            <h1>KickOff</h1>
            <Image src={logo} width={75} alt='' />
        </div>
        </Link>

        <div className="right">
            {dropdownIcon === true &&
            <p onClick={handleDropdownIcon}>≡</p>
            }

            {dropdown === true &&
            <div className="dropdown">
                <Link href="/">
                <p onClick={handleTap} className={tap === true ? "tap_phone" : ''}>News</p>
                </Link>
                <p onClick={handleTap2} className={tap2 === true ? "tap_phone" : ''}>Fixtures</p>
                <p onClick={handleTap3} className={tap3 === true ? "tap_phone" : ''}>Standings</p>
                <p onClick={handleTap4} className={tap4 === true ? "tap_phone" : ''}>Players</p>
            </div>
            }
        </div>

        </div>

        </div>

        {/* news_phone */}
        <div data-aos="fade-up" className='news_phone'>

        <div className="image">
        <Image className='img' src={rodrygo} alt='' priority />
        </div>

        <div className="text">
        
            <h1>Rodrygo medical report</h1>

            <p>MEDICAL REPORT 24/10/2024</p>

            <p>The following test carried out on Real Madrid player Rodrygo goes by the Real Madrid medical service, he has been diagnosed with an injury to the biceps femoris muscle in his right thigh. His recovery would be assessed.</p>

        </div>

        </div>
        </div>
      
    </div>
  )
}

export default Page