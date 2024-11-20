import dotenv from "dotenv";

dotenv.config({
    path: ".env",
});

export const config = {
    JWT_SECRET: process.env.SECRET_KEY as unknown as string,
};
