import { request } from "src/request";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse, MongoDBId } from "src/types/api";
import { Extension } from "src/types/extensions";
import { PagesRes, PageArgs } from "src/types/pages";

export const url = "https://bfs-web.ccw.site/users";

export type Res = PagesRes<Extension>;

/**
 * 获取用户扩展列表分页
 * @param {MongoDBId} userOid 用户id
 * @param {Partial<PageArgs<"createdAt" | "updatedAt" | T>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 扩展分页列表
 */
export async function getUserExtensions<T extends string>(
  userOid: MongoDBId,
  pageArgs_: Partial<PageArgs<"createdAt" | "updatedAt" | T>> = {
    sortField: "updatedAt",
  },
): Promise<Res> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(`${url}/${userOid}/extensions`, pageArgs);
  return await request
    .get<ApiResponse<Res>>(queryUrl)
    .then((res) => res.data.body);
}
