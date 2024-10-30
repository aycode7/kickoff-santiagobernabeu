'use client'
import { useState } from "react"
import { useEffect } from "react"
import Aos from "aos"
import Link from "next/link"
import Image from "next/image"
import 'aos/dist/aos.css'
import './page.css'
import logo from './Image/madrid_icon.png'
import mbappe from './Image/kylian.jpg'
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
                <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
                <h2 onClick={handleTap3} className={tap3 === true ? 'tap' : ''}>Standings</h2>
                <Link href="players" >
                <h2 onClick={handleTap4} className={tap4 === true ? 'tap' : ''}>Players</h2>
                </Link>
            </div>

            </div>

        </div>

        {/* news */}
        <div className='news'>

        <div data-aos="fade-right" className="text">
            <h1>Mbappe talk about PSG not wanting him in the squad anymore, procceds to say it was Luis Enrique that saved him</h1>

            <p>Before the 2023-24 campaign, Mbappe dropped a bombshell by informing PSG that he wouldnt renew his contract and would leave on a free transfer at the end of the season. The clubs response was swift and brutal: he was sidelined from the first-team set-up and excluded from the pre-season tour of Japan and South Korea as they tried to coerce him to sign an extension.</p>

            <h1>The Bigger Picture</h1>

            <p>Nonetheless, Mbappe was resolute in his decision and did not buckle under pressure from the club management. Hence, as the Ligue 1 season kicked off, Mbappe remained at PSG but was conspicuously absent from the pitch in their campaign opener against FC Lorient. However, after the Parisians dropped points he was reintegrated into the squad with sporting director Luis Campos and Enrique playing pivotal roles.</p>

            <h1>What Mbappe Said</h1>

            <p>During an interaction with reporters, Mbappe said: I was made to understand that I would no longer play for PSG [after informing them of my desire to leave at the end of the season]. I was told right to my face, and quite violently, so I was convinced that I was not going to play. Luis Enrique and Luis Campos saved me. Without them, I would never have stepped onto the pitch again. That is why my ambition was different this year. It was below my standards but just playing, stringing together matches and winning trophies was my biggest pride but next season, I would not settle for a season like that.</p>

            <h1>What is next for Mbappe</h1>

            <p>Mbappe completed his dream transfer to Real Madrid as a free agent on Monday but will have to wait for some time before he dons the iconic white jersey as he is currently preparing for the European Championship with the French national team. He will be in action with Les Bleus on Wednesday evening in a preparatory friendly against Luxembourg.</p>

            <Link href="/">
                <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
            </Link>

        </div>

        <div data-aos="fade-left" className="image">
            <Image className='img' src={mbappe} alt='' priority />
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
            <Link href="players" >
            <h2 onClick={handleTap4} className={tap4 === true ? 'tap' : ''}>Players</h2>
            </Link>
        </div>

        </div>

        </div>

        {/* news */}
        <div className='news'>

        <div data-aos="fade-right" className="text">
        
            <h1>Mbappe talk about PSG not wanting him in the squad anymore, procceds to say it was Luis Enrique that saved him</h1>

            <p>Before the 2023-24 campaign, Mbappe dropped a bombshell by informing PSG that he wouldnt renew his contract and would leave on a free transfer at the end of the season. The clubs response was swift and brutal: he was sidelined from the first-team set-up and excluded from the pre-season tour of Japan and South Korea as they tried to coerce him to sign an extension.</p>

            <h1>The Bigger Picture</h1>

            <p>Nonetheless, Mbappe was resolute in his decision and did not buckle under pressure from the club management. Hence, as the Ligue 1 season kicked off, Mbappe remained at PSG but was conspicuously absent from the pitch in their campaign opener against FC Lorient. However, after the Parisians dropped points he was reintegrated into the squad with sporting director Luis Campos and Enrique playing pivotal roles.</p>

            <h1>What Mbappe Said</h1>

            <p>During an interaction with reporters, Mbappe said: I was made to understand that I would no longer play for PSG [after informing them of my desire to leave at the end of the season]. I was told right to my face, and quite violently, so I was convinced that I was not going to play. Luis Enrique and Luis Campos saved me. Without them, I would never have stepped onto the pitch again. That is why my ambition was different this year. It was below my standards but just playing, stringing together matches and winning trophies was my biggest pride but next season, I would not settle for a season like that.</p>

            <h1>What is next for Mbappe</h1>

            <p>Mbappe completed his dream transfer to Real Madrid as a free agent on Monday but will have to wait for some time before he dons the iconic white jersey as he is currently preparing for the European Championship with the French national team. He will be in action with Les Bleus on Wednesday evening in a preparatory friendly against Luxembourg.</p>

            <Link href="/">
                <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
            </Link>

        </div>

        <div data-aos="fade-left" className="image">
        <Image className='img' src={mbappe} alt='' priority />
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
            <Link href="players" >
            <h2 onClick={handleTap4} className={tap4 === true ? 'tap' : ''}>Players</h2>
            </Link>
        </div>

        </div>

        </div>

        {/* news */}
        <div className='news_tablet'>

        <div data-aos="fade-right" className="text">
        
            <h1>Mbappe talk about PSG not wanting him in the squad anymore, procceds to say it was Luis Enrique that saved him</h1>

            <p>Before the 2023-24 campaign, Mbappe dropped a bombshell by informing PSG that he wouldnt renew his contract and would leave on a free transfer at the end of the season. The clubs response was swift and brutal: he was sidelined from the first-team set-up and excluded from the pre-season tour of Japan and South Korea as they tried to coerce him to sign an extension.</p>

            <h1>The Bigger Picture</h1>

            <p>Nonetheless, Mbappe was resolute in his decision and did not buckle under pressure from the club management. Hence, as the Ligue 1 season kicked off, Mbappe remained at PSG but was conspicuously absent from the pitch in their campaign opener against FC Lorient. However, after the Parisians dropped points he was reintegrated into the squad with sporting director Luis Campos and Enrique playing pivotal roles.</p>

            <h1>What Mbappe Said</h1>

            <p>During an interaction with reporters, Mbappe said: I was made to understand that I would no longer play for PSG [after informing them of my desire to leave at the end of the season]. I was told right to my face, and quite violently, so I was convinced that I was not going to play. Luis Enrique and Luis Campos saved me. Without them, I would never have stepped onto the pitch again. That is why my ambition was different this year. It was below my standards but just playing, stringing together matches and winning trophies was my biggest pride but next season, I would not settle for a season like that.</p>

            <h1>What is next for Mbappe</h1>

            <p>Mbappe completed his dream transfer to Real Madrid as a free agent on Monday but will have to wait for some time before he dons the iconic white jersey as he is currently preparing for the European Championship with the French national team. He will be in action with Les Bleus on Wednesday evening in a preparatory friendly against Luxembourg.</p>

            <Link href="/">
                <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
            </Link>

        </div>

        <div data-aos="fade-left" className="image">
        <Image className='img' src={mbappe} alt='' priority />
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
                <Link href="players" >
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
        <Image className='img' src={mbappe} alt='' priority />
        </div>

        <div className="text">
        
            <h1>Mbappe talk about PSG not wanting him in the squad anymore, procceds to say it was Luis Enrique that saved him</h1>

            <p>Before the 2023-24 campaign, Mbappe dropped a bombshell by informing PSG that he wouldnt renew his contract and would leave on a free transfer at the end of the season. The clubs response was swift and brutal: he was sidelined from the first-team set-up and excluded from the pre-season tour of Japan and South Korea as they tried to coerce him to sign an extension.</p>

            <h1>The Bigger Picture</h1>

            <p>Nonetheless, Mbappe was resolute in his decision and did not buckle under pressure from the club management. Hence, as the Ligue 1 season kicked off, Mbappe remained at PSG but was conspicuously absent from the pitch in their campaign opener against FC Lorient. However, after the Parisians dropped points he was reintegrated into the squad with sporting director Luis Campos and Enrique playing pivotal roles.</p>

            <h1>What Mbappe Said</h1>

            <p>During an interaction with reporters, Mbappe said: I was made to understand that I would no longer play for PSG [after informing them of my desire to leave at the end of the season]. I was told right to my face, and quite violently, so I was convinced that I was not going to play. Luis Enrique and Luis Campos saved me. Without them, I would never have stepped onto the pitch again. That is why my ambition was different this year. It was below my standards but just playing, stringing together matches and winning trophies was my biggest pride but next season, I would not settle for a season like that.</p>

            <h1>What is next for Mbappe</h1>

            <p>Mbappe completed his dream transfer to Real Madrid as a free agent on Monday but will have to wait for some time before he dons the iconic white jersey as he is currently preparing for the European Championship with the French national team. He will be in action with Les Bleus on Wednesday evening in a preparatory friendly against Luxembourg.</p>

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
