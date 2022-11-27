import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CartSummary from "../components/CartSummary";
import Header from "../components/Header";
import CartContext from "../contexts/CartContext";
import UserContext from "../contexts/UserContext";
import { PageDefaultStyle, StyledRegistrationInput } from "../GeneralStyles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CheckoutPage() {
  const { user } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    zipcode: "",
    address: "",
    city: "",
    complement: "",
    creditCardNumber: "",
    creditCardName: "",
    creditCardExpirationDate: "",
    cardSecurityCode: "",
  });

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function sendPayment(total) {
    console.log(total)
    if (!user) {
      navigate("/login");
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const body = {
        userInfo: {
          personalInfo: {
            name: form.name,
            email: form.email,
          },
          shippingInfo: {
            country: form.country,
            zipcode: form.zipcode,
            address: form.address,
            city: form.city,
            complement: form.complement,
          },
          paymentInfo: {
            creditCardNumber: form.creditCardNumber,
            creditCardName: form.creditCardName,
            creditCardExpirationDate: form.creditCardExpirationDate,
            cardSecurityCode: form.cardSecurityCode,
          },
        },
        orderTotal: total,
        orderItems: [...cart],
      };
      axios
        .post("http://localhost:5000/orders", body, config)
        .then(() => {
          toast.success("Order created!");
          clearCart()
        })
        .catch((err) => {
          toast.error(
            "Something went wrong and we couldn't create your order."
          );
          console.log(err);
        });
    }
  }

  function clearCart() {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    axios
      .delete("http://localhost:5000/orders", config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <PageDefaultStyle>
      <Header />
      <StyledCheckoutForm>
        <h1>Checkout</h1>
        <div>
          <h2>Personal info</h2>
          <StyledRegistrationInput
            type="text"
            name="name"
            onChange={handleForm}
            value={form.name}
            placeholder="Name"
            required
          />
          <StyledRegistrationInput
            type="email"
            name="email"
            onChange={handleForm}
            value={form.email}
            placeholder="E-mail"
            required
          />
        </div>
        <div>
          <h2>Shipping info</h2>
          <StyledRegistrationInput
            type="text"
            name="country"
            onChange={handleForm}
            value={form.country}
            placeholder="Country"
            required
          />
          <StyledRegistrationInput
            type="text"
            name="zipcode"
            onChange={handleForm}
            value={form.zipcode}
            placeholder="Zipcode"
            required
          />
          <StyledRegistrationInput
            type="text"
            name="address"
            onChange={handleForm}
            value={form.address}
            placeholder="Address"
            required
          />
          <StyledRegistrationInput
            type="text"
            name="city"
            onChange={handleForm}
            value={form.city}
            placeholder="City"
            required
          />
          <StyledRegistrationInput
            type="text"
            name="complement"
            onChange={handleForm}
            value={form.complement}
            placeholder="Complement"
          />
        </div>
        <div>
          <h2>Payment info</h2>
          <StyledRegistrationInput
            type="number"
            name="creditCardNumber"
            onChange={handleForm}
            value={form.creditCardNumber}
            placeholder="0000 0000 0000 0000"
            required
          />
          <StyledRegistrationInput
            type="text"
            name="creditCardName"
            onChange={handleForm}
            value={form.creditCardName}
            placeholder="Name"
            required
          />
          <StyledRegistrationInput
            type="month"
            name="creditCardExpirationDate"
            onChange={handleForm}
            value={form.creditCardExpirationDate}
            required
          />
          <StyledRegistrationInput
            type="number"
            name="cardSecurityCode"
            onChange={handleForm}
            value={form.cardSecurityCode}
            placeholder="000"
            required
          />
        </div>
      </StyledCheckoutForm>
      <CartSummary goTo="Order" backTo="cart" sendPayment={sendPayment} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </PageDefaultStyle>
  );
}

const StyledCheckoutForm = styled.form`
  padding: 30px;
  padding-right: 380px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  font-family: "Roboto", sans-serif;
  gap: 12px;
  div {
    width: 100%;
  }
  h1 {
    align-self: flex-start;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
    color: whitesmoke;
  }
  h2 {
    align-self: flex-start;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 7px;
    color: black;
  }
`;
