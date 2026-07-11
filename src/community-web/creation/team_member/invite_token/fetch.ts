import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "src/types/api";
import { TeamMemberAuthority } from "src/types/teamwork";

export const url =
  "https://community-web.ccw.site/creation/team_member/invite_token/fetch";

export type Req = {
  creationOid: MongoDBId;
  authority: Exclude<TeamMemberAuthority, "OBSERVER">;
};

export type Res = string;

/**
 * 获取协作参与者邀请链接
 * @param {MongoDBId} creationOid 作品id
 * @param {Exclude<TeamMemberAuthority, "OBSERVER">} authority 权限 (ADMIN 或 MEMBER)
 * @returns {Promise<Res>} 邀请链接参数(token)
 */
export async function fetchMemberInviteToken(
  creationOid: MongoDBId,
  authority: Exclude<TeamMemberAuthority, "OBSERVER"> = "MEMBER",
): Promise<Res> {
  const req: Req = { creationOid, authority };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
