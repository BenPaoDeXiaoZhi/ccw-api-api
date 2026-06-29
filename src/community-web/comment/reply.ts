import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "types/api";

export const url = "https://community-web.ccw.site/comment/reply";

export type Req = {
  content: string;
  replyToId: `${number}`;
};
export type Res = {
  commenterId: number;
  content: string;
  createdAt: number;
  ext: null;
  id: number;
  parentId: number;
  receiverId: number;
  replyToId: number;
  sectionType: null;
  status: "PUBLISHED";
  topicId: number;
  updatedAt: number;
  weight: null;
};

/**
 *回复评论
 * @param content 回复内容
 * @param replyToId 评论id
 * @returns {Promise<Res>} 回复的评论
 */
export async function replyComment(
  content: string,
  replyToId: number,
): Promise<Res> {
  const req: Req = {
    content,
    replyToId: `${replyToId}`,
  };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
