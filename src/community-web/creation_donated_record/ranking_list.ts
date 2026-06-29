import { ccwAxios } from "@ccw-api/axios";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse, MongoDBId } from "types/api";
import { PagesRes, PageArgs } from "types/pages";
import { DonatedRecord } from "types/creation";

export const url =
  "https://community-web.ccw.site/creation_donated_record/ranking_list";

export type Req = {
  creationOid: MongoDBId;
};
export type Res = {
  curUserDonatedRecord: null | DonatedRecord;
  rankingList: PagesRes<DonatedRecord>;
  totalBucks: null | number;
};

/**
 * 获取作品投币排行
 * @param {MongoDBId} creationOid 作品id
 * @param {Partial<PageArgs<"createdAt" | T>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 投币排行数据
 */
export async function getDonatedRecordRanking<T extends string>(
  creationOid: MongoDBId,
  pageArgs_: Partial<PageArgs<"createdAt" | T>> = {
    sortField: "createdAt",
  },
): Promise<Res> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = { creationOid };
  return await ccwAxios
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
