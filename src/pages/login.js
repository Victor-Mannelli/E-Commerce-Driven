import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import axios from "axios";

import { StyledButton, StyledRegistrationInput, StyledRegistrationPage } from "../GeneralStyles";
import { BASE_URL } from "../constants/urls";

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
      if (user) {
        navigate("/");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    async function handleSubmit(e) {
      e.preventDefault();
      const body = { email, password };
      try {
        const response = await axios.post(`${BASE_URL}/signin`, body);
        const { token, name } = response.data;
        setUser({ name, token });
        navigate("/");
      } catch (error) {
        alert("There's been an issue. Check your login info and try again.");
        console.log(error.response);
      }
    }
  
    return (
      <StyledRegistrationPage>
        <span onClick={() => navigate("/")}>Sunday Market</span>
        <form>
          <StyledRegistrationInput
            type="email"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
  
          <StyledRegistrationInput
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
  
          <StyledButton type="submit" onClick={handleSubmit}>
            Log in
          </StyledButton>
        </form>
        <Link to="/registration">Don't have an account? Sign up!</Link>
        <Link to="/" className="back">Or go back and keep looking for items</Link>
      </StyledRegistrationPage>
    );
}