'use client'
import { useState } from "react"
import { useEffect } from "react"
import Link from "next/link"
import Aos from "aos"
import 'aos/dist/aos.css'
import Image from "next/image"
import './page.css'
import React from 'react'
import logo from './Image/madrid_icon.png'
import background_img from './Image/night-stadium.jpg'
import barcelona from './Image/barcelona.png'
import acmilan from './Image/acmilan.png'
import realmadrid from './Image/realmadrid.png'
import alaves from './Image/alaves.png'
import atalanta from './Image/atalanta.png'
import atletico from './Image/Atletico.png'
import bilbao from './Image/Bilbao.png'
import celtavigo from './Image/celtavigo.png'
import dortmund from './Image/dortmund.png'
import espanyol from './Image/espanyol.png'
import getafe from './Image/getafe.png'
import girona from './Image/girona.png'
import laspalmas from './Image/laspalmas.png'
import leganes from './Image/leganes.png'
import mallorca from './Image/mallorca.png'
import osasuna from './Image/osasuna.png'
import realbetis from './Image/realbetis.png'
import realsociedad from './Image/realsociedad.png'
import sevilla from './Image/sevilla.png'
import valencia from './Image/valencia.png'
import valladolid from './Image/valladolid.png'
import vallecano from './Image/vallecano.png'
import villareal from './Image/villareal.png'
import lille from './Image/lille.png'
import stade from './Image/stade.png'
import salzburg from './Image/salzburg.png'
import liverpool from './Image/liverpool.png'
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

        {/* fixtures */}

        <div className="fixtures">
          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">SUNDAY, SEPTEMBER 29 - FULL TIME <br /> WEEK 8 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Atletico</p>
                  <Image width={35} src={atletico} alt="" />
                  <p>1</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>1</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">WEDNESDAY, OCTOBER 2 - FULL TIME <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Lille</p>
                  <Image width={35} src={lille} alt="" />
                  <p>1</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>0</p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>Real Madrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">
        
            <Link data-aos="fade-right" className='one' href='real-madrid-v-villareal-1'>
            <div>

              <div className="head">SATURDAY, OCTOBER - 5 FULL TIME <br /> WEEK 9 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>2</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>0</p>
                  <Image width={35} src={villareal} alt="" />
                  <p>Villareal</p>
                </div>
              </div>

            </div>            
            </Link>
            
            <Link data-aos="fade-left" className='one' href='celtavigo-v-realmadrid'>
            <div>

              <div className="head">SATURDAY, OCTOBER 19 - FULL TIME <br /> WEEK 10 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Celta Vigo</p>
                  <Image width={35} src={celtavigo} alt="" />
                  <p>1</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>2</p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>Real Madrid</p>                  
                </div>
              </div>

            </div>
            </Link>

          </div>

          <div className="container">
            
            <Link data-aos="fade-right" className="one" href="realmadrid-v-dortmund">
            <div>

              <div className="head">TUESDAY, OCTOBER 22 - FULL TIME <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>5</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>2</p>
                  <Image width={35} src={dortmund} alt="" />
                  <p>Dortmund</p>
                </div>
              </div>

            </div>
            </Link>
            
            <Link data-aos="fade-left" className="one" href="realmadrid-v-barcelona">
            <div>

              <div className="head">SATURDAY, OCTOBER 26 - FULL TIME <br /> WEEK 11 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>0</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>4</p>
                  <Image width={35} src={barcelona} alt="" />                
                  <p>Barcelona</p>                  
                </div>
              </div>

            </div>
            </Link>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head"><span style={{color:'lime'}}>POSTPONED</span> <br /> WEEK 12 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Valencia</p>
                  <Image width={35} src={valencia} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>9:00 PM</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">TUESDAY, NOVEMEBR 5 <br /> UEFA Champions League - FULL TIME</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>1</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>3</p>
                  <Image width={35} src={acmilan} alt="" />                
                  <p>Milan</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">WEDNESDAY, NOVEMBER 27 <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Liverpool</p>
                  <Image width={35} src={liverpool} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>9:00 PM</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">DECEMBER 1, 2024 <br /> WEEK 15 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={getafe} alt="" />                
                  <p>Getafe</p>                  
                </div>
              </div>

            </div>

          </div>          

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">DECEMBER 4, 2024 <br /> WEEK 16 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Bilbao</p>
                  <Image width={35} src={bilbao} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">DECEMBER 8, 2024 <br /> WEEK 16 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Girona</p>
                  <Image width={35} src={girona} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>Real Madrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">DECEMBER 10, 2024 <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Atalanta</p>
                  <Image width={35} src={atalanta} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>9:00 PM</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">DECEMBER 15, 2024 <br /> WEEK 17 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Vallecano</p>
                  <Image width={35} src={vallecano} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>Real Madrid</p>                  
                </div>
              </div>

            </div>

          </div>          

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">DECEMBER 22, 2024 <br /> WEEK 18 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={sevilla} alt="" />
                  <p>Sevilla</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">JANUARY 8, 2025 <br /> SEMI - FINALS</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={mallorca} alt="" />                
                  <p>Mallorca</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">JANUARY 19, 2025 <br /> WEEK 20 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={laspalmas} alt="" />
                  <p>Las Palmas</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">JANUARY 22, 2025 <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>9:00 PM</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={salzburg} alt="" />                
                  <p>Salzburg</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">JANUARY 26, 2025 <br /> WEEK 21 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Valladolid</p>
                  <Image width={35} src={valladolid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">JANUARY 29, 2025 <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Stade Brest 29</p>
                  <Image width={35} src={stade} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>9:00 PM</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>Real Madrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">FEBUARY 2, 2025 <br /> WEEK 22 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Espanyol</p>
                  <Image width={35} src={espanyol} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">FEBUARY 9, 2025 <br /> WEEK 23 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={atletico} alt="" />                
                  <p>Atletico</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">FEBUARY 16, 2025 <br /> WEEK 24 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Osasuna</p>
                  <Image width={35} src={osasuna} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">FEBUARY 23, 2025 <br /> WEEK 25 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={girona} alt="" />                
                  <p>Girona</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">MARCH 2, 2025 <br /> WEEK 26 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Betis</p>
                  <Image width={35} src={realbetis} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">MARCH 9, 2025 <br /> WEEK 27 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={vallecano} alt="" />                
                  <p>Vallecano</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">MARCH 16, 2025 <br /> WEEK 28 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Villareal</p>
                  <Image width={35} src={villareal} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">MARCH 30, 2025 <br /> WEEK 29 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={leganes} alt="" />                
                  <p>Leganes</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">APRIL 6, 2025 <br /> WEEK 30 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={valencia} alt="" />
                  <p>Valencia</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">APRIL 13, 2025 <br /> WEEK 31 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Alaves</p>
                  <Image width={35} src={alaves} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>Real Madrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">APRIL 20, 2025 <br /> WEEK 32 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Bilbao</p>
                  <Image width={35} src={bilbao} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">APRIL 23, 2025 <br /> WEEK 33 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Getafe</p>
                  <Image width={35} src={getafe} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>Real Madrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">MAY 4, 2025 <br /> WEEK 34 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={celtavigo} alt="" />
                  <p>Celta Vigo</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">MAY 11, 2025 <br /> WEEK 35 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Barcelona</p>
                  <Image width={35} src={barcelona} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>Real Madrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">MAY 14, 2025 <br /> WEEK 36 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={mallorca} alt="" />
                  <p>Mallorca</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">MAY 18, 2025 <br /> WEEK 37 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Sevilla</p>
                  <Image width={35} src={sevilla} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>Real Madrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">MAY 25, 2025 <br /> WEEK 38 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realsociedad} alt="" />
                  <p>Real Sociedad</p>
                </div>
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

        <div className="fixtures">
          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">SUNDAY, SEPTEMBER 29 - FULL TIME <br /> WEEK 8 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Atletico</p>
                  <Image width={35} src={atletico} alt="" />
                  <p>1</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>1</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">WEDNESDAY, OCTOBER 2 - FULL TIME <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Lille</p>
                  <Image width={35} src={lille} alt="" />
                  <p>1</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>0</p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>Real Madrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">
            
          <Link data-aos="fade-right" className='one' href='real-madrid-v-villareal-1'>
            <div>

              <div className="head">SATURDAY, OCTOBER - 5 FULL TIME <br /> WEEK 9 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>2</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>0</p>
                  <Image width={35} src={villareal} alt="" />
                  <p>Villareal</p>
                </div>
              </div>

            </div>            
            </Link>
            
            <Link data-aos="fade-left" className='one' href='celtavigo-v-realmadrid'>
            <div>

              <div className="head">SATURDAY, OCTOBER 19 - FULL TIME <br /> WEEK 10 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Celta Vigo</p>
                  <Image width={35} src={celtavigo} alt="" />
                  <p>1</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>2</p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>Real Madrid</p>                  
                </div>
              </div>

            </div>
            </Link>            

          </div>

          <div className="container">
            
            <Link data-aos="fade-right" className="one" href="realmadrid-v-dortmund">
            <div>

              <div className="head">TUESDAY, OCTOBER 22 - FULL TIME <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>5</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>2</p>
                  <Image width={35} src={dortmund} alt="" />
                  <p>Dortmund</p>
                </div>
              </div>

            </div>
            </Link>
            
            <Link data-aos="fade-left" className="one" href="realmadrid-v-barcelona">
            <div>

              <div className="head">SATURDAY, OCTOBER 26 - FULL TIME <br /> WEEK 11 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>0</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>4</p>
                  <Image width={35} src={barcelona} alt="" />                
                  <p>Barcelona</p>                  
                </div>
              </div>

            </div>
            </Link>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head"><span style={{color:'lime'}}>POSTPONED</span> <br /> WEEK 12 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Valencia</p>
                  <Image width={35} src={valencia} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>9:00 PM</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">TUESDAY, NOVEMEBR 5 <br /> UEFA Champions League - FULL TIME</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>1</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>3</p>
                  <Image width={35} src={acmilan} alt="" />                
                  <p>Milan</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">WEDNESDAY, NOVEMBER 27 <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Liverpool</p>
                  <Image width={35} src={liverpool} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>9:00 PM</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">DECEMBER 1, 2024 <br /> WEEK 15 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={getafe} alt="" />                
                  <p>Getafe</p>                  
                </div>
              </div>

            </div>

          </div>          

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">DECEMBER 4, 2024 <br /> WEEK 16 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Bilbao</p>
                  <Image width={35} src={bilbao} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">DECEMBER 8, 2024 <br /> WEEK 16 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Girona</p>
                  <Image width={35} src={girona} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>Real Madrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">DECEMBER 10, 2024 <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Atalanta</p>
                  <Image width={35} src={atalanta} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>9:00 PM</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">DECEMBER 15, 2024 <br /> WEEK 17 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Vallecano</p>
                  <Image width={35} src={vallecano} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>Real Madrid</p>                  
                </div>
              </div>

            </div>

          </div>          

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">DECEMBER 22, 2024 <br /> WEEK 18 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={sevilla} alt="" />
                  <p>Sevilla</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">JANUARY 8, 2025 <br /> SEMI - FINALS</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={mallorca} alt="" />                
                  <p>Mallorca</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">JANUARY 19, 2025 <br /> WEEK 20 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={laspalmas} alt="" />
                  <p>Las Palmas</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">JANUARY 22, 2025 <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>9:00 PM</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={salzburg} alt="" />                
                  <p>Salzburg</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">JANUARY 26, 2025 <br /> WEEK 21 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Valladolid</p>
                  <Image width={35} src={valladolid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">JANUARY 29, 2025 <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Stade Brest 29</p>
                  <Image width={35} src={stade} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>9:00 PM</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>Real Madrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">FEBUARY 2, 2025 <br /> WEEK 22 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Espanyol</p>
                  <Image width={35} src={espanyol} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">FEBUARY 9, 2025 <br /> WEEK 23 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={atletico} alt="" />                
                  <p>Atletico</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">FEBUARY 16, 2025 <br /> WEEK 24 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Osasuna</p>
                  <Image width={35} src={osasuna} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">FEBUARY 23, 2025 <br /> WEEK 25 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={girona} alt="" />                
                  <p>Girona</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">MARCH 2, 2025 <br /> WEEK 26 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Betis</p>
                  <Image width={35} src={realbetis} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">MARCH 9, 2025 <br /> WEEK 27 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={vallecano} alt="" />                
                  <p>Vallecano</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">MARCH 16, 2025 <br /> WEEK 28 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Villareal</p>
                  <Image width={35} src={villareal} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">MARCH 30, 2025 <br /> WEEK 29 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={leganes} alt="" />                
                  <p>Leganes</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">APRIL 6, 2025 <br /> WEEK 30 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={valencia} alt="" />
                  <p>Valencia</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">APRIL 13, 2025 <br /> WEEK 31 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Alaves</p>
                  <Image width={35} src={alaves} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>Real Madrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">APRIL 20, 2025 <br /> WEEK 32 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Bilbao</p>
                  <Image width={35} src={bilbao} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">APRIL 23, 2025 <br /> WEEK 33 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Getafe</p>
                  <Image width={35} src={getafe} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>Real Madrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">MAY 4, 2025 <br /> WEEK 34 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={celtavigo} alt="" />
                  <p>Celta Vigo</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">MAY 11, 2025 <br /> WEEK 35 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Barcelona</p>
                  <Image width={35} src={barcelona} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>Real Madrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">MAY 14, 2025 <br /> WEEK 36 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={mallorca} alt="" />
                  <p>Mallorca</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">MAY 18, 2025 <br /> WEEK 37 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Sevilla</p>
                  <Image width={35} src={sevilla} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>Real Madrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">MAY 25, 2025 <br /> WEEK 38 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realsociedad} alt="" />
                  <p>Real Sociedad</p>
                </div>
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

        <div className="fixtures_tablet">
          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">SUNDAY, SEPTEMBER 29 - FULL TIME <br /> WEEK 8 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Atletico</p>
                  <Image width={35} src={atletico} alt="" />
                  <p>1</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>1</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">WEDNESDAY, OCTOBER 2 - FULL TIME <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Lille</p>
                  <Image width={35} src={lille} alt="" />
                  <p>1</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>0</p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>RealMadrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">
            
            <Link data-aos="fade-right" className='one' href='real-madrid-v-villareal-1'>
            <div>

              <div className="head">SATURDAY, OCTOBER - 5 FULL TIME <br /> WEEK 9 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>2</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>0</p>
                  <Image width={35} src={villareal} alt="" />
                  <p>Villareal</p>
                </div>
              </div>

            </div>
            </Link>            
            
            <Link data-aos="fade-left" className='one'  href='celtavigo-v-realmadrid'>
            <div>

              <div className="head">SATURDAY, OCTOBER 19 - FULL TIME <br /> WEEK 10 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Celta Vigo</p>
                  <Image width={35} src={celtavigo} alt="" />
                  <p>1</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>2</p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>Real Madrid</p>                  
                </div>
              </div>

            </div>
            </Link>            

          </div>

          <div className="container">
            
            <Link data-aos="fade-right" className="one" href="realmadrid-v-dortmund">
            <div>

              <div className="head">TUESDAY, OCTOBER 22 - FULL TIME <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>5</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>2</p>
                  <Image width={35} src={dortmund} alt="" />
                  <p>Dortmund</p>
                </div>
              </div>

            </div>
            </Link>
            
            <Link data-aos="fade-left" className="one" href="realmadrid-v-barcelona">
            <div>

              <div className="head">SATURDAY, OCTOBER 26 - FULL TIME <br /> WEEK 11 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>0</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>4</p>
                  <Image width={35} src={barcelona} alt="" />                
                  <p>Barcelona</p>                  
                </div>
              </div>

            </div>
            </Link>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head"><span style={{color:'lime'}}>POSTPONED</span> <br /> WEEK 12 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Valencia</p>
                  <Image width={35} src={valencia} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>9:00 PM</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>RealMadrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">TUESDAY, NOVEMEBR 5 <br /> UEFA Champions League - FULL TIME</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>1</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>3</p>
                  <Image width={35} src={acmilan} alt="" />                
                  <p>Milan</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">WEDNESDAY, NOVEMBER 27 <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Liverpool</p>
                  <Image width={35} src={liverpool} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>9:00 PM</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>RealMadrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">DECEMBER 1, 2024 <br /> WEEK 15 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={getafe} alt="" />                
                  <p>Getafe</p>                  
                </div>
              </div>

            </div>

          </div>          

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">DECEMBER 4, 2024 <br /> WEEK 16 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Bilbao</p>
                  <Image width={35} src={bilbao} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>RealMadrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">DECEMBER 8, 2024 <br /> WEEK 16 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Girona</p>
                  <Image width={35} src={girona} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>RealMadrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">DECEMBER 10, 2024 <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Atalanta</p>
                  <Image width={35} src={atalanta} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>9:00 PM</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>RealMadrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">DECEMBER 15, 2024 <br /> WEEK 17 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Vallecano</p>
                  <Image width={35} src={vallecano} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>RealMadrid</p>                  
                </div>
              </div>

            </div>

          </div>        

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">DECEMBER 22, 2024 <br /> WEEK 18 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={sevilla} alt="" />
                  <p>Sevilla</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">JANUARY 8, 2025 <br /> SEMI - FINALS</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={mallorca} alt="" />                
                  <p>Mallorca</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">JANUARY 19, 2025 <br /> WEEK 20 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={laspalmas} alt="" />
                  <p>Las Palmas</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">JANUARY 22, 2025 <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>9:00 PM</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={salzburg} alt="" />                
                  <p>Salzburg</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">JANUARY 26, 2025 <br /> WEEK 21 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Valladolid</p>
                  <Image width={35} src={valladolid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>RealMadrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">JANUARY 29, 2025 <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Stade Brest 29</p>
                  <Image width={35} src={stade} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>9:00 PM</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>RealMadrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">FEBUARY 2, 2025 <br /> WEEK 22 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Espanyol</p>
                  <Image width={35} src={espanyol} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>RealMadrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">FEBUARY 9, 2025 <br /> WEEK 23 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={atletico} alt="" />                
                  <p>Atletico</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">FEBUARY 16, 2025 <br /> WEEK 24 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Osasuna</p>
                  <Image width={35} src={osasuna} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>RealMadrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">FEBUARY 23, 2025 <br /> WEEK 25 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={girona} alt="" />                
                  <p>Girona</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">MARCH 2, 2025 <br /> WEEK 26 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Betis</p>
                  <Image width={35} src={realbetis} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>RealMadrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">MARCH 9, 2025 <br /> WEEK 27 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={vallecano} alt="" />                
                  <p>Vallecano</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">MARCH 16, 2025 <br /> WEEK 28 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Villareal</p>
                  <Image width={35} src={villareal} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>RealMadrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">MARCH 30, 2025 <br /> WEEK 29 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={leganes} alt="" />                
                  <p>Leganes</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">APRIL 6, 2025 <br /> WEEK 30 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={valencia} alt="" />
                  <p>Valencia</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">APRIL 13, 2025 <br /> WEEK 31 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Alaves</p>
                  <Image width={35} src={alaves} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>RealMadrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">APRIL 20, 2025 <br /> WEEK 32 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Bilbao</p>
                  <Image width={35} src={bilbao} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>RealMadrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">APRIL 23, 2025 <br /> WEEK 33 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Getafe</p>
                  <Image width={35} src={getafe} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>RealMadrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">MAY 4, 2025 <br /> WEEK 34 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={celtavigo} alt="" />
                  <p>Celta Vigo</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">MAY 11, 2025 <br /> WEEK 35 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Barcelona</p>
                  <Image width={35} src={barcelona} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>RealMadrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">MAY 14, 2025 <br /> WEEK 36 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={mallorca} alt="" />
                  <p>Mallorca</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" className="one">

              <div className="head">MAY 18, 2025 <br /> WEEK 37 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Sevilla</p>
                  <Image width={35} src={sevilla} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realmadrid} alt="" />                
                  <p>RealMadrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-right" className="one">

              <div className="head">MAY 25, 2025 <br /> WEEK 38 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={35} src={realsociedad} alt="" />
                  <p>Real Sociedad</p>
                </div>
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

        <div className="fixtures_phone">
          <div className="container">

            <div data-aos="fade-up" className="one">

              <div className="head">SUN, SEPT 29 - FT <br /> WEEK 8 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Atletico</p>
                  <Image width={23} src={atletico} alt="" />
                  <p>1</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>1</p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p>Real Madrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-up" className="one">

              <div className="head">WED, OCT 2 - FT <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Lille</p>
                  <Image width={23} src={lille} alt="" />
                  <p>1</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>0</p>
                  <Image width={23} src={realmadrid} alt="" />                
                  <p>RealMadrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">
            
            <Link data-aos='fade-up' className='one' href='real-madrid-v-villareal-1'>
            <div>

              <div className="head">SATURDAY, OCTOBER - 5 FULL TIME <br /> WEEK 9 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p>2</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>0</p>
                  <Image width={23} src={villareal} alt="" />
                  <p>Villareal</p>
                </div>
              </div>

            </div>
            </Link>            
            
            <Link data-aos='fade-up' className='one'  href='celtavigo-v-realmadrid'>
            <div>

              <div className="head">SATURDAY, OCTOBER 19 - FULL TIME <br /> WEEK 10 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>CeltaVigo</p>
                  <Image width={23} src={celtavigo} alt="" />
                  <p>1</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>2</p>
                  <Image width={23} src={realmadrid} alt="" />                
                  <p>RealMadrid</p>                  
                </div>
              </div>

            </div>
            </Link>            

          </div>

          <div className="container">
            
            <Link data-aos="fade-up" className="one" href="realmadrid-v-dortmund">
            <div>

              <div className="head">TUESDAY, OCTOBER 22 - FULL TIME <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>5</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>2</p>
                  <Image width={35} src={dortmund} alt="" />
                  <p>Dortmund</p>
                </div>
              </div>

            </div>
            </Link>
            
            <Link data-aos="fade-up" className="one" href="realmadrid-v-barcelona">
            <div>

              <div className="head">SATURDAY, OCTOBER 26 - FULL TIME <br /> WEEK 11 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Madrid</p>
                  <Image width={35} src={realmadrid} alt="" />
                  <p>0</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>4</p>
                  <Image width={35} src={barcelona} alt="" />                
                  <p>Barcelona</p>                  
                </div>
              </div>

            </div>
            </Link>

          </div>

          <div className="container">

            <div data-aos="fade-up" className="one">

              <div className="head"><span style={{color:'lime'}}>POSTPONED</span> <br /> WEEK 12 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Valencia</p>
                  <Image width={23} src={valencia} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>9:00 PM</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p>RealMadrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-up" className="one">

              <div className="head">TUE, NOV 5 <br /> UEFA Champions League - FULL TIME</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p>1</p>
                </div>

                <div className="center">
                  <p>-</p>
                </div>

                <div className="right">
                  <p>3</p>
                  <Image width={23} src={acmilan} alt="" />                
                  <p>Milan</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-up" className="one">

              <div className="head">WEDNESDAY, NOVEMBER 27 <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Liverpool</p>
                  <Image width={23} src={liverpool} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>9:00 PM</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p>RealMadrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-up" className="one">

              <div className="head">DECEMBER 1, 2024 <br /> WEEK 15 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={getafe} alt="" />                
                  <p>Getafe</p>                  
                </div>
              </div>

            </div>

          </div>          

          <div className="container">

            <div data-aos="fade-up" className="one">

              <div className="head">DECEMBER 4, 2024 <br /> WEEK 16 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Bilbao</p>
                  <Image width={23} src={bilbao} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p>RealMadrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-up" className="one">

              <div className="head">DECEMBER 8, 2024 <br /> WEEK 16 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Girona</p>
                  <Image width={23} src={girona} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={realmadrid} alt="" />                
                  <p>RealMadrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-up" className="one">

              <div className="head">DEC 10, 2024 <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Atalanta</p>
                  <Image width={23} src={atalanta} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>9:00 PM</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p>RealMadrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-up" className="one">

              <div className="head">DEC 15, 2024 <br /> WEEK 17 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Vallecano</p>
                  <Image width={23} src={vallecano} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={realmadrid} alt="" />                
                  <p>RealMadrid</p>                  
                </div>
              </div>

            </div>

          </div>          

          <div className="container">

            <div data-aos="fade-up" className="one">

              <div className="head">DECEMBER 22, 2024 <br /> WEEK 18 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={sevilla} alt="" />
                  <p>Sevilla</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-up" className="one">

              <div className="head">JANUARY 8, 2025 <br /> SEMI - FINALS</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={mallorca} alt="" />                
                  <p>Mallorca</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-up" className="one">

              <div className="head">JAN 19, 2025 <br /> WEEK 20 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={laspalmas} alt="" />
                  <p>Las Palmas</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-up" className="one">

              <div className="head">JAN 22, 2025 <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>9:00 PM</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={salzburg} alt="" />                
                  <p>Salzburg</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-up" className="one">

              <div className="head">JAN 26, 2025 <br /> WEEK 21 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Valladolid</p>
                  <Image width={23} src={valladolid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p>RealMadrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-up" className="one">

              <div className="head">JAN 29, 2025 <br /> UEFA Champions League</div>

              <div className="scores">
                <div className="left">
                  <p>Stade Brest 29</p>
                  <Image width={23} src={stade} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>9:00 PM</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={realmadrid} alt="" />                
                  <p>RealMadrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-up" className="one">

              <div className="head">FEB 2, 2025 <br /> WEEK 22 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Espanyol</p>
                  <Image width={23} src={espanyol} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p>RealMadrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-up" className="one">

              <div className="head">FEB 9, 2025 <br /> WEEK 23 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={atletico} alt="" />                
                  <p>Atletico</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-up" className="one">

              <div className="head">FEB 16, 2025 <br /> WEEK 24 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Osasuna</p>
                  <Image width={23} src={osasuna} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p>RealMadrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-up" className="one">

              <div className="head">FEB 23, 2025 <br /> WEEK 25 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={girona} alt="" />                
                  <p>Girona</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-up" className="one">

              <div className="head">MAR 2, 2025 <br /> WEEK 26 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Real Betis</p>
                  <Image width={23} src={realbetis} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p>RealMadrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-up" className="one">

              <div className="head">MAR 9, 2025 <br /> WEEK 27 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={vallecano} alt="" />                
                  <p>Vallecano</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-up" className="one">

              <div className="head">MAR 16, 2025 <br /> WEEK 28 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Villareal</p>
                  <Image width={23} src={villareal} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p>RealMadrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-up" className="one">

              <div className="head">MAR 30, 2025 <br /> WEEK 29 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={leganes} alt="" />                
                  <p>Leganes</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-up" className="one">

              <div className="head">APR 6, 2025 <br /> WEEK 30 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={valencia} alt="" />
                  <p>Valencia</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-up" className="one">

              <div className="head">APR 13, 2025 <br /> WEEK 31 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Alaves</p>
                  <Image width={23} src={alaves} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={realmadrid} alt="" />                
                  <p>RealMadrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">                              

            <div data-aos="fade-up" className="one">

              <div className="head">APR 20, 2025 <br /> WEEK 32 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Bilbao</p>
                  <Image width={23} src={bilbao} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p>RealMadrid</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-up" className="one"> 

              <div className="head">APR 23, 2025 <br /> WEEK 33 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Getafe</p>
                  <Image width={23} src={getafe} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={realmadrid} alt="" />                
                  <p>RealMadrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-up" className="one">

              <div className="head">MAY 4, 2025 <br /> WEEK 34 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={celtavigo} alt="" />
                  <p>Celta Vigo</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-up" className="one">

              <div className="head">MAY 11, 2025 <br /> WEEK 35 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Barcelona</p>
                  <Image width={23} src={barcelona} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={realmadrid} alt="" />                
                  <p>RealMadrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-up" className="one">

              <div className="head">MAY 14, 2025 <br /> WEEK 36 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={mallorca} alt="" />
                  <p>Mallorca</p>
                </div>
              </div>

            </div>

            <div data-aos="fade-up" className="one">

              <div className="head">MAY 18, 2025 <br /> WEEK 37 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>Sevilla</p>
                  <Image width={23} src={sevilla} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={realmadrid} alt="" />                
                  <p>RealMadrid</p>                  
                </div>
              </div>

            </div>

          </div>

          <div className="container">

            <div data-aos="fade-up" className="one">

              <div className="head">MAY 25, 2025 <br /> WEEK 38 - LALIGA</div>

              <div className="scores">
                <div className="left">
                  <p>RealMadrid</p>
                  <Image width={23} src={realmadrid} alt="" />
                  <p></p>
                </div>

                <div className="center">
                  <p>TBA</p>
                </div>

                <div className="right">
                  <p></p>
                  <Image width={23} src={realsociedad} alt="" />
                  <p>Real Sociedad</p>
                </div>
              </div>

            </div>
            

          </div>

          
        </div>

        </div>}
      
    </div>
  )
}

export default Page
