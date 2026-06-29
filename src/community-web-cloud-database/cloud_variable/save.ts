import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url =
  "https://community-web-cloud-database.ccw.site/cloud_variable/save";

export type SaveCloudVariableReq<T extends Record<string, unknown>> = {
  primaryKey: string;
  secondaryKey: string;
  value: T;
};

export type SaveCloudVariableRes<T extends Record<string, unknown>> = T;

async function saveCloudVariableBase<T extends Record<string, unknown>>(
  primaryKey: string,
  secondaryKey: string,
  value: T,
): Promise<SaveCloudVariableRes<T>> {
  const req: SaveCloudVariableReq<T> = { primaryKey, secondaryKey, value };
  return await ccwAxios
    .post<ApiResponse<SaveCloudVariableRes<T>>>(url, req)
    .then((res) => res.data.body);
}

/**
 * 保存作品云变量到云数据库
 * @param {MongoDBId} projectId 作品id
 * @param {string} secondaryKey 次级键 - 变量名或标识
 * @param {T} value 要保存数据
 * @returns {Promise<SaveCloudVariableRes<T>>} 保存后的值对象
 */
export async function saveProjectCloudVariable<T extends string>(
  projectId: MongoDBId,
  secondaryKey: string,
  value: T,
): Promise<SaveCloudVariableRes<{ v: T }>> {
  return await saveCloudVariableBase(projectId, secondaryKey, { v: value });
}

/**
 * 保存数据到用户云数据库
 * @param {MongoDBId} projectId 作品id
 * @param {number} studentNum 次级键 - 用户id
 * @param {T} value 要保存的键值对
 * @returns {Promise<SaveCloudVariableRes<T>>} 保存后的值对象
 */
export async function saveUserCloudVariable<T extends Record<string, string>>(
  projectId: MongoDBId,
  studentNum: number,
  value: T,
): Promise<SaveCloudVariableRes<T>> {
  const primaryKey = `${projectId}-u`;
  return await saveCloudVariableBase(primaryKey, `${studentNum}`, value);
}
