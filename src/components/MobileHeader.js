import { GrMenu } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function MobileHeader() {
    const navigate = useNavigate()

	return (
		<MobileHead>
			<MenuIcon onClick={() => navigate("/mobile")}/>
			<UserIcon onClick={() => navigate("/login")}/>
		</MobileHead>
	);
}
const MobileHead = styled.div`
	display: none;
	justify-content: space-between;
	width: 100%;
    padding: 15px 15px 0 15px;
	@media (max-width: 993px) {
		display: flex;
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