import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url =
  "https://community-web.ccw.site/study-community/spread_feed/unread/count";

export type Req = {
  studentOid: MongoDBId;
};

export type Res = number;

/**
 * 获取动态未读消息数
 * @param {MongoDBId} studentOid 学生id
 * @returns {Promise<number>} 未读消息数
 */
export async function getSpreadFeedUnreadCount(
  studentOid: MongoDBId,
): Promise<Res> {
  const req: Req = { studentOid };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
