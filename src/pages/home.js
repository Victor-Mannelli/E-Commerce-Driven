import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { PageDefaultStyle, StyledInput } from "../GeneralStyles";
import Product from "../Product.js";
import Header from "../components/Header";
import loading from "../assets/loading.gif";

export default function HomePage() {
	const [productsList, setProductsList] = useState([]);
	const [filter, setFilter] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:5000/products")
			.then((e) => setProductsList(e.data))
			.catch((e) => console.log(e));
	}, []);
	return productsList.length === 0 ? (
		<LoadingPage>
			<Header />
			<img src={loading} alt="loading" />
		</LoadingPage>
	) : (
		<PageDefaultStyle>
			<Header />
			<SearchBar>
				<StyledInput
					placeholder="Search for an Item"
					onChange={(e) => setFilter(e.target.value)}
				/>
				<SearchIcon />
			</SearchBar>
			<Products>
				{filter !== "" && (
					<div>
						<Title>
							<h1> Are you looking for </h1>
						</Title>
						<EspecificProducts>
							{productsList?.allproducts
								?.filter((e) => e.name.toLowerCase().includes(filter) === true)
								.map((e) => {
									return (
										<Product
											key={e._id}
											name={e.name}
											price={e.price}
											image={e.image}
											quantity={e.stock}
											productId={e._id}
										/>
									);
								})}
						</EspecificProducts>
					</div>
				)}
				<div>
					<Title>
						<h1> Meats </h1>
					</Title>
					<EspecificProducts>
						{productsList?.meat.map((e) => {
							return (
								<Product
									key={e._id}
									name={e.name}
									price={e.price}
									quantity={e.stock}
									image={e.image}
									productId={e._id}
								/>
							);
						})}
					</EspecificProducts>
				</div>
				<div>
					<Title>
						<h1> Beverages </h1>
					</Title>
					<EspecificProducts>
						{productsList?.beverage.map((e) => {
							return (
								<Product
									key={e._id}
									name={e.name}
									price={e.price}
									quantity={e.stock}
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
						{productsList?.grains.map((e) => {
							return (
								<Product
									key={e._id}
									name={e.name}
									price={e.price}
									quantity={e.stock}
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
						{productsList?.dessert.map((e) => {
							return (
								<Product
									key={e._id}
									name={e.name}
									price={e.price}
									quantity={e.stock}
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
const LoadingPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 70px;
	width: 100%;
	min-height: 100vh;
	background-color: var(--darkmode);
	cursor: default;
	img {
		width: 150px;
		height: 150px;
	}
`;
