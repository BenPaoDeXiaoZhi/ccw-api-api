import { createSmsCaptcha } from "./create";

test("createSmsCaptchaV2 returns batchId and sendResult fields without token", async () => {
  const res = await createSmsCaptcha(
    "12345671145",
    "loginbyPhone",
    "86",
    "ccw_sms",
  );
  expect(res).toHaveProperty("batchId");
  expect(res).toHaveProperty("sendResult");
  expect(res.batchId).toBeNull();
  expect(res.sendResult).toBe(2);
}, 30000);
