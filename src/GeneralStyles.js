import styled from "styled-components";
import backgroundImage from "./assets/background.png";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import backgroundImage from "./assets/background.png";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export const PageDefaultStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 70px;
	width: 100%;
	min-height: 100vh;
	background-image: url(${backgroundImage});
	background-size: auto;
	cursor: default;
	@media (max-width: 993px) {
		padding-top: 0;
	}
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 70px;
	width: 100%;
	min-height: 100vh;
	background-image: url(${backgroundImage});
	background-size: auto;
	cursor: default;
	@media (max-width: 993px) {
		padding-top: 0;
	}
`;
export const StyledInput = styled.input`
	width: 340px;
	height: 40px;
	border-radius: 5px;
	border: none;
	outline: none;
	padding: 0 37px 0 15px;
	font-family: "Roboto", sans-serif;
	font-size: 17px;
	@media (max-width: 560px) {
		width: 100%;
	}
	width: 340px;
	height: 40px;
	border-radius: 5px;
	border: none;
	outline: none;
	padding: 0 37px 0 15px;
	font-family: "Roboto", sans-serif;
	font-size: 17px;
	@media (max-width: 560px) {
		width: 100%;
	}
`;
export const StyledRegistrationPage = styled.div`
	background-image: url(${backgroundImage});
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	gap: 25px;
	span {
		font-size: 48px;
		font-family: "Patrick Hand", cursive;
		cursor: pointer;
	}
	a {
		color: black;
		font-size: 16px;
		font-weight: 700;
		font-family: "Roboto", sans-serif;
		&:visited {
			filter: brightness(0.6);
		}
	}
  .back {
    font-size: 12px;
  }
`;
export const StyledRegistrationInput = styled.input`
	background: white;
	border: none;
	border-radius: 5px;
	height: 45px;
	width: 100%;
	margin-bottom: 8px;
	padding: 0 15px;
	font-size: 18px;
	display: flex;
	align-items: center;
	color: black;
	&::placeholder {
		color: #868686;
	}
	background: white;
	border: none;
	border-radius: 5px;
	height: 45px;
	width: 100%;
	margin-bottom: 8px;
	padding: 0 15px;
	font-size: 18px;
	display: flex;
	align-items: center;
	color: black;
	&::placeholder {
		color: #868686;
	}
`;
export const StyledButton = styled.button`
	width: 100%;
	height: 46px;
	margin-top: 10px;
	background: #262a2b;
	border-radius: 5px;
	border: none;
	color: white;
	font-weight: 700;
	font-size: 20px;
	cursor: pointer;
	:hover {
		background-color: gray;
	}
	width: 100%;
	height: 46px;
	margin-top: 10px;
	background: #262a2b;
	border-radius: 5px;
	border: none;
	color: white;
	font-weight: 700;
	font-size: 20px;
	cursor: pointer;
	:hover {
		background-color: gray;
	}
`;
export const LoadingPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 70px;
	width: 100%;
	min-height: 100vh;
	background-image: url(${backgroundImage});
	cursor: default;
	img {
		width: 100px;
		height: 100px;
	}
`;
export const SearchBar = styled.div`
	position: relative;
	padding: 20px 0;
	margin: 0 auto;
	width: 340px;
	@media (max-width: 560px) {
		width: 80%;
	}
`;
export const SearchIcon = styled(HiOutlineMagnifyingGlass)`
	position: absolute;
	top: 28px;
	right: 7px;
	width: 25px;
	height: 25px;
`;
export const LoadingPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 70px;
	width: 100%;
	min-height: 100vh;
	background-image: url(${backgroundImage});
	cursor: default;
	img {
		width: 100px;
		height: 100px;
	}
`;
export const SearchBar = styled.div`
	position: relative;
	padding: 20px 0;
	margin: 0 auto;
	width: 340px;
	@media (max-width: 560px) {
		width: 80%;
	}
`;
export const SearchIcon = styled(HiOutlineMagnifyingGlass)`
	position: absolute;
	top: 28px;
	right: 7px;
	width: 25px;
	height: 25px;
`;