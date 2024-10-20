import React from 'react'
import Navbar from '../components/Navbar'
import Binek from '../components/Binek'
import Footer from '../components/Footer'

function BinekLastik() {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen bg-gray-300'>
      <Binek/>
      </div>
      <Footer/>
    </>
  )
}

export default BinekLastik
