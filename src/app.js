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
import WishList from "./modules/users/ath/WishList.js";
import Error from "./modules/shareconpnents/ErrorPage.js";
import EletronicsCollection from "./modules/shareconpnents/AppEletronic.js";
import MedicineCollection from "./modules/shareconpnents/AppMedicine.js";
import BeautCollection from "./modules/shareconpnents/Appbeauty.js";
import SportsCollection from "./modules/shareconpnents/Appsport.js";
import HomeLifestyle from "./modules/shareconpnents/AppLife.js";
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
        <Route path="wish" element={<WishList />} />
        <Route path="dash" element={<Dashboard />} />

      </Route>

      {/* Without Layout */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      {/* 404 */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;