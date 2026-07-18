import { request } from "src/request";
import { ApiResponse } from "src/types/api";
import { HashTagFavorite } from "src/types/hashTag";

export const url = "https://community-web.ccw.site/hash_tag_favorite/detail";

export type Req = {
  hashTagId: number;
};

export type Res = HashTagFavorite;

/**
 * 获取星球收藏详情
 * @param {number} hashTagId 星球ID
 * @returns {Promise<Res>} 星球收藏详情
 */
export async function getHashTagFavoriteDetail(
  hashTagId: number,
): Promise<Res> {
  const req: Req = { hashTagId };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
