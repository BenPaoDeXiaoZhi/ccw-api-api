import { request } from "src/request";
import { ApiResponse } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";
import { CreationSimple } from "src/types/creation";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";

export const url = "https://community-web.ccw.site/creation/recommend";
export type SortField = "createdAt" | "likeCount" | "viewCount";
const dpa: PageArgs<SortField> = {
  ...DEFAULT_PAGE_ARGS,
  sortField: "createdAt",
};

export type Req = {
  num: number;
  subjectType: "POTENTIAL";
};
export type Res = PagesRes<CreationSimple>;

/**
 * 获取推荐作品列表
 * @param {Partial<PageArgs<SortField | T>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 作品分页结果
 */
export async function getRecommendCreations<T extends string>(
  num: number,
  pageArgs_: Partial<PageArgs<SortField | T>> = {},
): Promise<Res> {
  const pageArgs = {
    ...dpa,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = { num, subjectType: "POTENTIAL" };
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
