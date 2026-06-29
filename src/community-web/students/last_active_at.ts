import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url = "https://community-web.ccw.site/students/last_active_at";

export type Req = {
  studentOid: MongoDBId;
};

export type Res = {
  lastActiveAt: number;
};

/**
 * 获取学生最后活跃时间
 * @param {MongoDBId} studentOid 学生id
 * @returns {Promise<Res>} 最后活跃时间数据
 */
export async function getStudentLastActiveAt(
  studentOid: MongoDBId,
): Promise<Res> {
  const req: Req = { studentOid };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
