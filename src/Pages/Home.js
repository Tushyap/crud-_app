import React from "react";
import Footer from './Components/Footer';
import Header from './Components/Header';
import pic1 from "./Images/pic1.jpg";
import pic3 from "./Images/pic3.jpg";
import pic4 from "./Images/pic4.jpg";
import pic5 from "./Images/pic5.jpg";
import pic6 from "./Images/pic6.jpg";
import pic7 from "./Images/pic7.jpg";
import pic8 from "./Images/pic8.jpg";
import pic9 from "./Images/pic9.jpg";
import pic10 from "./Images/pic10.jpg";
import pic11 from "./Images/pic11.jpg";
import pic12 from "./Images/pic12.jpg";
import pic13 from "./Images/pic13.jpg";
import male1 from "./Images/male-photo1.jpg";
import male2 from "./Images/male-photo2.jpg";
import male3 from "./Images/male-photo3.jpg";
import './HomeStyle.css';
function Home() {
    return (
        <React.Fragment>
           <Header/>
            <div>
                <section class="showcase-area" id="showcase">
                    <div class="showcase-container">

                        <h1 class="main-title">The Power of Choice</h1>
                        <p>“It's not a faith in technology. It's faith in people.” </p>
                        <a href="#" class="btnn btnn-primary">Explore Courses</a>
                    </div>
                </section>

                <section id="about">
                    <div class="about-wrapper container">
                        <div class="about-text">
                            <a href="about.html" class="course-title course-title-link" target="_blank">About Us</a>
                            <h2>We deal with the aspects of
                                professional IT Services</h2>
                            <p>Get world-class training and development programs developed by top universities and companies.We
                                believe in providing clients with the highest level of service. That's why we invest a lot of time
                                trying to understand our clients' needs and coming up with solutions accordingly.</p>
                        </div>
                        <div class="about-img">
                            <img src={pic3} alt="About Us" />
                        </div>
                    </div>
                </section>
                <section id="IT">
                    <h2 class="Tushyap">IT & Software</h2>
                    <div class="web-container container">
                        <div class="web-type WebDevelopment">
                            <div class="img-container">
                                <img src={pic1} alt="pic1" />
                                <div class="img-content">
                                    <h3>Web Development</h3>
                                    <a href="#" class="btnn btnn-primary" target="_blank">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div class="web-type androidDevelopment">
                            <div class="img-container">
                                <img src={pic4} alt="pic2" />
                                <div class="img-content">
                                    <h3>Android Development</h3>
                                    <a href="#" class="btnn btnn-primary" target="_blank">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div class="web-type dataScience">
                            <div class="img-container">
                                <img src={pic5} alt="pic3" />
                                <div class="img-content">
                                    <h3>Data Science</h3>
                                    <a href="#" class="btnn btnn-primary" target="_blank">Learn More</a>
                                </div>
                            </div>
                        </div>
                        {/* <div class="web-type GraphicDesign">
                <div class="img-container">
                    <img src={pic2} alt="pic3"/>
                    <div class="img-content">
                        <h3>Graphic Design</h3>
                        <a href="#" class="btnn btnn-primary" target="_blank">Learn More</a>
                    </div>
                </div>
            </div> */}
                    </div>
                </section>
                <section id="course-menu">
                    <h2 class="course-menu-heading">Explore Courses</h2>
                    <div class="course-menu-container container">
                        <div class="course-menu-item">
                            <div class="course-image">
                                <img src={pic6} alt="" />
                            </div>
                            <div class="course-description">
                                <a href="#" class="course-title course-title-link" target="_blank">Python/Java/C++</a>
                                <p>For those who are new to coding and programming, Python can be an excellent first step. It's
                                    relatively easy to learn, making it a great way to start building your programming knowledge.
                                </p>
                                <div class="star-rating">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <p class="course-price">Price: &#8377; 5000</p>
                                <a href="Payment.html" class="btnn btnn-primary" target="_blank">Enroll Now</a>

                            </div>
                        </div>
                        <div class="course-menu-item">
                            <div class="course-image">
                                <img src={pic7} alt="" />
                            </div>
                            <div class="course-description">
                                <a href="#" class="course-title course-title-link" target="_blank">Java Fullstack</a>
                                <p>From the point of view of the people who are using the platform, one of the most valuable things
                                    about Java is the consistency, the interoperability.</p>
                                <div class="star-rating">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <p class="course-price">Price: &#8377; 4500</p>
                                <a href="Payment.html" class="btnn btnn-primary" target="_blank">Enroll Now</a>
                            </div>
                        </div>
                        <div class="course-menu-item">
                            <div class="course-image">
                                <img src={pic8} alt="" />
                            </div>
                            <div class="course-description">
                                <a href="#" class="course-title course-title-link" target="_blank">Data Structure & Algo</a>
                                <p>“The goal is to turn data into information, and information into insight.” “We have to learn to
                                    interrogate our data collection process, not just our algorithms.” “The best way to learn data
                                    science is to do data science.”</p>
                                <div class="star-rating">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <p class="course-price">Price: &#8377; 6000</p>
                                <a href="Payment.html" class="btnn btnn-primary" target="_blank">Enroll Now</a>
                            </div>
                        </div>
                        <div class="course-menu-item">
                            <div class="course-image">
                                <img src={pic9} alt="" />
                            </div>
                            <div class="course-description">
                                <a href="#" class="course-title course-title-link" target="_blank">Full Stack Web Development</a>
                                <p>“We love what we do and we do what our clients love & work with great clients all over the world
                                    to create thoughtful and purposeful websites.”</p>
                                <div class="star-rating">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <p class="course-price">Price: &#8377; 6500</p>
                                <a href="Payment.html" class="btnn btnn-primary" target="_blank">Enroll Now</a>
                            </div>
                        </div>
                        <div class="course-menu-item">
                            <div class="course-image">
                                <img src={pic10} alt="" />
                            </div>
                            <div class="course-description">
                                <a href="#" class="course-title course-title-link" target="_blank">MERN Stack</a>
                                <p>MongoDB, Express.JS, ReactJS, and NodeJS, the powerful and integrated JavaScript-based MERN
                                    bundle empowers your websites and apps.</p>
                                <div class="star-rating">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <p class="course-price">Price: &#8377; 8000</p>
                                <a href="Payment.html" class="btnn btnn-primary" target="_blank">Enroll Now</a>
                            </div>
                        </div>
                        <div class="course-menu-item">
                            <div class="course-image">
                                <img src={pic11} alt="" />
                            </div>
                            <div class="course-description">
                                <a href="#" class="course-title course-title-link" target="_blank">Graphic Design</a>
                                <p>“There are three responses to a piece of design -- yes, no, and WOW! ..."</p>
                                <div class="star-rating">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star "></span>
                                </div>
                                <p class="course-price">Price: &#8377; 7500</p>
                                <a href="Payment.html" class="btnn btnn-primary" target="_blank">Enroll Now</a>
                            </div>
                        </div>
                        <div class="course-menu-item">
                            <div class="course-image">
                                <img src={pic12} alt="" />
                            </div>
                            <div class="course-description">
                                <a href="#" class="course-title course-title-link" target="_blank">Machine Learning</a>
                                <p>Machine learning is the study of computer algorithms that can improve automatically through experience and by the use of data. It is seen as a part of artificial intelligence.</p>
                                <div class="star-rating">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <p class="course-price">Price: &#8377; 7500</p>
                                <a href="Payment.html" class="btnn btnn-primary" target="_blank">Enroll Now</a>
                            </div>
                        </div>
                        <div class="course-menu-item">
                            <div class="course-image">
                                <img src={pic13} alt="" />
                            </div>
                            <div class="course-description">
                                <a href="#" class="course-title course-title-link" target="_blank">Android Development</a>
                                <p>Android software development is the process by which applications are created for devices running the Android operating system.</p>
                                <div class="star-rating">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star "></span>
                                </div>
                                <p class="course-price">Price: &#8377; 7500</p>
                                <a href="Payment.html" class="btnn btnn-primary" target="_blank">Enroll Now</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="testimonials">
                    <h2 class="testimonial-title">Learner Reviews</h2>
                    <div class="testimonial-container container">
                        <div class="testimonial-box">
                            <div class="star-rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                            <p class="testimonial-text"> The program has been very helpful and
                                my experience with this program and
                                student mentors has been very good. The
                                program has taught me a lot. The content
                                taught is very relatable and it relates with
                                the current scenario.</p>
                            <div class="customer-detail">
                                <div class="customer-photo">
                                    <img src={male1} alt="" />
                                    <p class="customer-name">John Doe</p>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-box">
                            <div class="star-rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                            <p class="testimonial-text">This program was full of professional,
                                social, and technical upliftment for me. I
                                have learned how to deal with young
                                minds, nurture them, and various other
                                professional and right ways of
                                interacting with them.</p>
                            <div class="customer-detail">
                                <div class="customer-photo">
                                    <img src={male2} alt="" />
                                    <p class="customer-name">Jay Doe</p>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-box">
                            <div class="star-rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                            <p class="testimonial-text">My learning experience at Tech Ninja has been very fruitful. Apart from
                                learning new things in Web
                                development, I have also got to apply
                                the knowledge in order to build and
                                work on very interesting projects which
                                I found to be the best way to get a
                                good grasp over the concepts.</p>
                            <div class="customer-detail">
                                <div class="customer-photo">
                                    <img src={male3} alt="" />
                                    <p class="customer-name">Jolly Doe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default Home;