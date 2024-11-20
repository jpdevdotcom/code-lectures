import type { Context } from "hono";
import { UserModel } from "../../model/user-model.js";

export const getUsers = async (c: Context) => {
    return c.json("Test");
};
