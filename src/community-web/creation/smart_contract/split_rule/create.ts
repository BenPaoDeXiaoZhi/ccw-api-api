import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url =
  "https://community-web.ccw.site/creation/smart_contract/split_rule/create";

export type MemberSplitDetail = {
  /**
   * 这个值从之前获取的detail里获取
   * 没有的话我也不知道咋整()
   */
  creationTeamMemberId?: number;
  profile: string;
  rate: number;
  role: string;
  userOid: MongoDBId;
};

export type Req = {
  creationOid: MongoDBId;
  memberSplitDetails: MemberSplitDetail[];
};

export type Res = boolean;

/**
 * 创建作品智能合约分成规则
 * @param {MongoDBId} creationOid 作品id
 * @param {MemberSplitDetail[]} memberSplitDetails 成员分成详情
 * @returns {Promise<Res>} 创建是否成功
 */
export async function createSplitRule(
  creationOid: MongoDBId,
  memberSplitDetails: MemberSplitDetail[],
): Promise<Res> {
  const req: Req = { creationOid, memberSplitDetails };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
