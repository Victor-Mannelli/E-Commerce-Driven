import axios from "axios";
import { useContext } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import CartContext from "./contexts/CartContext";
import UserContext from "./contexts/UserContext";

export default function ProductInCart({
	productId,
	productName,
	productImage,
	productPrice,
	quantity
}) {
	const { setCart } = useContext(CartContext);
	const { user } = useContext(UserContext);

	function deleteProduct(productId) {
		const config = {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
			data: {
				productId: productId,
			},
		};
		axios
			.delete("https://sundaymarket-api.onrender.com/cart", config)
			.then((res) => setCart(res.data))
			.catch((err) => console.log(err));
	}

	return (
		<div className="product-container" key={productId}>
			<img src={productImage} alt="product in cart" />
			<div className="info">
				<h2>{productName}</h2>
				<p> Quantity: {quantity}</p>
				<p>{productPrice}</p>
			</div>
			<div className="buttons">
				<button onClick={() => deleteProduct(productId)}>
					<HiOutlineXMark />
				</button>
			</div>
		</div>
	);
}