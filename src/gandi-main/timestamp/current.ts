import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "src/types/api";

export const url = "https://gandi-main.ccw.site/timestamp/current";

export type Res = number;

/**
 * 获取服务端当前时间戳
 * @returns {Promise<Res>} 当前时间戳（毫秒）
 */
export async function getCurrentTimestamp(): Promise<Res> {
  return await ccwAxios.get<ApiResponse<Res>>(url).then((res) => res.data.body);
}
