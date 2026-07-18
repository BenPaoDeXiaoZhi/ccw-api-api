import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url =
  "https://community-web.ccw.site/study-community/following/unfollow";

export type Req = {
  followingOid: MongoDBId;
};

export type Res = "UNFOLLOWED";

/**
 * 取消关注创作者
 * @param {MongoDBId} followingOid 要取消关注的用户 OID
 * @returns {Promise<Res>} "UNFOLLOWED" 表示取消关注成功
 */
export async function unfollowCreator(followingOid: MongoDBId): Promise<Res> {
  const req: Req = { followingOid };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
