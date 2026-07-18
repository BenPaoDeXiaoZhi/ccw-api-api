import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/notify_message/show";

export type NotifyMessageType = "COMMENT_AUDIT";

export type Req = {
  type: NotifyMessageType;
};

export type NotifyMessage = {
  /** @example message = '由于包含广告或垃圾信息，已被管理员删除！' */
  message: string;
  /** @example title = '广告或垃圾信息' */
  title: string;
};

export type Res = NotifyMessage[];

/**
 * 获取通知删除原因列表
 * @returns {Promise<Res>} 消息删除原因列表
 */
export async function getNotifyDeleteReasons(): Promise<Res> {
  const req: Req = { type: "COMMENT_AUDIT" };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
