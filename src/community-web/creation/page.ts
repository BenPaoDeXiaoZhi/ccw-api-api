import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "types/api";
import { PagesRes, PageArgs } from "types/pages";
import { CreationSimple } from "types/creation";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";

export const url = "https://community-web.ccw.site/creation/page";
export type SortField =
  | "createdAt"
  | "likeCount"
  | "viewCount"
  | "updatedAt"
  | "commentCount";
const dpa: PageArgs<SortField> = {
  ...DEFAULT_PAGE_ARGS,
  sortField: "createdAt",
};

export type Req = {
  remixCreationOids: MongoDBId[];
};
export type Res = PagesRes<CreationSimple>;

/**
 * 根据原作品id获取改编作品分页列表
 * @param {MongoDBId[]} remixCreationOids 原作品id列表
 * @param {Partial<PageArgs<SortField>>} pageArgs_ 分页参数
 * @returns {Promise<CreationSimple[]>} 改编作品列表
 */
export async function getCreationPage(
  remixCreationOids: MongoDBId[],
  pageArgs_: Partial<PageArgs<SortField>> = {},
): Promise<CreationSimple[]> {
  const pageArgs = {
    ...dpa,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = { remixCreationOids };
  return await ccwAxios
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body.data);
}
