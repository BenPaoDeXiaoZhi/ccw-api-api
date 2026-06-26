import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "types/api";
import { Creation } from "types/creation";

export const url =
  "https://community-web.ccw.site/creation/introduction/detail";

export type Req = {
  studentOid: MongoDBId;
};
export type Res = Creation;

/**
 * 获取用户代表作
 * @param {MongoDBId} studentOid 学生id
 * @returns {Promise<Creation>} 作品详情
 */
export async function getCreationIntroduction(
  studentOid: MongoDBId,
): Promise<Res> {
  const req: Req = { studentOid };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
