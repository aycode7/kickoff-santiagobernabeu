'use client'
import { useState } from "react"
import { useEffect } from "react"
import Link from "next/link"
import Aos from "aos"
import 'aos/dist/aos.css'
import './page.css'
import Image from "next/image"
import logo from './Image/madrid_icon.png'
import React from 'react'
import background from './Image/football.jpeg'

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
                <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
                <Link href="standings">
                <h2 onClick={handleTap} className={tap === true ? 'tap' : ''}>Standings</h2>
                </Link>
                <Link href="players">
                <h2 onClick={handleTap3} className={tap3 === true ? 'tap' : ''}>Players</h2>
                </Link>
            </div>

            </div>

        </div>        

        {/* background image */}
        <div>
        <Image className='background' src={background} alt='' priority />
        </div>           
        
        </div>

        {/* small laptop */}
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
            <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
            <Link href="standings">
            <h2 onClick={handleTap} className={tap === true ? 'tap' : ''}>Standings</h2>
            </Link>
            <Link href="players">
            <h2 onClick={handleTap3} className={tap3 === true ? 'tap' : ''}>Players</h2>
            </Link>
        </div>

        </div>

        </div>        

        {/* background image */}
        <div>
        <Image className='background' src={background} alt='' priority />
        </div>         

        </div>

        {/* tablet_laptop */}
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
            <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
            <Link href="standings" >
            <h2 onClick={handleTap} className={tap === true ? 'tap' : ''}>Standings</h2>
            </Link>
            <Link href="players">
            <h2 onClick={handleTap3} className={tap3 === true ? 'tap' : ''}>Players</h2>
            </Link>
        </div>

        </div>

        </div>        

        {/* background image */}
        <div>
        <Image className='background' src={background} alt='' priority />
        </div>        
        
        </div>

        {/* phone laptop */}
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
                <p onClick={handleTap2} className={tap2 === true ? "tap_phone" : ''}>Fixtures</p>
                <Link href="standings" >
                <p onClick={handleTap} className={tap === true ? "tap_phone" : ''}>Standings</p>
                </Link>
                <Link href="players">
                <p onClick={handleTap3} className={tap3 === true ? "tap_phone" : ''}>Players</p>
                </Link>
            </div>
            }
        </div>

        </div>

        </div>        

        {/* background image */}
        <div>
        <Image className='background' src={background} alt='' priority />
        </div>       

        {/* standings */}
        <div className="ctn">
            <div className="standings">

                {/* number */}
                <div className="number">
                    <p>#</p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                    <p>12</p>
                    <p>13</p>
                    <p>14</p>
                    <p>15</p>
                    <p>16</p>
                    <p>17</p>
                    <p>18</p>
                    <p>19</p>
                    <p style={{borderRadius:'0 0 0 20px'}}>20</p>
                </div>

                {/* clubs */}
                <div className="clubs">
                    <p>Clubs</p>
                    <p>Barcelona</p>
                    <p>RealMadrid</p>
                    <p>Villarreal</p>
                    <p>AtléticoMadrid</p>
                    <p>AthleticClub</p>
                    <p>RealBetis</p>
                    <p>Mallorca</p>
                    <p>Osasuna</p>
                    <p>RayoVallecano</p>
                    <p>SevillaFC</p>
                    <p>CeltaVigo</p>
                    <p>RealSociedad</p>
                    <p>Girona</p>
                    <p>CDLeganés</p>
                    <p>Getafe</p>
                    <p>Alavés</p>
                    <p>Espanyol</p>
                    <p>UDLasPalmas</p>
                    <p>RealValladolid</p>
                    <p>Valencia</p>
                </div>

                {/* Matches */}
                <div className="matches">
                    <p>Pld</p>
                    <p>11</p>                
                    <p>11</p>
                    <p>11</p>
                    <p>11</p>
                    <p>11</p>
                    <p>11</p>
                    <p>11</p>
                    <p>11</p>
                    <p>11</p>
                    <p>11</p>
                    <p>11</p>
                    <p>11</p>
                    <p>11</p>
                    <p>11</p>
                    <p>11</p>
                    <p>11</p>
                    <p>11</p>
                    <p>11</p>
                    <p>11</p>
                    <p>11</p>
                </div>

                {/* +/- */}
                <div className="ga">                
                    <p>+/-</p>
                    <p>27</p>
                    <p>10</p>
                    <p>1</p>
                    <p>9</p>
                    <p>6</p>
                    <p>2</p>
                    <p>2</p>
                    <p>0</p>
                    <p>2</p>
                    <p>-3</p>
                    <p>-3</p>
                    <p>-2</p>
                    <p>-3</p>
                    <p>-3</p>
                    <p>-1</p>
                    <p>-6</p>
                    <p>-9</p>
                    <p>-6</p>
                    <p>-14</p>
                    <p>-9</p>                
                </div>

                {/* points */}
                <div className="points">                
                    <p>Pts</p>
                    <p>30</p>
                    <p>24</p>
                    <p>21</p>
                    <p>20</p>
                    <p>18</p>
                    <p>18</p>
                    <p>18</p>
                    <p>18</p>
                    <p>16</p>
                    <p>15</p>
                    <p>13</p>
                    <p>12</p>
                    <p>12</p>
                    <p>11</p>
                    <p>10</p>
                    <p>10</p>
                    <p>10</p>
                    <p>9</p>
                    <p>8</p>
                    <p style={{borderRadius:'0 0 20px 0'}}>7</p>                                
                </div>


            </div>
        </div> 
        
        </div>        
      
    </div>
  )
}

export default Page
