import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse, MongoDBId } from "../../../types";
export const url = "https://sso.ccw.site/web/auth/login-by-password";

export type Req = {
  loginKey: string;
  clientCode: "STUDY_COMMUNITY";
  password: string;
  extra: string;
};
export type Res<Extra = string> = ApiResponse<{
  accountId: -1;
  accountObjectId: MongoDBId;
  accountType: "STUDENT";
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
}>;

type Extra = {
  loginType: "BY_PASSWORD";
  browser: string;
  ip: string;
  loginParentOid: MongoDBId;
  device: string;
  orgId: "";
};

export async function loginByPassword(
  loginKey: string,
  password: string,
  reqExtra: { device: string; browser: string } = {
    device: "Node",
    browser: "Node.js",
  },
): Promise<Res<Extra>["body"]> {
  const { extra: _extra, ...rest } = await ccwAxios
    .post<Res>(url, {
      loginKey,
      password,
      clientCode: "STUDY_COMMUNITY",
      extra: JSON.stringify({ ...reqExtra, scene: null }),
    } satisfies Req)
    .then((res) => res.data.body);
  return {
    ...rest,
    extra: JSON.parse(_extra),
  };
}
