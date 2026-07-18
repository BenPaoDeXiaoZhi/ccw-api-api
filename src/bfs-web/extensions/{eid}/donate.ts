import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://bfs-web.ccw.site/extensions";

export type Req = {
  bucks: number;
  eid: string;
};

export type Res = boolean;

/**
 * 向扩展投币
 * @param {ExtensionDonateEid} eid 扩展id
 * @param {number} bucks 捐赠金币数量
 * @returns {Promise<Res>} 是否捐赠成功
 */
export async function donateExtension(
  eid: string,
  bucks: number,
): Promise<Res> {
  const req: Req = { eid, bucks };
  return await request
    .post<ApiResponse<Res>>(`${url}/${eid}/donate`, req)
    .then((res) => res.data.body);
}
