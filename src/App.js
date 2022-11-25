import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./GlobalStyles";
import CheckoutPage from "./pages/checkout";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import MyCartPage from "./pages/myCart";
import PageNotFound from "./pages/pageNotFound";
import ProductPage from "./pages/product";
import RegistrationPage from "./pages/registration";

import UserContext from "./contexts/UserContext";
import CartContext from "./contexts/CartContext";

export default function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/cart" element={<MyCartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
          <GlobalStyle />
        </BrowserRouter>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}
