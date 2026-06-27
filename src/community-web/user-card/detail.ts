import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId, CNameOssUrl } from "types/api";
import { CreationMinimal } from "types/creation";

export const url = "https://community-web.ccw.site/user-card/detail";

export type UserCardApprovalTag = {
  id: number;
  name: string;
  iconLink: CNameOssUrl;
  mediumImage: CNameOssUrl;
};

export type UserCardUser = {
  approvalTags: UserCardApprovalTag[];
  avatar: CNameOssUrl;
  bio: string;
  followingStatus: null | string;
  identityAuthRank: string;
  name: string;
  oid: MongoDBId;
  reputationScore: null | {
    rank: string;
    score: number;
    studentOid: MongoDBId;
  };
  statistics: null | {
    creationCount: number;
    followerCount: number;
    followingCount: number;
    likeCount: number;
  };
  virtualValue: CNameOssUrl;
};

export type Req = {
  oid: MongoDBId;
};

export type Res = {
  creation: CreationMinimal | null;
  user: UserCardUser;
};

/**
 * 获取用户卡片详情
 * @param {MongoDBId} oid 用户id
 * @returns {Promise<Res>} 用户卡片数据
 */
export async function getUserCardDetail(oid: MongoDBId): Promise<Res> {
  const req: Req = { oid };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
