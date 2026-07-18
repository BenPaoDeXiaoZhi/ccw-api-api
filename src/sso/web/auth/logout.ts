import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://sso.ccw.site/web/auth/logout";

/**
 * 退出
 * @returns {Promise<null>}
 */
export async function logout(): Promise<null> {
  return await request
    .post<ApiResponse<null>>(url, {})
    .then((res) => res.data.body);
}
