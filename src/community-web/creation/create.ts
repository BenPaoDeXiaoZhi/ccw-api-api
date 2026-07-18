import { request } from "src/request";
import { ApiResponse, CNameOssUrl, MongoDBId } from "src/types/api";
import { CreationScreenMode, SourceOpenLevel } from "src/types/creation";

export const url = "https://community-web.ccw.site/creation/create";

export type Req = {
  artifactType: "STANDARD";
  latestCoverLink: CNameOssUrl;
  latestProjectLink: CNameOssUrl;
  screenMode: CreationScreenMode;
  sourceOpenLevel: SourceOpenLevel;
  title: string;
  type: "ORIGINAL" | "REMIXED";
};

export type Res = {
  artifactType: "STANDARD";
  createdAt: null | number;
  creationRelease: null | object;
  currentReleaseOid: null | MongoDBId;
  deletedAt: null | number;
  description: null | string;
  eid: null | string;
  ext: null | object;
  favoriteCount: number;
  featuredCoverLink: null | CNameOssUrl;
  forEveryone: null | boolean;
  hashTags: string[];
  isOpenSource: null | boolean;
  isTeamwork: null | boolean;
  keyboardLayout: null | string;
  lastPassedAt: null | number;
  latestCoverLink: CNameOssUrl;
  latestProjectLink: CNameOssUrl;
  likeCount: number;
  oid: MongoDBId;
  operatedAt: number;
  rank: "ORDINARY";
  remixCreationOid: null | MongoDBId;
  remixedCount: number;
  repostedSource: null | object;
  requireLogin: null | boolean;
  screenMode: CreationScreenMode;
  sourceOpenLevel: SourceOpenLevel;
  status: "DRAFT" | "PUBLISHED" | "BANNED" | "SUBMITTED" | "REJECTED";
  studentOid: MongoDBId;
  tags: string[];
  title: string;
  type: "ORIGINAL" | "REMIXED";
  typicalProjectId: null | string;
  updatedAt: number;
  viewCount: number;
  visibleScope: null | "PRIVATE" | "ALL";
};

/**
 * 创建作品（草稿）
 * @param {string} title 作品名称
 * @param {CNameOssUrl} latestProjectLink 最新项目文件链接 (.sb3)
 * @param {CNameOssUrl} latestCoverLink 最新封面链接
 * @param {"ORIGINAL" | "REMIXED"} type 作品类型
 * @param {CreationScreenMode} screenMode 屏幕模式
 * @param {SourceOpenLevel} sourceOpenLevel 源码开放级别
 * @returns {Promise<Res>} 创建后的作品草稿信息
 */
export async function createCreation(
  title: string,
  latestProjectLink: CNameOssUrl,
  latestCoverLink: CNameOssUrl,
  type: "ORIGINAL" | "REMIXED" = "ORIGINAL",
  screenMode: CreationScreenMode = "LANDSCAPE",
  sourceOpenLevel: SourceOpenLevel = "PRIVATE",
): Promise<Res> {
  const req: Req = {
    type,
    title,
    latestProjectLink,
    screenMode,
    artifactType: "STANDARD",
    sourceOpenLevel,
    latestCoverLink,
  };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
