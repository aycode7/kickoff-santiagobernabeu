'use client'
import { useState } from 'react'
import React from 'react'
import Link from 'next/link'
import './Homepage.css'
import Image from 'next/image'
import background_img from './Image/bellingham_med.webp'
import logo from './Image/madrid_icon.png'

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
            <Image className='background_img_phone' src={background_img} alt='' priority />
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
