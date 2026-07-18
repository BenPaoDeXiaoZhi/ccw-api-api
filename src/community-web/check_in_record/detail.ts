import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/check_in_record/detail";

export type Req = {
  scene: "HOMEPAGE";
};

export type Res = {
  checkInRecordResps: DailyRecord[];
  checkInTimes: number;
  todayIndex: number;
};

export interface DailyRecord {
  bucks: number;
  isCheckIn: boolean;
}
/**
 * 获取本月签到记录
 */
export async function getCheckInRecords() {
  const req: Req = { scene: "HOMEPAGE" };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
