import react from "react";
import Navbar from "./AppHeader.js";
import Footer from "./AppFooter.js";

function End() {
    return (
        <div>
            <Navbar />
            <div className="container my-5 ">
                <h1 className="text-center">404 - Page Not Found</h1>
                <p className="text-center">Sorry, the page you are looking for does not exist.</p>

                <button className="btn btn-danger d-block mx-auto mt-4" onClick={() => window.location.href = "/"}>
                   Back to Home
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default End;