import ccwAxios from "@ccw-api/axios";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/base/dateTime";

/**
 * @returns {Promise<number>} 当前时间戳,相当于Date.now()
 */
export async function getTime(): Promise<number> {
  return ccwAxios
    .post<ApiResponse<number>>(url, undefined)
    .then((res) => res.data.body);
}
