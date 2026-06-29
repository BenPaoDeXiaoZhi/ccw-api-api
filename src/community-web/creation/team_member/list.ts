import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "src/types/api";
import { TeamMember, TeamMemberAuthority } from "src/types/teamwork";

export const url = "https://community-web.ccw.site/creation/team_member/list";

export type Req = {
  authorities: TeamMemberAuthority[];
  creationOid: MongoDBId;
};

export type Res = TeamMember[];

/**
 * 获取作品协作成员列表
 * @param {MongoDBId} creationOid 作品id
 * @param {TeamMemberAuthority[]} authorities 权限过滤
 * @returns {Promise<Res>} 作品协作成员列表
 */
export async function getTeamMemberList(
  creationOid: MongoDBId,
  authorities: TeamMemberAuthority[],
): Promise<Res> {
  const req: Req = { creationOid, authorities };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
