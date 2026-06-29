import { CNameOssUrl, MongoDBId, UUID } from "./api";

export type SubjectType =
  | "POST"
  | "CREATION"
  | "EXTENSION"
  | "PROFILE"
  | "SOCIETY"
  | "ACTIVITY"
  | string;

export type ContentCategory =
  | "POST_LIKED"
  | "POST_FAVORITE"
  | "POST_COMMENT"
  | "CREATION_LIKED"
  | "CREATION_FAVORITE"
  | "CREATION_COMMENTED"
  | "CREATION_SHARE"
  | "EXTENSION_LIKED"
  | "EXTENSION_COMMENTED"
  | "EXTENSION_COMMENT_REPLIED"
  | "PROFILE_LEAVE_WORDS"
  | "SESSION_CREATED"
  | "COMMUNITY_ACTIVITY"
  | "FOLLOWED"
  | "POST_VISIBILITY_CHANGED"
  | string;

export interface PostNotificationContentBase {
  subject_type: "POST";
  sender: string;
  subject_oid: MongoDBId;
  subject_outline: string;
  avatar: null;
  sender_id: MongoDBId;
  slug: UUID;
}

export interface PostLikedContent extends PostNotificationContentBase {}

export interface PostFavContent extends PostNotificationContentBase {
  comments: string;
}

export interface PostCommentContent {
  ext: { slug: UUID } | null;
  comments: string;
  subject_type: "POST";
  sender: string;
  subject_oid: MongoDBId;
  subject_outline: string;
  senderType: "STUDENT" | string;
  avatar: CNameOssUrl;
  message: string | null;
  sender_id: MongoDBId;
}

export interface CreationNotificationContentBase {
  subject_type: "CREATION";
  sender: string;
  subject_oid: MongoDBId;
  sender_id: MongoDBId;
}

export interface CreationLikeNotificationContent extends CreationNotificationContentBase {
  homework_title: string;
  homework_id: MongoDBId;
  student_id: `${number}`;
  avatar: CNameOssUrl;
  like_icon: CNameOssUrl;
}

export interface CreationFavContent extends CreationNotificationContentBase {
  comments: string;
  subject_outline: string;
}

export interface CreationCommentedContent {
  ext: null;
  comments: string;
  subject_type: "CREATION";
  sender: string;
  subject_oid: MongoDBId;
  subject_outline: string;
  senderType: "STUDENT" | string;
  avatar: CNameOssUrl;
  message: string | null;
  sender_id: MongoDBId;
}

export interface CreationShareContent {
  subject_type: "CREATION";
  subject_outline: string;
  subject_oid: MongoDBId;
  sender_id: MongoDBId;
}

export interface ExtensionLikedContent {
  subject_type: "EXTENSION";
  sender: string;
  subject_oid: string;
  subject_outline: string;
  avatar: null;
  sender_id: MongoDBId;
}

export interface ExtensionCommentedContent {
  ext: { target: MongoDBId } | null;
  comments: string;
  subject_type: "EXTENSION";
  sender: string;
  subject_oid: string;
  subject_outline: string;
  senderType: "STUDENT" | string;
  avatar: CNameOssUrl;
  message: string | null;
  sender_id: MongoDBId;
}

export interface ExtensionCommentRepliedContent extends ExtensionCommentedContent {}

export interface ProfileLeaveWordsContent {
  ext: null;
  comments: string;
  subject_type: "PROFILE";
  sender: string;
  subject_oid: MongoDBId;
  subject_outline: string;
  senderType: "STUDENT" | string;
  avatar: CNameOssUrl;
  message: string | null;
  sender_id: MongoDBId;
}

export interface SessionCreatedContent {
  comments: string;
  subject_type: "SOCIETY";
  subject_oid: null;
}

export interface CommunityActivityContent {
  comments: string;
  subject_type: "ACTIVITY";
  subject_oid: MongoDBId;
  subject_outline: string;
}

export interface FollowedContent {
  comments: string;
  subject_type: "SOCIETY";
  sender: string;
  subject_oid: MongoDBId;
  sender_id: MongoDBId;
}

export interface PostVisibilityChangedContent {
  comments: string;
  subject_type: "SOCIETY";
  subject_oid: null;
}

export type NotificationContent =
  | PostLikedContent
  | PostFavContent
  | PostCommentContent
  | CreationLikeNotificationContent
  | CreationFavContent
  | CreationCommentedContent
  | CreationShareContent
  | ExtensionLikedContent
  | ExtensionCommentedContent
  | ExtensionCommentRepliedContent
  | ProfileLeaveWordsContent
  | SessionCreatedContent
  | CommunityActivityContent
  | FollowedContent
  | PostVisibilityChangedContent
  | Record<string, unknown>;
