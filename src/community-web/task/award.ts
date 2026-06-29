import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url = "https://community-web.ccw.site/task/award";

export type TaskRewardType = "INTERNAL_CURRENCY";
export type TaskRewardStatus = "AWARDED";

export type TaskReward = {
  rewardType: TaskRewardType;
  rewardValue: string;
  status: TaskRewardStatus;
};

export type Req = {
  taskOid: MongoDBId;
};

export type Res = TaskReward[];

/**
 * 领取任务奖励
 * @param {MongoDBId} taskOid 任务id
 * @returns {Promise<Res>} 奖励列表
 */
export async function acceptAward(taskOid: MongoDBId): Promise<Res> {
  const req: Req = { taskOid };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
