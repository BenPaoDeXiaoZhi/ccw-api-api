import { PageArgs } from "types/pages";

/**
 * 生成ccw分页查询url
 * @param url_ 分页查询api
 * @param {PageArgs<SortField>} pageArgs 分页参数
 * @returns 生成的实际查询url
 */

export function queryPage<SortField extends string>(
  url_: string,
  pageArgs: PageArgs<SortField>,
) {
  const url = new URL(url_);
  Object.entries(pageArgs).forEach(([k, v]) => {
    if (v == null) {
      return;
    }
    url.searchParams.set(k, v);
  });
  return url.toString();
}

export const DEFAULT_PAGE_ARGS: PageArgs<string> = {
  page: 1,
  perPage: 20,
  sortType: "DESC",
  sortField: "",
};
