import { request } from "src/request";
import { HashTag } from "src/types/hashTag";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/hash_tag/recommend/list";

export type Res = HashTag[];

/**
 * 获取推荐星球列表
 * @returns {Promise<Res>} 推荐星球列表
 */
export async function getRecommendHashTags(): Promise<Res> {
  return await request.post<ApiResponse<Res>>(url).then((res) => res.data.body);
}
