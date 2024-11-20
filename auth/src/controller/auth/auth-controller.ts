import type { Context } from "hono";
import { setCookie, setSignedCookie } from "hono/cookie";
import { sign as JwtSign } from "hono/jwt";
import { config } from "../../config/secrets.js";

export const login = async (c: Context) => {
    const { email, password } = await c.req.json();

    if (!email || !password) {
        return c.json({ error: "Fill all credentials." }, 401);
    }

    const login_payload = {
        email,
        name: "Jan Phillip",
        exp: Math.floor(Date.now() / 1000) + 10,
    };

    const session_token = await JwtSign(login_payload, config.JWT_SECRET);

    await setSignedCookie(c, "sessionToken", session_token, config.JWT_SECRET);

    const refresh_payload = {
        email,
        name: "Jan Phillip",
        exp: Math.floor(Date.now() / 1000) + 30,
    };

    const refresh_token = await JwtSign(refresh_payload, config.JWT_SECRET);

    await setSignedCookie(c, "refreshToken", refresh_token, config.JWT_SECRET);

    return c.json({ session_token, refresh_token });
};
