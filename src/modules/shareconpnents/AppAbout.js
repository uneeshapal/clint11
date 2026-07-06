import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../../css/global.css";


function Contact() {
    return (
        <>
         
            <div className="container my-5">
                <div className="row g-4">
                    {/* left */}
                    <div className="col-lg-4">
                        <div className="shadow p-4 bg-white rounded">
                            <div className="mb-4">
                                <h5>
                                    <FaPhoneAlt className="text-danger me-2" />
                                    Call To Us
                                </h5>
                                <p>We are available 24/7, 7 days a week.</p>
                                <p>Phone: +8801611112222</p>
                            </div>
                            <hr />

                            <div>
                                <h5>
                                    <FaEnvelope className="text-danger me-2" />
                                    Write To Us
                                </h5>

                                <p>
                                    Fill out our form and we will contact you within 24 hours.
                                </p>

                                <p>Email: customer@exclusive.com</p>
                                <p>Email: support@exclusive.com</p>
                            </div>

                        </div>


                    </div>



                    {/* right */}

                    <div className="col-lg-6" >
                        <div className="shadow p-4 bg-white rounded">
                            <form>
                                <div className="row">

                                    <div className="col-md-4 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Name"
                                        />
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Name"
                                        />
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Name"
                                        />
                                    </div>

                                    <textarea
                                        className="form-control"
                                        rows="6"
                                        placeholder="Your Message"
                                    ></textarea>

                                    <div className="text-end mt-4">
                                        <button className="btn contact-btn">
                                            Send Message
                                        </button>
                                    </div>


                                </div>


                            </form>


                        </div>
                    </div>

                </div>

            </div>


         
        </>
    );
}

export default Contact;