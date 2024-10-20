import React from 'react'
import Navbar from '../components/Navbar'
import Ticari from '../components/Ticari'
import Footer from '../components/Footer'

function TicariLastik() {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen bg-gray-300'>
      <Ticari/>
      </div>
      <Footer/>
    </>
  )
}

export default TicariLastik
