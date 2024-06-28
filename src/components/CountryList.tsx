import styled from "styled-components";
import { Country } from "../types/type.country";
import { useEffect, useState } from "react";
import { getCountries } from "../api/api.country";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countryList, setCountryList] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  useEffect(() => {
    const getCountriesHandler = async (): Promise<void> => {
      try {
        const data: Country[] = await getCountries();
        setCountryList(data);
      } catch (error) {
        alert(error);
      }
    };
    getCountriesHandler();
  }, []);

  const onClickCardHandler = (name: string): void => {
    const isCountrySelected = selectedCountries.find(
      (country: Country) => country.name.common === name
    );

    if (!isCountrySelected) {
      const selectedCountry = countryList.filter(
        (country: Country) => country.name.common === name
      )[0];

      setSelectedCountries((prev) => [selectedCountry, ...prev]);

      setCountryList(
        countryList.filter((country: Country) => country.name.common !== name)
      );
    } else {
      const selectedCountry = selectedCountries.filter(
        (country: Country) => country.name.common === name
      )[0];

      setCountryList((prev) => [selectedCountry, ...prev]);

      setSelectedCountries(
        selectedCountries.filter(
          (country: Country) => country.name.common !== name
        )
      );
    }
  };

  return (
    <StCountryListBox>
      <StCountryListTitle>Your Favorite Countries</StCountryListTitle>
      <StCountryList>
        {selectedCountries.map((country: Country) => {
          return (
            <CountryCard
              onClickCardHandler={onClickCardHandler}
              country={country}
              key={country.name.common}
            />
          );
        })}
      </StCountryList>
      <StCountryListTitle>All Countries</StCountryListTitle>
      <StCountryList>
        {countryList.map((country: Country) => {
          return (
            <CountryCard
              onClickCardHandler={onClickCardHandler}
              country={country}
              key={country.name.common}
            />
          );
        })}
      </StCountryList>
    </StCountryListBox>
  );
};

const StCountryListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  margin: 0 auto;
`;
const StCountryListTitle = styled.h2`
  font-size: 40px;
  margin: 20px 0;
`;
const StCountryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
`;

export default CountryList;
