import { useEffect, useState } from "react";
import { getCountries } from "./api/api.country";
import { Country } from "./types/types";
import CountryList from "./components/CountryList";

const App = () => {
  const [countryList, setCountryList] = useState<Country[]>([]);

  useEffect(() => {
    const getCountriesHandler = async () => {
      const data = await getCountries();
      setCountryList(data);
    };
    getCountriesHandler();
  }, []);
  console.log("countryList", countryList);
  return (
    <div>
      <CountryList />
      {countryList.map((country: Country) => {
        return (
          <div key={country.name.common}>
            <p>--------------------</p>
            <img src={country.flags.svg} width={400} />
            <p>{country.name.common}</p>
            <p>{country.capital}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
