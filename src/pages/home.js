import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { PageDefaultStyle, StyledInput } from "../GeneralStyles";
import Product from "../product.js";
import Header from "../components/Header";

export default function HomePage() {
	const [productsList, setProductsList] = useState([]);
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
		<PageDefaultStyle>
			<Header />
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
		</PageDefaultStyle>
	);
}
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
	grid-gap: 15px;
	justify-content: center;
`;
const Title = styled.div`
	display: flex;
	justify-content: center;
	padding: 35px 0;
	color: var(--darkmodeText);
	font-family: "Roboto", sans-serif;
  font-size: 20px;
`;
