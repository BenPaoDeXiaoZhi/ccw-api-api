import { ccwAxios } from "@ccw-api/axios";
import { AccountTypes } from "src/types/account";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url = "https://community-web.ccw.site/locked_user/detail";

export type Req = {
  accountOid: MongoDBId;
};

export interface LockedUserDetail<IsLocked extends boolean> {
  accountOid: IsLocked extends true ? MongoDBId : null;
  accountType: IsLocked extends true ? AccountTypes : null;
  createdAt: IsLocked extends true ? number : null;
  description: IsLocked extends true ? string : null;
  id: IsLocked extends true ? number : null;
  locked: IsLocked;
  operatorOid: IsLocked extends true ? MongoDBId : null;
  unlocksAt: IsLocked extends true ? number : null;
  updatedAt: IsLocked extends true ? number : null;
}

export type Res<IsLocked extends boolean> = LockedUserDetail<IsLocked>;

/**
 * 获取被封禁用户详情
 * @param {MongoDBId} accountOid 用户账户ID
 * @returns {Promise<Res>} 被封禁用户详情
 */
export async function getLockedUserDetail<IsLocked extends boolean = false>(
  accountOid: MongoDBId,
): Promise<Res<IsLocked>> {
  const req: Req = { accountOid };
  return await ccwAxios
    .post<ApiResponse<Res<IsLocked>>>(url, req)
    .then((res) => res.data.body);
}
