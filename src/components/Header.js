import { useContext, useEffect } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import CartContext from "../contexts/CartContext";
import axios from "axios";

export default function Header() {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);
	const { cart, setCart } = useContext(CartContext);

	useEffect(() => {
		if (user) {
			const config = {
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			};
			axios
				.get("https://sundaymarket-api.onrender.com/cart", config)
				.then((res) => setCart([...res.data]))
				.catch((err) => console.log(err));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	return (
		<HeaderStyle>
			<h1 onClick={() => navigate("/")}> Sunday Market </h1>
			<Filters>
				<h2 onClick={() => navigate("/categories/meat")}> Meats </h2>
				<h2 onClick={() => navigate("/categories/beverage")}> Beverages </h2>
				<h2 onClick={() => navigate("/categories/grains")}> Grains </h2>
				<h2 onClick={() => navigate("/categories/dessert")}> Desserts </h2>
			</Filters>
			<UserFeatures>
				<div onClick={() => navigate("/login")} className="user-features-icons">
					<AiOutlineUser />
					<span>{user ? user?.name : ""}</span>
				</div>
				<div onClick={() => navigate("/cart")} className="user-features-icons">
					<AiOutlineShoppingCart />
					<span>{`(${cart?.length})`}</span>
				</div>
			</UserFeatures>
		</HeaderStyle>
	);
}
const HeaderStyle = styled.div`
	position: fixed;
	z-index: 2;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 70px;
	width: 100%;
	padding: 0 25px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
		rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
	background-color: var(--darkmodeHeader);
	color: var(--darkmodeText);
	font-family: "Roboto", sans-serif;
	h1 {
		position: absolute;
		left: 25px;
		top: 20px;
		font-family: "Patrick Hand", cursive;
		font-size: 27px;
		cursor: pointer;
	}
	@media (max-width: 993px) {
		display: none;
	}
`;
const Filters = styled.div`
	display: flex;
	justify-content: space-around;
	width: 40%;
	h2 {
		cursor: pointer;
	}
`;
const UserFeatures = styled.div`
	position: absolute;
	right: 25px;
	top: 20px;
	display: flex;
	gap: 15px;
	font-size: 27px;
	.user-features-icons {
		cursor: pointer;
		display: flex;
		align-items: center;
		span {
			font-size: medium;
		}
	}
`;
