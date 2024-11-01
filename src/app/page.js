'use client'
import React, { useEffect, useState } from 'react'
import Homepage from '../components/Homepage'
import Loader from '@/components/Loader';

const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      setLoading(false);
    }, 2000)
  }, []);

  return (
    <div>
      {loading ? <Loader />:<Homepage />}
      
    </div>
  )
}

export default page
