import React from 'react'
import Places from './Places'
import Stadiums from './Stadiums'
import Discover from './Discover'
import '../assets/styles/home.css'
import LOGO from '../images/logo.png'
import {AiFillFacebook,AiFillInstagram,AiFillTwitterSquare} from 'react-icons/ai'


const Home = () => {
  return (
    <div>
      <div className="w-full h-screen relative">
        <img src="images/CITY.jpg" alt=""  className="w-full h-full object-cover"/>
      </div>
      <div id='home' className="absolute top-0 h-screen flex flex-col space-y-10 justify-center items-center">
        <div className="text-white text-center space-y-5">
          {/* <h2 className="text-2xl font-bold">هلا 22</h2> */}
          <img id="logo-img" src={LOGO} alt=""/>

          <h1 className="text-5xl font-bold">Hala 22</h1>
          <p className="mx-10 font text-WHITE-400 px-5"> <b>With Hala 22, you will no longuer feel disoriented nor confused during your stay in Qatar. 
          Translate to any language for better communication, check the weather and stay updated with the World Cup results and more..</b></p>
        </div>
        
        <div className="text-white flex space-x-5">
          <AiFillFacebook size={"2rem"}/>
          <AiFillInstagram size={"2rem"}/>
          <AiFillTwitterSquare size={"2rem"}/>
        </div>
      </div>
      <Places/>
      <Stadiums/>
      <Discover/>
    </div>
  )
}

export default Home