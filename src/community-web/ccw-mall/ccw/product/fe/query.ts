import { request } from "src/request";
import { ApiResponse, CNameOssUrl, MongoDBId } from "src/types/api";
import { PagesRes, PageArgs, SortType } from "src/types/pages";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { Product, ProductCategory, ProductSource } from "src/types/mall";

export const url =
  "https://community-web.ccw.site/ccw-mall/ccw/product/fe/query";

export type ProductSortField =
  "createdAt" | "updatedAt" | "pointPrice" | "priority" | "stockNum";

export type Req = {
  page: number;
  perPage: number;
  productCategory?: ProductCategory;
  sortType: SortType;
  source?: ProductSource;
};

export type Res = PagesRes<Product, ProductSortField>;

/**
 * 分页查询CCW小商店商品列表
 * @param {ProductCategory | undefined} productCategory 商品分类（可选）：5=头像框，7=周边商品，10=表情 等
 * @param {Partial<PageArgs<ProductSortField>>} pageArgs_ 分页参数（默认 page=1, perPage=30, sortType="DESC"）
 * @returns {Promise<Res>} 商品分页结果 PagesRes<Product>
 */
export async function queryMallProducts<T extends string>(
  productCategory?: ProductCategory,
  pageArgs_: Partial<PageArgs<ProductSortField | T>> = {
    sortField: "createdAt",
  },
): Promise<Res> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = {
    page: pageArgs.page,
    perPage: pageArgs.perPage,
    sortType: pageArgs.sortType,
    productCategory,
    source: "CCW_OFFICIAL",
  };
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
