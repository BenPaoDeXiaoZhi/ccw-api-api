import { sso } from "./sso/index";
import { communityWeb } from "./community-web";
import { gandiMain } from "./gandi-main";
import { bfsWeb } from "./bfs-web";
import { communityWebCloudDatabase } from "./community-web-cloud-database";
import { opParentApi } from "./op-parent-api";

export {
  sso,
  communityWeb,
  gandiMain,
  bfsWeb,
  communityWebCloudDatabase,
  opParentApi,
};
export { setToken } from "@ccw-api/axios";
export default {
  sso,
  communityWeb,
  gandiMain,
  bfsWeb,
  communityWebCloudDatabase,
  opParentApi,
};

export type * from "./types";
