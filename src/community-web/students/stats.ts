import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "src/types/api";
import { StudentFollowerStats } from "src/types/userData";

export const url = "https://community-web.ccw.site/students/stats";

export type Req = {
  studentOid: MongoDBId;
};

export type Res = StudentFollowerStats;

/**
 * 获取学生统计数据（关注数、粉丝数）
 * @param {MongoDBId} studentOid 学生id
 * @returns {Promise<Res>} 统计数据
 */
export async function getStudentStats(studentOid: MongoDBId): Promise<Res> {
  const req: Req = { studentOid };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
