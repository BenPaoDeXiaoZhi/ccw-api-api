import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "src/types/api";
import { UserLabels } from "src/types/userData";

export const url = "https://community-web.ccw.site/user_label/list";

export type Req = {};

export type Res = {
  userLabels: UserLabels[];
};

/**
 * 获取用户标签列表
 * @returns {Promise<Res>} 用户标签数据
 */
export async function getUserLabelList(): Promise<Res> {
  const req: Req = {};
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
