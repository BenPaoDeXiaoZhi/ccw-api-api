import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url =
  "https://community-web.ccw.site/extensions/creation-like/detail";

export type Req = {
  playingCreationOid: MongoDBId;
  creationOid: MongoDBId;
};

export type Res = {
  interactionStatus: boolean;
  oid: MongoDBId;
  title: string;
};

/**
 * 查询用户对作品的点赞交互状态
 * @param {MongoDBId} playingCreationOid 当前播放的作品 OID
 * @param {MongoDBId} creationOid 目标作品 OID
 * @returns {Promise<Res>} 点赞状态及作品信息
 */
export async function getCreationLikeInteractionStatus(
  playingCreationOid: MongoDBId,
  creationOid: MongoDBId,
): Promise<Res> {
  const req: Req = { playingCreationOid, creationOid };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}