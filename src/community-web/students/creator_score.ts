import { request } from "src/request";
import { ApiResponse } from "src/types/api";
import { CreatorScore } from "src/types/userData";

export const url = "https://community-web.ccw.site/students/creator_score";

export type Req = undefined;

export type Res = CreatorScore;

/**
 * 获取当前学生创作分
 * @returns {Promise<Res>} 创作分信息
 */
export async function getCreatorScore(): Promise<Res> {
  const req = undefined;
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
