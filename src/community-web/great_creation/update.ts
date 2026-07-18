import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url = "https://community-web.ccw.site/great_creation/update";

export type Req = {
  creationOid: MongoDBId | "";
};

export type Res = boolean;

/**
 * 更换代表作
 * @param {MongoDBId|""} creationOid 作品OID 若为""则是取消展示
 * @returns {Promise<Res>} 更换结果
 */
export async function updateGreatCreation(
  creationOid: MongoDBId | "",
): Promise<Res> {
  const req: Req = { creationOid };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
