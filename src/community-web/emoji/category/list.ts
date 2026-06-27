import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, CNameOssUrl } from "types/api";

export const url = "https://community-web.ccw.site/emoji/category/list";

export type Req = {};

export interface EmojiCategory {
  createdAt: number;
  id: number;
  imageUrl: CNameOssUrl;
  name: string;
  updatedAt: number;
}

export type Res = EmojiCategory[];

/**
 * 获取表情包分类列表
 * @returns {Promise<Res>} 表情包分类列表
 */
export async function getEmojiCategoryList(): Promise<Res> {
  return await ccwAxios
    .post<ApiResponse<Res>>(url, {})
    .then((res) => res.data.body);
}
