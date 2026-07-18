import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://op-parent-api.xiguacity.cn/captcha/check";

export type Req = {
  data: {
    x: number;
    y: number;
  };
  token: string;
};

export type Res = {
  captchaExpired: boolean;
  errorMsg: string | null;
  success: boolean;
};

/**
 * 校验图形验证码（拼图滑块坐标）
 * @param {string} token createCaptcha 返回的 token
 * @param {number} x 拼图滑块目标位置的 x 坐标
 * @param {number} y 拼图滑块目标位置的 y 坐标
 * @returns {Promise<Res>} 校验结果
 */
export async function checkCaptcha(
  token: string,
  x: number,
  y: number = 5,
): Promise<Res> {
  const req: Req = { data: { x, y }, token };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
