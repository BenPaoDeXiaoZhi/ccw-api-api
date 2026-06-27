import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "types/api";

export const url = "https://community-web.ccw.site/search/hot_words";

export type Req = {
  length: number;
};

export type Res = string[];

/**
 * 获取搜索热词
 * @param {number} length 热词数量
 * @returns {Promise<Res>} 热词列表
 */
export async function getSearchHotWords(length: number): Promise<Res> {
  const req: Req = { length };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
