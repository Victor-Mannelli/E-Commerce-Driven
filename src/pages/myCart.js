import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { PageDefaultStyle, StyledButton } from "../GeneralStyles";

export default function MyCartPage() {
  return (
    <PageDefaultStyle>
      <Header />
      <StyledCartSummary>
        <h1>Order summary</h1>
        <div>
          <span>Subtotal</span>
          <span>Value 1</span>
        </div>
        <div>
          <span>(-) Discounts</span>
          <span>Value 2</span>
        </div>
        <div>
          <span>(+) Freight</span>
          <span>Value 3</span>
        </div>
        <div>
          <span>Total</span>
          <span>Value 4</span>
        </div>
        <StyledButton>Checkout now</StyledButton>
        <Link to="/">Back to shopping</Link>
      </StyledCartSummary>
      <StyledProductsInCart>
        <h1>My Cart</h1>
        <div className="product-container">
          <img src="#" alt="product in cart" />
          <div className="info">
            <h2>Name</h2>
            <span>Description</span>
          </div>
          <div className="buttons">
            <button>Edit</button>
            <button>Remove</button>
          </div>
        </div>
        <div className="product-container">
          <img src="#" alt="product in cart" />
          <div className="info">
            <h2>Name</h2>
            <span>Description</span>
          </div>
          <div className="buttons">
            <button>Edit</button>
            <button>Remove</button>
          </div>
        </div>
        <div className="product-container">
          <img src="#" alt="product in cart" />
          <div className="info">
            <h2>Name</h2>
            <span>Description</span>
          </div>
          <div className="buttons">
            <button>Edit</button>
            <button>Remove</button>
          </div>
        </div>
        <div className="product-container">
          <img src="#" alt="product in cart" />
          <div className="info">
            <h2>Name</h2>
            <span>Description</span>
          </div>
          <div className="buttons">
            <button>Edit</button>
            <button>Remove</button>
          </div>
        </div>
      </StyledProductsInCart>
    </PageDefaultStyle>
  );
}

const StyledProductsInCart = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: calc(100% - 350px);
  font-family: "Roboto", sans-serif;
  gap: 25px;
  h1 {
    align-self: flex-start;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
    color: whitesmoke;
  }
  .product-container {
    background-color: lightgray;
    padding: 30px 18px;
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: none;
  }
  img {
    height: 100%;
  }
  .info {
    width: 100%;
    h2 {
      font-size: 20px;
      font-weight: 700;
    }
    span {
      font-size: 15px;
    }
  }
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    height: 100%;
    margin-right: 30px;
    button {
      width: 70px;
      height: 100%;
      border-radius: 5px;
      border: none;
    }
  }
`;
const StyledCartSummary = styled.div`
  margin-top: 70px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 350px;
  background-color: whitesmoke;
  font-family: "Roboto", sans-serif;
  gap: 25px;
  h1 {
    align-self: flex-start;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  button {
    margin-bottom: -10px;
  }
`;
