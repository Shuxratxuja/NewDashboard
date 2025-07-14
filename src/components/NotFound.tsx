import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen flex justify-center items-center flex-col bg-[#f5f5f5]'>
        <h1 className='font-medium text-[110px] leading-[115px]'>404 Not Found</h1>
        <p className=' font-normal text-base leading-6 mt-[40px]'>Your visited page not found. You may go home page.</p>
        <Link to='/login' className='w-[352px] h-[45px] border-[#36981D] border rounded-2xl flex justify-center items-center mt-[40px] text-[#36981d]'> 
          Back to Home Page
        </Link>
    </div>
  )
}

export default NotFound