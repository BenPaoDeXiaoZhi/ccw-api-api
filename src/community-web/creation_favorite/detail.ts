import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "src/types/api";
import { FavoriteDetail } from "src/types/creation";

export const url = "https://community-web.ccw.site/creation_favorite/detail";

export type Req = {
  creationOid: MongoDBId;
};
export type Res = null | FavoriteDetail;

/**
 * 获取作品收藏详情（需要登录）
 * @param {MongoDBId} creationOid 作品id
 * @returns {Promise<Res>} 收藏详情（未收藏返回null）
 */
export async function getCreationFavoriteDetail(
  creationOid: MongoDBId,
): Promise<Res> {
  const req: Req = { creationOid };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
