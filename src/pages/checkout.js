import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageDefaultStyle, StyledRegistrationInput } from "../GeneralStyles";
import { toast, ToastContainer } from "react-toastify";
import { StyledButton } from "../GeneralStyles";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";
import CartContext from "../contexts/CartContext";
import UserContext from "../contexts/UserContext";
import MobileHeader from "../components/MobileHeader";

export default function CheckoutPage() {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);
	const { cart, setCart } = useContext(CartContext);
	const [subtotal, setSubtotal] = useState(0);
	const [discounts, setDiscounts] = useState(0); // TBD, no discounts for now
	const [freight, setFreight] = useState(0); // TBD, no freight for now
	const [total, setTotal] = useState(0);
	const [form, setForm] = useState({
		name: "",
		email: "",
		country: "",
		zipcode: "",
		address: "",
		city: "",
		complement: "",
		creditCardNumber: "",
		creditCardName: "",
		creditCardExpirationDate: "",
		cardSecurityCode: "",
	});

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
	}, [cart]); // gets cart info

	function handleForm(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	function sendPayment(e) {
		e.preventDefault();
		if (!user) {
			navigate("/login");
		} else {
			const config = {
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			};
			const body = {
				userInfo: {
					personalInfo: {
						name: form.name,
						email: form.email,
					},
					shippingInfo: {
						country: form.country,
						zipcode: form.zipcode,
						address: form.address,
						city: form.city,
						complement: form.complement,
					},
					paymentInfo: {
						creditCardNumber: form.creditCardNumber,
						creditCardName: form.creditCardName,
						creditCardExpirationDate: form.creditCardExpirationDate,
						cardSecurityCode: form.cardSecurityCode,
					},
				},
				orderTotal: total,
				orderItems: {...cart},
			};
			axios
				.post("https://sundaymarket-api.onrender.com/orders", body, config)
				.then(() => {
					toast.success("Order created!");
					clearCart();
				})
				.catch((err) => {
					toast.error(`Something went wrong.\n${err.response.data[0]}`);
					console.log(err);
				});
		}
	}

	function clearCart() {
		const config = {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		};
		axios
			.delete("https://sundaymarket-api.onrender.com/orders", config)
			.then((res) => {
				setTimeout(() => navigate("/"), 3000);
				setCart([]);
			})
			.catch((err) => console.log(err));
	}

	return (
		<PageDefaultStyle>
			<Header />
			<MobileHeader />
			<StyledCheckoutForm onSubmit={sendPayment}>
				<div>
					<h1>Checkout</h1>
					<div>
						<h2>Personal info</h2>
						<StyledRegistrationInput
							type="text"
							name="name"
							onChange={handleForm}
							value={form.name}
							placeholder="Name"
							required
						/>
						<StyledRegistrationInput
							type="email"
							name="email"
							onChange={handleForm}
							value={form.email}
							placeholder="E-mail"
							required
						/>
					</div>
					<div>
						<h2>Shipping info</h2>
						<StyledRegistrationInput
							type="text"
							name="country"
							onChange={handleForm}
							value={form.country}
							placeholder="Country"
							required
						/>
						<StyledRegistrationInput
							type="text"
							name="zipcode"
							onChange={handleForm}
							value={form.zipcode}
							placeholder="Zipcode"
							required
						/>
						<StyledRegistrationInput
							type="text"
							name="address"
							onChange={handleForm}
							value={form.address}
							placeholder="Address"
							required
						/>
						<StyledRegistrationInput
							type="text"
							name="city"
							onChange={handleForm}
							value={form.city}
							placeholder="City"
							required
						/>
						<StyledRegistrationInput
							type="text"
							name="complement"
							onChange={handleForm}
							value={form.complement}
							placeholder="Complement"
							required
						/>
					</div>
					<div>
						<h2>Payment info</h2>
						<StyledRegistrationInput
							type="text"
							name="creditCardNumber"
							onChange={handleForm}
							value={form.creditCardNumber}
							placeholder="0000 0000 0000 0000"
							required
						/>
						<StyledRegistrationInput
							type="text"
							name="creditCardName"
							onChange={handleForm}
							value={form.creditCardName}
							placeholder="Name"
							required
						/>
						<StyledRegistrationInput
							type="month"
							name="creditCardExpirationDate"
							onChange={handleForm}
							value={form.creditCardExpirationDate}
							required
						/>
						<StyledRegistrationInput
							type="number"
							name="cardSecurityCode"
							onChange={handleForm}
							value={form.cardSecurityCode}
							placeholder="000"
							required
						/>
					</div>
				</div>
				<RightSideForm>
					<StyledCartSummary>
						<h1>Order summary</h1>
						<OrderSummaryMiddle>
							<div>
								<span>Subtotal</span>
								<span>{"$" + subtotal.toFixed(2)}</span>
							</div>
							<div>
								<span>(-) Discounts</span>
								<span>{"$" + discounts.toFixed(2)}</span>
							</div>
							<div>
								<span>(+) Freight</span>
								<span>{"$" + freight.toFixed(2)}</span>
							</div>
							<div>
								<span>Total</span>
								<span>{"$" + total.toFixed(2)}</span>
							</div>
						</OrderSummaryMiddle>
						<div>
							<StyledButton type="submit">Order now</StyledButton>
							<StyledButton onclick={() => navigate("/cart")}>
								Back to cart
							</StyledButton>
						</div>
					</StyledCartSummary>
				</RightSideForm>
			</StyledCheckoutForm>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</PageDefaultStyle>
	);
}

const StyledCheckoutForm = styled.form`
	display: grid;
	grid-template-columns: auto 400px;

	width: 100%;
	height: 100%;

	padding: 30px 0 30px 30px;
	font-family: "Roboto", sans-serif;

	h1 {
		align-self: flex-start;
		font-size: 30px;
		font-weight: 700;
		margin-bottom: 10px;
		color: var(--darkmode);
	}
	h2 {
		align-self: flex-start;
		font-size: 22px;
		font-weight: 700;
		margin-bottom: 7px;
		color: black;
	}

	@media (max-width: 993px) {
		grid-template-columns: 100%;
		grid-template-rows: auto auto;
		gap: 20px;
		padding: 30px;
		/* padding-bottom: 0 30px 250px 0; */
	}
`;
const StyledCartSummary = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 100%;

	padding: 70px 30px 70px 30px;
	border-radius: 10px;
	background-color: whitesmoke;
	font-family: "Roboto", sans-serif;
	box-shadow: rgba(0, 0, 0, 0.1) -10px -10px 15px -3px;

	h1 {
		align-self: flex-start;
		font-size: 30px;
		font-weight: 700;
	}
	button {
		@media (max-width: 993px) {
			margin-bottom: 0;
		}
	}
	@media (max-width: 993px) {
		width: 100%;
		padding: 25px;
	}
`;
const OrderSummaryMiddle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
	gap: 55px;
	font-size: 20px;
	div {
		display: flex;
		justify-content: space-between;
	}
`;
const RightSideForm = styled.div`
	padding: 0 30px;
	@media (max-width: 993px) {
		padding: 0;
	}
`;
