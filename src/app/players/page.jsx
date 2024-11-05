'use client'
import { useState } from "react"
import { useEffect } from "react"
import Aos from "aos"
import './page.css'
import Image from "next/image"
import Link from "next/link"
import 'aos/dist/aos.css'
import React from 'react'
import logo from './Image/madrid_icon.png'
import background_img_phone from './Image/night-stadium.jpg'
import background_img from './Image/night-stadium.jpg'
import courtois from './Image/courtois.jpg'
import alaba from './Image/alaba.jpg'
import garcia from './Image/garcia.jpg'
import guler from './Image/arder-guler.jpg'
import camavinga from './Image/camavinga.jpg'
import lunin from './Image/lunin.jpg'
import militao from './Image/militao-face.jpg'
import rudiger from './Image/rudiger.jpg'
import rodrygo from './Image/rodrygo-face.jpg'
import lucas from './Image/lucas.jpg'
import modric  from './Image/modric.jpg'
import mendy from './Image/mendy.jpg'
import endrick from './Image/endrick.jpg'
import ceballos from './Image/dani-ceballos.jpg'
import tchouameni from './Image/tchouameni.jpg'
import vallejo from './Image/vallejo.jpg'
import valverde from './Image/valverde.jpg'
import dias from './Image/dias.jpg'
import bellingham from './Image/bellingham.jpg'
import mbappe from './Image/mbappe-face.jpg'
import diaz from './Image/dias.jpg'
import vinicius from './Image/vinicius.jpg'
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
                <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
                </Link>
                <Link href="standings">
                <h2 onClick={handleTap3} className={tap3 === true ? 'tap' : ''}>Standings</h2>
                </Link>
                <Link href="players">
                <h2 onClick={handleTap} className={tap === true ? 'tap' : ''}>Players</h2>
                </Link>
            </div>

            </div>

        </div>        

        {/* background image */}
        <div>
        <Image className='background' src={background_img} alt='' priority />
        </div>

        {/* players */}
        <div className="players">

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={courtois} alt="courtois" />
                        <p>1. Thibaut Courtois</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Goal Keeper</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>32</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Belgium</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€25.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={lunin} alt="courtois" />
                        <p>13. Andriy Lunin</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Goal Keeper</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>25</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Ukriane</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€25.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={militao} alt="courtois" />
                        <p>3. Eder Milităo</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Center-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>26</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Brazil</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€60.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={rudiger} alt="courtois" />
                        <p>22. Antonio Rügidér</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Center-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>31</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Germany</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€25.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={alaba} alt="courtois" />
                        <p>4. David Alaba</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Center-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>32</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Austria</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€15.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={vallejo} alt="courtois" />
                        <p>18. Jesùs Vallejo</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Center-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>27</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Spain</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€1.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={mendy} alt="courtois" />
                        <p>23. Ferland Mendy</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Left-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>29</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>France</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€22.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={garcia} alt="courtois" />
                        <p>20. Fran García</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Left-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>25</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Spain</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€15.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={lucas} alt="courtois" />
                        <p>17. Lucas Vázquez</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Right-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>33</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Spain</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€4.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={tchouameni} alt="courtois" />
                        <p>14. Aurélin Tchouoaméni</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Defensive-Midfield</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>24</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>France</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€100.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={valverde} alt="courtois" />
                        <p>8. Federico Valverde</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Central-Midfield</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>26</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Uruguay</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€130.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={camavinga} alt="courtois" />
                        <p>6. Eduardo Camavinga</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Central-Midfield</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>21</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>France</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€100.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={modric} alt="courtois" />
                        <p>10. Luka Modric</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Central-Midfield</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>39</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Croatia</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€6.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={ceballos} alt="courtois" />
                        <p>19. Dani Ceballos</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Central-Midfield</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>28</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Spain</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€40.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={bellingham} alt="courtois" />
                        <p>5. Jude Bellingham</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Attacking-Midfielder</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>21</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>England</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€180.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={rodrygo} alt="courtois" />
                        <p>11. Rodrygo</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Right-Winger</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>23</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Brazil</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€110.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={vinicius} alt="courtois" />
                        <p>7. Vinicius Junior</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Left-Winger</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>24</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Brazil</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€200.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={diaz} alt="courtois" />
                        <p>21. Brahim-Diaz</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Attacking-Midfielder</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>25</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Morocco</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€40.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={guler} alt="courtois" />
                        <p>15. Arder Guler</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Right-Winger</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>19</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Turkey</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€45.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={mbappe} alt="courtois" />
                        <p>9. Kylian Mbappé</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Centre-Forward</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>25</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>France</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€180.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={endrick} alt="courtois" />
                        <p>16. Endrick</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Centre-Forward</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>18</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Brazil</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€60.00m</p>
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
            <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
            </Link>
            <Link href="standings">
            <h2 onClick={handleTap3} className={tap3 === true ? 'tap' : ''}>Standings</h2>
            </Link>
            <Link href="players">
            <h2 onClick={handleTap} className={tap === true ? 'tap' : ''}>Players</h2>
            </Link>
        </div>

        </div>

        </div>        

        {/* background image */}
        <div>
        <Image className='background' src={background_img} alt='' priority />
        </div> 

        {/* players */}
        <div className="players">

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={courtois} alt="courtois" />
                        <p>1. Thibaut Courtois</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Goal Keeper</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>32</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Belgium</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€25.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={lunin} alt="courtois" />
                        <p>13. Andriy Lunin</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Goal Keeper</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>25</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Ukriane</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€25.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={militao} alt="courtois" />
                        <p>3. Eder Milităo</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Center-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>26</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Brazil</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€60.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={rudiger} alt="courtois" />
                        <p>22. Antonio Rügidér</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Center-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>31</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Germany</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€25.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={alaba} alt="courtois" />
                        <p>4. David Alaba</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Center-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>32</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Austria</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€15.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={vallejo} alt="courtois" />
                        <p>18. Jesùs Vallejo</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Center-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>27</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Spain</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€1.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={mendy} alt="courtois" />
                        <p>23. Ferland Mendy</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Left-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>29</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>France</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€22.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={garcia} alt="courtois" />
                        <p>20. Fran García</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Left-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>25</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Spain</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€15.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={lucas} alt="courtois" />
                        <p>17. Lucas Vázquez</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Right-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>33</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Spain</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€4.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={tchouameni} alt="courtois" />
                        <p>14. Aurélin Tchouoaméni</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Defensive-Midfield</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>24</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>France</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€100.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={valverde} alt="courtois" />
                        <p>8. Federico Valverde</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Central-Midfield</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>26</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Uruguay</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€130.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={camavinga} alt="courtois" />
                        <p>6. Eduardo Camavinga</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Central-Midfield</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>21</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>France</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€100.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={modric} alt="courtois" />
                        <p>10. Luka Modric</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Central-Midfield</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>39</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Croatia</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€6.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={ceballos} alt="courtois" />
                        <p>19. Dani Ceballos</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Central-Midfield</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>28</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Spain</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€40.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={bellingham} alt="courtois" />
                        <p>5. Jude Bellingham</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Attacking-Midfielder</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>21</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>England</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€180.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={rodrygo} alt="courtois" />
                        <p>11. Rodrygo</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Right-Winger</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>23</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Brazil</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€110.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={vinicius} alt="courtois" />
                        <p>7. Vinicius Junior</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Left-Winger</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>24</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Brazil</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€200.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={diaz} alt="courtois" />
                        <p>21. Brahim-Diaz</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Attacking-Midfielder</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>25</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Morocco</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€40.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={guler} alt="courtois" />
                        <p>15. Arder Guler</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Right-Winger</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>19</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Turkey</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€45.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={mbappe} alt="courtois" />
                        <p>9. Kylian Mbappé</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Centre-Forward</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>25</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>France</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€180.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={endrick} alt="courtois" />
                        <p>16. Endrick</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Centre-Forward</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>18</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Brazil</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€60.00m</p>
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
            <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
            </Link>
            <Link href="standings">
            <h2 onClick={handleTap3} className={tap3 === true ? 'tap' : ''}>Standings</h2>
            </Link>
            <Link href="players">
            <h2 onClick={handleTap} className={tap === true ? 'tap' : ''}>Players</h2>
            </Link>
        </div>

        </div>

        </div>        

        {/* background image */}
        <div>
        <Image className='background' src={background_img} alt='' priority />
        </div>

        {/* players */}
        <div className="players">

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={courtois} alt="courtois" />
                        <p>1. Thibaut Courtois</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Goal Keeper</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>32</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Belgium</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€25.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={lunin} alt="courtois" />
                        <p>13. Andriy Lunin</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Goal Keeper</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>25</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Ukriane</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€25.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={militao} alt="courtois" />
                        <p>3. Eder Milităo</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Center-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>26</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Brazil</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€60.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={rudiger} alt="courtois" />
                        <p>22. Antonio Rügidér</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Center-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>31</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Germany</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€25.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={alaba} alt="courtois" />
                        <p>4. David Alaba</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Center-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>32</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Austria</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€15.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={vallejo} alt="courtois" />
                        <p>18. Jesùs Vallejo</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Center-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>27</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Spain</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€1.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={mendy} alt="courtois" />
                        <p>23. Ferland Mendy</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Left-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>29</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>France</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€22.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={garcia} alt="courtois" />
                        <p>20. Fran García</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Left-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>25</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Spain</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€15.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={lucas} alt="courtois" />
                        <p>17. Lucas Vázquez</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Right-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>33</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Spain</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€4.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={tchouameni} alt="courtois" />
                        <p>14. Aurélin Tchouoaméni</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Defensive-Midfield</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>24</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>France</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€100.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={valverde} alt="courtois" />
                        <p>8. Federico Valverde</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Central-Midfield</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>26</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Uruguay</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€130.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={camavinga} alt="courtois" />
                        <p>6. Eduardo Camavinga</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Central-Midfield</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>21</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>France</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€100.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={modric} alt="courtois" />
                        <p>10. Luka Modric</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Central-Midfield</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>39</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Croatia</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€6.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={ceballos} alt="courtois" />
                        <p>19. Dani Ceballos</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Central-Midfield</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>28</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Spain</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€40.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={bellingham} alt="courtois" />
                        <p>5. Jude Bellingham</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Attacking-Midfielder</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>21</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>England</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€180.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={rodrygo} alt="courtois" />
                        <p>11. Rodrygo</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Right-Winger</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>23</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Brazil</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€110.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={vinicius} alt="courtois" />
                        <p>7. Vinicius Junior</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Left-Winger</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>24</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Brazil</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€200.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={diaz} alt="courtois" />
                        <p>21. Brahim-Diaz</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Attacking-Midfielder</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>25</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Morocco</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€40.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players">
                <div id="box" data-aos="fade-right" className="box">
                    <div className="name">
                        <Image id="img" src={guler} alt="courtois" />
                        <p>15. Arder Guler</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Right-Winger</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>19</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Turkey</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€45.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={mbappe} alt="courtois" />
                        <p>9. Kylian Mbappé</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Centre-Forward</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>25</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>France</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€180.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-left" className="box">
                    <div className="name">
                        <Image id="img" src={endrick} alt="courtois" />
                        <p>16. Endrick</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Centre-Forward</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>18</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Brazil</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€60.00m</p>
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
                <p onClick={handleTap2} className={tap2 === true ? "tap_phone" : ''}>Fixtures</p>
                </Link>
                <Link href="standings">
                <p onClick={handleTap3} className={tap3 === true ? "tap_phone" : ''}>Standings</p>
                </Link>
                <Link href="players">
                <p onClick={handleTap} className={tap === true ? "tap_phone" : ''}>Players</p>
                </Link>
            </div>
            }
        </div>

        </div>

        </div>        

        {/* background image */}
        <div>
        <Image className='background' src={background_img_phone} alt='' priority />
        </div>

        {/* players */}
        <div className="players_phone">

            <div className="ctn_players_phone">
                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={courtois} alt="courtois" />
                        <p>1. Thibaut Courtois</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Goal Keeper</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>32</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Belgium</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€25.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={lunin} alt="courtois" />
                        <p>13. Andriy Lunin</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Goal Keeper</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>25</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Ukriane</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€25.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={militao} alt="courtois" />
                        <p>3. Eder Milităo</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Center-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>26</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Brazil</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€60.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players_phone">
                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={rudiger} alt="courtois" />
                        <p>22. Antonio Rügidér</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Center-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>31</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Germany</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€25.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={alaba} alt="courtois" />
                        <p>4. David Alaba</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Center-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>32</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Austria</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€15.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={vallejo} alt="courtois" />
                        <p>18. Jesùs Vallejo</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Center-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>27</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Spain</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€1.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players_phone">
                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={mendy} alt="courtois" />
                        <p>23. Ferland Mendy</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Left-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>29</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>France</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€22.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={garcia} alt="courtois" />
                        <p>20. Fran García</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Left-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>25</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Spain</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€15.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={lucas} alt="courtois" />
                        <p>17. Lucas Vázquez</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Right-Back</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>33</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Spain</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€4.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players_phone">
                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={tchouameni} alt="courtois" />
                        <p>14. Aurélin Tchouoaméni</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Defensive-Midfield</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>24</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>France</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€100.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={valverde} alt="courtois" />
                        <p>8. Federico Valverde</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Central-Midfield</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>26</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Uruguay</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€130.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={camavinga} alt="courtois" />
                        <p>6. Eduardo Camavinga</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Central-Midfield</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>21</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>France</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€100.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players_phone">
                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={modric} alt="courtois" />
                        <p>10. Luka Modric</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Central-Midfield</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>39</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Croatia</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€6.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={ceballos} alt="courtois" />
                        <p>19. Dani Ceballos</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Central-Midfield</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>28</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Spain</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€40.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={bellingham} alt="courtois" />
                        <p>5. Jude Bellingham</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Attacking-Midfielder</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>21</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>England</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€180.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players_phone">
                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={rodrygo} alt="courtois" />
                        <p>11. Rodrygo</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Right-Winger</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>23</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Brazil</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€110.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={vinicius} alt="courtois" />
                        <p>7. Vinicius Junior</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Left-Winger</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>24</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Brazil</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€200.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={diaz} alt="courtois" />
                        <p>21. Brahim-Diaz</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Attacking-Midfielder</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>25</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Morocco</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€40.00m</p>
                    </div>
                </div>
            </div>

            <div className="ctn_players_phone">
                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={guler} alt="courtois" />
                        <p>15. Arder Guler</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Right-Winger</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>19</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Turkey</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€45.00m </p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={mbappe} alt="courtois" />
                        <p>9. Kylian Mbappé</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Centre-Forward</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>25</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>France</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€180.00m</p>
                    </div>
                </div>

                <div id="box" data-aos="fade-up" className="box">
                    <div className="name">
                        <Image id="img" src={endrick} alt="courtois" />
                        <p>16. Endrick</p>
                    </div>

                    <div className="position">
                        <p>Position :</p>
                        <p>Centre-Forward</p>
                    </div>

                    <div className="age">
                        <p>Age :</p>
                        <p>18</p>
                    </div>

                    <div className="nationality">
                        <p>Nationality :</p>
                        <p>Brazil</p>
                    </div>

                    <div className="value">                        
                        <p>Market Value :</p>
                        <p>€60.00m</p>
                    </div>
                </div>
            </div>
        </div>
        
        </div>}
      
    </div>
  )
}

export default Page