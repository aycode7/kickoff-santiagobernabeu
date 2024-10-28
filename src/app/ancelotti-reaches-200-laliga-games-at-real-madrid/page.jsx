'use client'
import { useState } from "react"
import { useEffect } from "react"
import Aos from "aos"
import Link from "next/link"
import Image from "next/image"
import 'aos/dist/aos.css'
import './page.css'
import React from 'react'
import logo from './Image/madrid_icon.png'
import ancelotti from './Image/ancelloti_200.jpg'

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
            <h1>Ancelotti Reaches 200 LaLiga Games At Real Madrid</h1>

            <p>21/10/2023</p>

            <p>Carlo Ancelotti on cusp of a remarkable milestone, his 200th Laliga game as Real Madrids coach, this achievement speaks volume about his dedication and leadership. As he prepares for his land mark game against Celta Vigo at Blaidos, lets take a gland at his
            impressive LaLiga record: 142 wins, 33 draws, and defeats.</p>

            <p>Ancelotti journey with Real Madrid has been nothing short of phenomenal. He is the second most successful coach in the clubs
                history, with 200 wins under his belt, including 129 in LaLiga, 43 in the Champions League and 18 in the Copa del Rey. His
                tenure has yielded ten prestigious titles, comprising two Champions League, two Club World Cups, two European Super Cups, one 
                LaLiga, two Copa del Rey and one Spanish Super Cup.
            </p>

            <p>As Ancelotti approaches this milestone, he expressed his desire to continue accumulating games and potentially reaching 300.
                His focus remains on the team performance, ensuring that they are motivated and in top physical condition. With players like Vini Jr
                and Mbappe in top form, Ancelotti is confident about the teams prospects.
            </p>

            <h1>Ancelotti Achievement at Real Madrid</h1>

            <p>LaLiga: 129 wins</p>

            <p>Champions League: 43 wins</p>

            <p>Copa del Rey: 18 wins</p>

            <p>Spanish Super Cup: 4 wins</p>

            <p>Club World Cup: 4 wins</p>

            <p>European Super Cup: 2 wins</p>    

            <Link href="/">
            <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
            </Link>

        </div>

        <div data-aos="fade-left" className="image">
            <Image className='img' src={ancelotti} alt='' priority />
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
        <h1>Ancelotti Reaches 200 LaLiga Games At Real Madrid</h1>

        <p>21/10/2023</p>

        <p>Carlo Ancelotti on cusp of a remarkable milestone, his 200th Laliga game as Real Madrids coach, this achievement speaks volume about his dedication and leadership. As he prepares for his land mark game against Celta Vigo at Blaidos, lets take a gland at his
        impressive LaLiga record: 142 wins, 33 draws, and defeats.</p>

        <p>Ancelotti journey with Real Madrid has been nothing short of phenomenal. He is the second most successful coach in the clubs
            history, with 200 wins under his belt, including 129 in LaLiga, 43 in the Champions League and 18 in the Copa del Rey. His
            tenure has yielded ten prestigious titles, comprising two Champions League, two Club World Cups, two European Super Cups, one 
            LaLiga, two Copa del Rey and one Spanish Super Cup.
        </p>

        <p>As Ancelotti approaches this milestone, he expressed his desire to continue accumulating games and potentially reaching 300.
            His focus remains on the team performance, ensuring that they are motivated and in top physical condition. With players like Vini Jr
            and Mbappe in top form, Ancelotti is confident about the teams prospects.
        </p>

        <h1>Ancelotti Achievement at Real Madrid</h1>

        <p>LaLiga: 129 wins</p>

        <p>Champions League: 43 wins</p>

        <p>Copa del Rey: 18 wins</p>

        <p>Spanish Super Cup: 4 wins</p>

        <p>Club World Cup: 4 wins</p>

        <p>European Super Cup: 2 wins</p>

            <Link href="/">
            <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
            </Link>

        </div>

        <div data-aos="fade-left" className="image">
        <Image className='img' src={ancelotti} alt='' priority />
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
        <h1>Ancelotti Reaches 200 LaLiga Games At Real Madrid</h1>

        <p>21/10/2023</p>

        <p>Carlo Ancelotti on cusp of a remarkable milestone, his 200th Laliga game as Real Madrids coach, this achievement speaks volume about his dedication and leadership. As he prepares for his land mark game against Celta Vigo at Blaidos, lets take a gland at his
        impressive LaLiga record: 142 wins, 33 draws, and defeats.</p>

        <p>Ancelotti journey with Real Madrid has been nothing short of phenomenal. He is the second most successful coach in the clubs
            history, with 200 wins under his belt, including 129 in LaLiga, 43 in the Champions League and 18 in the Copa del Rey. His
            tenure has yielded ten prestigious titles, comprising two Champions League, two Club World Cups, two European Super Cups, one 
            LaLiga, two Copa del Rey and one Spanish Super Cup.
        </p>

        <p>As Ancelotti approaches this milestone, he expressed his desire to continue accumulating games and potentially reaching 300.
            His focus remains on the team performance, ensuring that they are motivated and in top physical condition. With players like Vini Jr
            and Mbappe in top form, Ancelotti is confident about the teams prospects.
        </p>

        <h1>Ancelotti Achievement at Real Madrid</h1>

        <p>LaLiga: 129 wins</p>

        <p>Champions League: 43 wins</p>

        <p>Copa del Rey: 18 wins</p>

        <p>Spanish Super Cup: 4 wins</p>

        <p>Club World Cup: 4 wins</p>

        <p>European Super Cup: 2 wins</p>

            <Link href="/">
            <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
            </Link>

        </div>

        <div data-aos="fade-left" className="image">
        <Image className='img' src={ancelotti} alt='' priority />
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
        <Image className='img' src={ancelotti} alt='' priority />
        </div>

        <div className="text">
        <h1>Ancelotti Reaches 200 LaLiga Games At Real Madrid</h1>

        <p>21/10/2023</p>

        <p>Carlo Ancelotti on cusp of a remarkable milestone, his 200th Laliga game as Real Madrids coach, this achievement speaks volume about his dedication and leadership. As he prepares for his land mark game against Celta Vigo at Blaidos, lets take a gland at his
        impressive LaLiga record: 142 wins, 33 draws, and defeats.</p>

        <p>Ancelotti journey with Real Madrid has been nothing short of phenomenal. He is the second most successful coach in the clubs
            history, with 200 wins under his belt, including 129 in LaLiga, 43 in the Champions League and 18 in the Copa del Rey. His
            tenure has yielded ten prestigious titles, comprising two Champions League, two Club World Cups, two European Super Cups, one 
            LaLiga, two Copa del Rey and one Spanish Super Cup.
        </p>

        <p>As Ancelotti approaches this milestone, he expressed his desire to continue accumulating games and potentially reaching 300.
            His focus remains on the team performance, ensuring that they are motivated and in top physical condition. With players like Vini Jr
            and Mbappe in top form, Ancelotti is confident about the teams prospects.
        </p>

        <h1>Ancelotti Achievement at Real Madrid</h1>

        <p>LaLiga: 129 wins</p>

        <p>Champions League: 43 wins</p>

        <p>Copa del Rey: 18 wins</p>

        <p>Spanish Super Cup: 4 wins</p>

        <p>Club World Cup: 4 wins</p>

        <p>European Super Cup: 2 wins</p>

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
