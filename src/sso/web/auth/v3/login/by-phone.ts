import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";
import { LoginSession } from "src/types/session";

export const url = "https://sso.ccw.site/web/auth/v3/login/by_phone";

export type LoginClientCode = "STUDY_COMMUNITY";

export type LoginScene = "loginbyPhone";

export type LoginRuleCode = "ccw_sms";

export type Req = {
  clientCode: LoginClientCode;
  code: string;
  countryCode: string;
  extra: string;
  phone: string;
  ruleCode: LoginRuleCode;
  scene: LoginScene;
};

export type Res<Extra> = LoginSession<Extra>;

export type Extra = {
  browser: string;
  device: string;
  ip: string;
  loginParentOid: MongoDBId;
  loginType: "BY_PHONE_LOGIN_OR_REGISTER";
};

export interface ReqExtra {
  browser: string;
  device: string;
}

/**
 * 通过手机号+短信验证码登录（V3）
 * @param {string} phone 手机号，如 "12345671145"
 * @param {string} code 收到的短信验证码
 * @param {ReqExtra} reqExtra 设备和浏览器信息
 * @param {string} countryCode 国家代码，默认 "86"
 * @param {LoginRuleCode} ruleCode 短信规则编码，默认 "ccw_sms"
 * @param {LoginScene} scene 登录场景，默认 "loginbyPhone"
 * @returns {Promise<Res<Extra>>} session 信息
 */
export async function loginByPhone(
  phone: string,
  code: string,
  reqExtra: ReqExtra = {
    device: "Node",
    browser: "Node.js",
  },
  countryCode: string = "86",
  ruleCode: LoginRuleCode = "ccw_sms",
  scene: LoginScene = "loginbyPhone",
): Promise<Res<Extra>> {
  const { extra, ...restBody } = await request
    .post<ApiResponse<Res<string>>>(url, {
      phone,
      code,
      countryCode,
      ruleCode,
      scene,
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
