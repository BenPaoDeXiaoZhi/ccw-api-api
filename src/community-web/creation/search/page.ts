import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "types/api";
import { PagesRes, PageArgs } from "types/pages";
import { CreationSimple } from "types/creation";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";

export const url = "https://community-web.ccw.site/creation/search/page";
export type SortField = "createdAt" | "likeCount" | "viewCount";
const dpa: PageArgs<SortField> = {
  ...DEFAULT_PAGE_ARGS,
  sortField: "createdAt",
};

export type Req = {
  tag: string;
};
export type Res = PagesRes<CreationSimple>;

/**
 * 按名称搜索作品
 * @param {string} tag 标签 例如:游戏 动画故事 角色扮演 kukeChat
 * @param {Partial<PageArgs<SortField>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 作品分页结果
 */
export async function searchCreationsByTag(
  tag: string,
  pageArgs_: Partial<PageArgs<SortField>> = {},
): Promise<Res> {
  const pageArgs = {
    ...dpa,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = { tag };
  return await ccwAxios
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
