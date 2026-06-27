import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, CNameOssUrl } from "types/api";

export const url = "https://community-web.ccw.site/leaflets/item/list";

export type Req = {
  advertisementId: number;
};

export interface LeafletsItem {
  advertisementId: number;
  advertisementUrl: string;
  createdAt: number;
  id: number;
  itemUrl: CNameOssUrl;
  /**
   * 广告标题
   * @example name = "六月小商店上新"
   */
  name: string;
  updatedAt: number;
}

export type Res = LeafletsItem[];

/**
 * 获取消息中心上方广告横幅项目列表
 * @param {number} advertisementId 广告ID
 * @returns {Promise<Res>} 广告项目列表
 */
export async function getLeafletsItemList(
  advertisementId: number,
): Promise<Res> {
  const req: Req = { advertisementId };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
