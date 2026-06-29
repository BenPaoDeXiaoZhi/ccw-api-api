import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "src/types/api";
import { StudentUpdateReq } from "src/types/userData";

export const url = "https://community-web.ccw.site/students/update";

export type Req = StudentUpdateReq;

export type Res = boolean;

/**
 * 更新学生个人信息
 * @param {string} gender 性别
 * @param {boolean} hideGender 是否隐藏性别
 * @param {string} fullName 全名
 * @param {number} birthday 生日时间戳
 * @param {string} programmingCapability 编程能力
 * @param {string} school 学校
 * @param {string} qq QQ号
 * @param {string} hobbies 爱好
 * @param {string} learnedProgrammingLanguages 学过的编程语言
 * @returns {Promise<boolean>} 是否更新成功
 */
export async function updateStudent(
  gender: string,
  hideGender: boolean,
  fullName: string,
  birthday: number,
  programmingCapability: string,
  school: string,
  qq: string,
  hobbies: string,
  learnedProgrammingLanguages: string,
): Promise<Res> {
  const req: Req = {
    gender,
    hideGender,
    fullName,
    birthday,
    programmingCapability,
    school,
    qq,
    hobbies,
    learnedProgrammingLanguages,
  };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
