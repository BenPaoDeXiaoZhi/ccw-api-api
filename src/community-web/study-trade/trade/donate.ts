import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url = "https://community-web.ccw.site/study-trade/trade/donate";

export type DonateObjectType = "CREATION";

export type Req = {
  bucks: number;
  objectId: MongoDBId;
  objectType: DonateObjectType;
};

export type Res = null;

/**
 * 向作品投币
 * @param {number} bucks 投币数量
 * @param {MongoDBId} objectId 作品id
 * @param {DonateObjectType} objectType
 * @returns {Promise<Res>} 无返回值
 */
export async function donateTrade(
  bucks: number,
  objectId: MongoDBId,
  objectType: DonateObjectType = "CREATION",
): Promise<Res> {
  const req: Req = { bucks, objectId, objectType };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
