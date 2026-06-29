import { ccwAxios } from "@ccw-api/axios";
import {
  ApiResponse,
  CNameOssUrl,
  LatestCNameOssUrl,
  MongoDBId,
} from "types/api";
import { CreationScreenMode } from "types/creation";

export const url = "https://community-web.ccw.site/creation/update";

export type Req = {
  latestCoverLink: string;
  latestProjectLink: LatestCNameOssUrl;
  oid: MongoDBId;
  screenMode: CreationScreenMode;
};

export type Res = boolean;

/**
 * 更新作品信息
 * @param {MongoDBId} oid 作品id
 * @param {LatestCNameOssUrl} latestProjectLink_ 最新项目链接
 * @param {CreationScreenMode} screenMode 屏幕模式
 * @param {CNameOssUrl} latestCoverLink 最新封面链接
 * @returns {Promise<Res>} 更新是否成功
 */
export async function updateCreation(
  oid: MongoDBId,
  latestProjectLink_: CNameOssUrl,
  screenMode: CreationScreenMode = "LANDSCAPE",
  latestCoverLink: CNameOssUrl,
): Promise<Res> {
  if (!latestProjectLink_.includes("t=")) {
    const url = new URL(latestProjectLink_);
    url.searchParams.set("t", Date.now().toString());
    latestProjectLink_ = url.toString() as LatestCNameOssUrl;
  }
  const latestProjectLink = latestProjectLink_ as LatestCNameOssUrl;
  const req: Req = { oid, latestProjectLink, screenMode, latestCoverLink };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
