import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import axios from "axios";

import LogInSignUpStyle from "../assets/styles/LogInSignUpStyle";
import Button from "../assets/styles/Button";
import Input from "../assets/styles/Input";
import { BASE_URL } from "../assets/constants/urls";

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const { setUser } = useContext(UserContext);
    const navigator = useNavigate();
  
    async function handleSubmit(e) {
      e.preventDefault();
      const body = { email, password };
      try {
        const response = await axios.post(`${BASE_URL}/signin`, body);
        const { token, name } = response.data;
        setUser({ name, token });
        navigator("/");
      } catch (error) {
        alert("There's been an issue. Check your login info and try again.");
        console.log(error.response);
      }
    }
  
    return (
      <LogInSignUpStyle>
        <span>Sunday Market</span>
        <form>
          <Input
            type="email"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
  
          <Input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
  
          <Button type="submit" onClick={handleSubmit}>
            Log in
          </Button>
        </form>
        <Link to="/registration">Don't have an account? Sign up!</Link>
      </LogInSignUpStyle>
    );
}