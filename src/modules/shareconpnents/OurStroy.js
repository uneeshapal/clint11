
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function OurStory() {
  return (
    <>
     

      <div className="container py-5">
        <div className="row align-items-center g-5">

          {/* Left Section */}
          <div className="col-lg-5">
            <h1 className="fw-bold mb-3">Our Story</h1>

            <p className="text-muted fs-5">
              Welcome to SmartBuy, your trusted destination for quality products
              and a seamless shopping experience.
            </p>

            <p className="text-secondary">
              Our mission is to make online shopping simple, affordable, and
              convenient for everyone. We offer a wide range of products with a
              strong focus on quality, reliability, and customer satisfaction.
            </p>

            <p className="text-secondary">
              At SmartBuy, we believe every customer deserves the best service
              and a hassle-free shopping journey. Thank you for choosing us and
              being a part of our growing community.
            </p>

            <button className="btn btn-primary mt-3">
              Explore More
            </button>
          </div>

          {/* Right Section */}
          <div className="col-lg-7">
            <img
              src="https://img.magnific.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Shopping"
              className="img-fluid rounded shadow"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover"
              }}
            />
          </div>

        </div>
      </div>

    
    </>
  );
}

export default OurStory;

