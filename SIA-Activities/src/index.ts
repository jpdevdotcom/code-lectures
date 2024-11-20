import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { errorMiddleware } from "./error-middleware";

const app = new Hono();

app.get("/getTest", async (c) => {
    return c.json("test");
});

app.use(errorMiddleware);

app.post("/postTest", async (c) => {
    const { name } = await c.req.json();

    return c.json(name);
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
    fetch: app.fetch,
    port,
});
