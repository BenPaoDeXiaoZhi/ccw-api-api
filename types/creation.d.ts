import { MongoDBId, CachedOssUrl } from "types/api";
import { Student, StudentSimple } from "types/userData";

export interface CreationRelease {
  checked: boolean;
  coverGifLink: CachedOssUrl;
  coverLink: CachedOssUrl;
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

export interface CreationSimple {
  artifactType: string;
  commentCount: number;
  createdAt: number;
  creationRelease: CreationRelease;
  currentReleaseOid: MongoDBId;
  description: string;
  ext: {
    keyboardLayout: string;
    requireLogin: boolean;
    SUBMIT_HASH_TAGS: string[];
  };
  favoriteCount: number;
  featuredCoverLink: string;
  forEveryone: boolean;
  hashTags: string[];
  isOpenSource: boolean;
  isTeamwork: boolean;
  keyboardLayout: string;
  lastPassedAt: number;
  latestCoverLink: string;
  latestProjectLink: string;
  likeCount: number;
  oid: MongoDBId;
  operatedAt: number;
  rank: string;
  remixedCount: number;
  requireLogin: boolean;
  screenMode: string;
  sourceOpenLevel: string;
  status: string;
  student: StudentSimple;
  studentOid: MongoDBId;
  tags: string[];
  teamMemberRespList: TeamMemberResp[];
  title: string;
  type: string;
  updatedAt: number;
  viewCount: number;
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
  student: Student;
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
