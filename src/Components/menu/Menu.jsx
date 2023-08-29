import React from 'react'
import black from '../../images/NavbarPNGs/Rectangle 31.png'
import noise from '../../images/NavbarPNGs/Rectangle.png'
import cross from '../../images/NavbarPNGs/cross.png'
import './menu.css'
import { useNavigate } from 'react-router-dom'
const Menu = () => {
    const navigate = useNavigate();
    function crossHandler(){
        navigate('/')
    }
  return (
    <div>
      <div>
        <img src={black} alt="black" className='black'/>
        <img src={noise} alt="noise" className='noise'/>
      </div>
      <div className='shopkart'>ShopKart</div>
      <div><img src={cross} alt="cross"  className='crr' onClick={crossHandler}/></div>
      
      <div className='menubar'>
          <a href='#'><span>HOME</span></a>
          <a href='#'><span>ABOUT</span></a>
          <a href='#'className='ourproduct'><span>OUR PRODUCTS</span></a>
          <a href='#' className='contacts'><span>CONTACT US</span></a>         
        </div>
    </div>
  )
}

export default Menu
