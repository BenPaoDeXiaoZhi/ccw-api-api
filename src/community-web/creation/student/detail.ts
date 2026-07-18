import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";
import { Student } from "src/types/userData";

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
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
