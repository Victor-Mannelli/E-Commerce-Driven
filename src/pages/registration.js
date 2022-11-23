import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import LogInSignUpStyle from "../assets/styles/LogInSignUpStyle";
import Button from "../assets/styles/Button";
import Input from "../assets/styles/Input";
import { BASE_URL } from "../assets/constants/urls";

export default function RegistrationPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    const navigate = useNavigate();
  
    async function handleSubmit(e) {
      e.preventDefault();
      try {
        await axios.post(`${BASE_URL}/signup`, {
          name,
          email,
          password,
          passwordConfirmation,
        });
  
        navigate("/");
      } catch (error) {
        alert("Oops! There's something wrong! Please try again!");
        console.log(error);
      }
    }
  
    return (
      <LogInSignUpStyle>
        <span>Sunday Market</span>
        <form>
          <Input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
  
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
  
          <Input
            type="password"
            value={passwordConfirmation}
            placeholder="Password confirmation"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
  
          <Button type="submit" onClick={handleSubmit}>
            Sign up
          </Button>
        </form>
        <Link to="/login">Already have an account? Log in!</Link>
      </LogInSignUpStyle>
    );
  }