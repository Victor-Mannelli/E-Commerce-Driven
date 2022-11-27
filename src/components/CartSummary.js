import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CartContext from "../contexts/CartContext";
import { StyledButton } from "../GeneralStyles";

export default function CartSummary({ goTo, backTo, sendPayment }) {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState(0);
  const [discounts, setDiscounts] = useState(0); // TBD, no discounts for now
  const [freight, setFreight] = useState(0); // TBD, no freight for now
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let subt = 0;
    cart?.forEach((product) => {
      subt +=
        parseFloat(product.productPrice.replace("$", "").replace("/kg", "")) *
        parseInt(product.quantity);
    });
    setSubtotal(subt);
    setTotal(subt + discounts + freight);
  }, [cart]);

  function handleCheckoutAndPayment() {
    if (goTo === "Checkout") {
      navigate("/checkout");
    } else if (goTo === "Order") {
      sendPayment(total);
    } else {
      navigate("/cart");
    }
  }

  return (
    <StyledCartSummary>
      <h1>Order summary</h1>
      <div>
        <span>Subtotal</span>
        <span>{"$" + subtotal.toFixed(2)}</span>
      </div>
      <div>
        <span>(-) Discounts</span>
        <span>{"$" + discounts.toFixed(2)}</span>
      </div>
      <div>
        <span>(+) Freight</span>
        <span>{"$" + freight.toFixed(2)}</span>
      </div>
      <div>
        <span>Total</span>
        <span>{"$" + total.toFixed(2)}</span>
      </div>
      <StyledButton
        onClick={() => handleCheckoutAndPayment()}
      >{`${goTo} now`}</StyledButton>
      <Link to={backTo==="cart" ? "/cart" : "/"}>{`Back to ${backTo}`}</Link>
    </StyledCartSummary>
  );
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
