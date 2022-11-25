import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Product from "../Product.js";
import { PageDefaultStyle } from "../GeneralStyles";
import Header from "../components/Header.js";

export default function FiltersPage() {
	const [productsList, setProductsList] = useState([]);
	const { type } = useParams();
	const filteredList = productsList.filter((e) => e.type === type);

	useEffect(() => {
		axios
			.get("http://localhost:5000/products")
			.then((e) => setProductsList(e.data))
			.catch((e) => console.log(e));
	}, []);
	return (
		<PageDefaultStyle>
            <Header/>
			<Products>
				<div>
					<EspecificProducts>
						{filteredList.map((e) => {
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
const Products = styled.div`
	display: grid;
	grid-template-rows: auto auto auto;
	padding: 30px 0;
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