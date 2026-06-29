import ccwAxios from "@ccw-api/axios";
import { AccountTypes } from "src/types/account";
import { ApiResponse, CNameOssUrl, MongoDBId } from "src/types/api";
import { ApprovalTag } from "src/types/approval";

export type Req = {
  objectId: MongoDBId;
  objectType: AccountTypes;
};
export type Res<Tid extends number, Tn extends string> = ApprovalStatus<
  Tid,
  Tn
>[];
export type ApprovalStatus<Tid extends number, Tn extends string> = {
  adorned: boolean;
  approvalIconLink: CNameOssUrl;
  approvalTag: ApprovalTag<Tid, Tn>;
  approvalTagId: Tid;
  approvalTagName: Tn;
  createdAt: number;
  id: number;
  objectId: MongoDBId;
  objectType: AccountTypes;
  updatedAt: number;
};

export const url = "https://community-web.ccw.site/approval/list";

/**
 * 获取特定用户的勋章数据
 * @param {MongoDBId} studentOid 用户id
 * @returns {Promise<Res<Tid, Tn>>} 勋章数据
 */
export async function getApprovalTags<
  Tid extends number = number,
  Tn extends string = string,
>(studentOid: MongoDBId): Promise<Res<Tid, Tn>> {
  const req: Req = {
    objectId: studentOid,
    objectType: "STUDENT",
  };
  return await ccwAxios
    .post<ApiResponse<Res<Tid, Tn>>>(url, req)
    .then((res) => res.data.body);
}
