import Home from "./home";
import Login from "./login";
import Product from "./product";
import Register from "./register";
import Cart from "./cart";
import Error from "./error";
import Navbar from "../componets/navbar";
import Footer from "../componets/footer";
import Wishlist from "./wishlist";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";


const Layout = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default Layout