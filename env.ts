import { config } from "dotenv";
import { setToken } from "@ccw-api/axios";

config({ path: ".env", quiet: true });
setToken(process.env.TOKEN || "");
