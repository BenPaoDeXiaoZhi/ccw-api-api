import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "src/types/api";
import {
  ProfileExtraInfo,
  ParentInfo,
  CurrentParent,
  InfoModifyDate,
  StudentSelfDetailFields,
  StudentSelfDetail,
} from "src/types/userData";

export const url = "https://community-web.ccw.site/students/self/detail";

export type StudentExtraInfo = ProfileExtraInfo;

export type Req = {
  fields: StudentSelfDetailFields[];
  needExtraInfo: boolean;
  needGrade: boolean;
};

export type Res = StudentSelfDetail;

/**
 * 获取当前登录学生的详细信息
 * @param {boolean} needGrade 是否需要年级信息
 * @param {boolean} needExtraInfo 是否需要扩展信息
 * @param {StudentSelfDetailFields[]} fields 需要返回的字段列表
 * @returns {Promise<Res>} 当前学生详情
 */
export async function getStudentSelfDetail(
  needGrade: boolean,
  needExtraInfo: boolean,
  fields: StudentSelfDetailFields[],
): Promise<Res> {
  const req: Req = { needGrade, needExtraInfo, fields };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}

export type { ParentInfo, CurrentParent, InfoModifyDate };
