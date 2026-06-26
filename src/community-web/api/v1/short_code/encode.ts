import { ccwAxios } from "@ccw-api/axios";
import { AccountTypes } from "types/account";
import { ApiResponse, CachedOssUrl, MongoDBId } from "types/api";

export const url = "https://community-web.ccw.site/api/v1/short_code/encode";

export type Req = {
  origin: {
    inviterId: MongoDBId;
    inviterType: AccountTypes;
    entrance: "create_detail";
    inviterName: string;
    inviterAvatar: CachedOssUrl;
    creationOid: MongoDBId;
  };
};
export type Res = {
  /**
   * 获取的inviteCode码
   */
  code: string;
  createdAt: number;
  ext: null;
  id: number;
  origin: {
    inviterAvatar: string;
    inviterId: MongoDBId;
    entrance: "create_detail";
    creationOid: MongoDBId;
    inviterName: string;
    inviterType: AccountTypes;
  };
  status: null;
  type: "SHORT_CODE";
  updatedAt: number;
};

/**
 * 生成作品邀请码
 * @param {MongoDBId} inviterId 邀请人id
 * @param {CachedOssUrl} inviterAvatar 邀请人头像
 * @param {string} inviterName 邀请人用户名
 * @param {MongoDBId} creationOid 作品id
 * @returns {Promise<Res>}
 */
export async function encodeShortCode(
  inviterId: MongoDBId,
  inviterAvatar: CachedOssUrl,
  inviterName: string,
  creationOid: MongoDBId,
): Promise<Res> {
  const req: Req = {
    origin: {
      inviterAvatar,
      inviterName,
      inviterId,
      inviterType: "STUDENT",
      entrance: "create_detail",
      creationOid,
    },
  };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
