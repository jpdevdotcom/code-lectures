import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

//http://frontend.com

app.use(
    "/api2/*",
    cors({
        origin: "http://frontend.vercel.app",
        allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
        allowMethods: ["POST", "GET"],
        exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
        maxAge: 600, //10 mins
        credentials: true,
    })
);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
    fetch: app.fetch,
    port,
});
