import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "types/api";
import { HashTag } from "types/creation";

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
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
