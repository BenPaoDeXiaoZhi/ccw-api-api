import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "types/api";

export const url = "https://community-web.ccw.site/short_url/decompress";

export type Req = {
  shortUrlCode: string;
};

export type Res = string;

/**
 * 解压缩短链接
 * @param {string} shortUrlCode 短链接码
 * @returns {Promise<Res>} 原始URL
 */
export async function decompressShortUrl(shortUrlCode: string): Promise<Res> {
  const req: Req = { shortUrlCode };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
