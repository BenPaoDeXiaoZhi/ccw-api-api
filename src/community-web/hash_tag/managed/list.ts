import { ccwAxios } from "@ccw-api/axios";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse, MongoDBId } from "types/api";
import { PagesRes, PageArgs } from "types/pages";
import { HashTag } from "types/creation";

export const url = "https://community-web.ccw.site/hash_tag/managed/list";
export type SortField = "createdAt" | "priority" | string;
const dpa: PageArgs<SortField> = {
  ...DEFAULT_PAGE_ARGS,
  sortField: "createdAt",
};

export type Req = PageArgs<SortField> & {
  studentOid: MongoDBId;
  excludeHashTagIds: number[];
};
export type Res = PagesRes<HashTag, SortField>;

/**
 * 获取用户管理的星球列表
 * @param {MongoDBId} studentOid 学生oid
 * @param {number[]} excludeHashTagIds 排除的星球id列表
 * @param {Partial<PageArgs<SortField>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 管理的星球分页结果
 */
export async function getManagedHashTags(
  studentOid: MongoDBId,
  excludeHashTagIds: number[] = [],
  pageArgs_: Partial<PageArgs<SortField>> = {},
): Promise<Res> {
  const pageArgs = {
    ...dpa,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = {
    ...pageArgs,
    studentOid,
    excludeHashTagIds,
  };
  return await ccwAxios
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
