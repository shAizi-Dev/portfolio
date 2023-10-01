import React from 'react'

import netflix from '../image/project/netflix.png'
import microsoft from '../image/project/microsoft.png'
import desktop from '../image/project/desktop.png'
import software from '../image/project/software.png'

import html5 from '../image/frontend/html5.png' 
import css from '../image/frontend/css.png'
import javascript from '../image/frontend/javascript.png'
import github from '../image/github.png'
import cplus from '../image/frontend/cplus.png'

function Projects() {
  return (
    <div>
        <hr />
      <div className="container-fluid" id='project'>
        <div className="text">
            <h1 className='text-center m-5'>Projects</h1>
        </div>
        <hr />
        <div className="row">
            {/* netflix clone  */}
            <div className="col-md-6">
                <div className="project">
                    <div className="card">
                        <div className="card-img">
                            <img src={netflix} alt="" />
                            <span><strong>Netflix Clone</strong></span>
                        </div>
                        <div className="card-body">
                            <p>Netflix clone have basic functionality with signUp/login and also user Dashboard data will be store in local database.</p>
                        </div>
                        <div className="card-fotter">
                            <div className="button">
                                <a href="https://github.com/shAizi-Dev/netflix-clone" target="_blank" ><button>Source</button></a>
                                <a href="https://shaizidevnetflix-clone.netlify.app/" target="_blank" ><button>Demo</button></a>
                            </div>
                            <div className="netfli-img">
                                <img src={github} width={30} height={30} alt="" />
                                <img src={css} width={30} height={30} alt="" />
                                <img src={javascript} width={30} height={30} alt="" />
                                <img src={html5} width={30} height={30} alt="" />   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* c++ program  */}
            <div className="col-md-6">
                <div className="project">
                    <div className="card">
                        <div className="card-img">
                            <img src={desktop} alt="" />
                            <span><strong>c++</strong></span>
                        </div>
                        <div className="card-body">
                            <p>c++ project  in this we have two program  <br /><strong>- Banking system</strong><br /> <strong>- Contact management system</strong></p>
                        </div>
                        <div className="card-fotter">
                            <div className="button">
                                <a href="https://github.com/shAizi-Dev/C-Plus-project" target="_blank" ><button>Source Code</button></a>
                                {/* <a href="/" target="_blank" ><button>Demo</button></a> */}
                            </div>                          
                            <div className="img">
                                <img src={github} width={30} height={30} alt="" />
                                <img src={cplus} width={30} height={30} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start microsoft-clone  */}
            <div className="col-md-6">
                <div className="project">
                    <div className="card">
                        <div className="card-img">
                            <img src={microsoft} alt="" />
                            <span><strong>Microsoft Clone</strong></span>
                        </div>
                        <div className="card-body">
                            <p>Netflix clone have basic functionality with signUp/login and also user Dashboard data will be store in local database.</p>
                        </div>
                        < div className="card-fotter">
                            <div className="button">
                                <a href="https://github.com/shAizi-Dev/microsoft-clone" target="_blank" ><button>Source</button></a>
                                <a href="https://shaizidevmicrosoft.netlify.app/" target="_blank" ><button>Demo</button></a>
                            </div>    
                            <div className="img">
                                <img src={github} width={30} height={30} alt="" />
                                <img src={css} width={30} height={30} alt="/"/>
                                <img src={html5} width={30} height={30} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start secure voulte */}
            <div className="col-md-6">
                <div className="project">
                    <div className="card">
                        <div className="card-img">
                            <img src={software} alt="" />
                            <span><strong>Secure Valunt</strong></span>
                        </div>
                        <div className="card-body">
                            <p>it is a software based project is name, secure valunt used for dark web. include signUp/login, digital transaction in bitcoin or any vitual currency.</p>
                        </div>
                        < div className="card-fotter">
                            <div className="button">
                                <a href="https://github.com/shAizi-Dev/secure-valunt" target="_blank" ><button>Source Code</button></a>
                                {/* <a href="/" target="_blank" ><button>Demo</button></a> */}
                            </div>    
                            <div className="img">
                                <img src={github} width={30} height={30} alt="" />
                                <img src={cplus} width={30} height={30} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* second row */}
            <a className='mb-3 text-center' href='https://shaizidev.netlify.app/' target='_blank'><button className='btn btn-light'>See More Projects</button> </a>
      </div>
    </div>
  )
}

export default Projects
