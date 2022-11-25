import { useState } from "react";
import styled from "styled-components";
import ibage from "../files/ibage.jpg";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// import axios from "axios"

export default function Product() {
    const navigate = useNavigate();
	const [counter, setCounter] = useState(0);

    function HandlePurchase(){
        // const purchase = {
        //     product: productName,
        //     quantity,
        //     userid?
        // }

        // axios.post("", purchase)
        // .then(e => console.log(e))
        // .catch(e => console.log(e))
    }
	return (
		<ProductPage>
			<img src={ibage} alt="" />
			<h1> Product Name </h1>
			<ProductButtons>
				<div>
					<IconsDiv onClick={() => counter > 0 && setCounter(counter - 1)}>
						<AiOutlineMinus style={{ cursor: "pointer" }} />
					</IconsDiv>
					<h2> {counter} </h2>
					<IconsDiv onClick={() => setCounter(counter + 1)}>
						<AiOutlinePlus style={{ cursor: "pointer" }} />
					</IconsDiv>
				</div>
				<div style={{ cursor: "pointer" }} onClick={() => HandlePurchase}>
					<p> Add to Cart </p>
					<p> R$ price {} </p>
				</div>
				<button onClick={() => navigate("/")}>
					<p> Cancel </p>
				</button>
			</ProductButtons>
		</ProductPage>
	);
}
const ProductPage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	width: 100%;
	min-height: 100vh;
	background-color: var(--darkmode);
	cursor: default;
	img {
		height: 250px;
		width: 450px;
	}
	h1 {
		color: var(--darkmodeText);
		font-size: 25px;
	}
`;
const ProductButtons = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	div, button {
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: lightgray;
		border-radius: 5px;
		height: 40px;
		width: 200px;
		margin: 5px 0;
        border: none;
	}
	h2 {
		padding: 0 20px;
	}
`;
const IconsDiv = styled.div`
	cursor: pointer;
	:hover {
		background-color: gray;
	}
`;
