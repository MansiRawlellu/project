import React from 'react';
import '../App.css';
import './HeroSection.css' ;
function HeroSection(){
    return(
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted></video>
            <h1>ADVENTURE AWAITS</h1>
            <p>WHAT ARE YOU WAITING FOR???</p>
            <div className='hero-btns' >
                <button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </button>
                <button className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>
                      Watch Trailer<i className='far fa-play-circle'/>
                </button>
                </div>        
        </div>
    )
}
export default HeroSection;