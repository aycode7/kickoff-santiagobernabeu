'use client'
import { useState } from "react"
import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Aos from "aos"
import './page.css'
import 'aos/dist/aos.css'
import logo from './Image/madrid_icon.png'
import modric from './Image/modric_oldest.jpg'
import React from 'react'

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
            <h1>Luka Modric Makes History: Oldest Player To Appear in an Official Match for Real Madrid</h1>

            <p>22/10/2024</p>

            <p>Modric surpasses Francisco Gento record of 38 years, 232 days, set in 1974</p>

            <p>Luka Modric, the Croatian midfield maestro, etched his name in Real Madrids record book by becoming the oldest player to appear in an official match for the club. This remarkable achievement underscores Modrics enduring quality, dedication and unparalleled longevity, the reocrd was etched in a match against Real Madrid and Getafe</p>

            <p>Age 39, 226 days, Modric has a legacy of 523 appearances for Real Madrid, 22 trophies including 5 UEFA Champions League title, 77 goals, 102 assists and countless midfield masterclasses</p>

            <h1>Modrics Reaction</h1>

            <p>Im proud to continue contributing to this great club, i feel blessed to have played along side incredible teamates and Coaches</p>

            <Link href="/">
              <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
            </Link>

          </div>

          <div data-aos="fade-left" className="image">
            <Image className='img' src={modric} alt='' priority />
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
          <h1>Luka Modric Makes History: Oldest Player To Appear in an Official Match for Real Madrid</h1>

          <p>22/10/2024</p>

          <p>Modric surpasses Francisco Gento record of 38 years, 232 days, set in 1974</p>

          <p>Luka Modric, the Croatian midfield maestro, etched his name in Real Madrids record book by becoming the oldest player to appear in an official match for the club. This remarkable achievement underscores Modrics enduring quality, dedication and unparalleled longevity, the reocrd was etched in a match against Real Madrid and Getafe</p>

          <p>Age 39, 226 days, Modric has a legacy of 523 appearances for Real Madrid, 22 trophies including 5 UEFA Champions League title, 77 goals, 102 assists and countless midfield masterclasses</p>

          <h1>Modrics Reaction</h1>

          <p>Im proud to continue contributing to this great club, i feel blessed to have played along side incredible teamates and Coaches</p>  

            <Link href="/">
              <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
            </Link>

        </div>

        <div data-aos="fade-left" className="image">
          <Image className='img' src={modric} alt='' priority />
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
          <h1>Luka Modric Makes History: Oldest Player To Appear in an Official Match for Real Madrid</h1>

          <p>22/10/2024</p>

          <p>Modric surpasses Francisco Gento record of 38 years, 232 days, set in 1974</p>

          <p>Luka Modric, the Croatian midfield maestro, etched his name in Real Madrids record book by becoming the oldest player to appear in an official match for the club. This remarkable achievement underscores Modrics enduring quality, dedication and unparalleled longevity, the reocrd was etched in a match against Real Madrid and Getafe</p>

          <p>Age 39, 226 days, Modric has a legacy of 523 appearances for Real Madrid, 22 trophies including 5 UEFA Champions League title, 77 goals, 102 assists and countless midfield masterclasses</p>

          <h1>Modrics Reaction</h1>

          <p>Im proud to continue contributing to this great club, i feel blessed to have played along side incredible teamates and Coaches</p>  

            <Link href="/">
              <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
            </Link>

        </div>

        <div data-aos="fade-left" className="image">
          <Image className='img' src={modric} alt='' priority />
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
                <p onClick={handleTap3} className={tap3 === true ? "tap_phone" : ''}>Standings</p>
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
          <Image className='img' src={modric} alt='' priority />
        </div>

        <div className="text">
          <h1>Luka Modric Makes History: Oldest Player To Appear in an Official Match for Real Madrid</h1>

          <p>22/10/2024</p>

          <p>Modric surpasses Francisco Gento record of 38 years, 232 days, set in 1974</p>

          <p>Luka Modric, the Croatian midfield maestro, etched his name in Real Madrids record book by becoming the oldest player to appear in an official match for the club. This remarkable achievement underscores Modrics enduring quality, dedication and unparalleled longevity, the reocrd was etched in a match against Real Madrid and Getafe</p>

          <p>Age 39, 226 days, Modric has a legacy of 523 appearances for Real Madrid, 22 trophies including 5 UEFA Champions League title, 77 goals, 102 assists and countless midfield masterclasses</p>

          <h1>Modrics Reaction</h1>

          <p>Im proud to continue contributing to this great club, i feel blessed to have played along side incredible teamates and Coaches</p>

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
