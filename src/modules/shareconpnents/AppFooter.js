import React from "react";

function Footer() {
    return (
        <footer className="bg-black text-white py-5 mb-3">
            <div className="container" >
                <div className="row">
                    <div className="col-md-3">
                        <h5>Exclusive</h5>
                        <h6>Subscribe:</h6>
                        <p>Get 10% off your first order</p>

                        <div className="input-group">
                            <input type="text" className="form-control bg-black text-white" placeholder="Enter your email" />

                            <button className="btn btn-outline-light">
                                ➜
                            </button>

                        </div>

                    </div>

                    <div className="col-md-3">
                        <h6>Support</h6>
                        <p>111 Bijoy sarani, Dhaka</p>
                        <p>exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>

                    <div className="col-md-2">
                        <h6>Account</h6>
                        <p>My Account</p>
                        <p>Login/Register</p>
                        <p>Cart</p>
                        <p>Shop</p>
                    </div>

                    <div className="col-md-2">
                        <h6>Quick Link</h6>
                        <p>Privacy Policy</p>
                        <p>Terms Of Use</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                    </div>

                    <div className="col-md-2">
                        <h6>Download App</h6>
                        <p>Save $3 with App & New User Only</p>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Play Store"
                            className="img-fluid mb-2"
                        />

                        <img
                            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                            alt="App Store"
                            className="img-fluid"
                        />
                    </div>

                </div>

                <hr className="text-center textsecondary mt-4"/>
                <p className="text-center text-secondary mb-0">
                    © Copyright SmartBuy 2026. All rights reserved
                </p>


            </div>
        </footer>
    );
}

export default Footer;