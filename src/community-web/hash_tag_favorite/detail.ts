import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "types/api";
import { HashTagFavorite } from "types/hashTag";

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
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
