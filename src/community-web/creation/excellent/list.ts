import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "types/api";
import { CreationSimple } from "types/creation";

export const url = "https://community-web.ccw.site/creation/excellent/list";

export type Req = {
  num: number;
};
export type Res = CreationSimple[];

/**
 * 获取精选作品列表
 * @param {number} num 数量
 * @returns {Promise<CreationSimple[]>} 作品列表
 */
export async function getExcellentCreations(num: number): Promise<Res> {
  const req: Req = { num };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
