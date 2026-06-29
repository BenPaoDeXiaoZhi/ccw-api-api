import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "src/types/api";
import { HashTagCreationRelation } from "src/types/hashTag";

export const url =
  "https://community-web.ccw.site/hash_tag_creation/list_relation";

export type Req = {
  creationOid: MongoDBId;
};

export type Res = HashTagCreationRelation[];

/**
 * 获取作品所在星球列表
 * @param {MongoDBId} creationOid 作品ID
 * @returns {Promise<Res>} 星球列表
 */
export async function getPlanetsOfCreation(
  creationOid: MongoDBId,
): Promise<Res> {
  const req: Req = { creationOid };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
