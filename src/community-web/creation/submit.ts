import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, CNameOssUrl, MongoDBId } from "types/api";
import { KBDLayout, ReleaseTag, SourceOpenLevel } from "types/creation";

export const url = "https://community-web.ccw.site/creation/submit";

export type Req = {
  tags: [];
  title: string;
  isOpenSource: boolean;
  isContribute: boolean;
  type: "ORIGINAL" | "REMIXED";
  publishedFeedSwitch: boolean;
  keyboardLayout: KBDLayout;
  hashTags: string[];
  featuredCoverLink: CNameOssUrl;
  sourceOpenLevel: SourceOpenLevel;
  requireLogin: boolean;
  operatingInstruction: string;
  description: string;
  releaseDescription: string;
  videoLink: null | string;
  releaseTags: ReleaseTag[];
  customVersion: string;
  repostedSource: string;
  projectLink: CNameOssUrl;
  remixCreationOid: null | MongoDBId;
  oid: MongoDBId;
  hasCloudVariables: false;
  extensions: string[];
  projectSize: number;
  audioSize: number;
  costumeSize: number;
  coverLink: CNameOssUrl;
};

export type Res = boolean;

/**
 * 提交作品
 * @param {Req} req 提交参数 看着写吧,我也不知道该怎么整了()
 * @returns {Promise<Res>} 提交是否成功
 */
export async function submitCreation(req: Req): Promise<Res> {
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
