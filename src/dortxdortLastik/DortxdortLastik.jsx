import React from 'react'
import Navbar from '../components/Navbar'
import Dortxdort from '../components/Dortxdort'
import Footer from '../components/Footer'

function dortxdortlastik() {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen bg-gray-300'>
      <Dortxdort/>
      </div>
      <Footer/>
    </>
  )
}

export default dortxdortlastik
