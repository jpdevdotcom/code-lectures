import { serve } from "@hono/node-server";

import { Hono } from "hono";
//import zod
import * as z from "zod";

//import zValidator
import { zValidator } from "@hono/zod-validator";

//import bcrypt
import bcrypt from "bcrypt";

// Create a HTTP Method that would return a hashed password with a validator

const app = new Hono();

// create validator
const schema = z.object({
    email: z.string().min(1, "Email is required").email(),
    password: z.string().min(1, "Password is required"),
});

// create POST METHOD with validator and encryption
app.post("/addUser", zValidator("json", schema), async (c) => {
    // get the request body (specifically the password)
    const { password } = await c.req.json();

    // create method for hashing the password
    const passwordHash = await bcrypt.hash(password, 10);

    // create method for comparing hashed password to an actual password from the payload
    const comparePassword = await bcrypt.compare(password, passwordHash);

    // create a condition if the actual password and the encrypted password is Equal or NOT Equal
    if (!comparePassword) {
        return c.json("Not Equal");
    }

    return c.json("Equal");
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
    fetch: app.fetch,
    port,
});
