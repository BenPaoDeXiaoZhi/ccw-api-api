import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/health/check";

export type Req = undefined;

export interface HealthCheckItem {
  name: string;
  status: string;
  traceId: string;
}

export type Res = HealthCheckItem[];

/**
 * @deprecated 仅用于初始化axios
 * health check接口
 * @returns {Promise<Res>}
 */
export async function getHealthCheck(): Promise<Res> {
  return await ccwAxios
    .post<ApiResponse<Res>>(url)
    .then((res) => res.data.body);
}
