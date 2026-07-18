import { request } from "src/request";
import { ApiResponse, CNameOssUrl, MongoDBId } from "src/types/api";
import { KBDLayout, ReleaseTag, SourceOpenLevel } from "src/types/creation";

export const url = "https://community-web.ccw.site/creation/submit";

export type Req = {
  audioSize: number;
  costumeSize: number;
  coverLink: CNameOssUrl;
  customVersion: string;
  description: string;
  extensions: string[];
  featuredCoverLink: CNameOssUrl;
  hasCloudVariables: false;
  hashTags: string[];
  isContribute: boolean;
  isOpenSource: boolean;
  keyboardLayout: KBDLayout;
  oid: MongoDBId;
  operatingInstruction: string;
  projectLink: CNameOssUrl;
  projectSize: number;
  publishedFeedSwitch: boolean;
  releaseDescription: string;
  releaseTags: ReleaseTag[];
  remixCreationOid: null | MongoDBId;
  repostedSource: string;
  requireLogin: boolean;
  sourceOpenLevel: SourceOpenLevel;
  tags: [];
  title: string;
  type: "ORIGINAL" | "REMIXED";
  videoLink: null | string;
};

export type Res = boolean;

/**
 * 提交作品
 * @param {Req} req 提交参数 看着写吧,我也不知道该怎么整了()
 * @returns {Promise<Res>} 提交是否成功
 */
export async function submitCreation(req: Req): Promise<Res> {
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
