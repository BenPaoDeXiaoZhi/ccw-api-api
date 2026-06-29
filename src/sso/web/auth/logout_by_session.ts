import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "src/types/api";

export const url = "https://sso.ccw.site/web/auth/logout_by_session";

/**
 * 根据sessionId退出登陆设备
 * @param {number} sessionId
 * @returns {Promise<boolean>} 是否成功
 */
export async function logoutBySession(sessionId: number): Promise<boolean> {
  return await ccwAxios
    .post<ApiResponse<boolean>>(url, { id: sessionId })
    .then((res) => res.data.body);
}
