'use client'
import { useState } from "react"
import { useEffect } from "react"
import Aos from "aos"
import Link from "next/link"
import Image from "next/image"
import './page.css'
import 'aos/dist/aos.css'
import logo from './Image/madrid_icon.png'
import background_img from './Image/night-stadium.jpg'
import realmadrid from './Image/realmadrid.png'
import barcelona from './Image/barcelona.png'
import React from 'react'
import Loader from "@/components/Loader"

const Page = () => {

      // aos
  useEffect(()=> {
    Aos.init({duration: 1100});
  }, []) 

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 500)
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
        {loading ? <Loader /> :
        <div id='big' className='hidden md:hidden lg:hidden xl:block'>

        {/* navbar */}
        <div data-aos="fade-down" className="topnav">

            <div id='big' className='navbar'>
            <Link href="/">
            <div className="left">
                <h1>KickOff</h1>
                <Image style={{cursor:'pointer'}} src={logo} width={90} alt='' priority />
            </div>
            </Link>

            <div className="middle">
                <Link href="/">
                <h2 onClick={handleTap4} className={tap4 === true ? 'tap' : ''}>News</h2>
                </Link>
                <Link href="fixtures">
                <h2 onClick={handleTap} className={tap === true ? 'tap' : ''}>Fixtures</h2>
                </Link>
                <Link href="standings">
                <h2 onClick={handleTap3} className={tap3 === true ? 'tap' : ''}>Standings</h2>
                </Link>
                <Link href="players">
                <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Players</h2>
                </Link>
            </div>

            </div>

        </div>        

        {/* background image */}
        <div>
        <Image className='background' src={background_img} alt='' priority />
        </div>

        {/* match */}
        <div data-aos='fade-up' className="match">
            <div className="container">
                <div className="head">                    
                    <div data-aos='fade-right' className="left"><p>Full-Time</p></div>
                    <div data-aos='fade-left' className="right"><p>Week 11 - LaLiga</p></div>
                </div>

                <div className="details">
                    <div data-aos='fade-right' className="left">
                        <Image src={realmadrid} alt="" width={45} />
                        <h1>Real Madrid</h1>
                    </div>
                    <div data-aos='fade-up' className="middle">
                        <h3>0 - 4</h3>
                    </div>
                    <div data-aos='fade-left' className="right">
                        <h1>Barcelona</h1>
                        <Image src={barcelona} alt="" width={45} />
                    </div>
                </div>

                <div className="scores">
                    <div data-aos='fade-right' className="right">
                    <p style={{marginLeft:'79px'}}>Raphina 84 ⚽</p>
                    <p style={{marginLeft:'77px'}}>L. Yamal 77 ⚽</p>
                    <p>R. Lewandowski 56, 54 ⚽</p>                     
                    </div>                    
                </div>

                <div data-aos='fade-up' className="location">
                    <div data-aos='fade-right' className="right">
                        <p>▼ Santiago Bernabéu, Madrid</p>
                    </div>
                </div>
            </div>
        </div>
        
        </div>}

        {/* small laptop */}
        {loading ? <Loader /> :
        <div id='big' className='hidden md:hidden lg:block xl:hidden'>

        {/* navbar */}
        <div data-aos="fade-down" className="topnav">

        <div id='big' className='navbar'>
        <Link href="/">
        <div className="left">
            <h1>KickOff</h1>
            <Image style={{cursor:'pointer'}} src={logo} width={90} alt='' priority />
        </div>
        </Link>

        <div className="middle">
            <Link href="/">
            <h2 onClick={handleTap4} className={tap4 === true ? 'tap' : ''}>News</h2>
            </Link>
            <Link href="fixtures">
            <h2 onClick={handleTap} className={tap === true ? 'tap' : ''}>Fixtures</h2>
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

        {/* background image */}
        <div>
        <Image className='background' src={background_img} alt='' priority />
        </div>  

        {/* match */}
        <div data-aos='fade-up' className="match_small">
            <div className="container">
                <div className="head">                    
                    <div data-aos='fade-right' className="left"><p>Full-Time</p></div>
                    <div data-aos='fade-left' className="right"><p>Week 11 - LaLiga</p></div>
                </div>

                <div className="details">
                    <div data-aos='fade-right' className="left">
                        <Image src={realmadrid} alt="" width={45} />
                        <h1>Real Madrid</h1>
                    </div>
                    <div data-aos='fade-up' className="middle">
                        <h3>0 - 4</h3>
                    </div>
                    <div data-aos='fade-left' className="right">
                        <h1>Barcelona</h1>
                        <Image src={barcelona} alt="" width={45} />
                    </div>
                </div>

                <div className="scores">
                    <div data-aos='fade-right' className="right">
                    <p style={{marginLeft:'79px'}}>Raphina 84 ⚽</p>
                    <p style={{marginLeft:'77px'}}>L. Yamal 77 ⚽</p>
                    <p>R. Lewandowski 56, 54 ⚽</p>                     
                    </div>                    
                </div>

                <div data-aos='fade-up' className="location">
                    <div data-aos='fade-right' className="right">
                        <p>▼ Santiago Bernabéu, Madrid</p>
                    </div>
                </div>
            </div>
        </div>            

        </div>}

        {/* tablet_laptop */}
        {loading ? <Loader /> :
        <div id='big' className='hidden md:block lg:hidden xl:hidden'>

        {/* navbar */}
        <div data-aos="fade-down" className="topnav">

        <div id='big' className='navbar'>
        <Link href="/">
        <div className="left">
            <h1>KickOff</h1>
            <Image style={{cursor:'pointer'}} src={logo} width={90} alt='' priority />
        </div>
        </Link>

        <div className="middle">
            <Link href="/">
            <h2 onClick={handleTap4} className={tap4 === true ? 'tap' : ''}>News</h2>
            </Link>
            <Link href="fixtures">
            <h2 onClick={handleTap} className={tap === true ? 'tap' : ''}>Fixtures</h2>
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

        {/* background image */}
        <div>
        <Image className='background' src={background_img} alt='' priority />
        </div>

        {/* match */}
        <div data-aos='fade-up' className="match_tablet">
            <div className="container">
                <div className="head">                    
                    <div data-aos='fade-right' className="left"><p>Full-Time</p></div>
                    <div data-aos='fade-left' className="right"><p>Week 11 - LaLiga</p></div>
                </div>

                <div className="details">
                    <div data-aos='fade-right' className="left">
                        <Image src={realmadrid} alt="" width={37} />
                        <h1>Real Madrid</h1>
                    </div>
                    <div data-aos='fade-up' className="middle">
                        <h3>0 - 4</h3>
                    </div>
                    <div data-aos='fade-left' className="right">
                        <h1>Barcelona</h1>
                        <Image src={barcelona} alt="" width={37} />
                    </div>
                </div>

                <div className="scores">
                    <div data-aos='fade-right' className="right">
                    <p style={{marginLeft:'79px'}}>Raphina 84 ⚽</p>
                    <p style={{marginLeft:'77px'}}>L. Yamal 77 ⚽</p>
                    <p>R. Lewandowski 56, 54 ⚽</p>                     
                    </div>                    
                </div>

                <div data-aos='fade-up' className="location">
                    <div data-aos='fade-right' className="right">
                        <p>▼ Santiago Bernabéu, Madrid</p>
                    </div>
                </div>
            </div>
        </div>            
        
        </div>}

        {/* phone laptop */}
        {loading ? <Loader /> :
        <div id='mobile' className='block md:hidden lg:hidden xl:hidden'>

        {/* navbar_phone */}
        <div data-aos="fade-down" className="topnav_phone">

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
                <p onClick={handleTap4} className={tap4 === true ? "tap_phone" : ''}>News</p>
                </Link>
                <Link href="fixtures">
                <p onClick={handleTap} className={tap === true ? "tap_phone" : ''}>Fixtures</p>
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

        {/* background image */}
        <div>
        <Image className='background' src={background_img} alt='' priority />
        </div>

        {/* match */}
        <div data-aos='fade-up' className="match_phone">
            <div className="container">
                <div className="head">
                    <div data-aos='fade-up' className="left"><p>Full-Time</p></div>
                    <div data-aos='fade-up' className="right"><p>Week 11 - LaLiga</p></div>
                </div>

                <div className="details">
                    <div data-aos='fade-up' className="left">
                        <Image src={realmadrid} alt="" width={22} />
                        <h1>Real Madrid</h1>
                    </div>
                    <div data-aos='fade-up' className="middle">
                        <h3>0 - 4</h3>
                    </div>
                    <div data-aos='fade-up' className="right">
                        <h1>Barcelona</h1>
                        <Image src={barcelona} alt="" width={22} />
                    </div>
                </div>

                <div className="scores">
                    <div data-aos='fade-up' className="right">
                    <p style={{marginLeft:'60px'}}>Raphina 84 ⚽</p>
                    <p style={{marginLeft:'60px'}}>L. Yamal 77 ⚽</p>
                    <p>R. Lewandowski 56, 54 ⚽</p>                     
                    </div>                    
                </div>

                <div data-aos='fade-up' className="location">
                    <div data-aos='fade-up' className="right">
                        <p>▼ Santiago Bernabéu, Madrid</p>
                    </div>
                </div>
            </div>
        </div>        

        </div>}
      
    </div>
  )
}

export default Page
