import { Hono } from "hono";
import { addCountry, getCountry } from "../controller/country-controller";

export const countryRoute = new Hono();

countryRoute.get("/getCountries", getCountry);
countryRoute.post("/addCountry", addCountry);
