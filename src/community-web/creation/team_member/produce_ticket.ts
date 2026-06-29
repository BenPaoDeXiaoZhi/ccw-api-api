import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url =
  "https://community-web.ccw.site/creation/team_member/produce_ticket";

export type Req = {
  creationOid: MongoDBId;
};

export type Res = string;

/**
 * 获取协作签名(协作token)
 * @param {MongoDBId} creationOid 作品id
 * @returns {Promise<Res>} 签名(token)
 */
export async function produceTeamMemberTicket(
  creationOid: MongoDBId,
): Promise<Res> {
  const req: Req = { creationOid };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
