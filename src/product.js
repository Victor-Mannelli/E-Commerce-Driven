import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa"
import styled from "styled-components";

export default function Product({ name, price, type, image, productId }) {
	const navigate = useNavigate();
	return (
		<IndividualProducts>
			<img src={image} alt="" />
			<div>
				<h1> {name} </h1>
				<h1> {price} </h1>
			</div>
			<CartIcon onClick={() => navigate(`/product/${productId}`)}/>
		</IndividualProducts>
	);
}
const IndividualProducts = styled.div`
	position: relative;
	div {
		display: flex;
		justify-content: space-around;
		font-family: 'Roboto', sans-serif;
		color: var(--darkmodeText)
	}
	img {
		position: relative;
		border-radius: 5px;
	}
`;
const CartIcon = styled(FaCartPlus)`
	cursor: pointer;
	position: absolute;
	bottom: 25px;
	right: 5px;
	color: gray;
	width: 30px;
	height: 30px;
`