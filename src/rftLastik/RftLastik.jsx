import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Rft from '../components/Rft'

function RftLastik() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen bg-gray-300'>
    <Rft/>
    </div>
    <Footer/>
  </>
  )
}

export default RftLastik
