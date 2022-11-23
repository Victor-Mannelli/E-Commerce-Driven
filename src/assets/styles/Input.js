import styled from "styled-components";

const Input = styled.input`
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
    &::placeholder{
        color: #868686;
    }
`;

export default Input;