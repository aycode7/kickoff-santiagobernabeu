'use client'
import { useState } from "react"
import { useEffect } from "react"
import Aos from "aos"
import Link from "next/link"
import 'aos/dist/aos.css'
import './page.css'
import Image from "next/image"
import logo from './Image/madrid_icon.png'
import varane from './Image/varane.jpg'
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
                  <Link href="players">
                  <h2 onClick={handleTap4} className={tap4 === true ? 'tap' : ''}>Players</h2>
                  </Link>
              </div>

              </div>

          </div>

          {/* news */}
          <div className='news'>

            <div data-aos="fade-right" className="text">
              <h1>Raphael Varane announces his retirement from football</h1>

              <p>Former Man Utd, Lens and Real Madrid defender hangs up his boot at age 31</p>

              <p>Varane wrote in a social media statement on Instagram: Reflecting on this moments, it is immense pride and a feeling of fulfilment that I am announcing my retirement from the game that we all love.</p>

              <p>I have loved fighting for my clubs, my country, my team mates and the supporters of every team i have played for from Lens to Madrid to Manchester, and playing for our national team. I have defended every bagbe with everything i have and love every minute of the journey.</p>

              <p>After announcing his news, Varanes former united team mates all paid tribute to him in the comment of his post.</p>

              <p>Varane enjoyed a trophy laden, 10 years stay with Real Madrid, winning the UEFA Champions league four times and LaLiga three times. He moved to Old Trafford in August 2021 and would go on to play 95 times in all competitions for Man Utd.</p>

              <p>The centre-back won the EFL cup in 2023, while he also helped United beat Manchester City 2 - 1 to lift the FA Cup last season in his final match for the club, at international level Varane 93 caps for France and was a key part of the squad that lifted the FIFA World Cup 2018</p>

              <Link href="/">
              <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
              </Link>

            </div>

            <div data-aos="fade-left" className="image">
              <Image className='img' src={varane} alt='' priority />
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
              <h1>Raphael Varane announces his retirement from Football</h1>

              <p>Former Man Utd, Lens and Real Madrid defender hangs up his boot at age 31</p>

              <p>Varane wrote in a social media statement on Instagram: Reflecting on this moments, it is immense pride and a feeling of fulfilment that I am announcing my retirement from the game that we all love.</p>

              <p>I have loved fighting for my clubs, my country, my team mates and the supporters of every team i have played for from Lens to Madrid to Manchester, and playing for our national team. I have defended every bagbe with everything i have and love every minute of the journey.</p>

              <p>After announcing his news, Varanes former united team mates all paid tribute to him in the comment of his post.</p>

              <p>Varane enjoyed a trophy laden, 10 years stay with Real Madrid, winning the UEFA Champions league four times and LaLiga three times. He moved to Old Trafford in August 2021 and would go on to play 95 times in all competitions for Man Utd.</p>

              <p>The centre-back won the EFL cup in 2023, while he also helped United beat Manchester City 2 - 1 to lift the FA Cup last season in his final match for the club, at international level Varane 93 caps for France and was a key part of the squad that lifted the FIFA World Cup 2018</p>

            <Link href="/">
              <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
            </Link>

          </div>

          <div data-aos="fade-left" className="image">
            <Image className='img' src={varane} alt='' priority />
          </div>

        </div>
        
      </div>

      {/* tablet_laptop */}
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
              <h1>Raphael Varane announces his retirement from football</h1>

              <p>Former Man Utd, Lens and Real Madrid defender hangs up his boot at age 31</p>

              <p>Varane wrote in a social media statement on Instagram: Reflecting on this moments, it is immense pride and a feeling of fulfilment that I am announcing my retirement from the game that we all love.</p>

              <p>I have loved fighting for my clubs, my country, my team mates and the supporters of every team i have played for from Lens to Madrid to Manchester, and playing for our national team. I have defended every bagbe with everything i have and love every minute of the journey.</p>

              <p>After announcing his news, Varanes former united team mates all paid tribute to him in the comment of his post.</p>

              <p>Varane enjoyed a trophy laden, 10 years stay with Real Madrid, winning the UEFA Champions league four times and LaLiga three times. He moved to Old Trafford in August 2021 and would go on to play 95 times in all competitions for Man Utd.</p>

              <p>The centre-back won the EFL cup in 2023, while he also helped United beat Manchester City 2 - 1 to lift the FA Cup last season in his final match for the club, at international level Varane 93 caps for France and was a key part of the squad that lifted the FIFA World Cup 2018</p>

            <Link href="/">
              <button style={{transition:'0.7s', backgroundColor:'black', color:'white', padding:'7px 15px', border:'2px solid black', borderRadius:'10px', cursor:'pointer', width:'fit-content'}}>Back →</button>
            </Link>

          </div>

          <div data-aos="fade-left" className="image">
            <Image className='img' src={varane} alt='' priority />
          </div>

        </div>
      </div>

      {/* phone laptop */}
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
            <Image className='img' src={varane} alt='' priority />
          </div>

          <div className="text">
              <h1>Raphael Varane announces his retirement from football</h1>

              <p>Former Man Utd, Lens and Real Madrid defender hangs up his boot at age 31</p>

              <p>Varane wrote in a social media statement on Instagram: Reflecting on this moments, it is immense pride and a feeling of fulfilment that I am announcing my retirement from the game that we all love.</p>

              <p>I have loved fighting for my clubs, my country, my team mates and the supporters of every team i have played for from Lens to Madrid to Manchester, and playing for our national team. I have defended every bagbe with everything i have and love every minute of the journey.</p>

              <p>After announcing his news, Varanes former united team mates all paid tribute to him in the comment of his post.</p>

              <p>Varane enjoyed a trophy laden, 10 years stay with Real Madrid, winning the UEFA Champions league four times and LaLiga three times. He moved to Old Trafford in August 2021 and would go on to play 95 times in all competitions for Man Utd.</p>

              <p>The centre-back won the EFL cup in 2023, while he also helped United beat Manchester City 2 - 1 to lift the FA Cup last season in his final match for the club, at international level Varane 93 caps for France and was a key part of the squad that lifted the FIFA World Cup 2018</p>

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
