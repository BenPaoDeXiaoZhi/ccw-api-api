import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "types/api";

export const url = "https://community-web.ccw.site/cloud_asset/user/privacy";

export type Req = {};

export type Res = {
  /**
   * @example 100MB: "104857600"
   */
  totalStorage: string;
  usedStorage: string;
};

/**
 * 获取用户云存储空间信息
 * @returns {Promise<Res>} 存储空间信息
 */
export async function getUserAssetStorageSize(): Promise<Res> {
  return await ccwAxios
    .post<ApiResponse<Res>>(url, {})
    .then((res) => res.data.body);
}
