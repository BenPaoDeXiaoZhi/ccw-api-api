import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, CNameOssUrl, MongoDBId } from "src/types/api";

export const url = "https://community-web.ccw.site/emoji/all";

export type Req = {};

export interface Emoji {
  category: `${number}`;
  createdAt: number;
  id: number;
  imageUrl: CNameOssUrl;
  /**
   * 表情包名称
   */
  name: string;
  /**
   * 表情包作者
   */
  operatorName: string;
  operatorOid: MongoDBId;
  priority: number;
  status: "ENABLED";
  updatedAt: number;
}

export type Res = Emoji[];

/**
 * 获取所有表情包
 * @returns {Promise<Res>} 表情包列表
 */
export async function getAllEmojis(): Promise<Res> {
  return await ccwAxios
    .post<ApiResponse<Res>>(url, {})
    .then((res) => res.data.body);
}
