export type SortType = "ASC" | "DESC";
/**
 * 分页参数
 */
export interface PageArgs<SortField extends string> {
  /**
   * 当前页码
   */
  page: number;
  /**
   * 每页数据量
   */
  perPage: number;
  /**
   * 排序依据
   *
   * 这个实际上可以根据返回值的任何键排序
   */
  sortField: SortField;
  /**
   * 排序方式
   *
   * ASC: 升序,
   * DESC: 降序
   */
  sortType: SortType;
}

export type PagesRes<Item, SortField = string> = {
  data: Item[];
  offset: number;
  page: number;
  perPage: number;
  sortField: SortField;
  sortType: SortType;
  totalNum: number;
  totalPages: number;
};
