import styled from "styled-components";
import CartSummary from "../components/CartSummary";
import Header from "../components/Header";
import { PageDefaultStyle } from "../GeneralStyles";

export default function CheckoutPage() {
  return (
    <PageDefaultStyle>
      <Header />
      <StyledProductsInCart>
        <h1>Checkout</h1>
        Form
      </StyledProductsInCart>
      <CartSummary />
    </PageDefaultStyle>
  );
}

const StyledProductsInCart = styled.div`
  padding: 30px;
  padding-right: 380px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  font-family: "Roboto", sans-serif;
  gap: 15px;
  h1 {
    align-self: flex-start;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
    color: whitesmoke;
  }
  h3 {
    align-self: flex-start;
  }
  .product-container {
    background-color: white;
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    border-radius: 15px;
    border: none;
  }
  img {
    max-height: 100%;
    min-width: 140px;
    padding: 20px 18px;
  }
  .info {
    width: 100%;
    padding: 30px 18px;
    h2 {
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 5px;
    }
    p {
      color: gray;
      font-size: 15px;
      line-height: 20px;
    }
  }
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    height: 100%;
    button {
      background-color: black;
      width: 70px;
      height: 100%;
      border-radius: 0 15px 15px 0;
      border: none;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 45px;
    }
  }
`;
