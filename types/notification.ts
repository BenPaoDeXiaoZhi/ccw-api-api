import { CNameOssUrl, MongoDBId } from "types/api";
import { CreationMinimal } from "types/creation";
import {
  NotificationContent,
  ContentCategory,
  SubjectType,
} from "types/notificationContent";

export enum NotificationGroup {
  CreationInteraction = "CREATION_INTERACTION",
  CommentToMe = "COMMENT_TO_ME",
  FriendShare = "FRIEND_SHARE",
  WebSystem = "WEB_SYSTEM",
}

export interface NotificationSenderInfo {
  approvedContent: string | null;
  avatar: string;
  name: string;
  oid: MongoDBId;
}

export interface NotificationExtensionInfo {
  cover: string;
  createdAt: number;
  creationId: MongoDBId;
  description: string;
  eid: string;
  icon: string;
  id: number;
  latestProjectCoverLink: string | null;
  latestProjectLink: string | null;
  name: string;
  publisherId: MongoDBId;
  status: string;
  updatedAt: number;
}

export interface Notification {
  assetMarketInfo: null;
  avatar: CNameOssUrl;
  comment: string | null;
  commentType: string | null;
  content: NotificationContent;
  contentCategory: ContentCategory;
  createdAt: number;
  creationInfo: CreationMinimal | null;
  extensionInfo: NotificationExtensionInfo | null;
  followInfo: null;
  likeIcon: string | null;
  message: null;
  messageType: null;
  senderInfo: NotificationSenderInfo;
  senderName: string;
  senderOid: MongoDBId;
  senderType: string | null;
  studentInfo: null;
  subjectOid: MongoDBId;
  subjectOutline: string;
  subjectType: SubjectType;
  title: string | null;
  triggeredById: string;
  url: string | null;
}

export interface NotificationStats {
  CREATION_INTERACTION: number;
  ACTIVITY_ASSISTANT: number;
  JUDGEMENT: number;
  FRIEND_SHARE: number;
  COMMENT_TO_ME: number;
  FOLLOW_ME: number;
  WEB_SYSTEM: number;
  CREATION_STATUS: number;
}
