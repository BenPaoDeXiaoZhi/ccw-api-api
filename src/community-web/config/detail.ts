import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/config/detail";

export type Req = {
  key: string;
};
export type Res = string | number | boolean | null | object;

/**
 * 获取配置详情
 * @param {string} key 配置键
 * @returns {Promise<Res>} 配置值
 */
export async function getConfigDetail(key: string): Promise<Res> {
  const req: Req = { key };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
