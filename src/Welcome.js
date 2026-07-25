import Contant from "./modules/shareconpnents/AppContant"
import Sidebar from "./modules/shareconpnents/AppSidebar";
import { useNavigate } from "react-router-dom";
import "../src/css/global.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart } from "react-icons/fa";


function Welcome() {
    const navigate = useNavigate();
    const products = [
        {
            id: 1,
            name: "product 1",
            price: "$19.99",
            image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
        },
        {
            id: 2,
            name: "Product 2",
            price: "$29.99",
            image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
        },
        {
            id: 3,
            name: "Product 3",
            price: "$39.99",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
        },
        {
            id: 4,
            name: "Product 4",
            price: "$49.99",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        },
        {
            id: 5,
            name: "Product 5",
            price: "$59.99",
            image: "https://i.guim.co.uk/img/media/03ace53e96dbca4787321bdbd5a0a08cbc9a3de8/831_93_5353_4282/master/5353.jpg?width=445&dpr=1&s=none&crop=none"
        },
        {
            id: 6,
            name: "Product 6",
            price: "$69.99",
            image: "https://gsmimpex.in/images/Electronics/Digital%20Cameras%20wholesaler.jpg"
        },
        {
            id: 7,
            name: "Product 7",
            price: "$79.99",
            image: "https://www.domesticappliances.philips.co.in/cdn/shop/files/NEWHD9200_90_1_94db0eef-35fc-4bd4-83c8-7f4c747232ec.png?v=1756195826&width=600"
        },
        {
            id: 8,
            name: "Product 8",
            price: "$89.99",
            image: "https://www.thebodyshop.com/cdn/shop/files/25Q3_VITAMIN_E_BARRIER_CT1_INAJRHP012-MOBILE_image-full_smaller.jpg?crop=center&height=825&v=1773832387&width=688"
        }

    ];
    const bestSellingProducts = [
        {
            id: 1,
            name: "product 1",
            price: "$19.99",
            image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/apple/494741635/0/fZwS6-DckH-zv5nKgBuLs-Apple-iPhone-17-Pro-494741635-i-1-1200Wx1200H.jpeg"
        },
        {
            id: 2,
            name: "Product 2",
            price: "$29.99",
            image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/miko/494229842/0/5-z-KG2bcru-494229842-1_2936.webp"
        },
        {
            id: 3,
            name: "Product 3",
            price: "$39.99",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjjSGc2v4NWHL1JTEddMUv2wrwauo12EgllrzJCcqcuTTiri5zyHX9Jtg&s=10"
        }
    ];
    return (
        <>


            {/* side hero */}
            <div className="container mt-4">
                <div className="row">
                    <Sidebar />

                    <div className="col-md-9">
                        <Carousel fade interval={3000} pause={false}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200"
                                    alt="Slide 1"
                                    style={{ height: "350px", objectFit: "cover" }}
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
                                    alt="Slide 2"
                                    style={{ height: "350px", objectFit: "cover" }}
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
                                    alt="Slide 3"
                                    style={{ height: "350px", objectFit: "cover" }}
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

            {/* sale */}

            <div className="container my-5">

                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>🔥 Flash Sales</h2>
                    <button className="btn btn-danger">View All</button>
                </div>
                <div className="row g-4">
                    {products.map((product) => (
                        <div className="col-md-3" key={product.id}>
                            <div className="card border-0 shadow-sm product-card">
                                <div className="position-relative bg-light p-3">
                                    <span
                                        className="badge bg-danger position-absolute"
                                        style={{ top: "10px", left: "10px" }}
                                    >
                                        -40%
                                    </span>

                                    <div
                                        className="position-absolute"
                                        style={{ top: "10px", right: "10px" }}
                                    >
                                        <div className="bg-white rounded-circle p-2 mb-2">
                                            <FaHeart />
                                        </div>

                                    </div>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="card-img-top product-image"
                                        style={{ height: "220px", objectFit: "cover" }}
                                    />
                                </div>
                                <div className="card-body text-center">
                                    <h5>{product.name}</h5>

                                    <p className="fw-bold text-danger">
                                        {product.price}
                                    </p>

                                    <button
                                        className="btn btn-warning w-100"
                                        onClick={() =>
                                            navigate("/women/product", {
                                                state: product,
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
            {/* best selling products */}

            <div className="container my-5">
                <h2 className="mb-4">Best Selling Product </h2>

                <div className="row g-4">
                    {bestSellingProducts.map((bestSellingProducts) => (
                        <div className="col-md-3" key={bestSellingProducts.id}>
                            <div className="card border-0 shadow-sm product-card">
                                <div className="position-relative bg-light p-3">
                                    <span
                                        className="badge bg-danger position-absolute"
                                        style={{ top: "10px", left: "10px" }}
                                    >
                                        -8%
                                    </span>

                                    <div
                                        className="position-absolute"
                                        style={{ top: "10px", right: "10px" }}
                                    >
                                        <div className="bg-white rounded-circle p-2 mb-2">
                                            <FaHeart />
                                        </div>

                                    </div>
                                    <img
                                        src={bestSellingProducts.image}
                                        alt={bestSellingProducts.name}
                                        className="card-img-top product-image"
                                        style={{ height: "220px", objectFit: "cover" }}
                                    />
                                </div>
                                <div className="card-body text-center">
                                    <h5>{bestSellingProducts.name}</h5>

                                    <p className="fw-bold text-danger">
                                        {bestSellingProducts.price}
                                    </p>

                                    <button
                                        className="btn btn-warning w-100"
                                        onClick={() =>
                                            navigate("/women/product", {
                                                state: bestSellingProducts,
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