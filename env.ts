import { config } from "dotenv";
import { setToken } from "@ccw-api/axios";

config({ path: ".env" });
setToken(process.env.TOKEN || "foo");
