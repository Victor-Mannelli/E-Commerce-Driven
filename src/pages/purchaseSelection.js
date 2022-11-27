import { useContext, useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import UserContext from "../contexts/UserContext";

export default function PurchaseSelection() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [counter, setCounter] = useState(0);
  const [productsList, setProductsList] = useState([]);
  const [price, setPrice] = useState(0);
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((e) => setProductsList(e.data.allproducts))
      .catch((e) => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function HandlePurchase() {
    if (!user) {
      navigate("/login");
    } else {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const purchase = {
      product: currentProduct,
      quantity: counter,
    };
    axios
      .post("http://localhost:5000/cart", purchase, config)
      .then(() => navigate("/"))
      .catch((e) => console.log(e));
  }
}

  useEffect(() => {
    const aux = currentProduct?.price.replace("$", "").replace("/kg", "");
    setPrice((aux * counter).toFixed(2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  let currentProduct = productsList.find((e) => e._id === id);
  return (
    <InsideProduct>
      <img src={currentProduct?.image} alt="" />
      <h1> {currentProduct?.name} </h1>
      <div>
        <QuantityDiv>
          <div onClick={() => counter > 0 && setCounter(counter - 1)}>
            <AiOutlineMinus style={{ cursor: "pointer" }} />
          </div>
          <p> {counter} </p>
          <div
            onClick={() =>
              counter < Number(currentProduct?.stock) && setCounter(counter + 1)
            }
          >
            <AiOutlinePlus style={{ cursor: "pointer" }} />
          </div>
        </QuantityDiv>
        <PurchaseDiv>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => HandlePurchase()}
          >
            <p> Add to Cart </p>
            <p> {counter === 0 ? currentProduct?.price : `$${price}`} </p>
          </div>
          <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            <p> Cancel </p>
          </div>
        </PurchaseDiv>
      </div>
    </InsideProduct>
  );
}
const InsideProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;
  width: 100%;
  min-height: 100vh;
  background-color: var(--darkmode);
  cursor: default;
  img {
    height: 250px;
    width: 450px;
    border-radius: 5px;
  }
  h1 {
    color: var(--darkmodeText);
    font-size: 25px;
    font-family: "Roboto", sans-serif;
  }
  div {
    font-family: "Roboto", sans-serif;
  }
`;
const QuantityDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 200px;
  height: 40px;
  border-radius: 5px;
  border: none;
  margin: 5px 0;
  background-color: lightgray;
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 70px;
    height: 100%;
    border-radius: 5px;
    cursor: pointer;
    :hover {
      background-color: gray;
    }
  }
`;
const PurchaseDiv = styled.div`
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 200px;
    height: 40px;
    border-radius: 5px;
    border: none;
    margin-bottom: 5px;
    background-color: lightgray;
  }
`;
