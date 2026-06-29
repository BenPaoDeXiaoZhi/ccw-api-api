import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "types/api";

export const url =
  "https://community-web.ccw.site/typical_project/student/unread_count";

export type Req = {
  studentOid: MongoDBId;
};

export type Res = [];

/**
 * @deprecated 该接口只会返回"[]"
 * 获取学生未读应用课工程文件项目数量
 * @param {MongoDBId} studentOid 学生id
 * @returns {Promise<Res>} 未读应用课工程文件项目id列表
 */
export async function getTypicalProjectUnreadCount(
  studentOid: MongoDBId,
): Promise<Res> {
  const req: Req = { studentOid };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
