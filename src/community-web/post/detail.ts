import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId, CNameOssUrl } from "types/api";

export const url = "https://community-web.ccw.site/post/detail";

export type PostTag = {
  name: string;
  slag: string;
};

export type PostFeatureImage = {
  alt: string;
  caption: string;
  url: CNameOssUrl;
};

export type PostAuthor = {
  avatar: CNameOssUrl;
  name: string;
  oid: MongoDBId;
};

export type Req = {
  slug: string;
};

export type Res = {
  author: PostAuthor;
  authorOid: MongoDBId;
  collectCount: null | number;
  commentCount: number;
  content: string;
  createdAt: number;
  draftContent: null | string;
  excerpt: string;
  featureImage: PostFeatureImage;
  keywords: null | string[];
  oid: MongoDBId;
  pageView: number;
  publishedAt: number;
  rank: string;
  rankUpdatedAt: null | number;
  reviewedAt: number;
  slug: string;
  status: string;
  tagRefs: PostTag[];
  tags: string[];
  title: string;
  updatedAt: number;
  visibility: string;
};

/**
 * 获取帖子详情
 * @param {string} slug 帖子slug
 * @returns {Promise<Res>} 帖子详情
 */
export async function getPostDetail(slug: string): Promise<Res> {
  const req: Req = { slug };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
