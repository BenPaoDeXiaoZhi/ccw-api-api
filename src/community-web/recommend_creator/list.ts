import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId, CNameOssUrl } from "src/types/api";

export const url = "https://community-web.ccw.site/recommend_creator/list";

export type CreatorType = "EXCELLENT" | "POTENTIAL";

export type Req = {
  excellentCount: number;
  potentialCount: number;
};

export type RecommendCreator = {
  approvedContent: null | string;
  approvedType: null | string;
  avatar: CNameOssUrl;
  bio: string;
  creationCount: number;
  creatorType: CreatorType;
  followerCount: number;
  gender: "MALE" | "FEMALE";
  name: string;
  studentOid: MongoDBId;
};

export type Res = RecommendCreator[];

/**
 * 获取社区推荐创作者列表
 * @param {number} excellentCount 精选创作者数量
 * @param {number} potentialCount 潜力创作者数量
 * @returns {Promise<Res>} 推荐创作者列表
 */
export async function getRecommendCreators(
  excellentCount: number = 4,
  potentialCount: number = 8,
): Promise<Res> {
  const req: Req = { excellentCount, potentialCount };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}