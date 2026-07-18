import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url =
  "https://community-web.ccw.site/study-community/following/follow";

export type Req = {
  followingOid: MongoDBId;
};

export type Res = "FOLLOWED";

/**
 * 关注创作者
 * @param {MongoDBId} followingOid 要关注的用户 OID
 * @returns {Promise<Res>} "FOLLOWED" 表示关注成功
 */
export async function followCreator(followingOid: MongoDBId): Promise<Res> {
  const req: Req = { followingOid };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
