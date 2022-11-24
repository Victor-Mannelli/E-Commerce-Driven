import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Page, StyledInput } from "../GeneralStyles";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Product from "../product.js";

export default function HomePage() {
	const [productsList, setProductsList] = useState([]);
	const navigate = useNavigate();
	const MeatsList = productsList.filter((e) => e.type === "meat");
	const BevarageList = productsList.filter((e) => e.type === "beverage");
	const DessertList = productsList.filter((e) => e.type === "dessert");
	const GrainsList = productsList.filter((e) => e.type === "grains");

	console.log(productsList);
	useEffect(() => {
		axios
			.get("http://localhost:5000/products")
			.then((e) => setProductsList(e.data))
			.catch((e) => console.log(e));
	}, []);
	return (
		<Page>
			<Header>
				<h1> Sunday Market </h1>
				<Filters>
					<h2> Filters </h2>
					<h2> Filters </h2>
					<h2> Filters </h2>
					<h2> Filters </h2>
					<h2> Filters </h2>
				</Filters>
				<Icons>
					<CartIcon onClick={() => navigate("/cart")} />
					<UserIcon onClick={() => navigate("/login")} />
				</Icons>
			</Header>
			<Main>
				<SearchBar>
					<StyledInput
						placeholder="Search for an Item"
						onKeyDown={(e) => console.log(e)}
					/>
					<SearchIcon />
				</SearchBar>
				<Products>
					<div>
						<Title>
							<h1> Meats </h1>
						</Title>
						<EspecificProducts>
							{MeatsList.map((e) => {
								return (
									<Product
										key={e._id}
										name={e.name}
										price={e.price}
										type={e.type}
										image={e.image}
										productId={e._id}
									/>
								);
							})}
						</EspecificProducts>
					</div>
					<div>
						<Title>
							<h1> Bevarages </h1>
						</Title>
						<EspecificProducts>
							{BevarageList.map((e) => {
								return (
									<Product
										key={e._id}
										name={e.name}
										price={e.price}
										type={e.type}
										image={e.image}
										productId={e._id}
									/>
								);
							})}
						</EspecificProducts>
					</div>
					<div>
						<Title>
							<h1> Grains </h1>
						</Title>
						<EspecificProducts>
							{GrainsList.map((e) => {
								return (
									<Product
										key={e._id}
										name={e.name}
										price={e.price}
										type={e.type}
										image={e.image}
										productId={e._id}
									/>
								);
							})}
						</EspecificProducts>
					</div>
					<div>
						<Title>
							<h1> Desserts </h1>
						</Title>
						<EspecificProducts>
							{DessertList.map((e) => {
								return (
									<Product
										key={e._id}
										name={e.name}
										price={e.price}
										type={e.type}
										image={e.image}
										productId={e._id}
									/>
								);
							})}
						</EspecificProducts>
					</div>
				</Products>
			</Main>
		</Page>
	);
}
const Header = styled.div`
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
	}
`;
const Icons = styled.div`
	position: absolute;
	right: 25px;
	top: 20px;
`;
const Filters = styled.div`
	display: flex;
	justify-content: space-around;
	width: 40%;
	h2 {
		cursor: pointer;
	}
`;
const UserIcon = styled(FaUserCircle)`
	width: 30px;
	height: 30px;
	cursor: pointer;
`;
const CartIcon = styled(AiOutlineShoppingCart)`
	width: 30px;
	height: 30px;
	margin-right: 20px;
	cursor: pointer;
`;
const Main = styled.div`
	padding-top: 70px;
`;
const SearchBar = styled.div`
	padding: 20px 0;
	margin: 0 auto;
	width: 340px;
	position: relative;
`;
const SearchIcon = styled(HiOutlineMagnifyingGlass)`
	position: absolute;
	top: 28px;
	right: 7px;
	width: 25px;
	height: 25px;
`;
const Products = styled.div`
	display: grid;
	grid-template-rows: auto auto auto;
	padding-bottom: 25px;
	img {
		height: 150px;
		width: 250px;
	}
`;
const EspecificProducts = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 250px);
	grid-gap: 10px;
	justify-content: center;
`;
const Title = styled.div`
	display: flex;
	justify-content: center;
	padding: 15px;
	color: var(--darkmodeText);
	font-family: "Roboto", sans-serif;
`;
