import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "types/api";
import { NotificationStats } from "types/notification";

export const url = "https://community-web.ccw.site/notification/stats/v2";

export type Req = {
  countAll: boolean;
};

export type Res = NotificationStats;

/**
 * 获取通知统计
 * @param {boolean} countAll 是否统计全部
 * @returns {Promise<Res>} 通知统计数据
 */
export async function getNotificationStats(
  countAll: boolean = true,
): Promise<Res> {
  const req: Req = { countAll };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
