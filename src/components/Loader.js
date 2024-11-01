import React from 'react'
import Image from 'next/image'
import logo from './Image/madrid_icon.png'
import preloader from './Image/preloader1.gif'
import loader2 from './Image/loader2.gif'

const Loader = () => {
  return (
    <div>

        <div>
            <Image className='background_img' src={preloader} alt="" />
        </div>
      
    </div>
  )
}

export default Loader
