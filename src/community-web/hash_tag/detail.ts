import { request } from "src/request";
import { ApiResponse } from "src/types/api";
import { HashTag } from "src/types/hashTag";

export const url = "https://community-web.ccw.site/hash_tag/detail";

export type Req = {
  identifier: string;
};

export type Res = HashTag;

/**
 * 获取星球详情
 * @param {string} identifier 星球标识符（名称）
 * @returns {Promise<Res>} 星球详情
 */
export async function getHashTagDetail(identifier: string): Promise<Res> {
  const req: Req = { identifier };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
