import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function AdminAddProduct() {
  const [product, setProduct] = useState({
  name: "",
  price: "",
  oldPrice: "",
  discount: "",
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

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Logged-in admin ki information nikalo
    const admin = JSON.parse(
      sessionStorage.getItem("admin")
    );

    // Admin login nahi hai
    if (!admin) {
      toast.error("Please login as admin first");
      return;
    }

    // Product ke saath adminId bhejo
    const productData = {
      ...product,
      adminId: admin.id,
    };

    const res = await axios.post(
      "http://localhost:8700/products",
      productData
    );

    toast.success("Product Added Successfully 🎉");

    setProduct({
      name: "",
      price: "",
      oldPrice: "",
      discount: "",
      category: "",
      stock: "",
      description: "",
      image: "",
    });

  } catch (err) {
    console.log("ADD PRODUCT ERROR:", err);

    toast.error(
      err.response?.data?.message ||
      "Product Add Failed ❌"
    );
  }
};

  return (
    <div className="container mt-4">

      <ToastContainer position="top-right" autoClose={3000} />

      <div className="card shadow p-4">

        <h2 className="mb-4">Add Product</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Product Name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            className="form-control mb-3"
            placeholder="Price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />

          <input
  type="number"
  className="form-control mb-3"
  placeholder="Old Price"
  name="oldPrice"
  value={product.oldPrice}
  onChange={handleChange}
  required
/>

<input
  type="text"
  className="form-control mb-3"
  placeholder="Discount (Example: 30% OFF)"
  name="discount"
  value={product.discount}
  onChange={handleChange}
  required
/>

          <select
            className="form-control mb-3"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Women">Women</option>
            <option value="Men">Men</option>
            <option value="Beauty">Beauty</option>
            <option value="Sports">Sports</option>
            <option value="Medicine">Medicine</option>
          </select>

          <input
            type="number"
            className="form-control mb-3"
            placeholder="Stock"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            required
          />

          <textarea
            className="form-control mb-3"
            rows="4"
            placeholder="Description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Image URL"
            name="image"
            value={product.image}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="btn btn-danger w-100"
          >
            Add Product
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminAddProduct;