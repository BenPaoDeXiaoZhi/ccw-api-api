import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "types/api";

export const url = "https://community-web.ccw.site/creation_stats/view";

export type Req = {
  oid: MongoDBId;
  inviteCode: string;
};
export type Res = boolean;

/**
 * 查看作品统计（增加浏览量）
 * @param {MongoDBId} oid 作品id
 * @param {string} inviteCode 邀请码
 * @returns {Promise<boolean>} 是否成功
 */
export async function viewCreationStats(
  oid: MongoDBId,
  inviteCode: string = "",
): Promise<Res> {
  const req: Req = { oid, inviteCode };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
