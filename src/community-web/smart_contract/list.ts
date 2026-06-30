import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url = "https://community-web.ccw.site/smart_contract/list";

export type SmartContractBizType = "CREATION";

export type Req = {
  bizId: MongoDBId;
  bizType: SmartContractBizType;
};

export type SmartContractRule = {
  createdAt: number;
  id: number;
  rule: {
    awardeeAccountId?: "${curUserAccountId}";
    awarderAccountId?: "${smartContractAccountId}";
    bucks: "${bucks}";
    code: "donate" | "award";
    donatorAccountId?: "${curUserAccountId}";
    funSignature: {
      en: string;
      zh_cn: string;
    };
    splitDetailList?: {
      accountId: "${smartContractAccountId}" | "${creationAccountId}";
      rate: number;
    }[];
    title: string;
  };
  smartContractId: number;
  updatedAt: number;
};

export type SmartCoinContract = {
  accountId: MongoDBId;
  bizId: MongoDBId;
  bizType: SmartContractBizType;
  createdAt: number;
  id: number;
  rules: SmartContractRule[];
  status: "ENABLED";
  title: "通用合约";
  type: "GENERAL";
  updatedAt: number;
};

export type Res = SmartCoinContract[];

/**
 * 列出作品中的智能金币合约
 * @param {MongoDBId} bizId 业务ID（如作品OID）
 * @param {SmartContractBizType} bizType 业务类型，CREATION
 * @returns {Promise<Res>} 智能合约列表
 */
export async function getSmartContractList(
  bizId: MongoDBId,
  bizType: SmartContractBizType = "CREATION",
): Promise<Res> {
  const req: Req = { bizId, bizType };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
