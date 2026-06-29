import { ccwAxios } from "@ccw-api/axios";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse, CNameOssUrl, MongoDBId } from "types/api";
import { PagesRes, PageArgs } from "types/pages";

export const url = "https://community-web.ccw.site/cloud_asset/search";
export type SortField = "type" | "createdAt";
const dpa: PageArgs<SortField> = {
  ...DEFAULT_PAGE_ARGS,
  sortField: "createdAt",
};

export type Req = {
  creatorOid: MongoDBId;
  path: string;
};
export type Res = PagesRes<CloudAsset>;

export interface CloudAsset {
  categories: [];
  /**
   * 毫秒级时间戳
   */
  createdAt: number;
  creatorOid: MongoDBId;
  customizedInfo: null;
  ext: {};
  id: string;
  keywords: [];
  name: string;
  /**
   * @example "/23azZqHBnqj/2BzzTdi5I5C/2BzzTdi5I5w"
   */
  path: string;
  previewImages: [CNameOssUrl];
  size: number;
  tags: [];
  type: CloudAssetType;
  updatedAt: number;
  /**
   * 素材直链
   */
  uri: CNameOssUrl;
}
export type CloudAssetType = "COSTUME" | "FOLDER" | "VIDEO" | "AUDIO";

/**
 * 获取用户云背包特定目录内素材
 * @param {MongoDBId} creatorOid 用户id
 * @param {string} path 目录(例如'/23azZqHBnqj/2BzzTdi5I5C/')
 * @param {Partial<PageArgs<SortField | T>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 目录内的素材分页结果
 */
export async function searchCloudAssets<T extends string>(
  creatorOid: MongoDBId,
  path: string = "/",
  pageArgs_: Partial<PageArgs<SortField | T>> = {},
): Promise<Res> {
  const pageArgs = {
    ...dpa,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = { creatorOid, path };
  return await ccwAxios
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
