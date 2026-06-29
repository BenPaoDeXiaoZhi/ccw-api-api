import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "types/api";

export const url = "https://community-web.ccw.site/ccw-main/status";

export type Req = {};

export type Res = {
  data: string;
  datetime: string;
};

/**
 * ccw-main/status
 * @returns {Promise<Res>} 信息
 */
export async function getCCWMainStatus(): Promise<Res> {
  const req: Req = {};
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
