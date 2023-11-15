// React library for building user interfaces
import React from 'react'

// Import images for team members from the assets directory
import dabs from "../assets/img/team/dabs.jpg";
import henry from "../assets/img/team/henry.jpg";

// Import Font Awesome CSS for using icons
import '@fortawesome/fontawesome-free/css/all.css';


// Page Content for team members
function Team() {
  return (
    <section class="page-section bg-light" id="team">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 class="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="team-member">
                <img
                  class="mx-auto rounded-circle"
                  src={dabs}
                  alt="dabs"
                />
                <h4>Dabit Favour</h4>
                <p class="text-muted">Software Engineer</p>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://x.com/Favydabs?t=4rHxGmGQMiwf2JQMpHfH_A&s=09"
                  aria-label="Parveen Anand Twitter Profile"
                > 
                  <i class="fab fa-twitter"></i>
                </a>
                
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://www.linkedin.com/in/dabit-favour-297b11250/"
                  aria-label="Parveen Anand LinkedIn Profile"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="team-member">
                <img
                  class="mx-auto rounded-circle"
                  src={henry}
                  alt="henry"
                />
                <h4>Diana Petersen</h4>
                <p class="text-muted">Lead Marketer</p>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Diana Petersen Twitter Profile"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Diana Petersen LinkedIn Profile"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Team