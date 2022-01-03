import React from "react";
import './HeaderStyle.css';

function Header() {
    return (
      <div>
        <nav className="navbarr">
        <div className="navbarr-container container">
            <input type="checkbox"/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="#IT">Courses</a></li>
                <li><a href="#testimonials">Testimonial</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="login.html">Login/Register</a></li>
            </ul>
            <h1 className="logo">Tech Ninja</h1>

        </div>
    </nav>
      </div>
    );
  }
  
  export default Header;