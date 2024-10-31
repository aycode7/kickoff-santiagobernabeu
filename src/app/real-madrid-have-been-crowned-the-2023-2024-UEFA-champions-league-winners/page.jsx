'use client'
import Link from "next/link"
import { useState } from "react"
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import Image from "next/image"
import logo from './Image/madrid_icon.png'
import './page.css'
import champions from './Image/champions.jpg'
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
            <h1>Real Madrid have been crowned the 2023/2024 UEFA Champions League Winners</h1>

            <p>Beating Borussia Dortmund 2 - 0 in a final Carvajal, Vinicius Jr. score for Los Merengues at Wembley</p>

            <p>Real Madrid won the 2024 UEFA Champions League trophy Saturday by blanking Borussia Dortmund 2 - 0 in the final.</p>

            <p>Spanish defender Dani Carvajal and Brazilian attacker Vinicius Jr. scored for Los Merengues in the 74th and 83rd minutes, respectively, at Wembley Stadium.</p>

            <p>Dortmunds German striker Niclas Fullkrug missed a chance for the lead by aiming his shot at the crossbar in the 23rd minute. Fullkrug missed another chance to score in the 87th minute as the Video Assistant Referee (VAR) disallowed his goal because of an offside.</p>

            <p>Dortmunds Swiss goalie Gregor Kobel made vital saves during the match to keep his team alive but could not prevent Real Madrid from clinching their 15th Champions League title.</p>

            <p>UEFA Champions League record holders Real Madrid won their sixth trophy in the last 10 years.</p>

            <p>Arda Guler became the first Turkish footballer to win a UEFA Champions League trophy.</p>

            <Link href="/">
                <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
            </Link>

        </div>

        <div data-aos="fade-left" className="image">
            <Image className='img' src={champions} alt='' priority />
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
        
            <h1>Real Madrid have been crowned the 2023/2024 UEFA Champions League Winners</h1>

            <p>Beating Borussia Dortmund 2 - 0 in a final Carvajal, Vinicius Jr. score for Los Merengues at Wembley</p>

            <p>Real Madrid won the 2024 UEFA Champions League trophy Saturday by blanking Borussia Dortmund 2 - 0 in the final.</p>

            <p>Spanish defender Dani Carvajal and Brazilian attacker Vinicius Jr. scored for Los Merengues in the 74th and 83rd minutes, respectively, at Wembley Stadium.</p>

            <p>Dortmunds German striker Niclas Fullkrug missed a chance for the lead by aiming his shot at the crossbar in the 23rd minute. Fullkrug missed another chance to score in the 87th minute as the Video Assistant Referee (VAR) disallowed his goal because of an offside.</p>

            <p>Dortmunds Swiss goalie Gregor Kobel made vital saves during the match to keep his team alive but could not prevent Real Madrid from clinching their 15th Champions League title.</p>

            <p>UEFA Champions League record holders Real Madrid won their sixth trophy in the last 10 years.</p>

            <p>Arda Guler became the first Turkish footballer to win a UEFA Champions League trophy.</p>

            <Link href="/">
                <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
            </Link>

        </div>

        <div data-aos="fade-left" className="image">
        <Image className='img' src={champions} alt='' priority />
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
        
            <h1>Real Madrid have been crowned the 2023/2024 UEFA Champions League Winners</h1>

            <p>Beating Borussia Dortmund 2 - 0 in a final Carvajal, Vinicius Jr. score for Los Merengues at Wembley</p>

            <p>Real Madrid won the 2024 UEFA Champions League trophy Saturday by blanking Borussia Dortmund 2 - 0 in the final.</p>

            <p>Spanish defender Dani Carvajal and Brazilian attacker Vinicius Jr. scored for Los Merengues in the 74th and 83rd minutes, respectively, at Wembley Stadium.</p>

            <p>Dortmunds German striker Niclas Fullkrug missed a chance for the lead by aiming his shot at the crossbar in the 23rd minute. Fullkrug missed another chance to score in the 87th minute as the Video Assistant Referee (VAR) disallowed his goal because of an offside.</p>

            <p>Dortmunds Swiss goalie Gregor Kobel made vital saves during the match to keep his team alive but could not prevent Real Madrid from clinching their 15th Champions League title.</p>

            <p>UEFA Champions League record holders Real Madrid won their sixth trophy in the last 10 years.</p>

            <p>Arda Guler became the first Turkish footballer to win a UEFA Champions League trophy.</p>

            <Link href="/">
                <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
            </Link>

        </div>

        <div data-aos="fade-left" className="image">
        <Image className='img' src={champions} alt='' priority />
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
        <Image className='img' src={champions} alt='' priority />
        </div>

        <div className="text">
        
            <h1>Real Madrid have been crowned the 2023/2024 UEFA Champions League Winners</h1>

            <p>Beating Borussia Dortmund 2 - 0 in a final Carvajal, Vinicius Jr. score for Los Merengues at Wembley</p>

            <p>Real Madrid won the 2024 UEFA Champions League trophy Saturday by blanking Borussia Dortmund 2 - 0 in the final.</p>

            <p>Spanish defender Dani Carvajal and Brazilian attacker Vinicius Jr. scored for Los Merengues in the 74th and 83rd minutes, respectively, at Wembley Stadium.</p>

            <p>Dortmunds German striker Niclas Fullkrug missed a chance for the lead by aiming his shot at the crossbar in the 23rd minute. Fullkrug missed another chance to score in the 87th minute as the Video Assistant Referee (VAR) disallowed his goal because of an offside.</p>

            <p>Dortmunds Swiss goalie Gregor Kobel made vital saves during the match to keep his team alive but could not prevent Real Madrid from clinching their 15th Champions League title.</p>

            <p>UEFA Champions League record holders Real Madrid won their sixth trophy in the last 10 years.</p>

            <p>Arda Guler became the first Turkish footballer to win a UEFA Champions League trophy.</p>

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
