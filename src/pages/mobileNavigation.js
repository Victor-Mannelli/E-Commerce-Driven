import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "../assets/background.png";

export default function MobileNavigation() {
	const navigate = useNavigate();

	return (
		<MobileNavigationPage>
			<Title onClick={() => navigate("/")}> Sunday Market </Title>
			<NavigationButtons onClick={() => navigate("/categories/meat")}>
				{" "}
				Meats{" "}
			</NavigationButtons>
			<NavigationButtons onClick={() => navigate("/categories/beverage")}>
				{" "}
				Beverages{" "}
			</NavigationButtons>
			<NavigationButtons onClick={() => navigate("/categories/grains")}>
				{" "}
				Grains{" "}
			</NavigationButtons>
			<NavigationButtons onClick={() => navigate("/categories/dessert")}>
				{" "}
				Desserts{" "}
			</NavigationButtons>
		</MobileNavigationPage>
	);
}
const MobileNavigationPage = styled.div`
	display: flex;
	flex-direction: column;
    justify-content: center;
	align-items: center;
	padding-top: 70px;
	width: 100%;
	min-height: 100vh;
	background-image: url(${backgroundImage});
	background-size: 100% 100%;
	cursor: cover;
	@media (max-width: 993px) {
		padding-top: 0;
	}
`;
const Title = styled.h1`
	font-family: "Patrick Hand", cursive;
	font-size: 42px;
	padding: 25px 0;
    color: var(--darkmodeText);
	cursor: pointer;
`;
const NavigationButtons = styled.button`
	width: 70%;
	height: 40px;
	border: solid 2px #262a2b;
	border-radius: 5px;
	cursor: pointer;
	background-color: var(--darkmode);
	margin: 10px 0;
	color: var(--darkmodeText);
	font-size: 18px;
	:hover {
		background-color: gray;
	}
`;
