import { request } from "src/request";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";
import { Comment } from "src/types/comment";

export const url = "https://community-web.ccw.site/comment/page";
export type SortField = "createdAt";

export type Req = {
  parentId: number;
  statuses: ("PUBLISHED" | "FOLDED")[];
  topicId: number;
};
export type Res = PagesRes<Comment>;

/**
 * 根据topicId获取评论的回复
 * @param {number} topicId 话题id
 * @param {number} parentId 父评论id
 * @param {("PUBLISHED" | "FOLDED")[]} statuses 状态过滤
 * @param {Partial<PageArgs<SortField|T>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 评论分页结果
 */
export async function getCommentReplies<T extends string>(
  topicId: number,
  parentId: number,
  statuses: ("PUBLISHED" | "FOLDED")[] = ["PUBLISHED", "FOLDED"],
  pageArgs_: Partial<PageArgs<SortField | T>> = {
    sortField: "createdAt",
  },
): Promise<Res> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = { topicId, parentId, statuses };
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
