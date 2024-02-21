import React from 'react'
import "./Hero.css"
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      
      <div className="hero_left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <p>Latest Collections</p>
            <p>for Everyone</p>
            
        </div>

      </div>
      <div className="hero_right">
          <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
