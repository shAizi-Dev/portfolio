import React from 'react'

import gmail1 from '../image/gmail1.png'
import location from '../image/location.png'

import github from '../image/github.png'
import linkedin from '../image/linkedin-icon.png'
import instagram from '../image/instagram.png'
import facebook from '../image/facebook.png'

function Contact() {
  return (
    <div>
        <div id="contact">
            <div className="container-fluid">
                <div className="contact">
                    <div className="text">
                        <h1>Reach Out to Me</h1>
                        <span>DISCUSS A PROJECT? E-MAIL <img src={gmail1} width={30} height={20} alt="" /> </span>
                    </div>
                    <div className="about">
                        <p>I am a Computer Engineer with an affinity for C++ and ReactJS, a passionate person when it comes to working and my goal is to expand my skills and knowledge in Web Development, I am a hard worker and eager to learn to make a valuable asset in any team.</p>
                    </div>
                    <div className="location">
                        <img src={location} alt="" />
                        <span>Punjab, Pakistan</span>
                    </div>
                    <div className="social-link">
                        <a href="/"><img src={github} width={30} height={35} alt="" /></a>
                        <a href="/"><img src={linkedin} width={30} height={30} alt="" /></a>
                        <a href="/"><img src={gmail1} width={30} height={25} alt="" /></a>
                        <a href="/"><img src={instagram} width={30} height={30} alt="" /></a>
                        <a href="/"><img src={facebook} width={30} height={35} alt="" /></a>
                    </div>
                    <div className="made">
                        <span>Made by shaizi-dev</span>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
