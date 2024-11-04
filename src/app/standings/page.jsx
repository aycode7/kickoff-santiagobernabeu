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
import background from './Image/night-stadium.jpg'
import background_phone from './Image/night-stadium.jpg'
import barcelona from './Image/barcelona.png'
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
                <Link href="fixtures">
                <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
                </Link>
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

        {/* standings */}
        <div style={{cursor:'pointer'}} data-aos="fade-up" className="ctn_standings">
            <div className="standings">

              {/* number */}
              <div className="number">
                  <p>#</p>
                  <p>1</p>
                  <p id="madrid">2</p>
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
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={barcelona} alt="" width={20} />
                  <h3>Barcelona</h3>
                  </p>
                  <p id="madrid" style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={realmadrid} width={20} alt="" />
                    <h3>Real Madrid</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={villareal} width={20} alt="" />
                    <h3>Villarreal</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={atletico} width={20} alt="" />
                    <h3>Atlético Madrid</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={bilbao} width={20} alt="" />
                    <h3>Athletic Bilbao</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={realbetis} width={20} alt="" />
                    <h3>Real Betis</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={mallorca} width={20} alt="" />
                    <h3>Mallorca</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={osasuna} width={20} alt="" />
                    <h3>Osasuna</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={vallecano} width={20} alt="" />
                    <h3>Rayo Vallecano</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={sevilla} width={20} alt="" />
                    <h3>Sevilla FC</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={celtavigo} width={20} alt="" />
                    <h3>Celta Vigo</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={alaves} width={20} alt="" />
                    <h3>Alavés</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={realsociedad} width={20} alt="" />
                    <h3>Real Sociedad</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={girona} width={20} alt="" />
                    <h3>Girona</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={leganes} width={20} alt="" />
                    <h3>CD Leganés</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={getafe} width={20} alt="" />
                    <h3>Getafe</h3>
                  </p>                  
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={espanyol} width={20} alt="" />
                    <h3>Espanyol</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={laspalmas} width={20} alt="" />
                    <h3>UD Las palmas</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={valladolid} width={20} alt='' />
                    <h3>Real Valladolid</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={valencia} width={20} alt="" />
                    <h3>Valencia</h3>
                  </p>
              </div>

              {/* Matches */}
              <div className="matches">
                  <p>Pld</p>
                  <p>11</p>                
                  <p id="madrid">11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>12</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>12</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
              </div>

              {/* Wins */}
              <div className="matches">
                  <p>W</p>
                  <p>10</p>                
                  <p id="madrid">7</p>
                  <p>6</p>
                  <p>5</p>
                  <p>5</p>
                  <p>5</p>
                  <p>5</p>
                  <p>5</p>
                  <p>4</p>
                  <p>4</p>
                  <p>4</p>
                  <p>4</p>
                  <p>3</p>
                  <p>3</p>
                  <p>2</p>
                  <p>1</p>                  
                  <p>3</p>
                  <p>2</p>
                  <p>2</p>
                  <p>1</p>
              </div>

              {/* Lose */}
              <div className="matches">
                  <p>L</p>
                  <p>1</p>                
                  <p id="madrid">1</p>
                  <p>2</p>
                  <p>1</p>
                  <p>3</p>
                  <p>3</p>
                  <p>4</p>
                  <p>3</p>
                  <p>3</p>
                  <p>4</p>
                  <p>6</p>
                  <p>7</p>
                  <p>5</p>
                  <p>5</p>
                  <p>4</p>
                  <p>3</p>                  
                  <p>7</p>
                  <p>6</p>
                  <p>7</p>
                  <p>6</p>
              </div>

              {/* Draw */}
              <div className="matches">
                  <p>D</p>
                  <p>0</p>                
                  <p id="madrid">3</p>
                  <p>3</p>
                  <p>5</p>
                  <p>3</p>
                  <p>3</p>
                  <p>3</p>
                  <p>3</p>
                  <p>4</p>
                  <p>3</p>
                  <p>1</p>
                  <p>1</p>
                  <p>3</p>
                  <p>3</p>
                  <p>5</p>
                  <p>7</p>
                  <p>1</p>
                  <p>3</p>
                  <p>2</p>
                  <p>4</p>
              </div>

              {/* Goal */}
              <div className="matches">
                  <p>GF</p>
                  <p>37</p>                
                  <p id="madrid">21</p>
                  <p>20</p>
                  <p>16</p>
                  <p>17</p>
                  <p>11</p>
                  <p>10</p>
                  <p>16</p>
                  <p>12</p>
                  <p>12</p>
                  <p>17</p>
                  <p>14</p>
                  <p>8</p>
                  <p>11</p>
                  <p>9</p>
                  <p>8</p>                  
                  <p>10</p>
                  <p>13</p>
                  <p>9</p>
                  <p>8</p>
              </div>

              {/* GA */}
              <div className="matches">
                  <p>GA</p>
                  <p>10</p>                
                  <p id="madrid">11</p>
                  <p>19</p>
                  <p>7</p>
                  <p>11</p>
                  <p>9</p>
                  <p>9</p>
                  <p>16</p>
                  <p>10</p>
                  <p>15</p>
                  <p>20</p>
                  <p>19</p>
                  <p>10</p>
                  <p>14</p>
                  <p>12</p>
                  <p>9</p>
                  <p>19</p>
                  <p>19</p>
                  <p>23</p>
                  <p>17</p>
              </div>

              {/* +/- */}
              <div className="ga">                
                  <p>+/-</p>
                  <p>27</p>
                  <p id="madrid">10</p>
                  <p>1</p>
                  <p>9</p>
                  <p>6</p>
                  <p>2</p>
                  <p>1</p>
                  <p>0</p>
                  <p>2</p>
                  <p>-3</p>
                  <p>-3</p>
                  <p>-5</p>
                  <p>-2</p>
                  <p>-3</p>
                  <p>-3</p>
                  <p>-1</p>
                  <p>-9</p>
                  <p>-6</p>
                  <p>-14</p>
                  <p>-9</p>                
              </div>

              {/* points */}
              <div className="points">                
                  <p>Pts</p>
                  <p>30</p>
                  <p id="madrid">24</p>
                  <p>21</p>
                  <p>20</p>
                  <p>18</p>
                  <p>18</p>
                  <p>18</p>
                  <p>18</p>
                  <p>16</p>
                  <p>15</p>
                  <p>13</p>
                  <p>13</p>
                  <p>12</p>
                  <p>12</p>
                  <p>11</p>
                  <p>10</p>
                  <p>10</p>
                  <p>9</p>
                  <p>8</p>
                  <p style={{borderRadius:'0 0 20px 0'}}>7</p>                                
              </div>


            </div>
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
            <Link href="fixtures">
            <h2 onClick={handleTap2} className={tap2 === true ? 'tap' : ''}>Fixtures</h2>
            </Link>
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

        {/* standings */}
        <div style={{cursor:'pointer'}} data-aos="fade-up" className="ctn_standings">
            <div className="standings">

              {/* number */}
              <div className="number">
                  <p>#</p>
                  <p>1</p>
                  <p id="madrid">2</p>
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
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={barcelona} alt="" width={20} />
                  <h3>Barcelona</h3>
                  </p>
                  <p id="madrid" style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={realmadrid} width={20} alt="" />
                    <h3>Real Madrid</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={villareal} width={20} alt="" />
                    <h3>Villarreal</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={atletico} width={20} alt="" />
                    <h3>Atlético Madrid</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={bilbao} width={20} alt="" />
                    <h3>Athletic Bilbao</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={realbetis} width={20} alt="" />
                    <h3>Real Betis</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={mallorca} width={20} alt="" />
                    <h3>Mallorca</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={osasuna} width={20} alt="" />
                    <h3>Osasuna</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={vallecano} width={20} alt="" />
                    <h3>Rayo Vallecano</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={sevilla} width={20} alt="" />
                    <h3>Sevilla FC</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={celtavigo} width={20} alt="" />
                    <h3>Celta Vigo</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={alaves} width={20} alt="" />
                    <h3>Alavés</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={realsociedad} width={20} alt="" />
                    <h3>Real Sociedad</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={girona} width={20} alt="" />
                    <h3>Girona</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={leganes} width={20} alt="" />
                    <h3>CD Leganés</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={getafe} width={20} alt="" />
                    <h3>Getafe</h3>
                  </p>                  
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={espanyol} width={20} alt="" />
                    <h3>Espanyol</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={laspalmas} width={20} alt="" />
                    <h3>UD Las palmas</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={valladolid} width={20} alt='' />
                    <h3>Real Valladolid</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={valencia} width={20} alt="" />
                    <h3>Valencia</h3>
                  </p>
              </div>

              {/* Matches */}
              <div className="matches">
                  <p>Pld</p>
                  <p>11</p>                
                  <p id="madrid">11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>12</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>12</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
              </div>

              {/* Wins */}
              <div className="matches">
                  <p>W</p>
                  <p>10</p>                
                  <p id="madrid">7</p>
                  <p>6</p>
                  <p>5</p>
                  <p>5</p>
                  <p>5</p>
                  <p>5</p>
                  <p>5</p>
                  <p>4</p>
                  <p>4</p>
                  <p>4</p>
                  <p>4</p>
                  <p>3</p>
                  <p>3</p>
                  <p>2</p>
                  <p>1</p>                  
                  <p>3</p>
                  <p>2</p>
                  <p>2</p>
                  <p>1</p>
              </div>

              {/* Lose */}
              <div className="matches">
                  <p>L</p>
                  <p>1</p>                
                  <p id="madrid">1</p>
                  <p>2</p>
                  <p>1</p>
                  <p>3</p>
                  <p>3</p>
                  <p>4</p>
                  <p>3</p>
                  <p>3</p>
                  <p>4</p>
                  <p>6</p>
                  <p>7</p>
                  <p>5</p>
                  <p>5</p>
                  <p>4</p>
                  <p>3</p>                  
                  <p>7</p>
                  <p>6</p>
                  <p>7</p>
                  <p>6</p>
              </div>

              {/* Draw */}
              <div className="matches">
                  <p>D</p>
                  <p>0</p>                
                  <p id="madrid">3</p>
                  <p>3</p>
                  <p>5</p>
                  <p>3</p>
                  <p>3</p>
                  <p>3</p>
                  <p>3</p>
                  <p>4</p>
                  <p>3</p>
                  <p>1</p>
                  <p>1</p>
                  <p>3</p>
                  <p>3</p>
                  <p>5</p>
                  <p>7</p>
                  <p>1</p>
                  <p>3</p>
                  <p>2</p>
                  <p>4</p>
              </div>

              {/* Goal */}
              <div className="matches">
                  <p>GF</p>
                  <p>37</p>                
                  <p id="madrid">21</p>
                  <p>20</p>
                  <p>16</p>
                  <p>17</p>
                  <p>11</p>
                  <p>10</p>
                  <p>16</p>
                  <p>12</p>
                  <p>12</p>
                  <p>17</p>
                  <p>14</p>
                  <p>8</p>
                  <p>11</p>
                  <p>9</p>
                  <p>8</p>                  
                  <p>10</p>
                  <p>13</p>
                  <p>9</p>
                  <p>8</p>
              </div>

              {/* GA */}
              <div className="matches">
                  <p>GA</p>
                  <p>10</p>                
                  <p id="madrid">11</p>
                  <p>19</p>
                  <p>7</p>
                  <p>11</p>
                  <p>9</p>
                  <p>9</p>
                  <p>16</p>
                  <p>10</p>
                  <p>15</p>
                  <p>20</p>
                  <p>19</p>
                  <p>10</p>
                  <p>14</p>
                  <p>12</p>
                  <p>9</p>
                  <p>19</p>
                  <p>19</p>
                  <p>23</p>
                  <p>17</p>
              </div>

              {/* +/- */}
              <div className="ga">                
                  <p>+/-</p>
                  <p>27</p>
                  <p id="madrid">10</p>
                  <p>1</p>
                  <p>9</p>
                  <p>6</p>
                  <p>2</p>
                  <p>1</p>
                  <p>0</p>
                  <p>2</p>
                  <p>-3</p>
                  <p>-3</p>
                  <p>-5</p>
                  <p>-2</p>
                  <p>-3</p>
                  <p>-3</p>
                  <p>-1</p>
                  <p>-9</p>
                  <p>-6</p>
                  <p>-14</p>
                  <p>-9</p>                
              </div>

              {/* points */}
              <div className="points">                
                  <p>Pts</p>
                  <p>30</p>
                  <p id="madrid">24</p>
                  <p>21</p>
                  <p>20</p>
                  <p>18</p>
                  <p>18</p>
                  <p>18</p>
                  <p>18</p>
                  <p>16</p>
                  <p>15</p>
                  <p>13</p>
                  <p>13</p>
                  <p>12</p>
                  <p>12</p>
                  <p>11</p>
                  <p>10</p>
                  <p>10</p>
                  <p>9</p>
                  <p>8</p>
                  <p style={{borderRadius:'0 0 20px 0'}}>7</p>                                
              </div>


            </div>
        </div>        

        </div>

        {/* tablet */}
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

        {/* standings */}
        <div style={{cursor:'pointer'}} data-aos="fade-up" className="ctn_standings_tablet">
            <div className="standings_tablet">

              {/* number */}
              <div className="number">
                  <p>#</p>
                  <p>1</p>
                  <p id="madrid">2</p>
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
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={barcelona} alt="" width={20} />
                  <h3>Barcelona</h3>
                  </p>
                  <p id="madrid" style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={realmadrid} width={20} alt="" />
                    <h3>Real Madrid</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={villareal} width={20} alt="" />
                    <h3>Villarreal</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={atletico} width={20} alt="" />
                    <h3>Atlético Madrid</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={bilbao} width={20} alt="" />
                    <h3>Athletic Bilbao</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={realbetis} width={20} alt="" />
                    <h3>Real Betis</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={mallorca} width={20} alt="" />
                    <h3>Mallorca</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={osasuna} width={20} alt="" />
                    <h3>Osasuna</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={vallecano} width={20} alt="" />
                    <h3>Rayo Vallecano</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={sevilla} width={20} alt="" />
                    <h3>Sevilla FC</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={celtavigo} width={20} alt="" />
                    <h3>Celta Vigo</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={alaves} width={20} alt="" />
                    <h3>Alavés</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={realsociedad} width={20} alt="" />
                    <h3>Real Sociedad</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={girona} width={20} alt="" />
                    <h3>Girona</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={leganes} width={20} alt="" />
                    <h3>CD Leganés</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={getafe} width={20} alt="" />
                    <h3>Getafe</h3>
                  </p>                  
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={espanyol} width={20} alt="" />
                    <h3>Espanyol</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={laspalmas} width={20} alt="" />
                    <h3>UD Las palmas</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={valladolid} width={20} alt='' />
                    <h3>Real Valladolid</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={valencia} width={20} alt="" />
                    <h3>Valencia</h3>
                  </p>
              </div>

              {/* Matches */}
              <div className="matches">
                  <p>Pld</p>
                  <p>11</p>                
                  <p id="madrid">11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>12</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>12</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
              </div>

              {/* Wins */}
              <div className="matches">
                  <p>W</p>
                  <p>10</p>                
                  <p id="madrid">7</p>
                  <p>6</p>
                  <p>5</p>
                  <p>5</p>
                  <p>5</p>
                  <p>5</p>
                  <p>5</p>
                  <p>4</p>
                  <p>4</p>
                  <p>4</p>
                  <p>4</p>
                  <p>3</p>
                  <p>3</p>
                  <p>2</p>
                  <p>1</p>                  
                  <p>3</p>
                  <p>2</p>
                  <p>2</p>
                  <p>1</p>
              </div>

              {/* Lose */}
              <div className="matches">
                  <p>L</p>
                  <p>1</p>                
                  <p id="madrid">1</p>
                  <p>2</p>
                  <p>1</p>
                  <p>3</p>
                  <p>3</p>
                  <p>4</p>
                  <p>3</p>
                  <p>3</p>
                  <p>4</p>
                  <p>6</p>
                  <p>7</p>
                  <p>5</p>
                  <p>5</p>
                  <p>4</p>
                  <p>3</p>                  
                  <p>7</p>
                  <p>6</p>
                  <p>7</p>
                  <p>6</p>
              </div>

              {/* Draw */}
              <div className="matches">
                  <p>D</p>
                  <p>0</p>                
                  <p id="madrid">3</p>
                  <p>3</p>
                  <p>5</p>
                  <p>3</p>
                  <p>3</p>
                  <p>3</p>
                  <p>3</p>
                  <p>4</p>
                  <p>3</p>
                  <p>1</p>
                  <p>1</p>
                  <p>3</p>
                  <p>3</p>
                  <p>5</p>
                  <p>7</p>
                  <p>1</p>
                  <p>3</p>
                  <p>2</p>
                  <p>4</p>
              </div>

              {/* Goal */}
              <div className="matches">
                  <p>GF</p>
                  <p>37</p>                
                  <p id="madrid">21</p>
                  <p>20</p>
                  <p>16</p>
                  <p>17</p>
                  <p>11</p>
                  <p>10</p>
                  <p>16</p>
                  <p>12</p>
                  <p>12</p>
                  <p>17</p>
                  <p>14</p>
                  <p>8</p>
                  <p>11</p>
                  <p>9</p>
                  <p>8</p>                  
                  <p>10</p>
                  <p>13</p>
                  <p>9</p>
                  <p>8</p>
              </div>

              {/* GA */}
              <div className="matches">
                  <p>GA</p>
                  <p>10</p>                
                  <p id="madrid">11</p>
                  <p>19</p>
                  <p>7</p>
                  <p>11</p>
                  <p>9</p>
                  <p>9</p>
                  <p>16</p>
                  <p>10</p>
                  <p>15</p>
                  <p>20</p>
                  <p>19</p>
                  <p>10</p>
                  <p>14</p>
                  <p>12</p>
                  <p>9</p>
                  <p>19</p>
                  <p>19</p>
                  <p>23</p>
                  <p>17</p>
              </div>

              {/* +/- */}
              <div className="ga">                
                  <p>+/-</p>
                  <p>27</p>
                  <p id="madrid">10</p>
                  <p>1</p>
                  <p>9</p>
                  <p>6</p>
                  <p>2</p>
                  <p>1</p>
                  <p>0</p>
                  <p>2</p>
                  <p>-3</p>
                  <p>-3</p>
                  <p>-5</p>
                  <p>-2</p>
                  <p>-3</p>
                  <p>-3</p>
                  <p>-1</p>
                  <p>-9</p>
                  <p>-6</p>
                  <p>-14</p>
                  <p>-9</p>                
              </div>

              {/* points */}
              <div className="points">                
                  <p>Pts</p>
                  <p>30</p>
                  <p id="madrid">24</p>
                  <p>21</p>
                  <p>20</p>
                  <p>18</p>
                  <p>18</p>
                  <p>18</p>
                  <p>18</p>
                  <p>16</p>
                  <p>15</p>
                  <p>13</p>
                  <p>13</p>
                  <p>12</p>
                  <p>12</p>
                  <p>11</p>
                  <p>10</p>
                  <p>10</p>
                  <p>9</p>
                  <p>8</p>
                  <p style={{borderRadius:'0 0 20px 0'}}>7</p>                                
              </div>


            </div>
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
                <Link href="fixtures">
                <p onClick={handleTap2} className={tap2 === true ? "tap_phone" : ''}>Fixtures</p>
                </Link>
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
        <Image className='background' src={background_phone} alt='' priority />
        </div>       

        {/* standings */}
        <div style={{cursor:'pointer'}} data-aos="fade-up" className="ctn_standings_mobile">
            <div className="standings_mobile">

              {/* number */}
              <div className="number">
                  <p>#</p>
                  <p>1</p>
                  <p id="madrid">2</p>
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
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={barcelona} alt="" width={17} />
                  <h3>Barcelona</h3>
                  </p>
                  <p id="madrid" style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={realmadrid} width={17} alt="" />
                    <h3>RealMadrid</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={villareal} width={17} alt="" />
                    <h3>Villarreal</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={atletico} width={17} alt="" />
                    <h3>AtléticoMadrid</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={bilbao} width={17} alt="" />
                    <h3>AthleticBilbao</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={realbetis} width={17} alt="" />
                    <h3>RealBetis</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={mallorca} width={17} alt="" />
                    <h3>Mallorca</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={osasuna} width={17} alt="" />
                    <h3>Osasuna</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={vallecano} width={17} alt="" />
                    <h3>RayoVallecano</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={sevilla} width={17} alt="" />
                    <h3>SevillaFC</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={celtavigo} width={17} alt="" />
                    <h3>CeltaVigo</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={alaves} width={17} alt="" />
                    <h3>Alavés</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={realsociedad} width={17} alt="" />
                    <h3>RealSociedad</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={girona} width={17} alt="" />
                    <h3>Girona</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={leganes} width={17} alt="" />
                    <h3>CDLeganés</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={getafe} width={17} alt="" />
                    <h3>Getafe</h3>
                  </p>                  
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={espanyol} width={17} alt="" />
                    <h3>Espanyol</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={laspalmas} width={17} alt="" />
                    <h3>LasPalmas</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={valladolid} width={17} alt='' />
                    <h3>RealValladolid</h3>
                  </p>
                  <p style={{display:'flex', alignItems:'center', gap:'1px'}}>
                    <Image src={valencia} width={17} alt="" />
                    <h3>Valencia</h3>
                  </p>
              </div>

              {/* Matches */}
              <div className="matches">
                  <p>Pld</p>
                  <p>11</p>                
                  <p id="madrid">11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>12</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>11</p>
                  <p>12</p>
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
                  <p id="madrid">10</p>
                  <p>1</p>
                  <p>9</p>
                  <p>6</p>
                  <p>2</p>
                  <p>1</p>
                  <p>0</p>
                  <p>2</p>
                  <p>-3</p>
                  <p>-3</p>
                  <p>-5</p>
                  <p>-2</p>
                  <p>-3</p>
                  <p>-3</p>
                  <p>-1</p>
                  <p>-9</p>
                  <p>-6</p>
                  <p>-14</p>
                  <p>-9</p>                
              </div>

              {/* points */}
              <div className="points">                
                  <p>Pts</p>
                  <p>30</p>
                  <p id="madrid">24</p>
                  <p>21</p>
                  <p>20</p>
                  <p>18</p>
                  <p>18</p>
                  <p>18</p>
                  <p>18</p>
                  <p>16</p>
                  <p>15</p>
                  <p>13</p>
                  <p>13</p>
                  <p>12</p>
                  <p>12</p>
                  <p>11</p>
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
