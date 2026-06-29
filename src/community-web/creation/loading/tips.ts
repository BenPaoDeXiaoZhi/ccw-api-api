import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "types/api";
import { LoadingTip } from "types/creation";

export const url = "https://community-web.ccw.site/creation/loading/tips";

export type Req = {};
export type Res = LoadingTip;

/**
 * 获取加载提示语
 * @returns {Promise<LoadingTip>} 加载提示语
 */
export async function getLoadingTips(): Promise<Res> {
  return await ccwAxios
    .post<ApiResponse<Res>>(url, {})
    .then((res) => res.data.body);
}
