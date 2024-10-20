import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Body from '../components/Body'
import Lastikler from '../components/Lastikler'
import Youtube from '../components/Youtube'
import Footer from '../components/Footer'
import LoginNavbar from '../components/LoginNavbar'



function Loginhome() {
  return (
    <>
        <LoginNavbar/>

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

export default Loginhome
