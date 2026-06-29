import { MongoDBId, CNameOssUrl } from "types/api";
import { OtherUser, StudentOverview } from "types/userData";
import { AccountTypes } from "./account";
import { ExtensionStats } from "./extensions";

export interface CreationRelease {
  checked: boolean;
  coverGifLink: CNameOssUrl;
  coverLink: CNameOssUrl;
  createdAt: number;
  customVersion: string;
  description: string;
  extensions: string[];
  hasCloudVariables: boolean;
  keyboardLayout: KBDLayout;
  oid: MongoDBId;
  operatingInstruction: string;
  profiling: null | string;
  projectLink: string;
  status: CreationStatus;
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

export interface CreationSimple extends CreationMinimal {
  artifactType: string;
  createdAt: number;
  currentReleaseOid: MongoDBId;
  description: string;
  ext: {
    SUBMIT_HASH_TAGS: string[];
    keyboardLayout: KBDLayout;
    requireLogin: boolean;
  };
  featuredCoverLink: string;
  forEveryone: boolean;
  hashTags: string[];
  isOpenSource: boolean;
  isTeamwork: boolean;
  keyboardLayout: KBDLayout;
  lastPassedAt: number;
  latestProjectLink: string;
  operatedAt: number;
  rank: string;
  requireLogin: boolean;
  screenMode: CreationScreenMode;
  sourceOpenLevel: SourceOpenLevel;
  status: CreationStatus;
  student: StudentOverview;
  studentOid: MongoDBId;
  tags: string[];
  teamMemberRespList: TeamMemberResp[];
  type: string;
  updatedAt: number;
  /**
   * ALL: 所有人可见
   * PRIVATE: 仅自己可见
   */
  visibleScope: "PRIVATE" | "ALL";
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
  code: string;
  createdAt: number;
  id: number;
  priority: number;
  title: string;
  updatedAt: number;
  visibility: "PUBLIC";
}

export interface LoadingTip {
  妮可: string[];
  孙小弟: string[];
  小八: string[];
  胖达: string[];
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
  "SIX" | "HEART" | "HANDSHAKE" | "LIKE" | "SMILE" | "FLOWER" | "WATERMELON";

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

export type CreationScreenMode = "LANDSCAPE";
export type ReleaseTag = "Alpha" | "Beta" | "RC" | "Release";
export type KBDLayout = "CUSTOM" | "TOUCH" | "DISABLED";
export type SourceOpenLevel = "PRIVATE" | "SOURCE_READABLE" | "PUBLIC";
export type CreationStatus = "PUBLISHED" | "BANNED" | "SUBMITTED" | "REJECTED";
