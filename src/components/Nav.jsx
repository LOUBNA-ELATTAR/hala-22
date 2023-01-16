import '../assets/styles/nav.css'
import React, {useState, useEffect} from 'react'
import { FaAlignJustify } from "react-icons/fa";
import Logon from '../images/logon.png'

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

  }, [])

  return (
    <nav>

      {(toggleMenu || screenWidth > 900) && (
      <ul className="list">
      <img className='imaima img-fluid  img-responsive' src={Logon}  />
      <li><a href="/" className='text-decoration-none link-white items'>Home</a></li>           
            <li> <a href="/translate" className='text-decoration-none link-white items'> Hala 22 Translate</a> </li>
            <li> <a href="/hotels" className='text-decoration-none link-white items'> Hotels</a></li>
            <li> <a href="/restaurants" className='text-decoration-none link-white items'> Restaurants</a></li>
            <li> <a href="/weather" className='text-decoration-none link-white items'> Weather </a></li>
            <li> <a href="/metro" className='text-decoration-none link-white items'> Metro </a></li>
            <li> <a href="/worldcup" className='text-decoration-none link-white items'> World Cup</a></li>
            <li> <a href="/game" className='text-decoration-none link-white items'>Play a Game</a></li>
    </ul>
      )}

      
      <button onClick={toggleNav} className="btn"><FaAlignJustify /> </button>
    </nav>
  )
}

