import React from 'react'
import './Homee.css'
import './Homee1.css'

const About = () => {
  return (
    <div>
     <div>
      <section className="about section" >
      <div className="container" >
        <div className="row">
          <div className="section-title padd-15">
            <h2  style={{marginLeft:'30px'}}>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3 style={{marginLeft:'30px'}}>I'm Alimi Mousad and <span >Web Development</span></h3>
                <p style={{marginLeft:'30px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, modi! Eveniet sint maiores
                  fuga non laborum atque excepturi placeat neque error repellendus.
                 </p>
              </div>
            </div>
            <div className="row" style={{marginLeft:'30px'}}>
              <div className="personal-info">
                <div className="row">
                  <div className="info-item padd-15">
                    <p>Birthday : <span>24 July 2002</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Age : <span>21</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Linkedln Id : <span>nidhi-sahu</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Email : <span>sahunidhi706@gmail.com</span> </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Degree : <span>B.Tech(cs)</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>City : <span>Bhopal</span></p>
                  </div>
                </div>
                <div className="row">
                  <div className="buttons padd-15">
                    
                    <a href="/" className="btn hire-me">Go Back</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{marginLeft:'30px'}}>
              <div className="education padd-15">
                <h3 className="title">Education</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot">
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2015-2016
                          </h3>
                          <h4 className="timeline-title">Master in Computer Science</h4>
                          <p className="timeline-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis veniam vero ad? A quae sed quos dolorum alias sunt quod sint, nobis nesciunt! Ipsa, soluta quis.</p>
                        </div>
                      </div>
                      {/* More timeline items can be added similarly */}
                      <div className="timeline-item">
                                <div className="circle-dot">
                               <h3 className="timeline-date">
                                <i className="fa fa-calendar"></i> 2015-2016
                               </h3>
                               <h4 className="timeline-title">Master in Comouter Science</h4>
                               <p className="timeline-text">Lorem ipsum dolor sit, amet consectetur<br/> 
                                             adipisicing elit.
                                              Quis veniam vero ad? A quae sed quos dolorum<br/> alias sunt quod
                                               sint, nobis 
                                             nesciunt! Ipsa, soluta quis.</p>
                              </div>
                              </div>
                             
                      {/* ------------------------ */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience padd-15">
                <h3 className="title">Experience</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot">
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2017-2018
                          </h3>
                          <h4 className="timeline-title">Web Developer at XYZ Company</h4>
                          <p className="timeline-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis veniam vero ad? A quae sed quos dolorum alias sunt quod sint, nobis nesciunt! Ipsa, soluta quis.</p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot">
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2015-2016
                          </h3>
                          <h4 className="timeline-title">Master in Computer Science</h4>
                          <p className="timeline-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis veniam vero ad? A quae sed quos dolorum alias sunt quod sint, nobis nesciunt! Ipsa, soluta quis.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </div>
    </div>

   
  )
}

export default About