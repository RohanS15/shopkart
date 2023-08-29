import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom'

//images
import noise_bg from "../../images/NavbarPNGs/Rectangle.png"
import orange_bg from "../../images/NavbarPNGs/Group 15.png"
import black_bg from "../../images/NavbarPNGs/Rectangle 31.png"
import star from "../../images/NavbarPNGs/Star 1.png"
import line from "../../images/NavbarPNGs/Line 17.png"
import seemore from "../../images/NavbarPNGs/Frame 11197.png"
import line2 from "../../images/NavbarPNGs/Line 18.png"
import star2 from "../../images/NavbarPNGs/Star 2.png"
import arrow1 from "../../images/NavbarPNGs/Arrow 1.png"
import arrow2 from "../../images/NavbarPNGs/Arrow 2.png"
import product from "../../images/NavbarPNGs/product.png"
import see_more from "../../images/NavbarPNGs/Group 19.png"
import conpic from "../../images/NavbarPNGs/conpic.png"
import getincontact from "../../images/NavbarPNGs/getintouch.png"
import cross from "../../images/NavbarPNGs/cross.png"
import menu from "../../images/NavbarPNGs/hamburger menu.png"

import { useState,useEffect,useRef } from 'react'
import './Home2.css'

const Home = () => {


  const navbar = [
    { name: 'Home', id: 'home'},
    { name: 'About', id: 'about' },
    { name: 'Our Products', id: 'product', child: [
    { name: 'Product 1', id: 'p1'},
    { name: 'Product 2', id: 'p2' },
    { name: 'Product 3', id: 'p3'},
    { name: 'Product 4', id: 'p4' },
    ] },
    { name: 'Contact Us', id: 'contact'},
    ];

  const [products,setProducts] = useState('')
  const [categorise,setCategorise] = useState('')
  const [isActiveElectronics, setIsActiveElectronics] = useState(false);
  const [isActiveJewelery, setIsActiveJewelery] = useState(false);
  const [isActiveMen, setIsActiveMen] = useState(false);
  const [isActiveWomen, setIsActiveWomen] = useState(true);
  const [isMenu , setIsMenu] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error in fetching data:', error));
  }, []);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => setCategorise(data))
      .catch(error => console.error('Error in fetching data:', error));
  }, []);

  const mensClothing = Object.values(products).filter(prod => {
    if(prod.category === "men's clothing") return prod
  }) ;

  const womenClothing = Object.values(products).filter(prod => {
    if(prod.category === "women's clothing") return prod
  }) ;
 
  const jewelery = Object.values(products).filter(prod => {
    if(prod.category === "jewelery") return prod
  }) ;
  
  const electronics = Object.values(products).filter(prod => {
    if(prod.category === "electronics") return prod
  }) ;
   
  const [selectCatg,setSelectCatg] = useState('')

  
  function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = e => {
          if (e.deltaY === 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth"
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }

  function activeElectronics(){
    setIsActiveElectronics(true);
    setIsActiveJewelery(false)
    setIsActiveMen(false)
    setIsActiveWomen(false)
    setSelectCatg(electronics);
  }
  function activeJewelery(){
    setIsActiveJewelery(true)
    setIsActiveMen(false)
    setIsActiveWomen(false)
    setIsActiveElectronics(false)
    setSelectCatg(jewelery);
  }
  function activeMen(){
    setIsActiveJewelery(false)
    setIsActiveMen(true)
    setIsActiveWomen(false)
    setIsActiveElectronics(false)
    setSelectCatg(mensClothing);
  }
  function activeWomen(){
    setIsActiveJewelery(false)
    setIsActiveMen(false)
    setIsActiveWomen(true)
    setIsActiveElectronics(false)
    setSelectCatg(womenClothing);
  }
  const navigate = useNavigate();
  function menuHandler(){
    setIsMenu(!isMenu);
    
    navigate('/menu')

  }

// console.log(navbar[2].child[0])



  return (
    <div>
        <div className='home'> 

          <img className='blackbg' src={black_bg} alt='black_bg' />
          <img className='noisebg' src={noise_bg} alt='noise_bg' />
          <img className='orangebg' src={orange_bg} alt='orange_bg' />

          <div className='nav2'>
              <div className='text'><a href = '#'>ShopKart</a></div>
              <div className='menu'>
                {isMenu ? (
                  <a href='#'> <img className='open' src={menu} alt="menu" onClick={menuHandler} /></a>
                ) : (
                  <>
                    <a href='#'> <img className='close' src={cross} alt="cross" onClick={menuHandler} /></a>
                  </>
                )}
                </div>
              <div className='text2'>                   
                <a href='#'><span>WISHLIST(0)</span></a>
                <a href='#'><span>BAG(0)</span></a>
              </div>
             
          </div>
          
                
          <div>
            <img className='line' src={line} alt='line'/>
            <img className='star' src={star} alt='star'/>
          </div>
          

        


        <div className='nav3'>
          <a href='#'><span>{navbar[0].name}</span></a>
          <a href='#'><span>{navbar[1].name}</span></a>
          <a href='#'><div className='dropdown'>
              {navbar[2].name}
              <div>
               <img className='our_line' src={line} alt='line'/>
              </div>
              <div className='dropdown-content'>
              <a href="#">{navbar[2].child[0].name}</a>
              <a href="#">{navbar[2].child[1].name}</a>
              <a href="#">{navbar[2].child[2].name}</a>
              <a href="#">{navbar[2].child[3].name}</a>
              </div>
            </div></a>
          <a href='#'><span>{navbar[3].name}</span></a>         
        </div>
        {/* <div> <a href='#'> <img className='menu' src={menu} alt="menu" /></a></div> */}
          
        



        <div className="text3">
        <p className='fresh'>Fresh</p>
        <p className='year'>2022</p>
        <p className='look'>Look</p>
        </div>

        <div className="seemore">
          <a href='#'><img className='seemore1' src={seemore} alt='seemore'/></a>
        </div>

      </div>


      <div className="home2">

        <div className="nav4">

          <div className='text4'>
           <div> <h3>New products</h3> </div>
            <div className="lines2">
               <img className='star2' src={star2} alt="starline"/>
                <img className='line2' src={line2} alt="starline"/>
            </div>
            </div>

          <div className="lines">
            <img className='arrow2' src={arrow2} alt="arrow2"/>
            <img className='arrow1' src={arrow1} alt="arrow1"/>
          </div>

        </div>

       

        <div className="api">

          <div className="text5">
              <a onClick={activeElectronics} className={isActiveElectronics ? 'active' : ''}> <h3>{categorise[0]}</h3></a>
              <a onClick={activeJewelery}  className={isActiveJewelery ? 'active' : ''}> <h3>{categorise[1]}</h3></a>
              <a onClick={activeMen} className={isActiveMen ? 'active' : ''}> <h3>{categorise[2]}</h3></a>
              <a onClick={activeWomen} className={isActiveWomen ? 'active' : ''}> <h3>{categorise[3]}</h3></a>
            </div>

          <div className="content" ref={useHorizontalScroll()}>
            {selectCatg === '' ?( 
              Object.values(womenClothing).map(prod => (
                <div className="banner"key={prod.id}>
                <div className="image">
                  <img className='product' src={prod.image} alt='product'/>
                  <img className='see_more' src={see_more} alt='see_more'/>
                </div>
                <div className="image_title"><h2>{prod.title.length > 15 ? prod.title.substring(0,15) : prod.title }.....</h2></div>
                <div className="para"><h5>{prod.description.length > 80 ? prod.description.substring(0,80): prod.description}.... </h5></div>
                <div className="amount"><h3>${prod.price}</h3></div>
              </div>
              ))
            ):
            (Object.values(selectCatg).map(prod => (
              <div className="banner"key={prod.id}>
                <div className="image">
                  <img className='product' src={prod.image} alt='product'/>
                  <img className='see_more' src={see_more} alt='see_more'/>
                </div>
                <div className="image_title"><h2>{prod.title.length > 15 ? prod.title.substring(0,15) : prod.title }.....</h2></div>
                <div className="para"><h5>{prod.description.length > 80 ? prod.description.substring(0,80): prod.description}.... </h5></div>
                <div className="amount"><h3>${prod.price}</h3></div>
              </div>
            ))
            )}

          </div>
        </div>
      </div>
      <div className="home3">

        <img className='conpic' src={conpic} alt='conpic' />
       <div className='getincontact'><img  src={getincontact} alt='getincontact' /></div> 
        <div className="contactus">

        <div className="newsletter">
          <h2>Newsletter</h2>
          <h3>Get news about articles and <br/> updates in your inbox.</h3>
        </div>
           
        <div>
          <form className='form'>
            <input type="text" placeholder='NAME' required />
            <input label="Email" name="email" type="email" placeholder='EMAIL' required />
            <input type="text" placeholder='MESSAGE' required/>
            <div>
              <button className='btn' type='submit'>
                SEND
              </button>
            </div>
          </form>
          <div className="getin2"></div>
        </div>

        </div>
        
        

      </div>

      <div className="footer">
        <h3>Copyright 2022 All Right Reserved By SG</h3>
      </div>
     
    </div>
    
  )
}

export default Home

