import { request } from "src/request";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";

export const url = "https://gandi-main.ccw.site/bulletins";

export type BulletinItem = {
  createdAt: number;
  id: number;
  publishedAt: number;
  status: "PUBLISHED";
  title: string;
  updatedAt: number;
};

export type SortField = "publishedAt";

export type Res = PagesRes<BulletinItem>;

/**
 * 获取公告分页列表
 * @param {'PUBLISHED' | S} status 公告状态过滤
 * @param {Partial<PageArgs<SortField | T>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 公告分页列表
 */
export async function getBulletinsPage<T extends string, S extends string>(
  status: "PUBLISHED" | S = "PUBLISHED",
  pageArgs_: Partial<PageArgs<SortField | T>> = {
    sortField: "publishedAt",
  },
): Promise<Res> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, {
    ...pageArgs,
    status,
  } as PageArgs<SortField>);
  return await request
    .get<ApiResponse<Res>>(queryUrl)
    .then((res) => res.data.body);
}
