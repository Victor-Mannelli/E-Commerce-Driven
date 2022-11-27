import axios from "axios";
import { useContext, useEffect } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CartSummary from "../components/CartSummary";
import Header from "../components/Header";
import CartContext from "../contexts/CartContext";
import CartStatusContext from "../contexts/CartStatusContext";
import UserContext from "../contexts/UserContext";
import { PageDefaultStyle } from "../GeneralStyles";

export default function MyCartPage() {
  const { user } = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);
  const { setNumberOfProducts} = useContext(CartStatusContext)
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      axios
        .get("http://localhost:5000/cart", config)
        .then((res) => {
          const newCart = [...res.data];
          console.log(newCart)
          setCart(newCart);
          setNumberOfProducts(newCart.lenght)
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  function deleteProduct(productId) {
    console.log(productId);
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      data: {
        productId: productId,
      },
    };
    axios
      .delete("http://localhost:5000/cart", config)
      .then((res) => setCart(res.data))
      .catch((err) => console.log(err));
  }

  function listProductsInCart({
    productId,
    productName,
    productImage,
    productPrice,
    quantity,
  }) {

    return (
      <div className="product-container" key={productId}>
        <img src={productImage} alt="product in cart" />
        <div className="info">
          <h2>{productName}</h2>
          <p>{`Quantity: ${quantity}`}</p>
          <p>{productPrice}</p>
        </div>
        <div className="buttons">
          <button onClick={() => deleteProduct(productId)}>
            <HiOutlineXMark />
          </button>
        </div>
      </div>
    );
  }

  return (
    <PageDefaultStyle>
      <Header />
      <StyledProductsInCart>
        <h1>My Cart</h1>
        {cart ? (
          cart?.map((product) => listProductsInCart(product))
        ) : (
          <h3>Your cart is empty.</h3>
        )}
      </StyledProductsInCart>
      <CartSummary/>
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

