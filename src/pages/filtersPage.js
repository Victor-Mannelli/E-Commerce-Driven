import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Product from "../Product.js";
import {
	LoadingPage,
	PageDefaultStyle,
	SearchBar,
	SearchIcon,
	StyledInput,
} from "../GeneralStyles";
import Header from "../components/Header.js";
import loading from "../assets/loading.gif";
import MobileHeader from "../components/MobileHeader.js";

export default function FiltersPage() {
	const [productsList, setProductsList] = useState([]);
	const [filter, setFilter] = useState("");
	const { type } = useParams();
	const filteredList = productsList.allproducts?.filter((e) => e.type === type);

	useEffect(() => {
		axios
			.get("http://localhost:5000/products")
			.then((e) => setProductsList(e.data.allproducts))
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
			<MobileHeader />
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
							{filteredList
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
						<h1> All Products</h1>
					</Title>
					<EspecificProducts>
						{filteredList.map((e) => {
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
const Products = styled.div`
	width: 75%;
	display: grid;
	grid-template-rows: auto auto auto;
	padding-bottom: 25px;
	@media (max-width: 993px) {
		width: 95%;
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
	padding: 20px;
	color: black;
	font-family: "Roboto", sans-serif;
	font-size: 20px;
`;
