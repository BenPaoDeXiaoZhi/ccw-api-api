import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "../../../types";
export const url = "https://sso.ccw.site/web/auth/logout";

export async function logout() {
  return await ccwAxios
    .post<ApiResponse<null>>(url, {})
    .then((res) => res.data);
}
