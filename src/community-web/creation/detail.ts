import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "src/types/api";
import { Creation } from "src/types/creation";

export const url = "https://community-web.ccw.site/creation/detail";

export type Req = {
  accessKey: string;
  oid: MongoDBId;
};
export type Res = Creation;

/**
 * 获取作品详情
 * @param {MongoDBId} oid 作品id
 * @param {string} accessKey
 * @returns {Promise<Creation>} 作品详情
 */
export async function getCreationDetail(
  oid: MongoDBId,
  accessKey: string,
): Promise<Res> {
  const req: Req = { oid, accessKey };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
