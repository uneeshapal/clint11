import { Routes, Route } from "react-router-dom";

import UserLayout from "./modules/users/masterlayout/blankPage.js";
import Login from "./modules/users/ath/UserLogin.js";
import Register from "./modules/users/ath/UserRegister.js";
import Home from "./Welcome.js";
import About from "./modules/shareconpnents/AppAbout.js";
import Contant from "./modules/shareconpnents/AppContant.js";
import Story from "./modules/shareconpnents/OurStroy.js";
import WomenCollection from "./modules/shareconpnents/AppWomen.js";
import MenCollection from "./modules/shareconpnents/AppMen.js";
import ProductCard from "./modules/shareconpnents/Product.js";
import BuyNow from "./modules/shareconpnents/BuyNow.js";
import Dashboard from "./modules/users/userconponents/UserProfile.js";
import UserCart from "./modules/users/userconponents/UserCart.js";
// import WishList from "./modules/users/ath/WishList.js";
import Error from "./modules/shareconpnents/ErrorPage.js";
import EletronicsCollection from "./modules/shareconpnents/AppEletronic.js";
import MedicineCollection from "./modules/shareconpnents/AppMedicine.js";
import BeautCollection from "./modules/shareconpnents/Appbeauty.js";
import SportsCollection from "./modules/shareconpnents/Appsport.js";
import HomeLifestyle from "./modules/shareconpnents/AppLife.js";
import Payment from "./modules/shareconpnents/AppPayment.js";
import CardPayment from "./modules/shareconpnents/AppCardpay.js";
import AdminLogin from "../src/modules/admin/Adminlogin.js";
import AdminDashboard from "../src/modules/admin/AdminDashboard.js";
// import AdminSidebar from "../src/modules/admin/AdminSidebar.js";
// import AdminNavbar from "../src/modules/admin/AdminNavbar.js";
import AdminProducts from "../src/modules/admin/AdminProduct.js";
import AdminAddProduct from "../src/modules/admin/AdminAddProduct.js";
import AdminOrder from "./modules/admin/AdminOrder.js";
import AdminEditProduct from "./modules/admin/AdminEdit.js";
import AdminRegister from "./modules/admin/AdminRegister.js";


function App() {
  return (
    <Routes>
      {/* Layout Routes */}
      <Route path="/" element={<UserLayout />}>

        {/* Home */}
        <Route index element={<Home />} />

        {/* Static Pages */}
        <Route path="about" element={<About />} />
        <Route path="project" element={<Contant />} />
        <Route path="story" element={<Story />} />

        {/* Women Collection */}
        <Route path="women">
          <Route index element={<WomenCollection />} />
          <Route path="product" element={<ProductCard />} />
          <Route path="product/buynow" element={<BuyNow />} />
        </Route>

        {/* Men Collection */}
        <Route path="men">
          <Route index element={<MenCollection />} />
          <Route path="product" element={<ProductCard />} />
          <Route path="product/buynow" element={<BuyNow />} />
        </Route>

        {/* eletronic Collections */}


        <Route path="electronics">
          <Route index element={<EletronicsCollection />} />
          <Route path="product" element={<ProductCard />} />
          <Route path="product/buynow" element={<BuyNow />} />
        </Route>

        {/* medicine collection */}
        <Route path="medicine">
          <Route index element={<MedicineCollection />} />
          <Route path="product" element={<ProductCard />} />
          <Route path="product/buynow" element={<BuyNow />} />
        </Route>


        {/* home collection */}

        <Route path="lifestyle">
          <Route index element={<HomeLifestyle />} />
          <Route path="product" element={<ProductCard />} />
          <Route path="product/buynow" element={<BuyNow />} />
        </Route>


        {/* beauty collection */}
        <Route path="beauty">
          <Route index element={<BeautCollection />} />
          <Route path="product" element={<ProductCard />} />
          <Route path="product/buynow" element={<BuyNow />} />
        </Route>



        {/* sport collection */}
        <Route path="sports">
          <Route index element={<SportsCollection />} />
          <Route path="product" element={<ProductCard />} />
          <Route path="product/buynow" element={<BuyNow />} />
        </Route>



        {/* User Pages */}
        <Route path="cart" element={<UserCart />} />
        {/* <Route path="wish" element={<WishList />} /> */}
        <Route path="dash" element={<Dashboard />} />

      </Route>

      {/* Without Layout */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      {/* 404 */}
      <Route path="*" element={<Error />} />


       {/* payment */}
     
   <Route path="payment" element={<Payment />} />

{/* card payment */}
   <Route path="card-payment" element={<CardPayment />} />

{/* admin */}
<Route path="/admin/login" element={<AdminLogin />} />
<Route path="/admin/register" element={<AdminRegister />} />


<Route path="/admin" element={<AdminDashboard />}>
  <Route index element={<AdminProducts />} />
  <Route path="products" element={<AdminProducts />} />
  <Route path="add-product" element={<AdminAddProduct />} />
  <Route path="edit-product/:id" element={<AdminEditProduct />} />
  <Route path="orders" element={<AdminOrder />} />
</Route>
    </Routes>

    



  );
}

export default App;