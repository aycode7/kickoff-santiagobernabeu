import React from 'react'
import Image from 'next/image'
import logo from './Image/madrid_icon.png'
import './Loader.css'
import preloader from './Image/preloader1.gif'
import loader2 from './Image/loader2.gif'

const Loader = () => {
  return (
    <div className='homepage'>

        <div className='hidden md:hidden lg:hidden xl:block'>
          <div className='loading'>
            <h1>KickOff-SantiagoBernabeu ....</h1>
          </div>
        </div>

        <div className='hidden md:hidden lg:block xl:hidden'>
          <div className='loading'>
            <h1>KickOff-SantiagoBernabeu ....</h1>
          </div>
        </div>

        <div className='hidden md:block lg:hidden xl:hidden'>
          <div className='loading'>
            <h1>KickOff-SantiagoBernabeu ....</h1>
          </div>
        </div>

        <div className='block md:hidden lg:hidden xl:hidden'>
          <div className='loading'>
            <h1>KickOff....</h1>
          </div>
        </div>
      
    </div>
  )
}

export default Loader
