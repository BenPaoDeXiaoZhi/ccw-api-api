import { sso } from "./sso/index";
import { communityWeb } from "./community-web";

export { sso, communityWeb };
export { setToken } from "@ccw-api/axios";

export default {
  sso,
  communityWeb,
};

export type * from "types";
