import React from 'react'
import "./Hero.scss";
import Image from '../Image/Image';
import downArrow from "../../assets/down-arrow.png"
const Hero = () => {

  const scrollFn = (element) => {
    console.log(element);
    var ele = document.getElementById(element);   
    window.scrollTo(ele.offsetLeft,ele.offsetTop);
  }
  return (
    <div className='hero-container'>
      <div className="hero-content">
          <div className="background-div"></div>
          <div className="content-div">
              <div className="title">Best food for <br />your taste</div>
              <div className="subtitle">Discover delectable cuisine and unforgettable moments <br />in our welcoming, culinary haven.</div>
          </div>
      </div>
      <Image src={downArrow} alt="down-arrow" className="down-arrow-css" click={() => scrollFn("browse-menu")}  />
    </div>
  )
}

export default Hero