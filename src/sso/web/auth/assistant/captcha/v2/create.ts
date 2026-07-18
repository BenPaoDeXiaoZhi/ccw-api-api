import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://sso.ccw.site/web/auth/assistant/captcha/v2/create";

export type SmsScene = "loginbyPhone";

export type SmsRuleCode = "ccw_sms";

export type CaptchaPayload = {
  data: {
    x: number;
    y: number;
  };
  token: string;
};

export type Req = {
  captcha?: CaptchaPayload;
  countryCode: string;
  recipient: string;
  ruleCode: SmsRuleCode;
  scene: SmsScene;
};

export type Res = {
  batchId: string | null;
  /**
   * sendResult=1 表示成功
   */
  sendResult: 1 | 2;
};

/**
 * 发送短信验证码
 * @param {string} recipient 接收手机号，如 "10011451919"
 * @param {SmsScene} scene 场景，默认 loginbyPhone
 * @param {string} countryCode 国家代码，默认 "86"
 * @param {SmsRuleCode} ruleCode 短信规则编码，默认 "ccw_sms"
 * @param {CaptchaPayload} captcha 图形验证码校验结果（滑块拼图的坐标与token），可选（部分场景未强制要求时可省略，但失败时sendResult!=1）
 * @returns {Promise<Res>} 发送结果：batchId 为短信批次ID，sendResult=1 表示成功
 */
export async function createSmsCaptcha(
  recipient: string,
  scene: SmsScene = "loginbyPhone",
  countryCode: string = "86",
  ruleCode: SmsRuleCode = "ccw_sms",
  captcha?: CaptchaPayload,
): Promise<Res> {
  const req: Req = { recipient, countryCode, scene, ruleCode, captcha };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
