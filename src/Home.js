import React from 'react';
import './Homee.css'
import './Homee1.css'
import image from './image/image.jpg'
import About from './About';



const Home = () => {
  return (
    <div className="main container">
      <div className="aside">
        <div className="logo">
          <a href="#"><span>Atlas</span></a>
        </div>
        <div className="nav-toggle">
          <span></span>
        </div>
        <ul className="nav">
          <li><a href="/" className="active"><i className="fa fa-home"></i>Home</a></li>
          <li><a href="#"><i className="fa fa-user"></i>About</a></li>
          <li><a href="#"><i className="fa fa-list"></i>Service</a></li>
          <li><a href="#"><i className="fa fa-briefcase"></i>Portfolio</a></li>
         
        </ul>
      </div>

      {/* Main content start */}
      <div className="main-content">
        {/* Home section start */}
        <section className="home section hidden">
          <div className="container">
            <div className="row">
              <div className="home-info pdd-15">
                <h3 className="hello">&nbsp;&nbsp;Hello, my name <span className="name">Nidhi sahu</span></h3>
                <h3 className="my-profession">&nbsp;&nbsp;I'm a <span className="typing">Software Engineer</span></h3>
                <p>
                  &nbsp;&nbsp;I'm a software engineer now, I am a fresher in this field.
                  I'm a software engineer now, I am a fresher in &nbsp;&nbsp;this field.
                </p>
                <a href="/about" className="btn hire-me">&nbsp;&nbsp;About Me</a>
              </div>
              <div className="home-img pdd-15">
              <img src={image} alt="Profile" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
