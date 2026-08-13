import Contant from "./modules/shareconpnents/AppContant"
import Sidebar from "./modules/shareconpnents/AppSidebar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../src/css/global.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart } from "react-icons/fa";


function Welcome() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [bestSellingProducts, setBestSellingProducts] = useState([]);


    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const res = await axios.get("http://localhost:8700/products");

            if (res.data.success) {
                setProducts(res.data.products);
            }

            const bestRes = await axios.get(
                "http://localhost:8700/best-selling"
            );

            if (bestRes.data.success) {
                setBestSellingProducts(bestRes.data.products);
            }

        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>


            {/* side hero */}
            <div className="container mt-4 hero-section">

                <div className="container home-top-section">

                    <div className="row g-3 align-items-stretch">

                        {/* SIDEBAR */}
                        <div className="col-lg-3 d-none d-lg-block">
                            <Sidebar />
                        </div>

                        {/* HERO */}
                        <div className="col-lg-9">

                            <Carousel fade interval={3000} pause={false}>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded"
                                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200"
                                        alt="Big Sale"
                                    />

                                    <Carousel.Caption>
                                        <h2>Big Sale</h2>
                                        <p>Up to 70% OFF</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded"
                                        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200"
                                        alt="Latest Smartphones"
                                    />

                                    <Carousel.Caption>
                                        <h2>Latest Smartphones</h2>
                                        <p>New Collection Available</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded"
                                        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200"
                                        alt="Headphones"
                                    />

                                    <Carousel.Caption>
                                        <h2>Headphones</h2>
                                        <p>Premium Sound Quality</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>

                        </div>

                    </div>

                </div>

            </div>

            {/* sale */}

            <div className="container flash-sale-section">

                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>🔥 Flash Sales</h2>
                    <button className="btn btn-danger">View All</button>
                </div>

                <div className="row mb-4">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Product..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="col-md-3">
                        <select
                            className="form-select"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">All Categories</option>
                            <option value="Women">Women</option>
                            <option value="Men">Men</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Sports">Sports</option>
                            <option value="Medicine">Medicine</option>
                            <option value="Lifestyle">Lifestyle</option>
                        </select>
                    </div>
                </div>
                <div className="row g-3">
                    {products
                        .filter((product) => product.showOnHome === true)
                        .filter((product) =>
                            product.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        )
                        .filter((product) =>
                            category === ""
                                ? true
                                : product.category === category
                        )
                        .slice(0, 8)
                        .map((product) => (
                            <div className="col-md-3" key={product._id}>

                                <div
                                    className="card border-0 shadow-sm product-card"
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                        navigate("/women/product", {
                                            state: product,
                                        })
                                    }
                                >

                                    <div className="position-relative bg-light p-3">

                                        <span
                                            className="badge bg-success position-absolute"
                                            style={{
                                                top: "10px",
                                                left: "10px"
                                            }}
                                        >
                                            -40%
                                        </span>

                                        <div
                                            className="position-absolute"
                                            style={{
                                                top: "10px",
                                                right: "10px"
                                            }}
                                        >
                                            <div className="bg-white rounded-circle p-2">
                                                <FaHeart />
                                            </div>
                                        </div>

                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="card-img-top product-image"
                                            style={{
                                                height: "180px",
                                                objectFit: "cover"
                                            }}
                                            onError={(e) => {
                                                e.target.src =
                                                    "https://via.placeholder.com/300x220?text=No+Image";
                                            }}
                                        />

                                    </div>

                                    <div className="card-body text-center">

                                        <h5>{product.name}</h5>

                                        <p className="fw-bold text-danger">
                                            ₹{product.price}
                                        </p>

                                        <button className="btn btn-warning w-100">
                                            View Details
                                        </button>

                                    </div>

                                </div>

                            </div>
                        ))}
                </div>

            </div>
            {/* best selling products */}

            <div className="container best-selling-section">

                <h2 className="mb-4">Best Selling Product</h2>

                <div className="row g-4">

                    {bestSellingProducts.map((product) => (

                        <div className="col-md-3" key={product._id}>

                            <div className="card border-0 shadow-sm product-card">

                                <div className="position-relative bg-light p-3">

                                    <span
                                        className="badge bg-success position-absolute"
                                        style={{
                                            top: "10px",
                                            left: "10px"
                                        }}
                                    >
                                        Best Seller
                                    </span>

                                    <div
                                        className="position-absolute"
                                        style={{
                                            top: "10px",
                                            right: "10px"
                                        }}
                                    >
                                        <div className="bg-white rounded-circle p-2">
                                            <FaHeart />
                                        </div>
                                    </div>

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="card-img-top product-image"
                                        style={{
                                            height: "220px",
                                            objectFit: "cover"
                                        }}
                                        onError={(e) => {
                                            e.target.src =
                                                "https://via.placeholder.com/300x220?text=No+Image";
                                        }}
                                    />

                                </div>

                                <div className="card-body text-center">

                                    <h5>{product.name}</h5>

                                    <p className="fw-bold text-danger">
                                        ₹{product.price}
                                    </p>

                                    <button
                                        className="btn btn-warning w-100"
                                        onClick={() =>
                                            navigate("/women/product", {
                                                state: product
                                            })
                                        }
                                    >
                                        View Details
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
            <Contant />


        </>
    );
}

export default Welcome;