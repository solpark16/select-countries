import axios from "axios";
import { Country } from "../types/types";

export async function getCountries(): Promise<Country[]> {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  return response.data;
}
