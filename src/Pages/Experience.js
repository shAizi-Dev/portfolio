import React from 'react'

import university from '../image/education/university.png'
import college from '../image/education/college.png'

function Experience() {
  return (
    <div>
        <div id="experience">
            <div className="container-fluid">
                <div className="experience">
                    <div className="text">
                        <h1>Experience & Education</h1>
                    </div>
                    <hr />
                    {/* <!-- experience --> */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card ">
                                <div className="card-img text-center ">
                                    <img src={university} alt="" />
                                </div>
                                <div className="card-title">
                                    <h1>University of Faisalabad</h1>
                                </div>
                                <div className="card-body">
                                    <p className='text-muted'>B.Tech. Computer Science</p>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 ">
                        {/* nothing to write here  */}
                        </div>
                        <div className="col-md-6">
                        <div className="card">
                                <div className="card-title">
                                    <h1>Web Developer</h1>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <dl>
                                                <dt>Frontend</dt>
                                                <dd>- Html </dd>
                                                <dd>- CSS/SASS/Bootstrap </dd>
                                                <dd>- JavaScript </dd>
                                                <dd>- ReactJS / VueJs</dd>
                                            </dl>
                                        </div>
                                        <div className="col-md-6">
                                            <dl>
                                                <dt>Backend</dt>
                                                <dd>* PHP </dd>
                                                <dd>* SQL/MYSQL </dd>
                                                <dd>* Nodejs </dd>
                                                <dd>* MongoDB / VueJs</dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                    {/* row */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-img text-center">
                                    <img src={college} alt="" />
                                </div>
                                <div className="card-title">
                                    <h1>Superior College</h1>
                                </div>
                                <div className="card-body">
                                    <p className='text-muted'>Intermediate</p>
                                    <span className='text-muted p-5'>obtained: 75.5%</span>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                    {/* row end*/}
                    <div className="row">
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-title">
                                    <h1>Desktop Application</h1>
                                </div>
                                <div className="card-body">
                                    <ul style={{listStyle:'none'}}>
                                        <li>c</li>
                                        <li>c++</li>
                                        <li>java</li>
                                        <li>python</li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                    {/* end row */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience