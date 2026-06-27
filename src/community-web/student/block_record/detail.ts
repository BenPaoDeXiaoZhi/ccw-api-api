import { ccwAxios } from "@ccw-api/axios";
import { AccountTypes } from "types/account";
import { ApiResponse, MongoDBId } from "types/api";

export const url = "https://community-web.ccw.site/student/block_record/detail";

/**
 * 用户是否在我的黑名单中
 */
export type BlockStatus = "NOT_BLOCKED" | "BLOCKING";

export type Req = {
  studentOid: MongoDBId;
};

export type BlockActionRecord = {
  action: "BLOCK";
  createdAt: number;
  deletedAt: null;
  ext: null;
  /**
   * 我的用户id
   */
  fromEntityId: MongoDBId;
  fromEntityType: AccountTypes;
  oid: MongoDBId;
  /**
   * 被加入黑名单的id
   */
  relatedEntityId: MongoDBId;
  relatedEntityType: AccountTypes;
  updatedAt: number;
};

export type Res = BlockActionRecord | null;

/**
 * 获取特定用户黑名单详细信息
 * @param {MongoDBId} studentOid 学生id
 * @returns {Promise<Res>} 封禁状态
 */
export async function getStudentBlockRecordDetail(
  studentOid: MongoDBId,
): Promise<Res> {
  const req: Req = { studentOid };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
