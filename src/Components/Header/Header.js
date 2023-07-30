import React from 'react'

export default function Header() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#hero">Shaizi-dev</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav  mb-2 mb-lg-0">
                    <li>
                    <a href="#hero" className='scrollto'>Home</a>
                    </li>
                    <li>
                    <a href="#skills" className='scrollto'>Skills</a>
                    </li>
                    <li>
                    <a href="#experience" className='scrollto'>Experience</a>
                    </li>
                    <li>
                    <a href="#project" className='scrollto'>Projects</a>
                    </li>
                    <li>
                    <a href="/">Contact Me</a>
                    </li>
                </ul>
                
                </div>
            </div>
        </nav>
        
    </div>
  )
}
