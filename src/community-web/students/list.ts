import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "src/types/api";
import { StudentListItem } from "src/types/userData";

export const url = "https://community-web.ccw.site/students/list";

export type Req = {
  studentOids: MongoDBId[];
};

export type Res = StudentListItem[];

/**
 * 根据学生OID列表获取学生信息列表(这个会返回一堆null,不建议使用)
 * @param {MongoDBId[]} studentOids 学生OID列表
 * @returns {Promise<Res>} 学生信息列表
 */
export async function getStudentsList(studentOids: MongoDBId[]): Promise<Res> {
  const req: Req = { studentOids };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
