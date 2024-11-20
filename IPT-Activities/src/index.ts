import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { rootRoute } from "./routes/root-route";

const app = new Hono();

app.route("/api/v1", rootRoute);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
    fetch: app.fetch,
    port,
});
