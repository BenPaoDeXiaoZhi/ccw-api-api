import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/event";

export type Req = {
  actionId: string;
};

export type Res = boolean;

/**
 * 发送事件
 * @param {string} actionId 事件ID
 * @returns {Promise<Res>} 是否成功
 */
export async function sendEvent(actionId: string): Promise<Res> {
  const req: Req = { actionId };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
