import React from 'react'

import TypeWriter from './Typewriter';
import github from '../image/github.png'
import linkedin from '../image/linkedin-icon.png'
import mail from '../image/mail.png'
import facebook from '../image/facebook.png'
import resume from '../image/resume.png'
import heroimg from '../image/heroimg.gif'


const typeWriter = ["computer Engineer", "Web-Developer", "front-end developer", "open source contributor"];
const cvtypeWriter=["Here To Check My CV"];

function Hero() {
  return (
   <>
        <div class="container-fluid text-center" id="hero">
            <div class="row">
                <div class="col-md-6">
                        <div className="hero">
                            <div className="text">
                                <h1><b>Hey!, I'm Shahroz</b></h1>
                                <div className="typewriter-holder mt-5">
                                <p><b>I'm</b> <TypeWriter data={typeWriter} /></p>
                                </div>
                            </div><br />
                            <div className="social-link p-5">
                                <a href="/"><img src={github} width={30} height={30} alt="github" /></a>
                                <a href="/"><img src={linkedin} width={30} height={30} /></a>
                                <a href="/"><img src={facebook} width={35} height={35} /></a>
                                <a href="/"><img src={mail} width={35} height={35} /></a> 
                            </div>   
                            <div className="cv m-2 flex">
                            {/* Download Cv */}
                            <a href="/"><img src={resume} alt="cv" width={70} height={60} /><TypeWriter data={cvtypeWriter}/></a>
                        </div>                
                        </div>
                </div>
                <div class="col-md-6">
                    <div className="img">
                        <img src={heroimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}

export default Hero
