import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/smart_contract/account";

export type Req = {
  id: number;
};

export type Res = {
  balance: number;
};

/**
 * 查询智能合约账户余额
 * @param {number} id 合约 ID
 * @returns {Promise<Res>} 合约账户余额
 */
export async function getSmartContractAccount(id: number): Promise<Res> {
  const req: Req = { id };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}