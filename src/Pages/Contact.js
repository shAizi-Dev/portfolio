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
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text">
                                <h1>Reach Out to Me</h1>
                                <span>DISCUSS A PROJECT? E-MAIL <img src={gmail1} width={30} height={20} alt="" /> </span>
                            </div>
                            <div className="about">
                                <p>I am a Computer Engineer with an affinity for C++ and ReactJS, a passionate person when it comes to working and my goal is to expand my skills and knowledge in Web Development, I am a hard worker and eager to learn to make a valuable asset in any team.</p>
                            </div>
                            <div className="social-link">
                                <a href="https://github.com/shAizi-Dev" target='_blank'><img src={github} width={35} height={35} alt="" /></a>
                                <a href="https://www.linkedin.com/in/shahroz-imtiaz-468809238/" target='_blank'><img src={linkedin} width={30} height={30} alt="" /></a>
                                <a href="/" onClick={showAlert}><img src={gmail1} width={30} height={25} alt="" /></a>
                                <a href="https://www.instagram.com/shaizidev/" target='_blank'><img src={instagram} width={30} height={30} alt="" /></a>
                                <a href="https://www.facebook.com/groups/1792551574532389" target='_blank'><img src={facebook} width={35} height={35} alt="" /></a>
                            </div>
                            <div className="location">
                                <img src={location} alt="" />
                                <span>Punjab, Pakistan</span>
                            </div>
                        </div>
                    </div>
                    <div className="made">
                        <span>Made by shaizi-dev</span>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
      
    </div>
  )
}
const showAlert = () => {
    alert('Discuss Any querry through E-mail \n shaizidev@gmail.com');
 };

export default Contact
