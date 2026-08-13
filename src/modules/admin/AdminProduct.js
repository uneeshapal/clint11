import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



function AdminProduct() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

const getProducts = async () => {
  try {
    const admin = JSON.parse(sessionStorage.getItem("admin"));

    if (!admin) {
      toast.error("Admin not logged in");
      navigate("/admin/login");
      return;
    }

    const res = await axios.get(
      "http://localhost:8700/products",
      {
        params: {
          adminId: admin.id,
        },
      }
    );

    setProducts(res.data.products);

  } catch (err) {
    console.log("GET PRODUCTS ERROR:", err);
    toast.error("Products Load Failed");
  }
};

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await axios.delete(`http://localhost:8700/products/${id}`);
      toast.success("Product Deleted");
      getProducts();
    } catch (err) {
      toast.error("Delete Failed");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mt-4">

      <h2 className="mb-4">Product List</h2>

      <table className="table table-bordered table-hover">

        <thead className="table-dark">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item._id}>

              <td>
                <img
                  src={item.image}
                  width="70"
                  height="70"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </td>

              <td>{item.name}</td>
              <td>₹{item.price}</td>
              <td>{item.category}</td>
              <td>{item.stock}</td>

              <td>
               <button
  className="btn btn-warning btn-sm me-2"
  onClick={() => navigate(`/admin/edit-product/${item._id}`)}
>
  Edit
</button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteProduct(item._id)}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default AdminProduct;