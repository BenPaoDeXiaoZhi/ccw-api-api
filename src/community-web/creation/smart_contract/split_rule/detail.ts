import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";
import { TeamMemberAuthority } from "src/types/teamwork";

export const url =
  "https://community-web.ccw.site/creation/smart_contract/split_rule/detail";

export type SplitRuleItem = {
  authority: TeamMemberAuthority;
  avatar: string;
  creationOid: MongoDBId;
  id: number;
  name: string;
  /**
   * 排序顺序,从零开始,小的在上
   */
  priority: number;
  profile: string;
  /**
   * @example rate=0.8
   */
  rate: number;
  role: string;
  userOid: MongoDBId;
};

export type Req = {
  creationOid: MongoDBId;
};

export type Res = SplitRuleItem[];

/**
 * 获取作品协作者智能合约分成规则详情
 * @param {MongoDBId} creationOid 作品id
 * @returns {Promise<Res>} 分成规则列表
 */
export async function getSplitRuleDetail(creationOid: MongoDBId): Promise<Res> {
  const req: Req = { creationOid };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
