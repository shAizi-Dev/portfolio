import React from 'react'

import c from '../image/frontend/c.png'
import cplus from '../image/frontend/cplus.png'
import javascript from '../image/frontend/javascript.png'
import python from '../image/frontend/python.png'
import typescript from '../image/frontend/typescript.png'
import html5 from '../image/frontend/html5.png'
import css from '../image/frontend/css.png'
import bootstrap from '../image/frontend/bootstrap.png'
import react from '../image/frontend/react.png'

import php from '../image/backend/php.png'
import sql from '../image/backend/sql.png'
import git from '../image/backend/git.png'
import mongodb from '../image/backend/mongodb.png'
import nodejs from '../image/backend/nodejs.png'

import img from '../image/img.gif'


function Skills() {
  return (
    <div>
      <div id="skills">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <div className="skills">
                        <div className="text">
                            <h1>What I do</h1>
                            <div className="p">
                                <p>Web Developer who wants to explore every tech stack</p>
                            </div>
                        </div>
                        <div className="language">
                            <h3 className='text-muted'>Languages</h3>
                            <img src={c} alt="programming language" />
                            <img src={cplus} alt="programming language" />
                            <img src={javascript} alt="programming language" />
                            <img src={python} alt="programming language" />
                            <img src={typescript} alt="programming language" />
                        </div>
                        <div className="language">
                            <h3 className='text-muted'>Fronted Tools</h3>
                            <img src={html5} alt="programming language" />
                            <img src={css} alt="programming language" />
                            <img src={bootstrap} alt="programming language" />
                            <img src={react} alt="programming language" />
                        </div>
                        <div className="language">
                            <h3 className='text-muted'>Backend Tools</h3>
                            <img src={php} alt="programming language" />
                            <img src={sql} alt="programming language" />
                            <img src={git} alt="programming language" />
                            <img src={mongodb} alt="programming language" />
                            <img src={nodejs} alt="programming language" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="img">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
