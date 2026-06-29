import { ccwAxios } from "@ccw-api/axios";
import { AccountTypes } from "src/types/account";
import { ApiResponse, MongoDBId } from "src/types/api";
export const url = "https://sso.ccw.site/web/auth/login-by-password";

export type Req = {
  clientCode: "STUDY_COMMUNITY";
  extra: string;
  loginKey: string;
  password: string;
};
export type Res<Extra = string> = {
  accountId: -1;
  accountObjectId: MongoDBId;
  accountType: AccountTypes;
  clientCode: "STUDY_COMMUNITY";
  createdAt: number;
  email: null;
  expireTime: number;
  extra: Extra;
  id: number;
  lastAccessTime: number;
  orgId: "";
  scene: null;
  status: "ENABLED";
  token: string;
  urlEncodedFullName: null;
};

export type Extra = {
  browser: string;
  device: string;
  ip: string;
  loginParentOid: MongoDBId;
  loginType: "BY_PASSWORD";
  orgId: "";
};

/**
 * @prop {string} device 设备名(win11)
 * @prop {string} browser 浏览器名(chrome)
 */
export interface ReqExtra {
  browser: string;
  device: string;
}

/**
 * 通过密码登录
 * @param {string} loginKey 用户名
 * @param {string} password 密码
 * @param {ReqExtra} reqExtra 额外信息
 * @returns {Res<Extra>}
 */

export async function loginByPassword(
  loginKey: string,
  password: string,
  reqExtra: ReqExtra = {
    device: "Node",
    browser: "Node.js",
  },
): Promise<Res<Extra>> {
  const { extra, ...restBody } = await ccwAxios
    .post<ApiResponse<Res>>(url, {
      loginKey,
      password,
      clientCode: "STUDY_COMMUNITY",
      extra: JSON.stringify({ ...reqExtra, scene: null }),
    } satisfies Req)
    .then((res) => res.data.body);
  const resExtra = JSON.parse(extra) as Extra;
  return {
    ...restBody,
    extra: resExtra,
  };
}
