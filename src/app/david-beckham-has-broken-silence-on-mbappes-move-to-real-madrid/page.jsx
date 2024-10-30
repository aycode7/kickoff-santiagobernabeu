'use client'
import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import './page.css'
import logo from './Image/madrid_icon.png'
import david from './Image/david.jpg'

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
                    <Link href="players">
                    <h2 onClick={handleTap4} className={tap4 === true ? 'tap' : ''}>Players</h2>
                    </Link>
                </div>

                </div>

            </div>

            {/* news */}
            <div className='news'>

              <div data-aos="fade-right" className="text">


                <h1>David Beckham breaks silence on Kylian Mbappe Real Madrid transfer: It is a very special moment</h1>

                <p>The former Galatico approves of the strikers arrival</p>
                <p>The confirmation of Kylian Mbappe signing for Real Madrid is on everyones lips, and even David Beckham has spoken about it. Mbappe has agreed a five-year contract worth a reported $15million-a-year, with a massive $163m loyalty bonus to be paid across his time at the Santiago Bernabeu. He will join after his contract with PSG expires on July 1, 2024</p>
                <p>And Beckham, 49, said he was excited about the strikers arrival in the Spanish capital after Mbappe was finally presented as a new Real Madrid player on Tuesday. It is a very special moment, not only for Madrid, but for all of Spain, to see a player like him [Mbappe] come to La Liga, the Inter Miami co-owner said on his visit to Barcelona for a promotional event. I think he is a special player and a special person. I am happy for him, I am happy for Madrid. He is a great player, a great person and he joins a great club.
                Beckham, ambassador of the TUDOR brand, was in Barcelona for the opening of the watch brands first store in the capital of Catalonia.</p>

                <h1>How Real Madrid captured Kylian Mbappe</h1>

                <p>The journey to Mbappes signing began nearly two years ago, shortly after he left Real Madrid at the altar in May 2022. Under immense pressure from Paris, France, and Qatar, Mbappe renewed his contract with PSG just when Real Madrid had everything prepared to welcome him. Despite the disappointment, the LaLiga giants continued to lay the groundwork for the signing this summer. President Florentino Perez secured Mbappe, who worked diligently to ensure his freedom by June 30, 2024, a year earlier than initially agreed with PSG. Perez and Mbappe executed a flawless strategy last summer to finalize the signing of the century. Perez made PSG uneasy by denying any ongoing negotiations, while Mbappe remained resolute in his decision not to extend his contract with PSG.</p>

                <p>This impecable plan ultimately brought Mbappe to the Santiago Bernabeu, and he will now wear the No.9 jersey as he prepares for a new adventure in Spain</p>

                <Link href="/">
                <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
                </Link>

              </div>

              <div data-aos="fade-left" className="image">
                <Image className='img' src={david} alt='' priority />
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
                <Link href="players">
                <h2 onClick={handleTap4} className={tap4 === true ? 'tap' : ''}>Players</h2>
                </Link>
            </div>

            </div>

          </div>

          {/* news */}
          <div className='news'>

            <div data-aos="fade-right" className="text">

              <h1>David Beckham breaks silence on Kylian Mbappe Real Madrid transfer: It is a very special moment</h1>

              <p>The former Galatico approves of the strikers arrival</p>
              <p>The confirmation of Kylian Mbappe signing for Real Madrid is on everyones lips, and even David Beckham has spoken about it. Mbappe has agreed a five-year contract worth a reported $15million-a-year, with a massive $163m loyalty bonus to be paid across his time at the Santiago Bernabeu. He will join after his contract with PSG expires on July 1, 2024</p>
              <p>And Beckham, 49, said he was excited about the strikers arrival in the Spanish capital after Mbappe was finally presented as a new Real Madrid player on Tuesday. It is a very special moment, not only for Madrid, but for all of Spain, to see a player like him [Mbappe] come to La Liga, the Inter Miami co-owner said on his visit to Barcelona for a promotional event. I think he is a special player and a special person. I am happy for him, I am happy for Madrid. He is a great player, a great person and he joins a great club.
              Beckham, ambassador of the TUDOR brand, was in Barcelona for the opening of the watch brands first store in the capital of Catalonia.</p>

              <h1>How Real Madrid captured Kylian Mbappe</h1>

              <p>The journey to Mbappes signing began nearly two years ago, shortly after he left Real Madrid at the altar in May 2022. Under immense pressure from Paris, France, and Qatar, Mbappe renewed his contract with PSG just when Real Madrid had everything prepared to welcome him. Despite the disappointment, the LaLiga giants continued to lay the groundwork for the signing this summer. President Florentino Perez secured Mbappe, who worked diligently to ensure his freedom by June 30, 2024, a year earlier than initially agreed with PSG. Perez and Mbappe executed a flawless strategy last summer to finalize the signing of the century. Perez made PSG uneasy by denying any ongoing negotiations, while Mbappe remained resolute in his decision not to extend his contract with PSG.</p>

              <p>This impecable plan ultimately brought Mbappe to the Santiago Bernabeu, and he will now wear the No.9 jersey as he prepares for a new adventure in Spain</p>

              <Link href="/">
              <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
              </Link>

            </div>

            <div data-aos="fade-left" className="image">
              <Image className='img' src={david} alt='' priority />
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
                <Link href="players">
                <h2 onClick={handleTap4} className={tap4 === true ? 'tap' : ''}>Players</h2>
                </Link>
            </div>

            </div>

          </div>

          {/* news */}
          <div className='news_tablet'>

            <div data-aos="fade-right" className="text">

              <h1>David Beckham breaks silence on Kylian Mbappe Real Madrid transfer: It is a very special moment</h1>

              <p>The former Galatico approves of the strikers arrival</p>
              <p>The confirmation of Kylian Mbappe signing for Real Madrid is on everyones lips, and even David Beckham has spoken about it. Mbappe has agreed a five-year contract worth a reported $15million-a-year, with a massive $163m loyalty bonus to be paid across his time at the Santiago Bernabeu. He will join after his contract with PSG expires on July 1, 2024</p>
              <p>And Beckham, 49, said he was excited about the strikers arrival in the Spanish capital after Mbappe was finally presented as a new Real Madrid player on Tuesday. It is a very special moment, not only for Madrid, but for all of Spain, to see a player like him [Mbappe] come to La Liga, the Inter Miami co-owner said on his visit to Barcelona for a promotional event. I think he is a special player and a special person. I am happy for him, I am happy for Madrid. He is a great player, a great person and he joins a great club.
              Beckham, ambassador of the TUDOR brand, was in Barcelona for the opening of the watch brands first store in the capital of Catalonia.</p>

              <h1>How Real Madrid captured Kylian Mbappe</h1>

              <p>The journey to Mbappes signing began nearly two years ago, shortly after he left Real Madrid at the altar in May 2022. Under immense pressure from Paris, France, and Qatar, Mbappe renewed his contract with PSG just when Real Madrid had everything prepared to welcome him. Despite the disappointment, the LaLiga giants continued to lay the groundwork for the signing this summer. President Florentino Perez secured Mbappe, who worked diligently to ensure his freedom by June 30, 2024, a year earlier than initially agreed with PSG. Perez and Mbappe executed a flawless strategy last summer to finalize the signing of the century. Perez made PSG uneasy by denying any ongoing negotiations, while Mbappe remained resolute in his decision not to extend his contract with PSG.</p>

              <p>This impecable plan ultimately brought Mbappe to the Santiago Bernabeu, and he will now wear the No.9 jersey as he prepares for a new adventure in Spain</p>

            </div>

            <div data-aos="fade-left" className="image">
              <Image className='img' src={david} alt='' priority />
            </div>

          </div>

          <Link href="/">
          <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
          </Link>
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
              <Image className='img' src={david} alt='' priority />
            </div>

            <div className="text">

              <h1>David Beckham breaks silence on Kylian Mbappe Real Madrid transfer: It is a very special moment</h1>

              <p>The former Galatico approves of the strikers arrival</p>
              <p>The confirmation of Kylian Mbappe signing for Real Madrid is on everyones lips, and even David Beckham has spoken about it. Mbappe has agreed a five-year contract worth a reported $15million-a-year, with a massive $163m loyalty bonus to be paid across his time at the Santiago Bernabeu. He will join after his contract with PSG expires on July 1, 2024</p>
              <p>And Beckham, 49, said he was excited about the strikers arrival in the Spanish capital after Mbappe was finally presented as a new Real Madrid player on Tuesday. It is a very special moment, not only for Madrid, but for all of Spain, to see a player like him [Mbappe] come to La Liga, the Inter Miami co-owner said on his visit to Barcelona for a promotional event. I think he is a special player and a special person. I am happy for him, I am happy for Madrid. He is a great player, a great person and he joins a great club.
              Beckham, ambassador of the TUDOR brand, was in Barcelona for the opening of the watch brands first store in the capital of Catalonia.</p>

              <h1>How Real Madrid captured Kylian Mbappe</h1>

              <p>The journey to Mbappes signing began nearly two years ago, shortly after he left Real Madrid at the altar in May 2022. Under immense pressure from Paris, France, and Qatar, Mbappe renewed his contract with PSG just when Real Madrid had everything prepared to welcome him. Despite the disappointment, the LaLiga giants continued to lay the groundwork for the signing this summer. President Florentino Perez secured Mbappe, who worked diligently to ensure his freedom by June 30, 2024, a year earlier than initially agreed with PSG. Perez and Mbappe executed a flawless strategy last summer to finalize the signing of the century. Perez made PSG uneasy by denying any ongoing negotiations, while Mbappe remained resolute in his decision not to extend his contract with PSG.</p>

              <p>This impecable plan ultimately brought Mbappe to the Santiago Bernabeu, and he will now wear the No.9 jersey as he prepares for a new adventure in Spain</p>

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

