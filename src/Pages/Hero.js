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
                                <a href="https://github.com/shAizi-Dev" target="_blank"><img src={github} width={30} height={30} alt="github" /></a>
                                <a href="https://www.linkedin.com/in/shahroz-imtiaz-468809238/" target='_blank'><img src={linkedin} width={30} height={30} /></a>
                                {/* <a href="https://www.facebook.com/groups/1792551574532389" target='_blank'><img src={facebook} width={35} height={35} /></a> */}
                                {/* <a href="/"><img src={mail} width={35} height={35} /></a>  */}
                            </div>   
                            <div className="cv m-2 flex">
                            {/* Download Cv */}
                            <a href="https://drive.google.com/file/d/1RH42t1r_1nTad31U62o-YXOYTIjnLn3x/view" target="_blank"><img src={resume} alt="cv" width={70} height={60} /><TypeWriter data={cvtypeWriter}/></a>
                        </div>                
                        </div>
                </div>
                <div class="col-md-6">
                    <div className="gif-img mt-5">
                        {/* <img src={heroimg} width={500} alt="" /> */}
                        <iframe id="vp1s9BO6" className='mt-4' title="Video Player" width="544" height="306" frameborder="0" src="https://s3.amazonaws.com/embed.animoto.com/play.html?w=swf/production/vp1&e=1705582783&f=s9BO6bSWwqg3mWICxw0kWw&d=0&m=p&r=360p+720p&volume=100&start_res=720p&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=" allowfullscreen="allow"></iframe> <br />
                         
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}

export default Hero
