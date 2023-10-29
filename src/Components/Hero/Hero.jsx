import React from 'react'
import "./Hero.css"
import hand_icon from '../Assets/hand_icon.png'

const Hero = () => {
  return (
    <div className='hero'>
      
      <div className="hero_left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero_hand_icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            
        </div>
      </div>
      <div className="hero_right">

      </div>
    </div>
  )
}

export default Hero
