import React from 'react'
import "./Navbar.css"
import truck from '../../images/NavbarPNGs/truck.png'
import instagram from '../../images/NavbarPNGs/Group 6.png'
import facebook from '../../images/NavbarPNGs/Vector.png'
import twitter from '../../images/NavbarPNGs/Vector (2).png'
import linkedIn from '../../images/NavbarPNGs/Vector (1).png'

const Navbar1 = () => {

 

  return (
    <div className='navbar1'>
      <div className='block1'>  
      <img src={truck} alt="truck"  />
      <a href='#' className='word'><span>Free Delivery</span></a>
      <span className='vertical-line'></span>
      <a href='#' className='word '><span>Return Policy</span></a>
      
      </div>
      <div className='block2'>
        <div className='lg'>
        <a href='#' className='word login' ><span>Login</span></a>
        <a href='#' className='word follow'><span>Follow US</span></a>  
        </div>
        <div className='sm'>
        <a href='#'><img className="f" src={facebook} alt="facebook" /></a>
        <a href='#'><img className="l" src={linkedIn} alt="linkedin" /></a>
        <a href='#'><img className="t" src={twitter} alt="twitter" /></a>
        <a href='#'><img className="i" src={instagram} alt="instagram" /></a>
        </div>
      </div>

    </div>
  )
}

export default Navbar1
