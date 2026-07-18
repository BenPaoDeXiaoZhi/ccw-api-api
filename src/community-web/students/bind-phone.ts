import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/students/bind_phone";

export type Req = {
  code: string;
  countryCode: string;
  phone: string;
  ruleCode: "ccw_sms";
  scene: "bindPhone";
};

export type Res = boolean;

/**
 * 绑定手机号
 * @param {string} phone 手机号码
 * @param {string} code 短信验证码
 * @param {string} countryCode 国家区号，默认 "86"
 * @returns {Promise<boolean>} 绑定成功返回 true；验证码不正确等异常会抛出错误
 */
export async function bindStudentPhone(
  phone: string,
  code: string,
  countryCode: string = "86",
): Promise<Res> {
  const req: Req = {
    phone,
    code,
    ruleCode: "ccw_sms",
    scene: "bindPhone",
    countryCode,
  };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
