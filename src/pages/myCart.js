import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import CartContext from "../contexts/CartContext";
import ProductInCart from "../productInCart";
import { PageDefaultStyle, StyledButton } from "../GeneralStyles";

export default function MyCartPage() {
	const navigate = useNavigate();
	const { cart } = useContext(CartContext);
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [discounts, setDiscounts] = useState(0); // TBD, no discounts for now
	const [freight, setFreight] = useState(0); // TBD, no freight for now

    useEffect(() => {
		let subt = 0;
		cart?.forEach((product) => {
			subt +=
				parseFloat(product.productPrice.replace("$", "").replace("/kg", "")) *
				parseInt(product.quantity);
		});
		setSubtotal(subt);
		setTotal(subt + discounts + freight);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cart]);

	return (
		<PageDefaultStyle>
			<Header />
			<MobileHeader />
			<StyledProductsInCart>
				<h4>My Cart</h4>
				{cart.length > 0 ? (
					cart?.map((product) => ProductInCart(product))
				) : (
					<h3>Your cart is empty...</h3>
				)}
			</StyledProductsInCart>
			<StyledCartSummary>
				<h1>Order summary</h1>
				<div className="mobile-hidden">
					<span>Subtotal</span>
					<span>{"$" + subtotal.toFixed(2)}</span>
				</div>
				<div className="mobile-hidden">
					<span>(-) Discounts</span>
					<span>{"$" + discounts.toFixed(2)}</span>
				</div>
				<div className="mobile-hidden">
					<span>(+) Freight</span>
					<span>{"$" + freight.toFixed(2)}</span>
				</div>
				<div>
					<span>Total</span>
					<span>{"$" + total.toFixed(2)}</span>
				</div>
				<StyledButton onClick={() => navigate("/checkout")}>Order now</StyledButton>
				<Link to="/"> Back to shopping </Link>
			</StyledCartSummary>
		</PageDefaultStyle>
	);
}

const StyledProductsInCart = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;	

	width: 100%;
	height: 100%;
	padding: 30px 380px 30px 30px;
	gap: 15px;

	font-family: "Roboto", sans-serif;
	@media (max-width: 993px) {
		padding: 30px 30px 270px 30px;
	}
	h1 {
		align-self: flex-start;
		font-size: 30px;
		font-weight: 700;
		margin-bottom: 10px;
		color: whitesmoke;
	}
	h3 {
		padding: 300px 0 0 100px;
		font-size: 38px;
	}
	h4 {
		font-size: 42px;
		color: whitesmoke;
	}
	.product-container {
		background-color: white;
		width: 100%;
		height: 120px;
		display: flex;
		align-items: center;
		border-radius: 15px;
		border: none;
		overflow: hidden;
	}
	img {
		max-height: 100%;
		min-width: 140px;
		padding: 20px 18px;
	}
	.info {
		width: 100%;
		padding: 30px 18px;
		h2 {
			font-weight: 700;
			font-size: 20px;
			margin-bottom: 5px;
		}
		p {
			color: gray;
			font-size: 15px;
			line-height: 20px;
		}
	}
	.buttons {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		height: 100%;
		button {
			display: flex;
			align-items: center;
			justify-content: center;

			width: 70px;
			height: 100%;

			border-radius: 0 15px 15px 0;
			border: none;
			background-color: black;
			color: white;
			font-size: 45px;
		}
	}
`;
const StyledCartSummary = styled.div`
  padding: 30px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 350px;
  background-color: whitesmoke;
  font-family: "Roboto", sans-serif;
  gap: 25px;
  box-shadow: rgba(0, 0, 0, 0.1) -10px -10px 15px -3px;
  @media (max-width: 993px) {
    margin-top: 0;
    padding-top: 20px;
    top: auto;
    bottom: 0;
    height: 250px;
    width: 100%;
    gap: 10px;
  }
  h1 {
    align-self: flex-start;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  button {
    margin-bottom: -10px;
    @media (max-width: 993px) {
      margin-bottom: 0;
    }
  }
`;