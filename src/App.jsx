import React from 'react';
import Hakkında from './components/Hakkında' 
import Home from './home/Home';
import { Route, Routes} from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import BinekLastik from './binekLastik/BinekLastik';
import DortxdortLastik from "./dortxdortLastik/DortxdortLastik";
import TicariLastik from './ticariLastik/TicariLastik';
import RftLastik from './rftLastik/RftLastik';
import { Toaster } from 'react-hot-toast';
import Loginhome from './login.home/Loginhome'
import LoginNavbar from './components/LoginNavbar';
import Users from './components/Users';
import Profile from './components/Profile';


function App() {

  return (
    <>
      <Routes>

      
        <Route path="/" element={<Home/>}/>

        <Route path="/Hakkında" element={<Hakkında/>}/>

        <Route path="/Binek" element={<BinekLastik/>}/>

        <Route path="/Dortxdort" element={<DortxdortLastik/>}/>

        <Route path="/Ticari" element = {<TicariLastik/>}/>

        <Route path="/Rft" element = {<RftLastik/>}/>

        <Route path="/Login" element={<Login/>}/>

        <Route path="/Signup" element={<Signup/>}/>

        <Route path="/LoginNavbar" element={<LoginNavbar/>}/>

        <Route path="/Loginhome" element={<Loginhome/>}/>

        <Route path="/Users" element={<Users/>}/>

        <Route path="/Profile" element={<Profile/>}/>


        




      </Routes>
      <Toaster/>

    </>
  )
}


export default App

