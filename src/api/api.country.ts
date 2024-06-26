import axios from "axios";
import { Country } from "../types/type.country";

export async function getCountries(): Promise<Country[]> {
  const { data } = await axios.get<Country[]>(
    "https://restcountries.com/v3.1/all"
  );
  return data;
}
