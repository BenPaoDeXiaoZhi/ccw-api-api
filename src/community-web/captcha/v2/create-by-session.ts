import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url =
  "https://community-web.ccw.site/captcha/v2/create_by_session";

export type CaptchaType = "SMS";

export type SmsSceneBySession = "change_password";

export type SmsRuleCodeBySession = "ccw_sms";

export type Req = {
  countryCode: string;
  ruleCode: SmsRuleCodeBySession;
  scene: SmsSceneBySession;
  type: CaptchaType;
};

export type Res = {
  batchId: string | null;
  /**
   * sendResult=1 表示成功
   */
  sendResult: 1 | 2;
};

/**
 * 通过当前登录session发送短信验证码（无需输入手机号）用于重置密码
 * @param {SmsSceneBySession} scene 使用场景，默认 change_password
 * @param {string} countryCode 国家代码，默认 "86"
 * @param {SmsRuleCodeBySession} ruleCode 短信规则编码，默认 "ccw_sms"
 * @param {CaptchaType} type 验证码类型，默认 "SMS"
 * @returns {Promise<Res>} 发送结果：batchId 为短信批次ID，sendResult=1 表示成功；发送频率超限时会抛出错误
 */
export async function createSmsCaptchaBySession(
  scene: SmsSceneBySession = "change_password",
  countryCode: string = "86",
  ruleCode: SmsRuleCodeBySession = "ccw_sms",
  type: CaptchaType = "SMS",
): Promise<Res> {
  const req: Req = { type, countryCode, scene, ruleCode };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
