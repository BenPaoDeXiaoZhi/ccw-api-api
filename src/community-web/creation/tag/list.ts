import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "src/types/api";
import { CreationTag } from "src/types/creation";

export const url = "https://community-web.ccw.site/creation/tag/list";

export type Req = {
  visibility: "PUBLIC";
};
export type Res = CreationTag[];

/**
 * 获取作品标签列表 例如 https://www.ccw.site/pages/tags/anime
 * @returns {Promise<CreationTag[]>} 标签列表
 */
export async function getCreationTags(): Promise<Res> {
  const req: Req = { visibility: "PUBLIC" };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
