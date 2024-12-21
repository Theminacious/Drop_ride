import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://img.freepik.com/free-vector/taxi-app-concept_23-2148477663.jpg?semt=ais_hybrid)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
        <img className='w-14 ml-8 ' src="https://links.papareact.com/6do" alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
        <h2 className='text-2xl font-bold'>Get Started with Uber </h2>
        <Link to={'/login'} className=' flex item-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start