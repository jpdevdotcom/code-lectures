import { serve } from "@hono/node-server";
import { Hono, type Context } from "hono";
import { RootRoute } from "./routes/root-route.js";

const app = new Hono();

app.route("/api", RootRoute);

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
    fetch: app.fetch,
    port,
});
