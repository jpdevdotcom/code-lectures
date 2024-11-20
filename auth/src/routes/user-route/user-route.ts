import { Hono } from "hono";
import { getUsers } from "../../controller/user/user-controller.js";

export const UserRoute = new Hono();

UserRoute.get("/getUsers", getUsers);
