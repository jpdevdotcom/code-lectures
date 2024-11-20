import type { Context, Next } from "hono";
import { verify as JwtVerify } from "hono/jwt";
import { getSignedCookie } from "hono/cookie";
import { JwtTokenExpired, JwtTokenInvalid } from "hono/utils/jwt/types";
import { config } from "../config/secrets.js";

export const AuthMiddleware = async (c: Context, next: Next) => {
    try {
        // const token = c.req.header("Authorization")?.replace("Bearer ", "");
        const token = await getSignedCookie(
            c,
            config.JWT_SECRET,
            "sessionToken"
        );

        if (!token) {
            return c.json({ err: "no token provided" }, 404);
        }

        const login_session = await JwtVerify(token, config.JWT_SECRET);

        console.log("Session Token: ", login_session);

        // return c.json({ email: login_session.email });

        await next();
    } catch (err) {
        // return c.json("Something went wrong...");

        if (err instanceof JwtTokenExpired) {
            const refresh_token = await getSignedCookie(
                c,
                config.JWT_SECRET,
                "refreshToken"
            );

            if (!refresh_token) {
                return c.json({ err: "no refresh token provided" }, 404);
            }

            const refresh_payload = await JwtVerify(
                refresh_token,
                config.JWT_SECRET
            );

            console.log("Refresh Token: ", refresh_payload);

            await next();
        }
    }
};
