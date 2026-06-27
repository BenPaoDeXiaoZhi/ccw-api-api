import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId, CNameOssUrl } from "types/api";
import { AccountTypes } from "types/account";

export const url =
  "https://community-web.ccw.site/study-community/member/detail";

export type Req = {};

export type Res = {
  accountOid: MongoDBId;
  accountType: AccountTypes;
  approvedContent: null | string;
  approvedType: null | string;
  avatar: CNameOssUrl;
  createdAt: number;
  ext: {};
  hideGender: boolean;
  id: number;
  maxCheckedFeedId: string;
  name: string;
  status: "NORMAL";
  studentNumber: `${number}`;
  updatedAt: number;
};

/**
 * 获取当前用户学习社区成员详情
 * @returns {Promise<Res>} 我的社区成员详情
 */
export async function getStudyCommunityMemberDetail(): Promise<Res> {
  const req: Req = {};
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
