import { Routes, Route } from "react-router-dom";

import UserLayout from "./modules/users/masterlayout/blankPage.js";

import Login from "./modules/users/ath/UserLogin.js";
import Register from "./modules/users/ath/UserRegister.js";

import Home from "./Welcome.js";
import About from "./modules/shareconpnents/AppAbout.js";
import Contant from "./modules/shareconpnents/AppContant.js";
import Story from "./modules/shareconpnents/OurStroy.js";
import WomenCollection from "./modules/shareconpnents/AppWomen.js";
import ProductCard from "./modules/shareconpnents/Product.js";
import BuyNow from "./modules/shareconpnents/BuyNow.js";
import Dashboard from "./modules/users/userconponents/UserProfile.js";
import UserCart from "./modules/users/userconponents/UserCart.js";
import WishList from "./modules/users/ath/WishList.js";
import Error from "./modules/shareconpnents/ErrorPage.js";
import MenCollection from "./modules/shareconpnents/AppMen.js";
import EletronicsCollection from "./modules/shareconpnents/AppEletronic.js";
import MedicineCollection from "./modules/shareconpnents/AppMedicine.js";
// import BeautCollection from "./modules/shareconpnents/AppBeauty.js";
// import SportsCollection from "./modules/shareconpnents/AppSports.js";
import HomeLifestyle from "./modules/shareconpnents/AppLife.js";

function App() {
  return (
    <Routes>

      {/* Layout Routes */}
      <Route path="/" element={<UserLayout />}>

        <Route index element={<Home />} />

        <Route path="about" element={<About />} />

        <Route path="project" element={<Contant />} />

        <Route path="story" element={<Story />} />

      


<Route path="/women">
    <Route index element={<WomenCollection />} />

    <Route path="product" element={<ProductCard />} />

    <Route path="product/buynow" element={<BuyNow />} />
</Route>
  

<Route path="men" element={<MenCollection />} />

<Route path="electronics" element={<EletronicsCollection />} />

<Route path="medicine" element={<MedicineCollection />} />
{/* 
<Route path="beauty" element={<BeautCollection />} />

<Route path="sports" element={<SportsCollection />} /> */}

       <Route path="lifestyle" element={<HomeLifestyle />} />
        <Route path="cart" element={<UserCart />} />

        <Route path="wish" element={<WishList />} />

        <Route path="dash" element={<Dashboard />} />


      </Route>

      {/* Without Layout */}
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="*" element={<Error />} />

    </Routes>
  );
}

export default App;