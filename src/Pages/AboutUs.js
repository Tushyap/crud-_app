import React from 'react';
import pic3 from "./Images/pic3.jpg";
import about1 from "./Images/about-1.jpg";
import about2 from "./Images/about-2.jpg";
import about3 from "./Images/about-3.jpg";
import male4 from "./Images/male-photo4.jpg";
import male5 from "./Images/male-photo5.jpg";
import male6 from "./Images/male-photo6.jpg";
import './AboutUs.css';


function AboutUs() {
  return (
    <React.Fragment>
      
      <>
      <section id="about">
        <div class="about-wrapper container">
            <div class="about-text">
                <p class="small">About Us</p>
                <h2>We deal with the aspects of
                    professional IT Services</h2>
                <p>Get world-class training and development programs developed by top universities and companies.We
                    believe in providing clients with the highest level of service. That's why we invest a lot of time
                    trying to understand our clients' needs and coming up with solutions accordingly.</p>
            </div>
            <div class="about-img">
                <img src={pic3} alt="About Us"/>
            </div>
        </div>
    </section>
    <section id="about">
        <div class=" about-wrapper container">
            <div class="about-text about-content">
                <h2>Changing learning for the better</h2>
                <p>Whether you want to learn or to share what you know, you`ve come to the right place. As a global
                    destination for online learning, we connect people through knowledge.</p>
            </div>
        </div>
        <div class="container Testimonial-form">
            <div class="heading">
                <h2>Our leaders</h2>
                <p>We share knowledge with the world!</p>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        /* <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        </ol> */
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="single-box">
                                            <div class="img-area"><img src={male4} alt=""/></div>
                                            <div class="img-text">
                                                <h3>Parag Agrawal -ceo</h3>
                                                
                                                <p class="img-text-p">"I strongly believe all students should have a startup during college. Doesn't matter if successful or how big or small. Worst case scenario it will make them 10x better employee than someone with no exposure to how a business works"
                                                    
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="single-box">
                                            <div class="img-area"><img src={male5} alt=""/></div>
                                            <div class="img-text">
                                                <h3>John - Project Manager </h3>
                                                <p class="img-text-p">
                                                    "It is extremely important to build something that a 100 people absolutely love using rather than making something that a 1000 people would just, kind of, like."
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="single-box">
                                            <div class="img-area"><img src={male6} alt=""/></div>
                                            <div class="img-text">
                                                <h3>Joe - Senior Developer </h3>
                                                <p class="img-text-p">"If people are not laughing at your goals, your goals are too small"
                                                    "Leadership is the self-confidence of working with people smarter than you."
                                                </p>
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
        <div class="container my-4">
            <div class="row featurette d-flex  justify-content-centre align-items-center">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading">We started Tech Ninja in 2020. Work with Us</h2>
                    <p class="lead">At Tech Ninja, we`re all learners and instructors. We live out our values every day
                        to create a culture that is diverse, inclusive, and committed to helping employees thrive</p>
                </div>
                <div class="col-md-5 order-md-1">
                    <img class="img-fluid" src={about1} alt=""/>
                </div>
            </div>
            <div class="row featurette d-flex  justify-content-centre align-items-center">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading">See Our Research. <a href="#" class="about-anchor"> See more</a>
                    </h2>
                    <p class="lead">We`re committed to changing the future of learning for the better. Dig into our
                        original research to learn about the forces that are shaping the modern workplace.</p>
                </div>
                <div class="col-md-5 order-md-2">
                    <img class="img-fluid" src={about2} alt=""/>

                </div>
            </div>
            <div class="row featurette d-flex  justify-content-centre align-items-center">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading">Read Our Blogs <a href="#" class="about-anchor"> See more</a></h2>
                    <p class="lead">Want to know what we`ve been up to lately? Check out the Tech Ninja blog to get the scoop
                        on the latest news, ideas and projects, and more</p>
                </div>
                <div class="col-md-5 order-md-1">
                    <img class="img-fluid" src={about3} alt=""/>

                </div>
            </div>
        </div>
    </section>
      </>
     
    </React.Fragment>
  );
}

export default AboutUs;