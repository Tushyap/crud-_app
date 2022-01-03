import React from "react";

function Footer() {
    return (
        <>
            <footer class="bg-dark text-white pt-5 pb-4">
                <div class="container text-centre text-md-left">
                    <div class="row text-centre text-md-left">
                        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h2 class="text-uppercase mb-4 font-weight-bold text-warning">Tech Ninja</h2>
                            <h3>Whether you want to learn or to share what you know, you`ve come to the right place. As a global destination for online learning, we connect people through knowledge.</h3>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h3 class="text-uppercase mb-4 font-weight-bold text-warning">Products</h3>
                            <h4><a  class="text-white" style={{textDecoration: 'none' }}>UI Design</a></h4>
                            <h4><a  class="text-white" style={{textDecoration: 'none'}}>Plugin Design</a></h4>
                            <h4><a  class="text-white" style={{textDecoration: 'none'}}>Web Development</a></h4>
                            <h4><a href="#" class="text-white" style={{textDecoration: 'none'}}>MERN Stack</a></h4>
                            <h4><a href="#" class="text-white" style={{textDecoration: 'none'}}>Bootstrap</a></h4>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h2 class="text-uppercase mb-4 font-weight-bold text-warning">Useful Links</h2>
                            <h4><a href="#" class="text-white" style={{textDecoration: 'none'}}>Your Account </a></h4>
                            <h4><a href="#" class="text-white" style={{textDecoration: 'none'}}>Affiliate</a></h4>
                            <h4><a href="#" class="text-white" style={{textDecoration: 'none'}}>Terms</a></h4>
                            <h4><a href="#" class="text-white" style={{textDecoration: 'none'}}>Help and Support</a></h4>
                            <h4><a href="#" class="text-white" style={{textDecoration: 'none'}}>Privacy Policy</a></h4>
                            <h4><a href="#" class="text-white" style={{textDecoration: 'none'}}>Career</a></h4>
                        </div>
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h2 class="text-uppercase mb-4 font-weight-bold text-warning">Contacts</h2>
                            <h4><i class="fas fa-home mr-3 my-2"></i> 320, Sector-D, AalamBag Lucknow </h4>
                            <h4><i class="fas fa-envelope mr-3 my-2"></i> tushyap@gmail.com</h4>
                            <h4><i class="fas fa-phone mr-3 my-2"></i> +91 8945434556 </h4>
                            <h4><i class="fas fa-print mr-3 my-2"></i> +01 335 633 77 </h4>

                        </div>
                    </div>
                    <hr class="mb-4" />
                    <div class="row align-items-center">
                        <div class="col-md-7 col-lg-8">
                            <h3>Copyright @2021 All rights reserved by: <a href="#" style={{textDecoration: 'none'}}>
                                <strong class="text-warning">Tech Ninja </strong></a></h3>
                        </div>
                        <div class="col-md-5 col-lg-4">
                            <div class="text-center text-md-right">
                                <ul class="list-unstyled list-inline">
                                    <li class="list-inline-item">
                                        <a href="#" class="btn-floating btn-sm text-white" style={{fontSize:"23px"}}>
                                            <i class="fab fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#" class="btn-floating btn-sm text-white" style={{fontSize:"23px"}}>
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#" class="btn-floating btn-sm text-white" style={{fontSize:"23px"}}>
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#" class="btn-floating btn-sm text-white" style={{fontSize:"23px"}}>
                                            <i class="fab fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#" class="btn-floating btn-sm text-white" style={{fontSize:"23px"}}>
                                            <i class="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#" class="btn-floating btn-sm text-white" style={{fontSize:"23px"}}>
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;