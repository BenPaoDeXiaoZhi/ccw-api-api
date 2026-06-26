import { OtherUser } from "types/userData";

export interface Comment {
  commenter: OtherUser;
  commenterId: number;
  /**
   * 评论内容
   */
  content: string;
  createdAt: number;
  dislikeCount: number;
  disliked: boolean;
  ext: {};
  hiddenOpinion: null;
  id: number;
  likeCount: number;
  liked: boolean;
  /**
   * 如果是评论,则为null,如果是回复,则为回复的评论的id
   */
  parentId: number | null;
  receiver: OtherUser | null;
  receiverId: number;
  replyCount: null | number;
  replyToId: number;
  reported: boolean;
  sectionType: "COMMENT";
  status: "PUBLISHED" | "FOLDED";
  subComments: [];
  /**
   * 回复的文章/扩展id
   */
  topicId: number;
  topic: TopicInfo;
  updatedAt: number;
  weight: number;
}

export interface TopicInfo {
  createdAt: number;
  ext: {
    /**
     * 文章uuid可能被包含
     */
    slug?: string;
  };
  id: number;
  /**
   * 文章名称/扩展名称
   */
  outline: string;
  subjectOid: string;
  subjectType: SubjectType;
  updatedAt: number;
}

export type SubjectType = "EXTENSION" | "POST";
export type SectionType = "REVIEW" | "COMMENT";
