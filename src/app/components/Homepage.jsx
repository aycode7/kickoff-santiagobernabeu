import React from 'react'

const Homepage = () => {
  return (
    <div>
        <div className='hidden md:hidden lg:hidden xl:block'><p className='text-blue-600'>Hello KickOff</p></div>
        <div className='block md:hidden lg:hidden xl:hidden'><p className='text-red-600'>Hello Mobile KickOff</p></div>
      
    </div>
  )
}

export default Homepage
