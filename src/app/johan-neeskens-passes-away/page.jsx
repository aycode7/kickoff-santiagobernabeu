'use client'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import Image from 'next/image'
import './page.css'
import logo from './Image/madrid_icon.png'
import legend from './Image/legend.jpg'
import mbappe from './Image/_0_DB20398.webp'

const page = () => {

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
                <h1>Official Anouncement:Johan Neeskens passes away</h1>

                <p>KickOff-SantiagoBernabéu would like to
                express their deepest regrets at the passing of Johan Neeskens, one of the 
                greatest legends of F.C. Barcelona, Ajaz Amsterdam and world football.                             
                </p>

                <p>KickOff-SantiagoBernabéu would like to express its condolence and affection to his family,
                    his teamates, his clubs and all his loved ones. Neeskens played for more than two decades for a number of 
                    teams in Europe and the United States with Ajax Amsterdam, he won 3 European cups, 1 international
                    Cup, 2 Uefa Super Cups, 2 League titles and 2 Dutch Cups. With F.C Barcelona he won one European Cup Winners Cup and 
                    1 Copa del Ray. With the New York Cosmos, he won 2 North American Soccer League titles. 
                </p>

                <p>He made 49 appearances for the Nertherlands, scored 17 goals and was a finalist in the 1974 World Cup in Germany and 
                    the 1978 World Cup in Argentina.
                </p>

                <p>Johan Neeskens passed away at the age of 73, may his soul rest in perfect peace</p>

              </div>

              <div data-aos="fade-left" className="image">
                <Image className='img' src={legend} alt='' priority />
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
              <h1>Official Anouncement:Johan Neeskens passes away</h1>

              <p>KickOff-SantiagoBernabéu would like to
                express their deepest regrets at the passing of Johan Neeskens, one of the 
                greatest legends of F.C. Barcelona, Ajaz Amsterdam and world football.                         
              </p>

              <p>KickOff-SantiagoBernabéu would like to express its condolence and affection to his family,
                his teamates, his clubs and all his loved ones. Neeskens played for more than two decades for a number of 
                teams in Europe and the United States with Ajax Amsterdam, he won 3 European cups, 1 international
                Cup, 2 Uefa Super Cups, 2 League titles and 2 Dutch Cups. With F.C Barcelona he won one European Cup Winners Cup and 
                1 Copa del Ray. With the New York Cosmos, he won 2 North American Soccer League titles. 
              </p>

              <p>He made 49 appearances for the Nertherlands, scored 17 goals and was a finalist in the 1974 World Cup in Germany and 
                the 1978 World Cup in Argentina.
              </p>

              <p>Johan Neeskens passed away at the age of 73, may his soul rest in perfect peace</p>

            </div>

            <div data-aos="fade-left" className="image">
              <Image className='img' src={legend} alt='' priority />
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
              <h1>Official Anouncement:Johan Neeskens passes away</h1>

              <p>KickOff-SantiagoBernabéu would like to
                express their deepest regrets at the passing of Johan Neeskens, one of the 
                greatest legends of F.C. Barcelona, Ajaz Amsterdam and world football.                         
              </p>

              <p>KickOff-SantiagoBernabéu would like to express its condolence and affection to his family,
                his teamates, his clubs and all his loved ones. Neeskens played for more than two decades for a number of 
                teams in Europe and the United States with Ajax Amsterdam, he won 3 European cups, 1 international
                Cup, 2 Uefa Super Cups, 2 League titles and 2 Dutch Cups. With F.C Barcelona he won one European Cup Winners Cup and 
                1 Copa del Ray. With the New York Cosmos, he won 2 North American Soccer League titles. 
              </p>

              <p>He made 49 appearances for the Nertherlands, scored 17 goals and was a finalist in the 1974 World Cup in Germany and 
                the 1978 World Cup in Argentina.
              </p>

              <p>Johan Neeskens passed away at the age of 73, may his soul rest in perfect peace</p>

            </div>

            <div data-aos="fade-left" className="image">
              <Image className='img' src={legend} alt='' priority />
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
              <Image className='img' src={legend} alt='' priority />
            </div>

            <div className="text">
              <h1>Official Anouncement:Johan Neeskens passes away</h1>

              <p>KickOff-SantiagoBernabéu would like to
                express their deepest regrets at the passing of Johan Neeskens, one of the 
                greatest legends of F.C. Barcelona, Ajaz Amsterdam and world football.                         
              </p>

              <p>KickOff-SantiagoBernabéu would like to express its condolence and affection to his family,
                his teamates, his clubs and all his loved ones. Neeskens played for more than two decades for a number of 
                teams in Europe and the United States with Ajax Amsterdam, he won 3 European cups, 1 international
                Cup, 2 Uefa Super Cups, 2 League titles and 2 Dutch Cups. With F.C Barcelona he won one European Cup Winners Cup and 
                1 Copa del Ray. With the New York Cosmos, he won 2 North American Soccer League titles. 
              </p>

              <p>He made 49 appearances for the Nertherlands, scored 17 goals and was a finalist in the 1974 World Cup in Germany and 
                the 1978 World Cup in Argentina.
              </p>

              <p>Johan Neeskens passed away at the age of 73, may his soul rest in perfect peace</p>

            </div>

          </div>
        </div>
      
    </div>
  )
}

export default page
