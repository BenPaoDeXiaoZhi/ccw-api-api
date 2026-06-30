import { checkCaptcha } from "./check";
import { createCaptcha } from "./create";

test("checkCaptcha returns structured result with token and coords without auth", async () => {
  const created = await createCaptcha("BLOCK_PUZZLE");
  const res = await checkCaptcha(created.token, 0, -1);
  expect(res).toHaveProperty("captchaExpired");
  expect(res).toHaveProperty("errorMsg");
  expect(res).toHaveProperty("success");
  expect(res.captchaExpired).toBeFalsy();
  expect(res.success).toBeFalsy();
  expect(res.errorMsg).toEqual("验证失败");
}, 30000);
