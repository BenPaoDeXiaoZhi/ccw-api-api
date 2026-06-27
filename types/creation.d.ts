import { MongoDBId, CNameOssUrl } from "types/api";
import {
  OtherUser,
  StudentOverview,
} from "types/userData";
import { AccountTypes } from "./account";

export interface CreationRelease {
  checked: boolean;
  coverGifLink: CNameOssUrl;
  coverLink: CNameOssUrl;
  createdAt: number;
  customVersion: string;
  description: string;
  extensions: string[];
  hasCloudVariables: boolean;
  keyboardLayout: string;
  oid: MongoDBId;
  operatingInstruction: string;
  profiling: null | string;
  projectLink: string;
  status: string;
  submittedAt: number;
  tags: string[];
  updatedAt: number;
  version: string;
  videoLink: null | string;
}

export interface TeamMemberResp {
  authority: string;
  avatar: string;
  createdAt: number;
  creationOid: MongoDBId;
  name: string;
  online: null | boolean;
  priority: number;
  profile: null | string;
  role: string;
  userOid: MongoDBId;
}

export interface TeamworkStatus {
  currentTeamMemberList: TeamMemberResp[];
  online: boolean;
}

export interface ExtensionStats {
  averageRating: number;
  mostApprovedReviewIds: string[];
  reviewCount: number;
  reviewTags: string[];
}

export interface CreationSimple extends CreationMinimal {
  artifactType: string;
  createdAt: number;
  currentReleaseOid: MongoDBId;
  description: string;
  ext: {
    keyboardLayout: string;
    requireLogin: boolean;
    SUBMIT_HASH_TAGS: string[];
  };
  featuredCoverLink: string;
  forEveryone: boolean;
  hashTags: string[];
  isOpenSource: boolean;
  isTeamwork: boolean;
  keyboardLayout: string;
  lastPassedAt: number;
  latestProjectLink: string;
  operatedAt: number;
  rank: string;
  requireLogin: boolean;
  screenMode: string;
  sourceOpenLevel: string;
  status: string;
  student: StudentOverview;
  studentOid: MongoDBId;
  tags: string[];
  teamMemberRespList: TeamMemberResp[];
  type: string;
  updatedAt: number;
  visibleScope: string;
}

export interface Creation extends CreationSimple {
  creationReleaseList: CreationRelease[];
  currentHashTag: null | string;
  eid: null | string;
  firstPublishedRelease: null | CreationRelease;
  isSelf: null | boolean;
  projectLastModifiedAt: null | number;
  remixCreationOid: null | MongoDBId;
  remixedCreation: null | object;
  repostedSource: null | object;
  stats: null | ExtensionStats;
  student: StudentOverview;
  teamworkStatus: null | TeamworkStatus;
  typicalProjectId: null | string;
}

export interface CreationTag {
  createdAt: number;
  code: string;
  visibility: "PUBLIC";
  id: number;
  priority: number;
  title: string;
  updatedAt: number;
}

export interface LoadingTip {
  小八: string[];
  胖达: string[];
  妮可: string[];
  孙小弟: string[];
}

export interface UserLikeDetail {
  action: LikeActions;
  createdAt: number;
  /**
   * 作品id
   */
  creationOid: MongoDBId;
  oid: MongoDBId;
  /**
   * 一般为作品作者
   */
  receiverOid: MongoDBId;
  /**
   * 用户id
   */
  senderOid: MongoDBId;
}

export type LikeActions =
  | "SIX"
  | "HEART"
  | "HANDSHAKE"
  | "LIKE"
  | "SMILE"
  | "FLOWER"
  | "WATERMELON";

export interface DonatedRecord {
  bucks: number;
  createdAt: number;
  creationOid: MongoDBId;
  donatorAvatar: CNameOssUrl;
  donatorName: string;
  donatorOid: MongoDBId;
  donatorType: AccountTypes;
  id: number;
  updatedAt: number;
}

export interface CreationScreenshot {
  commenter: OtherUser;
  commenterId: number;
  createdAt: number;
  creationScreenshot: CNameOssUrl;
  ext: {};
  id: number;
  msg: string;
  status: null;
  topicId: number;
  updatedAt: number;
  weight: number;
}

export interface FavoriteDetail {
  creationOid: MongoDBId;
  favoritedAt: number;
  studentOid: MongoDBId;
  updatedAt: number;
}

export interface CreationMinimal {
  commentCount: number;
  creationRelease: CreationRelease;
  favoriteCount: number;
  latestCoverLink: string;
  likeCount: number;
  oid: MongoDBId;
  remixedCount: number;
  title: string;
  viewCount: number;
}

export type HashTagCreationRank = "ORDINARY";
export type HashTagCreationStatus = "PUBLISHED" | string;

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
  | "UNFOLLOWED"
  | "FOLLOWED"
  | "BOTH_FOLLOWED"
  | null;

export interface HashTagMemberSimple {
  avatar: CNameOssUrl;
  followingStatus: HashTagFollowingStatus;
  name: string;
  oid: MongoDBId;
}

export type HashTagStatus = "ENABLED" | string;
export type HashTagType = "ORDINARY" | string;

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
