import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";
import styled from "styled-components";

export default function Product({ name, price, image, quantity, productId }) {
	const navigate = useNavigate();
	return (
		<IndividualProducts>
			<img src={image} alt="" />
			<ProductDescription quantity={quantity}>
				<h1> {name} </h1>
				<h1> {price} </h1>
				{quantity > 0 ? <h2> In Stock </h2> : <h3> Out of Stock</h3>}
				{quantity === "0" ? (
					<div>
						<CartIconNoStock />
						<h1> Add to cart </h1>
					</div>
				) : (
					<div onClick={() => navigate(`/product/${productId}`)}>
						<CartIcon />
						<h1> Add to cart </h1>
					</div>
				)}
			</ProductDescription>
		</IndividualProducts>
	);
}
const IndividualProducts = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 250px;
	background-color: #262a2b;
	border-radius: 5px;
	img {
		width: 220px;
		height: 130px;
		margin-top: 15px;
		border-radius: 5px;
	}
`;
const ProductDescription = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
	padding: 10px 15px;
	font-family: "Roboto", sans-serif;
	color: var(--darkmodeText);
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 33px;
		background-color: var(--darkmode);
		border-radius: 5px;
		gap: 10px;
		cursor: pointer;
		:hover {
			background-color: ${(props) => props.quantity > 0 && "gray"};
		}
		h1 {
			padding: 0;
		}
	}
	h1,
	h2,
	h3 {
		padding-bottom: 10px;
	}
	h2 {
		color: #5edc5f;
	}
	h3 {
		color: red;
	}
`;
const CartIcon = styled(FaCartPlus)`
	color: var(--darkmodeText);
	width: 25px;
	height: 25px;
`;
const CartIconNoStock = styled(MdRemoveShoppingCart)`
	color: var(--darkmodeText);
	width: 25px;
	height: 25px;
`;
