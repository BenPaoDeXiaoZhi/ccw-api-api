import { ccwAxios } from "@ccw-api/axios";
import { ApiResponse } from "src/types/api";

export const url = "https://op-parent-api.xiguacity.cn/captcha/create";

export type CaptchaType = "BLOCK_PUZZLE";

export type Req = {
  type: CaptchaType;
};

export type Res = {
  data: {
    /**
     * data url
     */
    bgImg: string;
    /**
     * data url
     */
    jigsawImg: string;
  };
  token: string;
};

/**
 * 创建图形验证码（拼图滑块）
 * @param {CaptchaType} type 验证码类型,默认 BLOCK_PUZZLE（滑块拼图）
 * @returns {Promise<Res>} 验证码信息:bgImg为背景图base64 data url,jigsawImg为拼图块base64 data url,token用于后续校验
 */
export async function createCaptcha(
  type: CaptchaType = "BLOCK_PUZZLE",
): Promise<Res> {
  const req: Req = { type };
  return await ccwAxios
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
