import { MongoDBId, CNameOssUrl } from "src/types/api";
import { CreationStatus } from "./creation";

export type HashTagCreationRank = "ORDINARY";
export type HashTagCreationStatus = CreationStatus;

export interface HashTagCreationRelation {
  blurb: null | string;
  canAudit: boolean;
  createdAt: number;
  creationOid: MongoDBId;
  hashTagId: number;
  hashTagIdentifier: string;
  id: number;
  lastPublishedAt: number;
  lastSubmittedAt: number;
  projectLastModifiedAt: null | number;
  rank: HashTagCreationRank;
  status: HashTagCreationStatus;
  /**
   * 作品作者id,不是星球管理id
   */
  studentOid: MongoDBId;
  updatedAt: number;
}

export type HashTagFollowingStatus =
  "UNFOLLOWED" | "FOLLOWED" | "BOTH_FOLLOWED";

export interface HashTagMemberSimple {
  avatar: CNameOssUrl;
  followingStatus: HashTagFollowingStatus;
  name: string;
  oid: MongoDBId;
}

export type HashTagStatus = "ENABLED";
export type HashTagType = "ORDINARY";

export interface HashTag {
  bulletin: string | null;
  bulletinOperatedAt: number | null;
  bulletinOperator: HashTagMemberSimple | null;
  bulletinOperatorOid: MongoDBId | null;
  commentCount: number | null;
  coverLink: CNameOssUrl;
  createdAt: number;
  creationCount: number;
  description: string | null;
  enableApplyManager: boolean | null;
  enableBatchAudit: boolean | null;
  favoriteStatus: unknown | null;
  favoritedStudentCount: number;
  hashTagScoreStatsResp: unknown | null;
  id: number;
  identifier: string;
  latestFavoritedStudents: HashTagMemberSimple[];
  managerIds: MongoDBId[];
  managers: HashTagMemberSimple[];
  memberCount: number;
  ownerType: unknown | null;
  priority: number;
  recommended: boolean;
  relatedStarNum: number | null;
  status: HashTagStatus;
  type: HashTagType;
  updatedAt: number;
}

export interface HashTagFavorite {
  createdAt: number;
  ext: object;
  hashTagId: number;
  id: number;
  lastFavoritedAt: number;
  studentOid: MongoDBId;
  unfavoritedAt: number | null;
  updatedAt: number;
}
