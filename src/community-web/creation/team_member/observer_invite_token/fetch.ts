import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url =
  "https://community-web.ccw.site/creation/team_member/observer_invite_token/fetch";

export type Req = {
  creationOid: MongoDBId;
};

export type Res = string;

/**
 * 获取协作观察者邀请链接
 * @param {MongoDBId} creationOid 作品id
 * @returns {Promise<Res>} 邀请链接参数(token)
 */
export async function fetchObserverInviteToken(
  creationOid: MongoDBId,
): Promise<Res> {
  const req: Req = { creationOid };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
