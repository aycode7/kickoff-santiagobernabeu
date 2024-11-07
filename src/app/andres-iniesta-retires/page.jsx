'use client'
import { useState } from "react"
import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Aos from "aos"
import './page.css'
import 'aos/dist/aos.css'
import React from 'react'
import logo from './Image/madrid_icon.png'
import madrid from './Image/racial.jpg'

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
                <Link href="fixtures">
                <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
                </Link>
                <Link href="standings">
                <h2 onClick={handleTap3} className={tap3 === true ? 'tap' : ''}>Standings</h2>
                </Link>
                <Link href="players">
                <h2 onClick={handleTap4} className={tap4 === true ? 'tap' : ''}>Players</h2>
                </Link>
            </div>

            </div>

        </div>

        {/* news */}
        <div className='news'>

        <div data-aos="fade-right" className="text">
            <h1>Andrés Iniesta Retires From Football</h1>

            <p>OFFICIAL ANNOUNCEMENT 08/10/2024</p>

            <p>Following Andrés Iniestas announcement that he is retiring from professional football, Real Madrid C.F, its President, its board of directors and KickOff-SantiagoBernabeu would like to express
                their recognition, admiration and affection for one of the biggest legends of Spanish and World football.
            </p>

            <p>Andrés Iniesta has enriched the sport through his football and his values, in addition to the numerous trophies he has won 
                during his career. His iconic goal in the 2010 World Cup Final in South Africa would forever remain in the heart of
                every Spanish fan.
            </p>

            <p>KickOff-SantiagoBernabeu would like to wish him and his family the best of luck in this new chapter of life</p>

            <Link href="/">
            <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
            </Link>

        </div>

        <div data-aos="fade-left" className="image">
            <Image className='img' src={madrid} alt='' priority />
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
            <Link href="fixtures">
            <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
            </Link>
            <Link href="standings">
            <h2 onClick={handleTap3} className={tap3 === true ? 'tap' : ''}>Standings</h2>
            </Link>
            <Link href="players">
            <h2 onClick={handleTap4} className={tap4 === true ? 'tap' : ''}>Players</h2>
            </Link>
        </div>

        </div>

        </div>

        {/* news */}
        <div className='news'>

        <div data-aos="fade-right" className="text">
        <h1>Andrés Iniesta Retires From Football</h1>

        <p>OFFICIAL ANNOUNCEMENT 08/10/2024</p>

        <p>Following Andrés Iniestas announcement that he is retiring from professional football, Real Madrid C.F, its President, its board of directors and KickOff-SantiagoBernabeu would like to express
            their recognition, admiration and affection for one of the biggest legends of Spanish and World football.
        </p>

        <p>Andrés Iniesta has enriched the sport through his football and his values, in addition to the numerous trophies he has won 
            during his career. His iconic goal in the 2010 World Cup Final in South Africa would forever remain in the heart of
            every Spanish fan.
        </p>

        <p>KickOff-SantiagoBernabeu would like to wish him and his family the best of luck in this new chapter of life</p>  

            <Link href="/">
            <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
            </Link>

        </div>

        <div data-aos="fade-left" className="image">
        <Image className='img' src={madrid} alt='' priority />
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
            <Link href="fixtures">
            <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
            </Link>
            <Link href="standings">
            <h2 onClick={handleTap3} className={tap3 === true ? 'tap' : ''}>Standings</h2>
            </Link>
            <Link href="players">
            <h2 onClick={handleTap4} className={tap4 === true ? 'tap' : ''}>Players</h2>
            </Link>
        </div>

        </div>

        </div>

        {/* news */}
        <div className='news_tablet'>

        <div data-aos="fade-right" className="text">
        <h1>Andrés Iniesta Retires From Football</h1>

        <p>OFFICIAL ANNOUNCEMENT 08/10/2024</p>

        <p>Following Andrés Iniestas announcement that he is retiring from professional football, Real Madrid C.F, its President, its board of directors and KickOff-SantiagoBernabeu would like to express
            their recognition, admiration and affection for one of the biggest legends of Spanish and World football.
        </p>

        <p>Andrés Iniesta has enriched the sport through his football and his values, in addition to the numerous trophies he has won 
            during his career. His iconic goal in the 2010 World Cup Final in South Africa would forever remain in the heart of
            every Spanish fan.
        </p>

        <p>KickOff-SantiagoBernabeu would like to wish him and his family the best of luck in this new chapter of life</p>  

            <Link href="/">
            <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
            </Link>

        </div>

        <div data-aos="fade-left" className="image">
        <Image className='img' src={madrid} alt='' priority />
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
                <Link href="fixtures">
                <p onClick={handleTap2} className={tap2 === true ? "tap_phone" : ''}>Fixtures</p>                  
                </Link>
                <Link href="standings">
                <h2 onClick={handleTap3} className={tap3 === true ? 'tap' : ''}>Standings</h2>              
                </Link>
                <Link href="players">
                <p onClick={handleTap4} className={tap4 === true ? "tap_phone" : ''}>Players</p>
                </Link>
            </div>
            }
        </div>

        </div>

        </div>

        {/* news_phone */}
        <div data-aos="fade-up" className='news_phone'>

        <div className="image">
        <Image className='img' src={madrid} alt='' priority />
        </div>

        <div className="text">
        <h1>Andrés Iniesta Retires From Football</h1>

        <p>OFFICIAL ANNOUNCEMENT 08/10/2024</p>

        <p>Following Andrés Iniestas announcement that he is retiring from professional football, Real Madrid C.F, its President, its board of directors and KickOff-SantiagoBernabeu would like to express
            their recognition, admiration and affection for one of the biggest legends of Spanish and World football.
        </p>

        <p>Andrés Iniesta has enriched the sport through his football and his values, in addition to the numerous trophies he has won 
            during his career. His iconic goal in the 2010 World Cup Final in South Africa would forever remain in the heart of
            every Spanish fan.
        </p>

        <p>KickOff-SantiagoBernabeu would like to wish him and his family the best of luck in this new chapter of life</p>

        <p>06/10/2024</p>  

        <Link href="/">
            <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back</button>
        </Link>

        </div>

        </div>
        </div>
      
    </div>
  )
}

export default Page