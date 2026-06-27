import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "types/api";
import { PagesRes, PageArgs } from "types/pages";
import { Creation } from "types/creation";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";

export const url = "https://community-web.ccw.site/creation/page_by_student";
export type SortField = "createdAt" | "likeCount" | "viewCount";
const dpa: PageArgs<SortField> = {
  ...DEFAULT_PAGE_ARGS,
  sortField: "createdAt",
};

export type Req = {
  studentOids: MongoDBId[];
};
export type Res = PagesRes<Creation>;

/**
 * 获取学生的作品列表
 * @param {MongoDBId[]} studentOids 学生id列表
 * @param {Partial<PageArgs<SortField>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 作品分页结果
 */
export async function getCreationsByStudent(
  studentOids: MongoDBId[],
  pageArgs_: Partial<PageArgs<SortField>> = {},
): Promise<Res> {
  const pageArgs = {
    ...dpa,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = { studentOids };
  return await ccwAxios
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
