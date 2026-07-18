import { request } from "src/request";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse, MongoDBId } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";

export const url = "https://community-web.ccw.site/student/block_record/list";

export type BlockRecord = {
  createdAt: number;
  expireAt: number;
  id: number;
  reason: string;
  studentOid: MongoDBId;
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
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
