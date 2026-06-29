import { ccwAxios } from "@ccw-api/axios";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse, MongoDBId } from "types/api";
import { PagesRes, PageArgs } from "types/pages";
import { StudentSimple } from "types/userData";

export const url = "https://community-web.ccw.site/student/following/page";

export type Req = {
  studentOid: MongoDBId;
};

export type Res = PagesRes<
  StudentSimple & { operatorFollowingStatus: "FOLLOWED" | "BOTH_FOLLOWED" }
>;

/**
 * 获取学生关注列表分页
 * @param {MongoDBId} studentOid 学生id
 * @param {Partial<PageArgs<"createdAt" | T>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 关注列表分页
 */
export async function getStudentFollowingPage<T extends string>(
  studentOid: MongoDBId,
  pageArgs_: Partial<PageArgs<"createdAt" | T>> = {
    sortField: "createdAt",
  },
): Promise<Res> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = {
    studentOid,
  };
  return await ccwAxios
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
