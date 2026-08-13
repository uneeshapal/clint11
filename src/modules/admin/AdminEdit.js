import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AdminEditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const getProduct = async () => {
    try {
      const res = await axios.get("http://localhost:8700/products");

      const data = res.data.products.find((item) => item._id === id);

      if (data) {
        setProduct(data);
      }
    } catch (err) {
      toast.error("Product Load Failed");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const updateProduct = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:8700/products/${id}`,
        product
      );

      toast.success("Product Updated Successfully");

      navigate("/admin/products");

    } catch (err) {
      toast.error("Update Failed");
    }
  };

  return (
    <div className="container mt-4">

      <div className="card shadow p-4">

        <h2>Edit Product</h2>

        <form onSubmit={updateProduct}>

          <input
            className="form-control mb-3"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
          />

          <input
            className="form-control mb-3"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
          />

          <input
            className="form-control mb-3"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Category"
          />

          <input
            className="form-control mb-3"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            placeholder="Stock"
          />

          <textarea
            className="form-control mb-3"
            rows="4"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
          />

          <input
            className="form-control mb-3"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Image URL"
          />

          <img
            src={product.image}
            alt=""
            width="150"
            className="mb-3"
          />

          <button
            className="btn btn-success w-100"
            type="submit"
          >
            Update Product
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminEditProduct;