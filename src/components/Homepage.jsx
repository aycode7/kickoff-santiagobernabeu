'use client'
import { useEffect, useState } from 'react'
import React from 'react'
import Link from 'next/link'
import Aos from 'aos'
import 'aos/dist/aos.css'
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
import mobile_background_img from './Image/mobile.jpg'
import mobile from './Image/mbappe-training.jpg'
import mbappe from './Image/Mbappe.jpg'
import madrid_stadium from './Image/Santiago-Bernabeu.jpg'
import ancelloti_200 from './Image/ancelloti_200.jpg'
import carvajal_med from './Image/carvajal_med.jpg'
import courtois_med from './Image/courtois_med.jpg'
import legend from './Image/legend.jpg'
import mbappe_med from './Image/mbappe_med.jpg'
import modric_250 from './Image/modric_250.jpg'
import modric_oldest from './Image/modric_oldest.jpg'
import rodrygo_med from './Image/rodrygo_med.jpg'
import tchoumeini from './Image/tchoumeini.jpg'
import varane from './Image/varane.jpg'
import mbappe_training from './Image/mbappe-training.jpg'
import elclassico from './Image/elclassico.jpg'
import Elclassico from './Image/IMG-20241028-WA0016.jpg'
import racial from './Image/racial.jpg'
import madrid_dor from './Image/madrid_dor.jpg'
import news5 from './Image/news5.jpg'
import news4 from './Image/news4.jpg'
import news3 from './Image/news3.jpg'
import news1 from './Image/news1.jpg'

const Homepage = () => {

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

        {/* new div */}
        <div>

          {/* navbar */}
          <div data-aos="fade-down" className="topnav">

            <div className='navbar'>
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
                <Link href="fixtures">
                <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
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

          {/* feedback */}
          <div>

            {notlike === true &&
            <div onClick={handleLike} data-aos="fade-right">
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
          <div> 

            <div className="ctn">
              <Link href="official-announcement-from-real-madrid">
              <div className="left" data-aos="fade-right">
                <Image className='img' src={racial} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Official announcement from Real Madrid</h2>

              </div>
              </Link>

              <Link href="reason-behind-real-madrid-not-attending-the-2024-ballon-dor-ceremony">
              <div className="left" data-aos="fade-up">
                <Image className='img' src={madrid_dor} alt='madrid' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Reason Behind Real Madrid Not Attending The 2024 Ballon d Or Ceremony</h2>

              </div>
              </Link>

              <Link href="rodrygo-medical-report">
              <div className="left" data-aos="fade-left">
                <Image className='img' src={rodrygo_med} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Rodrygo medical report</h2>

              </div>
              </Link>
             
            </div>

            <div className="ctn">
              <Link href="real-madrid-players-training">
              <div className="left" data-aos="fade-right">
                <Image className='img' src={mbappe_training} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Mbappe and Real Madrid players carry out individual work at Real Madrid City</h2>

              </div>
              </Link>

              <Link href="elclassico-2024">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={Elclassico} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>El Classico <br /> Real Madrid vs Barcelona</h2>

              </div>
              </Link>

              <Link href="andres-iniesta-retires">
              <div className="left" data-aos="fade-left">
                <Image className='img' src={racial} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Andrés Iniesta Retires From Football</h2>

              </div>
              </Link>
             
            </div>

            <div className="ctn">              

              <Link href="courtois-medical-report">
              <div className="middle" data-aos="fade-right">
                <Image className='img' src={courtois_med} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Courtois medical report</h2>

              </div>
              </Link>
              
              <Link href="ancelotti-reaches-200-laliga-games-at-real-madrid">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={ancelloti_200} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Ancelotti reaches 200 Laliga games at Real Madrid</h2>

              </div>
              </Link>

              <Link href="modric-wins-his-250-league-match-for-real-madrid">
              <div className="right" data-aos="fade-left">
                <Image className='img' src={modric_250} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Modrić wins his 250th league match as a Real Madrid player</h2>

              </div>
              </Link>
            </div>

            <div className="ctn">            
              <Link href="tchouameni-reaches-his-100th-game-for-real-madrid">
              <div className="left" data-aos="fade-right">
                <Image className='img' src={tchoumeini} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Tchouameni reaches his 100th game for Real Madrid</h2>

              </div>
              </Link>
            
              <Link href="modric-becomes-the-oldest-player-to-appear-in-an-official-real-madrid-match"><div className="middle" data-aos="fade-up">
                <Image className='img' src={modric_oldest} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Modric becomes the oldest player to appear in an official match in the history of Real Madrid</h2>

              </div>
              </Link>

              <Link href="johan-neeskens-passes-away" >
              <div className="right" data-aos="fade-left">
                <Image className='img' src={legend} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Official announcement:Johan Neeskens passes away</h2>

              </div>
              </Link>
            </div>           

            <div className="ctn">
              <Link href="eder-militao-medical-report">
              <div className="left" data-aos="fade-right">
                <Image className='img' src={militao} alt='militao' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Eder Militaos medical report</h2>

              </div>
              </Link>

              <Link href="david-beckham-has-broken-silence-on-mbappes-move-to-real-madrid">
                <div className="middle" data-aos="fade-up">
                  <Image className='img' src={david} alt='' priority />

                  <h2 style={{marginTop:'20px', fontSize:'15px'}}>David Beckham the Inter Miami manager has broken silence on Mbappes move to Real Madrid</h2>

                </div>
              </Link>

              <Link href="real-madrid-have-been-crowned-the-2023-2024-UEFA-champions-league-winners">
              <div className="right" data-aos="fade-left">
                <Image className='img' src={champions} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Real Madrid have been crowned the 2023/24 Uefa Champions League winners</h2>

              </div>
              </Link>
            </div>

            <div className="ctn">
              <Link href="carvajal-medical-report">
              <div className="left" data-aos="fade-right">
                <Image className='img' src={carvajal_med} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Carvajal medical report</h2>

              </div>
              </Link>

              <Link href="raphael-varane-announce-his-retirement-from-football">
              <div className="right" data-aos="fade-up">
                <Image className='img' src={varane} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Raphael Varane announces his retirement from football</h2>

              </div>
              </Link>

              <Link href="florentino-perez-talks-about-winning-the-super-cup">
              <div className="left" data-aos="fade-left">
                <Image className='img' src={perez} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Florentino Perez: This title would give us energy for a very difficult season</h2>

              </div>
              </Link>
            </div>

            <div className="ctn">
              <Link href="mbappe-talks-about-psg-not-wanting-him-in-the-squad-anymore">
              <div className="left" data-aos="fade-right">
                <Image className='img' src={kylian} alt='militao' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Mbappe:PSG do not want me in the squad anymore, it was Luis Enrique that saved me</h2>

              </div>
              </Link>

              <Link href="rodrygo-opening-goal">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={rodrygo} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Rodrygo has succeded to score the opening goal for Real Madrid for the last two seasons</h2>

              </div>
              </Link>
              
              <Link href="vinicuis-star-play">
              <div className="right" data-aos="fade-left">
                <Image className='img' src={mobile} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Vinicius star play</h2>

              </div>
              </Link>
            </div>

            <div className="ctn">
              <Link href="bellingham-medical-report">
              <div className="left" data-aos="fade-right">
                <Image className='img' src={background_img} alt='militao' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Bellinghams medical report</h2>

              </div>
              </Link>

              <Link href="mbappe-set-to-leave-psg-to-real-madrid">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={mbappe} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Mbappe set to leave PSG for Real Madrid</h2>

              </div>
              </Link>

              <Link href="welcome-to-kickoff-santiagobernabeu">
              <div className="right" data-aos="fade-left">
                <Image className='img' src={madrid_stadium} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Welcome to KickOff-SantiagoBernabeu</h2>

              </div>
              </Link>
            </div>                                                
          </div>

        </div>
        
      </div>

      {/* small laptop */}
      <div id='big' className='hidden md:hidden lg:block xl:hidden'>

        {/* new div */}
        <div>

          {/* navbar */}
          <div data-aos="fade-down" className="topnav_small">

            <div className='navbar_small'>
              <div className="left">
                <h1>KickOff</h1>
                <Image style={{cursor:'pointer'}} src={logo} width={90} alt='' />
              </div>

              <div className="middle">
                <h2 onClick={handleTap} className={tap === true ? 'tap' : ''}>News</h2>
                <Link href="fixtures">
                <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
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

          {/* feedback */}
          <div>

            {notlike === true &&
            <div onClick={handleLike} data-aos="fade-right">
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
          <div>
            <div className="ctn_small">
              <Link href="official-announcement-from-real-madrid">
              <div className="left" data-aos="fade-right">
                <Image className='img' src={racial} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Official announcement from Real Madrid</h2>

              </div>
              </Link>

              <Link href="reason-behind-real-madrid-not-attending-the-2024-ballon-dor-ceremony">
              <div className="left" data-aos="fade-up">
                <Image className='img' src={madrid_dor} alt='madrid' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Reason Behind Real Madrid Not Attending The 2024 Ballon d Or Ceremony</h2>

              </div>
              </Link>

              <Link href="rodrygo-medical-report">
              <div className="left" data-aos="fade-left">
                <Image className='img' src={rodrygo_med} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Rodrygo medical report</h2>

              </div>
              </Link>
             
            </div>

            <div className="ctn_small">
              <Link href="real-madrid-players-training">
              <div className="left" data-aos="fade-right">
                <Image className='img' src={mbappe_training} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Mbappe and Real Madrid players carry out individual work at Real Madrid City</h2>

              </div>
              </Link>

              <Link href="elclassico-2024">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={Elclassico} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>El Classico <br /> Real Madrid vs Barcelona</h2>

              </div>
              </Link>

              <Link href="andres-iniesta-retires">
              <div className="left" data-aos="fade-left">
                <Image className='img' src={racial} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Andrés Iniesta Retires From Football</h2>

              </div>
              </Link>
            </div>

            <div className="ctn_small">
              <Link href="courtois-medical-report">
              <div className="middle" data-aos="fade-right">
                <Image className='img' src={courtois_med} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Courtois medical report</h2>

              </div>
              </Link>
              
              <Link href="ancelotti-reaches-200-laliga-games-at-real-madrid">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={ancelloti_200} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Ancelotti reaches 200 Laliga games at Real Madrid</h2>

              </div>
              </Link>
              
              <Link href="modric-wins-his-250-league-match-for-real-madrid">
              <div className="right" data-aos="fade-left">
                <Image className='img' src={modric_250} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Modrić wins his 250th league match as a Real Madrid player</h2>

              </div>
              </Link>
            </div>

            <div className="ctn_small">              
              <Link href="tchouameni-reaches-his-100th-game-for-real-madrid">
              <div className="left" data-aos="fade-right">
                <Image className='img' src={tchoumeini} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Tchouameni reaches his 100th game for Real Madrid</h2>

              </div>
              </Link>
              
              <Link href="modric-becomes-the-oldest-player-to-appear-in-an-official-real-madrid-match"><div className="middle" data-aos="fade-up">
                <Image className='img' src={modric_oldest} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Modric becomes the oldest player to appear in an official match in the history of Real Madrid</h2>

              </div>
              </Link>

              <Link href="johan-neeskens-passes-away" >
              <div className="right" data-aos="fade-left">
                <Image className='img' src={legend} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Official announcement:Johan Neeskens passes away</h2>

              </div>
              </Link>
            </div>

            <div className="ctn_small">
              <Link href="eder-militao-medical-report">
                <div className="left" data-aos="fade-right">
                  <Image className='img' src={militao} alt='militao' priority />

                  <h2 style={{marginTop:'20px', fontSize:'15px'}}>Eder Militaos medical report</h2>

                </div>
              </Link>

              <Link href="david-beckham-has-broken-silence-on-mbappes-move-to-real-madrid">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={david} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>David Beckham the Inter Miami manager has broken silence on Mbappes move to Real Madrid</h2>

              </div>
              </Link>

              <Link href="real-madrid-have-been-crowned-the-2023-2024-UEFA-champions-league-winners">
              <div className="right" data-aos="fade-left">
                <Image className='img' src={champions} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Real Madrid have been crowned the 2023/24 Uefa Champions League winners</h2>

              </div>
              </Link>
            </div>

            <div className="ctn_small">              
              <Link href="mbappe-talks-about-psg-not-wanting-him-in-the-squad-anymore">
              <div className="left" data-aos="fade-right">
                <Image className='img' src={kylian} alt='militao' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Mbappe:PSG do not want me in the squad anymore, it was Luis Enrique that saved me</h2>

              </div>
              </Link>

              <Link href="rodrygo-opening-goal">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={rodrygo} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Rodrygo has succeded to score the opening goal for Real Madrid for the last two seasons</h2>

              </div>
              </Link>
              
              <Link href="vinicuis-star-play">
              <div className="right" data-aos="fade-left">
                <Image className='img' src={mobile} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Vinicius star play</h2>

              </div>
              </Link>
              
            </div>

            <div className="ctn_small">              
              <Link href="bellingham-medical-report">
              <div className="left" data-aos="fade-right">
                <Image className='img' src={background_img} alt='militao' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Bellinghams medical report</h2>

              </div>
              </Link>
              
              <Link href="mbappe-set-to-leave-psg-to-real-madrid">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={mbappe} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Mbappe set to leave PSG for Real Madrid</h2>

              </div>
              </Link>

              <Link href="welcome-to-kickoff-santiagobernabeu">
              <div className="right" data-aos="fade-left">
                <Image className='img' src={madrid_stadium} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Welcome to KickOff-SantiagoBernabeu</h2>

              </div>
              </Link>
            </div>                        

            <div className="ctn_small">
              <div className="left" data-aos="fade-right">
                <Image className='img' src={carvajal_med} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Carvajal medical report</h2>

              </div>

              <Link href="florentino-perez-talks-about-winning-the-super-cup">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={perez} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Florentino Perez:This title would give us energy for a very difficult season</h2>

              </div>
              </Link>

              <Link href="raphael-varane-announce-his-retirement-from-football">
              <div className="right" data-aos="fade-left">
                <Image className='img' src={varane} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Raphael Varane announces his retirement from football</h2>

              </div>
              </Link>
            </div>                        
          </div>

        </div>
        
      </div>

      {/* tablet */}
      <div id='big' className='hidden md:block lg:hidden xl:hidden'>

        {/* new div */}
        <div>

          {/* navbar */}
          <div data-aos="fade-down" className="topnav_tablet">

            <div className='navbar_tablet'>
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
                <Link href="fixtures">
                <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
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

          {/* feedback */}
          <div>

            {notlike === true &&
            <div onClick={handleLike} data-aos="fade-right">
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

          {/* news */}
          <div>
            <div className="ctn_tablet">
              <Link href="official-announcement-from-real-madrid">
              <div className="left" data-aos="fade-right">
                <Image className='img' src={racial} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Official announcement from Real Madrid</h2>

              </div>
              </Link>

              <Link href="reason-behind-real-madrid-not-attending-the-2024-ballon-dor-ceremony">
              <div className="left" data-aos="fade-up">
                <Image className='img' src={madrid_dor} alt='madrid' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Reason Behind Real Madrid Not Attending The 2024 Ballon d Or Ceremony</h2>

              </div>
              </Link>

              <Link href="rodrygo-medical-report">
              <div className="left" data-aos="fade-left">
                <Image className='img' src={rodrygo_med} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Rodrygo medical report</h2>

              </div>
              </Link>
             
            </div>

            <div className="ctn_tablet">
              <Link href="real-madrid-players-training">
              <div className="left" data-aos="fade-right">
                <Image className='img' src={mbappe_training} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Mbappe and Real Madrid players carry out individual work at Real Madrid City</h2>

              </div>
              </Link>

              <Link href="elclassico-2024">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={Elclassico} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Elclassico <br /> Real Madrid vs Barcelona</h2>

              </div>
              </Link>

              <Link href="andres-iniesta-retires">
              <div className="left" data-aos="fade-left">
                <Image className='img' src={racial} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Andrés Iniesta Retires From Football</h2>

              </div>
              </Link>
            </div>

            <div className="ctn_tablet">
              <Link href="courtois-medical-report">
              <div className="middle" data-aos="fade-right">
                <Image className='img' src={courtois_med} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Courtois medical report</h2>

              </div>
              </Link>
              
              <Link href="ancelotti-reaches-200-laliga-games-at-real-madrid">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={ancelloti_200} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Ancelotti reaches 200 Laliga games at Real Madrid</h2>

              </div>
              </Link>
              
              <Link href="modric-wins-his-250-league-match-for-real-madrid">
              <div className="right" data-aos="fade-left">
                <Image className='img' src={modric_250} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Modrić wins his 250th league match as a Real Madrid player</h2>

              </div>
              </Link>
            </div>

            <div className="ctn_tablet">              
              <Link href="tchouameni-reaches-his-100th-game-for-real-madrid">
              <div className="left" data-aos="fade-right">
                <Image className='img' src={tchoumeini} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Tchouameni reaches his 100th game for Real Madrid</h2>

              </div>
              </Link>

              <Link href="modric-becomes-the-oldest-player-to-appear-in-an-official-real-madrid-match"><div className="middle" data-aos="fade-up">
                <Image className='img' src={modric_oldest} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Modric becomes the oldest player to appear in an official match in the history of Real Madrid</h2>

              </div>
              </Link>

              <Link href="johan-neeskens-passes-away" >
              <div className="right" data-aos="fade-left">
                <Image className='img' src={legend} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Official announcement:Johan Neeskens passes away</h2>

              </div>
              </Link>
            </div>

            <div className="ctn_tablet">
              <Link href="eder-militao-medical-report">
                <div className="left" data-aos="fade-right">
                  <Image className='img' src={militao} alt='militao' priority />

                  <h2 style={{marginTop:'20px', fontSize:'15px'}}>Eder Militaos medical report</h2>

                </div>
              </Link>

              <Link href="david-beckham-has-broken-silence-on-mbappes-move-to-real-madrid">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={david} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>David Beckham the Inter Miami manager has broken silence on Mbappes move to Real Madrid</h2>

              </div>
              </Link>

              <Link href="real-madrid-have-been-crowned-the-2023-2024-UEFA-champions-league-winners">
              <div className="right" data-aos="fade-left">
                <Image className='img' src={champions} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Real Madrid have been crowned the 2023/24 Uefa Champions League winners</h2>

              </div>
              </Link>
            </div>

            <div className="ctn_tablet">              
              <Link href="mbappe-talks-about-psg-not-wanting-him-in-the-squad-anymore">
              <div className="left" data-aos="fade-right">
                <Image className='img' src={kylian} alt='militao' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Mbappe:PSG do not want me in the squad anymore, it was Luis Enrique that saved me</h2>

              </div>
              </Link>
              
              <Link href="rodrygo-opening-goal">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={rodrygo} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Rodrygo has succeded to score the opening goal for Real Madrid for the last two seasons</h2>

              </div>
              </Link>
              
              <Link href="vinicuis-star-play">
              <div className="right" data-aos="fade-left">
                <Image className='img' src={mobile} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Vinicius star play</h2>

              </div>
              </Link>
            </div>

            <div className="ctn_tablet">              
              <Link href="bellingham-medical-report">
              <div className="left" data-aos="fade-right">
                <Image className='img' src={background_img} alt='militao' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Bellinghams medical report</h2>

              </div>
              </Link>
              
              <Link href="mbappe-set-to-leave-psg-to-real-madrid">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={mbappe} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Mbappe set to leave PSG for Real Madrid</h2>

              </div>
              </Link>

              <Link href="welcome-to-kickoff-santiagobernabeu">
              <div className="right" data-aos="fade-left">
                <Image className='img' src={madrid_stadium} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Welcome to KickOff-SantiagoBernabeu</h2>

              </div>
              </Link>
            </div>                        

            <div className="ctn_tablet">
              <Link href="carvajal-medical-report">
                <div className="left" data-aos="fade-right">
                  <Image className='img' src={carvajal_med} alt='' priority />

                  <h2 style={{marginTop:'20px', fontSize:'15px'}}>Carvajal medical report</h2>

                </div>
              </Link>            

              <Link href="raphael-varane-announce-his-retirement-from-football">
              <div className="right" data-aos="fade-up">
                <Image className='img' src={varane} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Raphael Varane announces his retirement from football</h2>

              </div>
              </Link>

              <Link href="florentino-perez-talks-about-winning-the-super-cup">
                <div className="left" data-aos="fade-left">
                  <Image className='img' src={perez} alt='' priority />

                  <h2 style={{marginTop:'20px', fontSize:'15px'}}>Florentino Perez: This title would give us energy for a very difficult season</h2>

                </div>
              </Link>
            </div>                    
            
          </div>

        </div>
        
      </div>

      {/* phone */}
      <div id='mobile' className='block md:hidden lg:hidden xl:hidden'>

        {/* new div */}
        <div>

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
                    <p onClick={handleTap} className={tap === true ? "tap_phone" : ''}>News</p>
                    </Link>
                    <Link href="fixtures">
                    <p onClick={handleTap2} className={tap2 === true ? "tap_phone" : ''}>Fixtures</p>
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

          {/* feedback */}
          {notlike === true &&
          <div onClick={handleLike} data-aos="fade-right">
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
            <Image className='background_img_phone' src={mobile} alt='' priority />
          </div>

          {/* news heading */}
          <div className="news_heading_phone">
            <h2>News</h2>
          </div>

          {/* news */}
          <div className="news_phone">
            <div className="ctn_phone">
              <Link href="official-announcement-from-real-madrid">
              <div className="left" data-aos="fade-up">
                <Image className='img' src={racial} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Official announcement from Real Madrid</h2>

              </div>
              </Link>

              <Link href="reason-behind-real-madrid-not-attending-the-2024-ballon-dor-ceremony">
              <div className="left" data-aos="fade-up">
                <Image className='img' src={madrid_dor} alt='madrid' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Reason Behind Real Madrid Not Attending The 2024 Ballon d Or Ceremony</h2>

              </div>
              </Link>

              <Link href="rodrygo-medical-report">
              <div className="left" data-aos="fade-up">
                <Image className='img' src={rodrygo_med} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Rodrygo medical report</h2>

              </div>
              </Link>
             
            </div>

            <div className="ctn_phone">
              <Link href="real-madrid-players-training">
              <div className="left" data-aos="fade-up">
                <Image className='img' src={mbappe_training} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Mbappe and Real Madrid players carry out individual work at Real Madrid City</h2>

              </div>
              </Link>

              <Link href="elclassico-2024">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={Elclassico} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>El Classico <br /> Real Madrid vs Barcelona</h2>

              </div>
              </Link>
            
              <Link href="vinicuis-star-play">
              <div className="right" data-aos="fade-up">
                <Image className='img' src={mobile} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Vinicius star play</h2>

              </div>
              </Link>
            </div>

            <div className="ctn_phone">

              <Link href="courtois-medical-report">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={courtois_med} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Courtois medical report</h2>

              </div>
              </Link>
              
              <Link href="modric-wins-his-250-league-match-for-real-madrid">
              <div className="right" data-aos="fade-up">
                <Image className='img' src={modric_250} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Modrić wins his 250th league match as a Real Madrid player</h2>

              </div>
              </Link>

              <Link href="andres-iniesta-retires">
              <div className="left" data-aos="fade-up">
                <Image className='img' src={racial} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Andrés Iniesta Retires From Football</h2>

              </div>
              </Link>
            </div>

            <div className="ctn_phone">              
              <Link href="tchouameni-reaches-his-100th-game-for-real-madrid">
              <div className="left" data-aos="fade-up">
                <Image className='img' src={tchoumeini} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Tchouameni reaches his 100th game for Real Madrid</h2>

              </div>
              </Link>
            
              <Link href="modric-becomes-the-oldest-player-to-appear-in-an-official-real-madrid-match"><div className="middle" data-aos="fade-up">
                <Image className='img' src={modric_oldest} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Modric becomes the oldest player to appear in an official match in the history of Real Madrid</h2>

              </div>
              </Link>

              <Link href="johan-neeskens-passes-away" >
              <div className="right" data-aos="fade-up">
                <Image className='img' src={legend} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Official announcement:Johan Neeskens passes away</h2>

              </div>
              </Link>
            </div>

            <div className="ctn_phone">
              <Link href="eder-militao-medical-report">
                <div className="left" data-aos="fade-up">
                  <Image className='img' src={militao} alt='militao' priority />

                  <h2 style={{marginTop:'20px', fontSize:'15px'}}>Eder Militaos medical report</h2>

                </div>
              </Link>

              <Link href="david-beckham-has-broken-silence-on-mbappes-move-to-real-madrid">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={david} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>David Beckham the Inter Miami manager has broken silence on Mbappes move to Real Madrid</h2>

              </div>
              </Link>

              <Link href="real-madrid-have-been-crowned-the-2023-2024-UEFA-champions-league-winners">
              <div className="right" data-aos="fade-up">
                <Image className='img' src={champions} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Real Madrid have been crowned the 2023/24 Uefa Champions League winners</h2>

              </div>
              </Link>
            </div>

            <div className="ctn_phone">
              <Link href="mbappe-talks-about-psg-not-wanting-him-in-the-squad-anymore">
                <div className="left" data-aos="fade-up">
                  <Image className='img' src={kylian} alt='militao' priority />

                  <h2 style={{marginTop:'20px', fontSize:'15px'}}>Mbappe:PSG do not want me in the squad anymore, it was Luis Enrique that saved me</h2>

                </div>
              </Link>
                
              <Link href="rodrygo-opening-goal">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={rodrygo} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Rodrygo has succeded to score the opening goal for Real Madrid for the last two seasons</h2>

              </div>
              </Link>              
              
              <Link href="florentino-perez-talks-about-winning-the-super-cup">
              <div style={{marginTop:'30px'}} className="right" data-aos="fade-up">
                <Image className='img' src={perez} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Floretino Perez:This title would give us energy for a very difficult season</h2>

              </div>
              </Link>
            </div>

            <div className="ctn_phone">              
              <Link href="bellingham-medical-report">
              <div className="left" data-aos="fade-up">
                <Image className='img' src={background_img} alt='militao' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Bellinghams medical report</h2>

              </div>
              </Link>
              
              <Link href="mbappe-set-to-leave-psg-to-real-madrid">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={mbappe} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Mbappe set to leave PSG for Real Madrid</h2>

              </div>
              </Link>

              <Link href="welcome-to-kickoff-santiagobernabeu">
              <div className="right" data-aos="fade-up">
                <Image className='img' src={madrid_stadium} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Welcome to KickOff-SantiagoBernabeu</h2>

              </div>
              </Link>
            </div>                        

            <div className="ctn_phone">
            <Link href="carvajal-medical-report">
              <div className="left" data-aos="fade-up">
                <Image className='img' src={carvajal_med} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Carvajal medical report</h2>

              </div>
            </Link>
              
              <Link href="ancelotti-reaches-200-laliga-games-at-real-madrid">
              <div className="middle" data-aos="fade-up">
                <Image className='img' src={ancelloti_200} alt='' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Ancelotti reaches 200 Laliga games at Real Madrid</h2>

              </div>
              </Link>

              <Link href="raphael-varane-announce-his-retirement-from-football">
              <div className="right" data-aos="fade-up">
                <Image className='img' src={varane} alt='champions league 2024' priority />

                <h2 style={{marginTop:'20px', fontSize:'15px'}}>Raphael Varane announces his retirement from football</h2>

              </div>
              </Link>
            </div>                        
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Homepage