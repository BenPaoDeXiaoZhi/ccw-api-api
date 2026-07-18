import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/muted_user/detail";

export type Req = {
  studentNumber: string;
};

export type Res = null;

/**
 * 获取禁言用户详情
 * @param {string} studentNumber 用户number(244373873)
 * @returns {Promise<Res>} 禁言用户详情（null表示未禁言）
 */
export async function getMutedUserDetail(studentNumber: string): Promise<Res> {
  const req: Req = { studentNumber };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
