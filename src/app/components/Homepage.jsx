'use client'
import { useState } from 'react'
import React from 'react'
import Link from 'next/link'
import './Homepage.css'
import Image from 'next/image'
import background_img from './Image/bellingham_med.webp'
import logo from './Image/madrid_icon.png'
import militao from './Image/militao.jpg'
import david from './Image/david.jpg'
import champions from './Image/champions.jpg'
import bellingham_med from './Image/bellingham_med.webp'
import perez from './Image/Perez.jpg'
import kylian from './Image/kylian.jpg'
import rodrygo from './Image/rodrygo.jpg'
import mobile_background_img from './Image/mobile_background.jpg'

const Homepage = () => {

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

        {/* new div */}
        <div>

          {/* navbar */}
          <div className="topnav">

            <div className='navbar'>
              <div className="left">
                <h1>KickOff</h1>
                <Image style={{cursor:'pointer'}} src={logo} width={90} alt='' priority />
              </div>

              <div className="middle">
                <h2 onClick={handleTap} className={tap === true ? 'tap' : ''}>News</h2>
                <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
                <h2 onClick={handleTap3} className={tap3 === true ? 'tap' : ''}>Standings</h2>
                <h2 onClick={handleTap4} className={tap4 === true ? 'tap' : ''}>Players</h2>
              </div>

            </div>

          </div>

          {/* feedback */}
          <div>

            {notlike === true &&
            <div onClick={handleLike}>
                <p className='feedback'>🤍</p>

                <div className='content'>
                <p>more content like this</p>
                </div>
            </div>
            }

            {like === true &&
            <div onClick={handleNotlike}>
                <p className='feedback'>💗</p>

                <div className='content'>
                <p>thanks for the likes</p>
                </div>
            </div>
            }

          </div>

          {/* background image */}
          <div>
            <Image className='background_img' src={background_img} alt='' priority />
          </div>

          {/* news header */}
          <div className='news_heading'>
            <h2>News</h2>
          </div>

          {/* news */}
          <div className="ctn">
            <div className="left">
              <Image className='img' src={militao} alt='militao' priority />

              <h2 style={{marginTop:'20px', fontSize:'15px'}}>Eder Militaos medical report</h2>

            </div>

            <div className="middle">
              <Image className='img' src={david} alt='' priority />

              <h2 style={{marginTop:'20px', fontSize:'15px'}}>David Beckham the Inter Miami manager has broken silence on Mbappes move to Real Madrid</h2>

            </div>

            <div className="right">
              <Image className='img' src={champions} alt='champions league 2024' priority />

              <h2 style={{marginTop:'20px', fontSize:'15px'}}>Real Madrid have been crowned the 2023/24 Uefa Champions League winners</h2>

            </div>
          </div>

          <div className="ctn">
            <div className="left">
              <Image className='img' src={kylian} alt='militao' priority />

              <h2 style={{marginTop:'20px', fontSize:'15px'}}>Mbappe:PSG do not want me in the squad anymore, he procceded to mention Luis Enrique and two other people who saved him</h2>

            </div>

            <div className="middle">
              <Image className='img' src={rodrygo} alt='' priority />

              <h2 style={{marginTop:'20px', fontSize:'15px'}}>Rodrygo has succeded to score the opening goal for Real Madrid for the last two seasons</h2>

            </div>

            <div className="right">
              <Image className='img' src={perez} alt='champions league 2024' priority />

              <h2 style={{marginTop:'20px', fontSize:'15px'}}>Florentino Perez:This title would give us energy for a very difficult season</h2>

            </div>
          </div>

        </div>
        
      </div>


      {/* small laptop */}
      <div id='big' className='hidden md:hidden lg:block xl:hidden'>

        {/* new div */}
        <div>

          {/* navbar */}
          <div className="topnav">

            <div className='navbar'>
              <div className="left">
                <h1>KickOff</h1>
                <Image style={{cursor:'pointer'}} src={logo} width={90} alt='' />
              </div>

              <div className="middle">
                <h2 onClick={handleTap} className={tap === true ? 'tap' : ''}>News</h2>
                <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
                <h2 onClick={handleTap3} className={tap3 === true ? 'tap' : ''}>Standings</h2>
                <h2 onClick={handleTap4} className={tap4 === true ? 'tap' : ''}>Players</h2>
              </div>

            </div>

          </div>

          {/* feedback */}
          <div>

            {notlike === true &&
            <div onClick={handleLike}>
                <p className='feedback'>🤍</p>

                <div className='content'>
                <p>more content like this</p>
                </div>
            </div>
            }

            {like === true &&
            <div onClick={handleNotlike}>
                <p className='feedback'>💗</p>

                <div className='content'>
                <p>thanks for the likes</p>
                </div>
            </div>
            }

          </div>

          {/* background image */}
          <div>
            <Image className='background_img' src={background_img} alt='' priority />
          </div>

          {/* news header */}
          <div className='news_heading'>
            <h2>News</h2>
          </div>

        </div>
        
      </div>

      {/* tablet */}
      <div id='big' className='hidden md:block lg:hidden xl:hidden'>

        {/* new div */}
        <div>

          {/* navbar */}
          <div className="topnav">

            <div className='navbar'>
              <div className="left">
                <h1>KickOff</h1>
                <Image style={{cursor:'pointer'}} src={logo} width={90} alt='' priority />
              </div>

              <div className="middle">
                <h2 onClick={handleTap} className={tap === true ? 'tap' : ''}>News</h2>
                <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
                <h2 onClick={handleTap3} className={tap3 === true ? 'tap' : ''}>Standings</h2>
                <h2 onClick={handleTap4} className={tap4 === true ? 'tap' : ''}>Players</h2>
              </div>

            </div>

          </div>

          {/* feedback */}
          <div>

            {notlike === true &&
            <div onClick={handleLike}>
                <p className='feedback'>🤍</p>

                <div className='content'>
                <p>more content like this</p>
                </div>
            </div>
            }

            {like === true &&
            <div onClick={handleNotlike}>
                <p className='feedback'>❤</p>

                <div className='content'>
                <p>thanks for the likes</p>
                </div>
            </div>
            }

          </div>

          {/* background image */}
          <div>
            <Image className='background_img' src={background_img} alt='' priority />
          </div>

          {/* news header */}
          <div className='news_heading'>
            <h2>News</h2>
          </div>

        </div>
        
      </div>

      {/* phone */}
      <div id='mobile' className='block md:hidden lg:hidden xl:hidden'>

        {/* new div */}
        <div>

          {/* navbar_phone */}
          <div className="topnav_phone">

            <div className="navbar_phone">

              <div className="left">
                <h1>KickOff</h1>
                <Image src={logo} width={75} alt='' />
              </div>

              <div className="right">
                {dropdownIcon === true &&
                  <p onClick={handleDropdownIcon}>≡</p>
                }

                {dropdown === true &&
                  <div className="dropdown">
                    <p onClick={handleTap} className={tap === true ? "tap_phone" : ''}>News</p>
                    <p onClick={handleTap2} className={tap2 === true ? "tap_phone" : ''}>Fixtures</p>
                    <p onClick={handleTap3} className={tap3 === true ? "tap_phone" : ''}>Standings</p>
                    <p onClick={handleTap4} className={tap4 === true ? "tap_phone" : ''}>Players</p>
                  </div>
                }
              </div>

            </div>

          </div>

          {/* feedback */}
          {notlike === true &&
          <div onClick={handleLike}>
            <p className='feedback_phone'>🤍</p>

            <div className='content_phone'>
              <p>more content like this</p>
            </div>
          </div>
          }

          {like === true &&
          <div onClick={handleNotlike}>
            <p className='feedback_phone'>❤</p>

            <div className='content_phone'>
              <p>thanks for the likes</p>
            </div>
          </div>
          }

          {/* background_img_phone */}
          <div >
            <Image className='background_img_phone' src={mobile_background_img} alt='' priority />
          </div>

          {/* news heading */}
          <div className="news_heading_phone">
            <h2>News</h2>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Homepage
