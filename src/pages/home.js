import styled from "styled-components";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import ibage from "../files/ibage.jpg";
import { Page, StyledInput } from "../GeneralStyles";
import Header from "../components/Header";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Page>
      <Header />
      <Main>
        <SearchBar>
          <StyledInput
            placeholder="Search for an Item"
            onKeyDown={(e) => console.log(e)}
          />
          <SearchIcon />
        </SearchBar>
        <Products>
          <div>
            <Title>
              <h1> Meats </h1>
            </Title>
            <EspecificProducts>
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
            </EspecificProducts>
          </div>
          <div>
            <Title>
              <h1> Drinks </h1>
            </Title>
            <EspecificProducts>
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
            </EspecificProducts>
          </div>
          <div>
            <Title>
              <h1> Bevarage </h1>
            </Title>
            <EspecificProducts>
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
              <img src={ibage} alt="imag" />
            </EspecificProducts>
          </div>
        </Products>
      </Main>
    </Page>
  );
}

const Main = styled.div`
  padding-top: 70px;
`;
const SearchBar = styled.div`
  padding: 20px 0;
  margin: 0 auto;
  width: 340px;
  position: relative;
`;
const SearchIcon = styled(HiOutlineMagnifyingGlass)`
  position: absolute;
  top: 28px;
  right: 7px;
  width: 25px;
  height: 25px;
`;
const Products = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  padding-bottom: 25px;
  img {
    height: 150px;
    width: 250px;
  }
`;
const EspecificProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 10px;
  justify-content: center;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  color: var(--darkmodeText);
  font-family: "Roboto", sans-serif;
`;
