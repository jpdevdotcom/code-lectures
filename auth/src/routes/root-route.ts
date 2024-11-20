import { Hono } from "hono";
import { login } from "../controller/auth/auth-controller.js";
import { UserRoute } from "./user-route/user-route.js";
import { AuthMiddleware } from "../middleware/auth-middleware.js";

export const RootRoute = new Hono();

RootRoute.use("/auth/*", AuthMiddleware);

RootRoute.post("/login", login);
RootRoute.route("/auth/user", UserRoute);
