'use client'
import React, { useEffect, useState } from 'react'
import Homepage from '../components/Homepage'
import Loader from '@/components/Loader'

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 1500)
  }, [])

  return (
    <div>
      {loading ? <Loader />:<Homepage />}
      
    </div>
  )
}

export default Page
