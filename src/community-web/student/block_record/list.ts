import { ccwAxios } from "@ccw-api/axios";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse, MongoDBId } from "types/api";
import { PagesRes, PageArgs } from "types/pages";

export const url = "https://community-web.ccw.site/student/block_record/list";

export type BlockRecord = {
  id: number;
  studentOid: MongoDBId;
  reason: string;
  createdAt: number;
  expireAt: number;
};

export type Req = {};

export type Res = PagesRes<BlockRecord>;

/**
 * 获取学生封禁记录列表
 * @param {Partial<PageArgs<"createdAt" | T>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 封禁记录分页数据
 */
export async function getStudentBlockRecordList<T extends string>(
  pageArgs_: Partial<PageArgs<"createdAt" | T>> = {
    sortField: "createdAt",
  },
): Promise<Res> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = {};
  return await ccwAxios
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
