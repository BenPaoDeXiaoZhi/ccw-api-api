import { sso } from "./sso/index";
import { communityWeb } from "./community-web";
import { gandiMain } from "./gandi-main";
import { bfsWeb } from "./bfs-web";
import { communityWebCloudDatabase } from "./community-web-cloud-database";

export { sso, communityWeb, gandiMain, bfsWeb, communityWebCloudDatabase };
export { setToken } from "@ccw-api/axios";
export default {
  sso,
  communityWeb,
  gandiMain,
  bfsWeb,
  communityWebCloudDatabase,
};

export type * from "./types";
