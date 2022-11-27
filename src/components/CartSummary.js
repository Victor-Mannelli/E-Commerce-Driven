import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CartContext from "../contexts/CartContext";
import { StyledButton } from "../GeneralStyles";

export default function CartSummary(){
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    
    function subtotal() {
      let subt = 0;
      if (cart) {
        cart?.forEach((product) => {
          subt +=
            parseFloat(product.productPrice.replace("$", "").replace("/kg", "")) *
            parseInt(product.quantity);
        });
      }
      return "$"+subt.toFixed(2);
    }
    function discounts() { // TBD, no discounts for now
      return "$0.00";
    }
    function freight() { // TBD, no freight for now
      return "$0.00";
    }
    function total() {
      return "$"+parseFloat(subtotal().replace("$", "")+discounts().replace("$", "")+freight().replace("$", "")).toFixed(2);
    }
    return (
        <StyledCartSummary>
        <h1>Order summary</h1>
        <div>
          <span>Subtotal</span>
          <span>{subtotal()}</span>
        </div>
        <div>
          <span>(-) Discounts</span>
          <span>{discounts()}</span>
        </div>
        <div>
          <span>(+) Freight</span>
          <span>{freight()}</span>
        </div>
        <div>
          <span>Total</span>
          <span>{total()}</span>
        </div>
        <StyledButton onClick={() => navigate("/checkout")}>Checkout now</StyledButton>
        <Link to="/">Back to shopping</Link>
      </StyledCartSummary>
    )
}

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