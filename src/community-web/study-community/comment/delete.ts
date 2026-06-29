import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "src/types/api";

export const url =
  "https://community-web.ccw.site/study-community/comment/delete";

export type Req = {
  id: number;
};

export type Res = boolean;

/**
 * 删除评论
 * @param {number} id 评论id
 * @returns {Promise<Res>} 操作是否成功
 */
export async function deleteComment(id: number): Promise<Res> {
  const req: Req = { id };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
