import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./componants/Footer/footer.jsx";
import LoginPopup from "./componants/LoginPopup/LoginPopup.jsx";
import Navbar from "./componants/Navbar/Navbar.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Home from "./pages/Home/Home.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";

const App = () => {

  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
