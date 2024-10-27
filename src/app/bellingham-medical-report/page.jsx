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
import bellingham from './Image/bellingham_med.webp'

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
            <h1>Jude Bellinghams Medical Report</h1>

            <p>23/08/2024</p>

            <p>Jude Bellinghams medical report revealed that he suffered a hamstring injury, specifically to the plantaris muscle in his right leg. This unfortunate setback was diagnosed after test conducted by the Real Madrid medical team on August 23, 2024. As a result, Bellingham was expected to be sidelined for about a month, which would have inpacted his participation in several key matches including the clash with Real Valladolid and the Nations League matches against the Republic of Ireland and Finland.</p>

            <p>However, it appears that Bellingham has since suffered another injury, this time an ankle sprain, during Real Madrids trashing of Girona. This latest setback may potentially put him out of crucial matches, including the Champions League last 16 tie against RB Leipzig and the LaLiga trip to Rayo Vallecano.</p>

            <Link href="/">
            <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
            </Link>

        </div>

        <div data-aos="fade-left" className="image">
            <Image className='img' src={bellingham} alt='' priority />
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
        <h1>Jude Bellinghams Medical Report</h1>

        <p>23/08/2024</p>

        <p>Jude Bellinghams medical report revealed that he suffered a hamstring injury, specifically to the plantaris muscle in his right leg. This unfortunate setback was diagnosed after test conducted by the Real Madrid medical team on August 23, 2024. As a result, Bellingham was expected to be sidelined for about a month, which would have inpacted his participation in several key matches including the clash with Real Valladolid and the Nations League matches against the Republic of Ireland and Finland.</p>

        <p>However, it appears that Bellingham has since suffered another injury, this time an ankle sprain, during Real Madrids trashing of Girona. This latest setback may potentially put him out of crucial matches, including the Champions League last 16 tie against RB Leipzig and the LaLiga trip to Rayo Vallecano.</p>

            <Link href="/">
            <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
            </Link>

        </div>

        <div data-aos="fade-left" className="image">
        <Image className='img' src={bellingham} alt='' priority />
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
        <h1>Jude Bellinghams Medical Report</h1>

        <p>23/08/2024</p>

        <p>Jude Bellinghams medical report revealed that he suffered a hamstring injury, specifically to the plantaris muscle in his right leg. This unfortunate setback was diagnosed after test conducted by the Real Madrid medical team on August 23, 2024. As a result, Bellingham was expected to be sidelined for about a month, which would have inpacted his participation in several key matches including the clash with Real Valladolid and the Nations League matches against the Republic of Ireland and Finland.</p>

        <p>However, it appears that Bellingham has since suffered another injury, this time an ankle sprain, during Real Madrids trashing of Girona. This latest setback may potentially put him out of crucial matches, including the Champions League last 16 tie against RB Leipzig and the LaLiga trip to Rayo Vallecano.</p>

            <Link href="/">
            <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
            </Link>

        </div>

        <div data-aos="fade-left" className="image">
        <Image className='img' src={bellingham} alt='' priority />
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
        <Image className='img' src={bellingham} alt='' priority />
        </div>

        <div className="text">
        <h1>Jude Bellinghams Medical Report</h1>

        <p>23/08/2024</p>

        <p>Jude Bellinghams medical report revealed that he suffered a hamstring injury, specifically to the plantaris muscle in his right leg. This unfortunate setback was diagnosed after test conducted by the Real Madrid medical team on August 23, 2024. As a result, Bellingham was expected to be sidelined for about a month, which would have inpacted his participation in several key matches including the clash with Real Valladolid and the Nations League matches against the Republic of Ireland and Finland.</p>

        <p>However, it appears that Bellingham has since suffered another injury, this time an ankle sprain, during Real Madrids trashing of Girona. This latest setback may potentially put him out of crucial matches, including the Champions League last 16 tie against RB Leipzig and the LaLiga trip to Rayo Vallecano.</p>

        <p>The following tests carried out on Dani Carvajal by the Real Madrid
            Medical Services, the player has been diagnosed with a ruptured anterior cruciate
            ligament, a ruptured external collateral ligament and a ruptured popliteus
            tendon in his right leg. He will undergo surgery in the coming days.
        </p>

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
