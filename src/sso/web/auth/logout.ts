import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "src/types/api";

export const url = "https://sso.ccw.site/web/auth/logout";

/**
 * 退出
 * @returns {Promise<null>}
 */
export async function logout(): Promise<null> {
  return await ccwAxios
    .post<ApiResponse<null>>(url, {})
    .then((res) => res.data.body);
}
