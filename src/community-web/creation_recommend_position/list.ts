import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "types/api";

export const url =
  "https://community-web.ccw.site/creation_recommend_position/list";

export type Req = {
  creationOid: MongoDBId;
};
export type Res = [];

/**
 * 获取作品推荐位置列表
 * @deprecated 此接口不可用，请使用 `getRecommendCreations` from `src/community-web/creation/recommend.ts`
 * @param {MongoDBId} creationOid 作品id
 * @returns {Promise<Res>} 推荐位置列表,因为不知道什么bug,固定为[]
 */
export async function getCreationRecommendPositionList(
  creationOid: MongoDBId,
): Promise<Res> {
  const req: Req = { creationOid };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
