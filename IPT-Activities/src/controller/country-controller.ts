import { Context } from "hono";
import { CountryModel } from "../model/models";

export const getCountry = async (c: Context) => {
    return c.json(CountryModel);
};

export const addCountry = async (c: Context) => {
    const { firstname } = await c.req.json();

    CountryModel.push(firstname);

    return c.json(CountryModel);
};
