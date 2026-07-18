import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/currency/account/personal";

export type Req = undefined;

export type Res = {
  internalCurrencyBalance: number;
  topUpCurrencyBalance: number;
  withdrawCurrencyBalance: number;
};

/**
 * 获取个人金币信息
 * @returns {Promise<Res>} 账户金币余额信息
 */
export async function getPersonalCurrencyAccount(): Promise<Res> {
  return await request.post<ApiResponse<Res>>(url).then((res) => res.data.body);
}
