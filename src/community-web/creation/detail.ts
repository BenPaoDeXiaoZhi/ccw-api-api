import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";
import { Creation } from "src/types/creation";

export const url = "https://community-web.ccw.site/creation/detail";

export type Req = {
  accessKey: string;
  mode: "" | "EDIT";
  oid: MongoDBId;
};
export type Res = Creation;

/**
 * 获取作品详情
 * @param {MongoDBId} oid 作品id
 * @param {string} accessKey
 * @param {''|'EDIT'} mode
 * @returns {Promise<Creation>} 作品详情
 */
export async function getCreationDetail(
  oid: MongoDBId,
  accessKey: string,
  mode: "" | "EDIT" = "",
): Promise<Res> {
  const req: Req = { oid, accessKey, mode };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
