// React library for building user interfaces
import React from 'react'

// Import images from the assets directory
import img1 from '../assets/img/about/img1.jpg';
import img2 from '../assets/img/about/img2.jpg';
import img3 from '../assets/img/about/img3.jpg';


// Content for About Page
function About() {
  return (
    <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About Us</h2>
            <h3 className="section-subheading text-muted">
              Empowering Your Visual Experience
            </h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={img1}
                  alt="img1"
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Welcome to our innovative image processing platform, crafted as a pinnacle of our expertise at <a href="https://www.alxafrica.com/" target='_blank rel="noreferrer"'>ALX Africa.</a> Rooted in a passion for technology and creativity, we've meticulously designed this project to offer seamless solutions to internet users like you.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={img2}
                  alt="imge2"
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="subheading">What we Aim to Achieve</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    At our core, we transcend traditional image processing. With roots in creativity and expertise honed at <a href="https://www.alxafrica.com/" target='_blank' rel="noreferrer">ALX Africa,</a> we craft your digital moments into compelling narratives. Our fusion of technical mastery and artistic finesse ensures your images echo with resonant stories.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={img3}
                  alt="img3"
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Whether you're a photography enthusiast, a social media aficionado, or a creative professional, our platform is your canvas. Unleash the power of creativity with our user-friendly tools, and witness your images undergo a remarkable metamorphosis.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default About