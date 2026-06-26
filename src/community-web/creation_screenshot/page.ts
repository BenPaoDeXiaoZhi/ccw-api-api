import { ccwAxios } from "@ccw-api/axios";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse, MongoDBId } from "types/api";
import { PagesRes, PageArgs } from "types/pages";
import { CreationScreenshot } from "types/creation";

export const url = "https://community-web.ccw.site/creation_screenshot/page";

export type Req = {
  subjectOid: MongoDBId;
};
export type Res = PagesRes<CreationScreenshot>;

/**
 * 获取作品截图分页
 * @param {MongoDBId} subjectOid 作品id
 * @param {Partial<PageArgs>} pageArgs_ 分页参数
 * @returns {Promise<CreationScreenshot[]>} 截图列表
 */
export async function getCreationScreenshotPage(
  subjectOid: MongoDBId,
  pageArgs_: Partial<PageArgs> = {},
): Promise<CreationScreenshot[]> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = { subjectOid };
  return await ccwAxios
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body.data);
}