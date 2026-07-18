import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url =
  "https://community-web.ccw.site/study-community/comment/fold";

export type Req = {
  id: number;
};

export type Res = boolean;

/**
 * 折叠评论
 * @param {number} id 评论id
 * @returns {Promise<Res>} 操作是否成功
 */
export async function foldComment(id: number): Promise<Res> {
  const req: Req = { id };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
