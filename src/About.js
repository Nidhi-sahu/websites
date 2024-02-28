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
                <h2 style={{ marginLeft: '30px' }}>About Me</h2>
              </div>
            </div>
            <div className="row">
              <div className="about-content padd-15">
                <div className="row">
                  <div className="about-text padd-15">
                    <h3 style={{ marginLeft: '30px' }}>I'm Nidhi Sahu, a passionate  <span >&nbsp; &nbsp;Full Stack Developer</span></h3>
                    <p style={{ marginLeft: '30px', marginTop:'10px' }}> I specialize in a wide array of web development technologies, including HTML, CSS, JavaScript, React.js, Next.js, Node.js, MySQL, and MongoDB. Additionally, I bring expertise in mobile application development, leveraging the power of React Native to build dynamic and intuitive mobile experiences.
                      I'm always excited to learn new things in the ever-changing world of tech. Whether it's picking up a new coding language or mastering the latest tools, I'm all about staying up-to-date and keeping things fresh.
                    </p>
                  </div>
                </div>
                <div className="row" style={{ marginLeft: '30px' }}>
                  <div className="personal-info">
                    <div className="row">
                      <div className="info-item padd-15">
                        <p>Birthday : <span>24/7/2002</span></p>
                      </div>
                      <div className="info-item padd-15">
                        <p>Age : <span>21</span></p>
                      </div>
                      <div className="info-item padd-15">
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/nidhi-sahu-038551234/" style={{ textDecoration: 'none', color: "var(--text-black-700)", fontSize: "17px", fontWeight: 'lighter' }}>sahunidhi</a></p>
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

                        <a href="/" className="btn hire-mee">&nbsp;&nbsp;&nbsp;&nbsp;Contact&nbsp;&nbsp;&nbsp;&nbsp;</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ marginLeft: '30px', marginTop: '40px' }}>
                  <div className="education padd-15">
                    <h3 className="title">Education</h3>
                    <div className="row">
                      <div className="timeline-box padd-15">
                        <div className="timeline shadow-dark">
                          <div className="timeline-item">
                            <div className="circle-dot">
                              <h3 className="timeline-date">
                                <i className="fa fa-calendar"></i> 2020-2024
                              </h3>
                              <h4 className="timeline-title">B.Tech in Comouter Science</h4>
                              <p className="timeline-text">In 2024, I graduated with a B.Tech in Computer Science from Sagar Group of Institutions - SISTec. Through this accomplishment, I have not only strengthened my knowledge in computer science but also fulfilled my educational aspirations and prepared myself for the professional world.</p>
                            </div>
                          </div>
                          {/* More timeline items can be added similarly */}


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
                                <i className="fa fa-calendar"></i> 2022-2024
                              </h3>
                              <h4 className="timeline-title">Full Stack Developer</h4>
                              <p className="timeline-text">I have 2 years of work experience as a Software Developer in MicroTechnologies, with proficient knowledge in React.js, Node.js,
                                Express.js, Figma, Javascript, Typescript, AWS, MYSQL and containerization in Docker. In addition I also possess
                                knowledge of Git and GitHub. Thats all about my Experience</p>
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