import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Review from "./Components/Review";
import CustomerSupport from "./Components/CustomerSupport";
import Craft from "./Components/Craft";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Chaats from "./Components/Chaats";
import Card from "./Components/Card";
import Cart from "./Components/Cart"
import Search from "./Components/Search";
import { useState } from "react"; 
import WishList from "./Components/WishList"     ;
import '@fortawesome/fontawesome-free/css/all.min.css';                                                                                                                                                             

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };
  const [likeItems, setLikeItems] = useState([]);
  const addToLike= (item) => {
    setLikeItems((prev) => [...prev, item]);
  };
   
  return (
    <BrowserRouter>
      <Navbar cartCount={cartItems.length}/>
      <Search />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jewelry" element={<Card addToCart={addToCart} addToLike={addToLike}/>} />
          <Route path="/craft" element={<Craft addToCart={addToCart} addToLike={addToLike}/>} />
          <Route path="/food" element={<Chaats addToCart={addToCart} addToLike={addToLike} />} />
          <Route path="/review" element={<Review />} />
          <Route path="/support" element={<CustomerSupport />} />
          <Route path="*" element={<Home />} /> {/* fallback route */}
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/WishList" element={<WishList likeItems={likeItems} />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
