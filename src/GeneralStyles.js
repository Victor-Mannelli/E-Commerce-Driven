import styled from "styled-components";

export const PageDefaultStyle = styled.div`
  padding-top: 70px;
  width: 100%;
  min-height: 100vh;
  background-color: var(--darkmode);
  cursor: default;
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
`;
export const StyledRegistrationPage = styled.div`
  background-color: var(--darkmode);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 30px;
  span {
    font-size: 48px;
    font-family: "Patrick Hand", cursive;
  }
  a {
    color: white;
    font-size: 14px;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    &:visited {
      filter: brightness(0.6);
    }
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
`;
export const StyledButton = styled.button`
  width: 100%;
  height: 46px;
  margin-top: 10px;
  background: #262A2B;
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
