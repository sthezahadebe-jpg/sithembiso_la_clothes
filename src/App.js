import './App.css';
import Navbar from './component/Navbar';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Login from './component/Login';
import Register from './component/Register';
import Cart from "./component/Cart";
import Product from './component/Product';
import Products from './component/Products';
import { Routes, Route, } from "react-router-dom";
import Category from './component/Category';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
        <Route path="Category" element={<Category />} />
      </Routes>
  
    </div>
  );
}

export default App;
