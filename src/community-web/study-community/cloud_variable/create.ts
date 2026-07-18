import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url =
  "https://community-web.ccw.site/study-community/cloud_variable/create";

export type Req = {
  projectId: MongoDBId;
  variables: Record<string, unknown>;
};

export type Res = Record<string, never>;

/**
 * @deprecated 云变量几百年没用过了
 * 创建云变量
 * @param {MongoDBId} projectId 项目id
 * @param {Record<string, unknown>} variables 变量数据
 * @returns {Promise<Res>} 空对象
 */
export async function createCloudVariable(
  projectId: MongoDBId,
  variables: Record<string, unknown>,
): Promise<Res> {
  const req: Req = { projectId, variables };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
