import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/user_package/status";

export type Req = {
  id: number;
  status: boolean;
};

export type Res = boolean;

/**
 * 设置用户商品状态（如佩戴/卸下头像框）
 * @param {number} id 用户商品ID
 * @param {boolean} status 商品状态，true为佩戴，false为卸下
 * @returns {Promise<Res>} 设置结果
 */
export async function setUserProductStatus(
  id: number,
  status: boolean,
): Promise<Res> {
  const req: Req = { status, id };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
