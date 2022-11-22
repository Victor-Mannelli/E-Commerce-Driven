import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import CheckoutPage from "./pages/checkout";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import MyCartPage from "./pages/myCart";
import PageNotFound from "./pages/pageNotFound";
import RegistrationPage from "./pages/registration";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<PageNotFound />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/registration" element={<RegistrationPage />} />
				<Route path="/cart" element={<MyCartPage />} />
				<Route path="/checkout" element={<CheckoutPage />} />
			</Routes>
			<GlobalStyle/>
		</BrowserRouter>
	);
}