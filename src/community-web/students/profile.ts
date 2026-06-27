import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "types/api";
import { StudentProfile } from "types/userData";

export const url = "https://community-web.ccw.site/students/profile";

export type Req = {
  studentOid: MongoDBId;
};

export type Res = StudentProfile;

/**
 * 获取学生个人主页资料
 * @param {MongoDBId} studentOid 学生id
 * @returns {Promise<Res>} 学生资料
 */
export async function getStudentProfile(studentOid: MongoDBId): Promise<Res> {
  const req: Req = { studentOid };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
