import { CNameOssUrl, MongoDBId } from "./api";
import { ReleaseTag } from "./creation";
import { BaseUser } from "./userData";

export interface ExtensionStats {
  averageRating: number;
  mostApprovedReviewIds: string[];
  reviewCount: number;
  reviewTags: string[];
}

export interface ExtensionStatsWithCounts extends ExtensionStats {
  commentCount: number;
  donateCount: number;
  favoriteCount: number;
  likeCount: number;
  reviewTags: [];
}

export interface Extension {
  activeVersionId: number;
  cover: CNameOssUrl;
  createdAt: number;
  creationId: MongoDBId;
  description: string;
  eid: string;
  icon: "test";
  id: number;
  latestProjectCoverLink: null;
  latestProjectLink: null;
  name: string;
  publisher: {
    avatar: CNameOssUrl;
    id: MongoDBId;
    locked: null;
    nickname: string;
  };
  publisherId: MongoDBId;
  stats: ExtensionStatsWithCounts;
  updatedAt: number;
  versions: ExtensionVersion[];
}

export interface ExtensionVersion {
  assetUri: CNameOssUrl;
  changelog: string;
  createdAt: number;
  demos: [];
  eid: string;
  id: number;
  license: null;
  previews: [CNameOssUrl];
  projectCoverLink: null;
  projectLink: CNameOssUrl;
  readme: string;
  rejectReason: null;
  releaseTags: ReleaseTag[];
  releasedAt: number;
  status: ExtensionApproveStatus;
  tags: [];
  tutorials: [];
  updatedAt: number;
  version: string;
}

export type ExtensionApproveStatus = "PENDING" | "APPROVED" | "REJECTED";
