import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";
import { SmartContractBizType } from "./list";

export const url = "https://community-web.ccw.site/smart_contract/execute";

export type Req = {
  bizId: MongoDBId;
  bizType: SmartContractBizType;
  id: number;
  params: {
    bucks: number;
  };
  ruleId: number;
};

export type Res = {
  success: boolean;
};

/**
 * 执行智能合约（投币/领取奖励）
 * @param {MongoDBId} bizId 业务 ID（如作品 OID）
 * @param {SmartContractBizType} bizType 业务类型，CREATION
 * @param {number} id 合约 ID
 * @param {number} ruleId 规则 ID
 * @param {number} bucks 金币数量
 * @returns {Promise<Res>} 执行结果
 */
export async function executeSmartContract(
  bizId: MongoDBId,
  id: number,
  ruleId: number,
  bucks: number,
  bizType: SmartContractBizType = "CREATION",
): Promise<Res> {
  const req: Req = { bizId, bizType, id, ruleId, params: { bucks } };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
