import React from "react";
import './PaymentStyle.css';

function Payment() {
    return (
      <div>
        <div class="mainDiv">
        <h2 class=" mainHeading"> Checkout Form</h2>
        <div class="row">
            <div class="col-75">
                <div class="container">
                    <form action="/action_page.php">
                        <div class="row">
                            <div class="col-50">
                                <h3>Billing Address</h3>
                                <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="Name"/>
                                <label for="email"><i class="fa fa-envelope"></i> Email</label>
                                <input type="text" id="email" name="email" placeholder="Email"/>
                                <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                                <input type="text" id="adr" name="address" placeholder=""/>
                                <label for="city"><i class="fa fa-institution"></i> City</label>
                                <input type="text" id="city" name="city" placeholder=""/>

                                <div class="row">
                                    <div class="col-50">
                                        <label for="state">State</label>
                                        <input type="text" id="state" name="state" placeholder=""/>
                                    </div>
                                    <div class="col-50">
                                        <label for="zip">Zip</label>
                                        <input type="text" id="zip" name="zip" placeholder=""/>
                                    </div>
                                </div>
                            </div>

                            <div class="col-50">
                                <h3>Payment</h3>
                                <label for="fname">Accepted Cards</label>
                                <div class="icon-container">
                                    <i class="fa fa-cc-visa" style={{style:"navy"}}></i>
                                    <i class="fa fa-cc-amex" style={{style:"blue"}}></i>

                                    <i class="fa fa-cc-mastercard" style={{style:"red"}}></i>
                                    <i class="fa fa-cc-discover" style={{style:"orange"}}></i>
                                </div>
                                <label for="cname">Name on Card</label>
                                <input type="text" id="cname" name="cardname" placeholder="Credit Card"/>
                                <label for="ccnum">Credit card number</label>
                                <input type="text" id="ccnum" name="cardnumber" placeholder="9877 8876 6765 5656"/>
                                <label for="expmonth">Expiry Month</label>
                                <input type="text" id="expmonth" name="expmonth" placeholder="MM"/>
                                <div class="row">
                                    <div class="col-50">
                                        <label for="expyear">Expiry Year</label>
                                        <input type="text" id="expyear" name="expyear" placeholder="YY"/>
                                    </div>
                                    <div class="col-50">
                                        <label for="cvv">CVV</label>
                                        <input type="text" id="cvv" name="cvv" placeholder="922"/>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="signin">
                            <button class="signin-button" onclick="validate()"> <a href="#">Continue To
                                    Checkout</a></button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-25">
                <div class="container">
                    <h4>Cart <span class="price"style={{style:"black"}} ><i class="fa fa-shopping-cart"></i> <b>1</b></span>
                    </h4>
                    <p><a href="#">Course Price</a> <span class="price">$15</span></p>
                    <p><a href="#">Discount</a> <span class="price">-$5</span></p>
                    <p><a href="#">Tax</a> <span class="price">$1</span></p>

                    <hr/>
                    <p>Total <span class="price" style={{style:"black"}}><b>$11</b></span></p>
                </div>
            </div>

        </div>
    </div>
      </div>
    );
  }
  
  export default Payment;