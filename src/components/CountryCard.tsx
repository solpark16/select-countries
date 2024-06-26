import styled from "styled-components";
import { Country } from "../types/types";

type Props = {
  country: Country;
  onClickCardHandler: (name: string) => void;
};

const CountryCard = ({ country, onClickCardHandler }: Props) => {
  return (
    <StCountryCard onClick={() => onClickCardHandler(country.name.common)}>
      <img src={country.flags.svg} />
      <StCountryName>{country.name.common}</StCountryName>
      <p>{country.capital}</p>
    </StCountryCard>
  );
};

const StCountryCard = styled.li`
  width: 200px;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #d8d8d8;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  img {
    width: 100px;
    margin: 0 auto;
  }
`;
const StCountryName = styled.p`
  font-size: 20px;
`;
export default CountryCard;
