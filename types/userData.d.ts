import { MongoDBId, CachedOssUrl } from "types/api";
import { ApprovalTag } from "types/approval";
import { AccountTypes } from "types/account";

export interface BaseUser {
  approvedContent: null | string;
  approvedType: null | string;
  avatar: CachedOssUrl;
  name: string;
  picUrl: CachedOssUrl;
  virtualValue: CachedOssUrl;
}

export interface StudentSimple extends BaseUser {
  bio: string;
  oid: MongoDBId;
}

export interface Student extends StudentSimple {
  commentCount: number;
  creationCount: number;
  favoriteCount: number;
  followerCount: number;
  followingCount: number;
  followingStatus: "UNFOLLOWED" | "FOLLOWED";
  isSelf: boolean;
  likeCount: number;
  remixedCount: number;
  viewCount: number;
}

export interface OtherUser extends BaseUser {
  accountOid: MongoDBId;
  accountType: AccountTypes;
  approvalTagRelations: ApprovalTag[];
  createdAt: number;
  currentCreationPlaytime: null;
  ext: {};
  hideGender: boolean;
  id: number;
  status: "NORMAL";
  updatedAt: number;
  virtualValue: CachedOssUrl;
}
