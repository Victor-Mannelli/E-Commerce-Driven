import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function PageNotFound(){
    const navigate = useNavigate();
    return (
		<ErrorPage>
			<h1> 404 Page Not Found! </h1>
            <button onClick={() => navigate("/")}> Go Back Home </button>
		</ErrorPage>
	);
}
const ErrorPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 100vh;
    background-color: #2c2c2c;
	color: #e8e6e3;
    button {
		width: 326px;
		height: 58px;
		border-radius: 5px;
		background-color: gray;
		font-size: 20px;
		background-color: #e8e6e3;
        color: #2c2c2c;
        border: none;
		:hover {
			background-color: #606060;
		}
	}
    h1 {
        font-size: 70px;
    }
` 
