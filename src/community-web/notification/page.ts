import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "types/api";
import { PagesRes, PageArgs } from "types/pages";
import { queryPage, DEFAULT_PAGE_ARGS } from "src/queryPages";
import { NotificationGroup, Notification } from "types/notification";

export const url = "https://community-web.ccw.site/notification/page";

export type Req = {
  notifyGroup: NotificationGroup;
  page: number;
};

export type Res = PagesRes<Notification>;

/**
 * 分页获取通知列表
 * @param {NotificationGroup} notifyGroup 通知分组
 * @param {Partial<PageArgs>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 分页通知数据
 */
export async function getNotificationPage(
  notifyGroup: NotificationGroup = NotificationGroup.CommentToMe,
  pageArgs_: Partial<PageArgs> = {},
): Promise<Res> {
  const pageArgs = { ...DEFAULT_PAGE_ARGS, ...pageArgs_ };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = {
    notifyGroup,
    page: pageArgs.page,
  };
  return await ccwAxios
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
