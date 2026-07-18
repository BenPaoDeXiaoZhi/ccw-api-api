import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";
import { SmartContractBizType, SmartContractRule } from "./list";

export const url = "https://community-web.ccw.site/smart_contract/detail";

export type Req = {
  id: number;
};

export type Res = {
  accountId: MongoDBId;
  bizId: MongoDBId;
  bizType: SmartContractBizType;
  createdAt: number;
  id: number;
  rules: SmartContractRule[];
  status: "ENABLED";
  title: string;
  type: string;
  updatedAt: number;
};

/**
 * 获取智能合约详情
 * @param {number} id 合约 ID
 * @returns {Promise<Res>} 合约详情
 */
export async function getSmartContractDetail(id: number): Promise<Res> {
  const req: Req = { id };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
