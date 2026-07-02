import { Routes, Route } from "react-router-dom";
import Login from "./modules/users/ath/UserLogin.js";
import Navbar from "./modules/shareconpnents/AppHeader.js";
import Footer from "./modules/shareconpnents/AppFooter.js";
import Register from "./modules/users/ath/UserRegister.js";
import Contant from "./modules/shareconpnents/AppContant.js"
import Home from "./Welcome.js";
import About from "./modules/shareconpnents/AppAbout.js"
import Error from "../src/modules/shareconpnents/ErrorPage.js";
import Story from "../src/modules/shareconpnents/OurStroy.js";
import WomenCollection from "./modules/shareconpnents/AppWomen.js";
import Dashboard from "./modules/users/userconponents/UserProfile.js";
import UserCart from "./modules/users/userconponents/UserCart.js";
import WishList from "./modules/users/ath/WishList.js";
import ProductCard from "./modules/shareconpnents/Product.js";



function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
     <Route path="/navbar" element={<Navbar/>} />
        <Route path="/footer" element={<Footer/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} /> 
     <Route path="/project" element={<Contant />} />
     <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} /> 
      <Route path="/stroy" element={<Story/>}></Route>
      <Route path= "/women" element={<WomenCollection/>}></Route>
       <Route path= "/dash" element={<Dashboard/>}></Route>
         <Route path= "/cart" element={<UserCart/>}></Route>
           <Route path= "/wish" element={<WishList/>}></Route>
         
          <Route path = "/product" element= {<ProductCard/>}></Route>


      
    </Routes>
  );
}

export default App;