
import react from "react";
import { useNavigate } from "react-router-dom";
function Project() {
    const navigate = useNavigate();
    return (
        <div className="container my-5">
            <h2 className="fw-bold mb-4">New Arrival</h2>
            <div className="row g-3">
                {/* left */}
                <div className="col-md-6">
                    <div className="position-relative text-white rounded overflow-hidden"
                        style={{
                            backgroundImage: "url('https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22015298/vpavic_4278_20201030_0120.jpg?quality=90&strip=all&crop=16.666666666667,0,66.666666666667,100')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "400px"
                        }}>
                        <div className="position-absolute bottom-0 start-0 p-4">
                            <h3>PlayStation 5</h3>
                            <p>Black and White version of the PS5</p>
                                                        <button
    className="btn btn-light btn-sm"
    onClick={() => navigate("/men")}
>
    Shop Now
</button>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className="col-md-6">
                    <div className="position-relative text-white rounded overflow-hidden mb-3"
                        style={{
                            backgroundImage:
                                "url('https://media.istockphoto.com/id/620737318/photo/girl-at-black-background.jpg?s=612x612&w=0&k=20&c=S1SgnpoverSn6jj_fMNBTUKCdae548kq2lgrfNV_y54=')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "240px"
                        }}

                    >
                        <div className="position-absolute bottom-0 start-0 p-4">
                            <h3>Women's Collections</h3>
                            <p className="">Discover our latest women's collection</p>
                            <button
    className="btn btn-light btn-sm"
    onClick={() => navigate("/women")}
>
    Shop Now
</button>
                        </div>
                    </div>

                    {/* bottom */}

                    <div className="row g-3">

                        {/* Speaker Card */}
                        <div className="col-6">
                            <div
                                className="position-relative text-white rounded overflow-hidden"
                                style={{
                                    backgroundImage:
                                        "url('https://img.magnific.com/free-photo/black-headphones-black-surface_417767-378.jpg?semt=ais_hybrid&w=740&q=80')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "240px"
                                }}
                            >
                                <div className="position-absolute bottom-0 start-0 p-3">
                                    <h5>Speakers</h5>
                                    <p>Amazon wireless speakers</p>
                                                                                         <button
    className="btn btn-light btn-sm"
    onClick={() => navigate("/electronics")}
>
    Shop Now
</button>
           
                                </div>
                            </div>
                        </div>

                        {/* Perfume Card */}
                        <div className="col-6">
                            <div
                                className="position-relative text-white rounded overflow-hidden"
                                style={{
                                    backgroundImage:
                                        "url('https://static.vecteezy.com/system/resources/thumbnails/057/278/471/small/mockup-limpid-clear-glass-packaging-perfume-bottle-in-black-fabric-photo.jpg')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "240px"
                                }}
                            >
                                <div className="position-absolute bottom-0 start-0 p-3">
                                    <h5>Perfume</h5>
                                    <p>GUCCI INTENSE OUD EDP</p>
                                                                                           <button
    className="btn btn-light btn-sm"
    onClick={() => navigate("/beauty")}
>
    Shop Now
</button>
           
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>


     

    );
}

export default Project;