import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import ibage from "../files/ibage.jpg";
import { Page, StyledInput } from "../GeneralStyles";

export default function HomePage() {
	const navigate = useNavigate();
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
				<UserFeatures>
					<div>
						<AiOutlineShoppingCart />
						<h2> Cart </h2>
					</div>
					<h2 onClick={() => navigate("/registration")}> Create Account</h2>
					<h2 onClick={() => navigate("/login")}> Sign In </h2>
				</UserFeatures>
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
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
						</EspecificProducts>
					</div>
					<div>
                        <Title>
							<h1> Drinks </h1>
						</Title>
						<EspecificProducts>
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
						</EspecificProducts>
					</div>
					<div>
                        <Title>
							<h1> Bevarage </h1>
						</Title>
						<EspecificProducts>
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
							<img src={ibage} alt="imag" />
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
	justify-content: space-between;
	align-items: center;
	height: 70px;
	width: 100%;
	padding: 0 25px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
		rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
	background-color: var(--darkmodeHeader);
    color: var(--darkmodeText);
    font-family: 'Roboto', sans-serif;
    h1 {
        font-family: 'Patrick Hand', cursive;
        font-size: 27px;
    }
`;
const Filters = styled.div`
	display: flex;
	justify-content: space-around;
	width: 40%;
	h2 {
		cursor: pointer;
	}
`;
const UserFeatures = styled.div`
	display: flex;
	gap: 15px;
	div {
		display: flex;
		gap: 5px;
		cursor: pointer;
	}
	h2 {
		cursor: pointer;
	}
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
    font-family: 'Roboto', sans-serif;
`