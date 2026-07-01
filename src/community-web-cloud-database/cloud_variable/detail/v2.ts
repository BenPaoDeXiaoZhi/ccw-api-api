import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "src/types/api";

export const url =
  "https://community-web-cloud-database.ccw.site/cloud_variable/detail/v2";

export type Req = {
  accessKey: string;
  primaryKey: string;
  secondaryKey: string;
  filterKeys: string[];
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type Res = {};

/**
 * 查询云变量详情 V2
 * @param {string} accessKey 访问密钥（如作品 OID）
 * @param {string} primaryKey 主键（如 `${projectId}-u`）
 * @param {string} secondaryKey 次级键
 * @param {string[]} filterKeys 过滤的变量名列表
 * @returns {Promise<Res>} 云变量详情
 */
export async function getCloudVariableDetailV2(
  accessKey: string,
  primaryKey: string,
  secondaryKey: string,
  filterKeys: string[],
): Promise<Res> {
  const req: Req = { accessKey, primaryKey, secondaryKey, filterKeys };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}