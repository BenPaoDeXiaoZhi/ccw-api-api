import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url =
  "https://community-web.ccw.site/creation_activity_stats/list";

export type CreationActivityStatsItem = {
  activeAt: number;
  activeAtDayOfWeek: number;
  creationOid: MongoDBId;
  duration: number;
  id: number;
};

export type Req = {
  creationOid: MongoDBId;
  type: "DAY";
};

export type Res = CreationActivityStatsItem[];

/**
 * 获取作品创作活跃统计数据列表(绿格子)
 * @param {MongoDBId} creationOid 作品id
 * @returns {Promise<Res>} 活动统计数据
 */
export async function getCreationActivityStatsList(
  creationOid: MongoDBId,
): Promise<Res> {
  const req: Req = { creationOid, type: "DAY" };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
