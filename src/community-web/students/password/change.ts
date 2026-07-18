import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/students/password/change";

export type Req = {
  code: string;
  newPassword: string;
};

export type Res = boolean;

/**
 * 通过登录session修改用户密码（需配合短信验证码）
 * @param {string} newPassword 新密码
 * @param {string} code 短信验证码，通过 createSmsCaptchaBySession 获取
 * @returns {Promise<boolean>} 修改成功返回 true；验证码不正确等异常会抛出错误
 */
export async function changeStudentPassword(
  newPassword: string,
  code: string,
): Promise<Res> {
  const req: Req = { newPassword, code };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
