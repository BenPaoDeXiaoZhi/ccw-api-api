import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "types/api";

export const url = "https://community-web.ccw.site/check_in_record/insert";

export type Req = {
  scene: "HOMEPAGE";
};

export type Res = boolean;

/**
 * 插入签到记录
 * @returns {Promise<boolean>} 是否成功
 */
export async function insertCheckInRecord(): Promise<Res> {
  const req: Req = { scene: "HOMEPAGE" };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
