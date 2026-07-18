import { request } from "src/request";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";
import { Creation } from "src/types/creation";

export const url = "https://community-web.ccw.site/hash_tag_creation/mine";
export type SortField =
  "createdAt" | "lastPassedAt" | "lastSubmittedAt" | "lastPublishedAt" | string;
const dpa: PageArgs<SortField> = {
  ...DEFAULT_PAGE_ARGS,
  sortField: "lastPassedAt",
};
export type HashTagCreationStatus = "PUBLISHED" | "SUBMITTED" | string;

export type Req = PageArgs<SortField> & {
  excludeHashTag?: string;
  statuses?: HashTagCreationStatus[];
};
export type Res = PagesRes<Creation, SortField>;

/**
 * 获取当前用户提交到星球的作品列表
 * @param {string} [excludeHashTag] 排除的星球标识符（名称）
 * @param {HashTagCreationStatus[]} [statuses] 作品状态筛选，例如 ["PUBLISHED"]
 * @param {Partial<PageArgs<SortField | T>>} [pageArgs_] 分页参数
 * @returns {Promise<Res>} 星球作品分页结果
 */
export async function getMyHashTagCreations<T extends string>(
  excludeHashTag?: string,
  statuses?: HashTagCreationStatus[],
  pageArgs_: Partial<PageArgs<SortField | T>> = {},
): Promise<Res> {
  const pageArgs = {
    ...dpa,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = {
    ...pageArgs,
    excludeHashTag,
    statuses,
  };
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
