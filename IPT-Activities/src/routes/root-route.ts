import { Hono } from "hono";
import { studentRoute } from "./student-routes";
import { countryRoute } from "./country-routes";

export const rootRoute = new Hono();

rootRoute.route("/student", studentRoute);
rootRoute.route("/country", countryRoute);
