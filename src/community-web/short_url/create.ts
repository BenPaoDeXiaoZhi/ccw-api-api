import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "types/api";

export const url = "https://community-web.ccw.site/short_url/create";
export type Req = { originUrl: string };
export type Res = `https://ccw.site/s/${string}`;

/**
 * 创建短链接(用于分享)
 * @param originUrl 原链接
 * @returns {Promise<Res>} 创建的短链接
 */
export async function createShortUrl(originUrl: string): Promise<Res> {
  const req: Req = {
    originUrl,
  };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
