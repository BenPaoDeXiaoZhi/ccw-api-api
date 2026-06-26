import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "types/api";
import { UserLikeDetail } from "types/creation";

export const url = "https://community-web.ccw.site/creation/like/detail";

export type Req = {
  creationOid: MongoDBId;
};
export type Res = UserLikeDetail;

/**
 * 获取用户是否曾给作品点赞及点赞动作
 * @param {MongoDBId} creationOid 作品id
 * @returns {Promise<UserLikeDetail>} 点赞详情
 */
export async function getLikeDetail(creationOid: MongoDBId): Promise<Res> {
  const req: Req = { creationOid };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
