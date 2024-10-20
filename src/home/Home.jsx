import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Body from '../components/Body'
import Lastikler from '../components/Lastikler'
import Youtube from '../components/Youtube'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <Navbar/>
    
        <Banner/>

        <Header/>

        <Body/>

        <Lastikler/>
        <br /><br />

        <Youtube/>
    
        <Footer/>

    </>
  )
}

export default Home
