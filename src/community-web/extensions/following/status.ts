import { request } from "src/request";
import { ApiResponse, MongoDBId, CNameOssUrl } from "src/types/api";

export const url = "https://community-web.ccw.site/extensions/following/status";

export type Req = {
  playingCreationOid: MongoDBId;
  userOid: MongoDBId;
};

export type Res = {
  avatar: CNameOssUrl;
  isFollowing: boolean;
  name: string;
  oid: MongoDBId;
};

/**
 * [连接社区扩展] 查询是否关注了指定创作者
 * @param {MongoDBId} playingCreationOid 当前播放的作品 OID
 * @param {MongoDBId} userOid 目标用户 OID
 * @returns {Promise<Res>} 关注状态及用户信息
 */
export async function getConnectCommunityFollowingStatus(
  playingCreationOid: MongoDBId,
  userOid: MongoDBId,
): Promise<Res> {
  const req: Req = { playingCreationOid, userOid };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
