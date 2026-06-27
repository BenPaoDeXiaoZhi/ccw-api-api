import { ccwAxios } from "@ccw-api/axios";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse } from "types/api";
import { PagesRes, PageArgs } from "types/pages";
import { Comment, SectionType, SubjectType } from "types/comment";

export const url = "https://community-web.ccw.site/comment/page_by_topic";
export type SortField = "createdAt" | "likes";
const dpa: PageArgs<SortField> = {
  ...DEFAULT_PAGE_ARGS,
  sortField: "createdAt",
};

export type Req = {
  subjectOid: string;
  subjectType: string;
  sectionType: SectionType;
};
export type Res = PagesRes<Comment>;

/**
 * 根据主题获取评论列表
 * @param {string} subjectOid 主题oid
 * @param {SubjectType} subjectType 主题类型 (如: "POST")
 * @param {string} sectionType 区块类型 (如: "COMMENT")
 * @param {Partial<PageArgs<SortField>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 评论分页结果
 */
export async function getCommentsByTopic(
  subjectOid: string,
  subjectType: SubjectType,
  sectionType: SectionType,
  pageArgs_: Partial<PageArgs<SortField>> = {},
): Promise<Res> {
  const pageArgs = {
    ...dpa,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = { subjectOid, subjectType, sectionType };
  return await ccwAxios
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
