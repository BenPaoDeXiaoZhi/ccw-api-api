import { sso } from "./sso/index";
import { communityWeb } from "./community-web";
import { gandiMain } from "./gandi-main";
import { bfsWeb } from "./bfs-web";

export { sso, communityWeb, gandiMain, bfsWeb };
export { setToken } from "@ccw-api/axios";
export default {
  sso,
  communityWeb,
  gandiMain,
  bfsWeb,
};

export type * from "./types";
