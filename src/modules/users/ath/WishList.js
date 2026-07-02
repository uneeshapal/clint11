import React from "react";

function wishList() {
  const styles = {
    page: {
      background: "#f1f3f6",
      minHeight: "100vh",
      padding: "30px",
    },

    card: {
      background: "#fff",
      borderRadius: "8px",
      padding: "20px",
      marginBottom: "20px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },

    image: {
      width: "120px",
      borderRadius: "5px",
    },

    button: {
      marginRight: "10px",
      borderRadius: "5px",
    },

    priceBox: {
      background: "#fff",
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      position: "sticky",
      top: "20px",
    },
  };

  return (
    <div style={styles.page}>
      <div className="container-fluid">
        <div className="row">

          <div className="col-lg-8">

            <div style={styles.card}>

              <div className="row align-items-center">

                <div className="col-md-2 text-center">

                  <img
                    src="https://via.placeholder.com/120"
                    alt=""
                    style={styles.image}
                  />

                </div>

                <div className="col-md-10">

                  <h4>Printed Saree</h4>

                  <h5>
                    ₹688
                    <del className="ms-2 text-secondary">
                      ₹1999
                    </del>
                  </h5>

                  <p className="text-success">
                    Delivery by Jul 5
                  </p>

                  <button
                    className="btn btn-outline-secondary"
                    style={styles.button}
                  >
                    Save For Later
                  </button>

                  <button
                    className="btn btn-outline-danger"
                    style={styles.button}
                  >
                    Remove
                  </button>

                  <button className="btn btn-warning">
                    Buy Now
                  </button>

                </div>

              </div>

            </div>

          </div>

          <div className="col-lg-4">

            <div style={styles.priceBox}>

              <h4>Price Details</h4>

              <hr />

              <div className="d-flex justify-content-between">
                <span>Price</span>
                <span>₹1999</span>
              </div>

              <div className="d-flex justify-content-between">
                <span>Discount</span>
                <span className="text-success">
                  -₹1311
                </span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>₹688</span>
              </div>

              <button className="btn btn-warning w-100 mt-3">
                Place Order
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default wishList;