import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "types/api";
import { Student } from "types/userData";

export const url = "https://community-web.ccw.site/creation/student/detail";

export type Req = {
  studentOid: MongoDBId;
};
export type Res = Student;

/**
 * 获取学生详情
 * @param {MongoDBId} studentOid 学生id
 * @returns {Promise<Student>} 学生详情
 */
export async function getCreationStudentDetail(
  studentOid: MongoDBId,
): Promise<Res> {
  const req: Req = { studentOid };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
