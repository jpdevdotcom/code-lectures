import { Context, Next } from "hono";

export const errorMiddleware = async (c: Context, next: Next) => {
    try {
        await next();
    } catch (e) {
        if (e instanceof SyntaxError) {
            return c.json("Wrong syntax");
        }
    }
};
