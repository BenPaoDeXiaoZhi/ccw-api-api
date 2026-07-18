import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://gandi-main.ccw.site/bulletins";

export type BulletinDetail = {
  createdAt: number;
  id: number;
  publishedAt: number;
  status: "PUBLISHED";
  title: string;
  updatedAt: number;
};

export type Res = BulletinDetail;

/**
 * 获取公告详情
 * @param {number} id 公告id
 * @returns {Promise<Res>} 公告详情
 */
export async function getBulletinDetail(id: number): Promise<Res> {
  return await request
    .get<ApiResponse<Res>>(`${url}/${id}`)
    .then((res) => res.data.body);
}
