import { GrMenu } from "react-icons/gr";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background.png";

export default function MobileHeader() {
  const navigate = useNavigate();

  return (
    <MobileHead>
      <MenuIcon onClick={() => navigate("/mobile")} />
      <div>
        <UserIcon onClick={() => navigate("/login")} />
        <CartIcon onClick={() => navigate("/cart")} />
      </div>
    </MobileHead>
  );
}
const MobileHead = styled.div`
  display: none;
  justify-content: space-between;
  width: 100%;
  padding: 15px 15px 0 15px;
  @media (max-width: 993px) {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    display: flex;
	background-image: url(${backgroundImage});
	opacity: 0.95;
  }
`;
const MenuIcon = styled(GrMenu)`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;
const UserIcon = styled(AiOutlineUser)`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;
const CartIcon = styled(AiOutlineShoppingCart)`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;
