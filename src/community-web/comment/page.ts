import { ccwAxios } from "@ccw-api/axios";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse } from "types/api";
import { PagesRes, PageArgs } from "types/pages";
import { Comment } from "types/comment";

export const url = "https://community-web.ccw.site/comment/page";
export type SortField = null;
const dpa: PageArgs<SortField> = {
  ...DEFAULT_PAGE_ARGS,
  sortField: null,
};

export type Req = {
  topicId: number;
  parentId: number;
  statuses: ("PUBLISHED" | "FOLDED")[];
};
export type Res = PagesRes<Comment>;

/**
 * 根据topicId获取评论的回复
 * @param {number} topicId 话题id
 * @param {number} parentId 父评论id
 * @param {("PUBLISHED" | "FOLDED")[]} statuses 状态过滤
 * @param {Partial<PageArgs<SortField>>} pageArgs_ 分页参数
 * @returns {Promise<Comment[]>} 评论列表
 */
export async function getCommentReplies(
  topicId: number,
  parentId: number,
  statuses: ("PUBLISHED" | "FOLDED")[] = ["PUBLISHED", "FOLDED"],
  pageArgs_: Partial<PageArgs<SortField>> = {},
): Promise<Comment[]> {
  const pageArgs = {
    ...dpa,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = { topicId, parentId, statuses };
  return await ccwAxios
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body.data);
}
