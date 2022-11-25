import styled from "styled-components";

const LogInSignUpStyle = styled.div`
background-color: var(--darkmode);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
gap: 30px;
span {
    font-size: 48px;
    font-family: 'Patrick Hand', cursive;
}
a {
  color: white;
  font-size: 14px;
  font-weight: 700;
    font-family: 'Roboto', sans-serif;
  &:visited {
    filter: brightness(0.6);
  }
}
`;

export default LogInSignUpStyle;