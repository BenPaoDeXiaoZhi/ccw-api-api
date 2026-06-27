import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, CNameOssUrl, MongoDBId, OriginOssUrl } from "types/api";

export const url = "https://community-web.ccw.site/task/mine";

/**
 * PREPARED: 已完成,未领取
 * PENDING: 未完成
 * AWARDED: 已领取
 */
export type TaskStatus = "PENDING" | "PREPARED" | "AWARDED";
export type TaskType = 'CYCLE';

export type TaskExt = {
  pic: OriginOssUrl;
};

export type TaskItem = {
  description: string;
  ext: TaskExt;
  name: string;
  oid: MongoDBId;
  status: TaskStatus;
  type: TaskType;
};

export type Req = {
  scene: 'checkIn';
};

export type Res = TaskItem[];

/**
 * 获取我的任务列表
 * @returns {Promise<Res>} 任务列表
 */
export async function getMyTasks(): Promise<Res> {
  const req: Req = { scene: 'checkIn' };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
