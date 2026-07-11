import { createSmsCaptcha } from "./create";
import { test, hasKeyPath } from "src/testUtils";
import assert from "node:assert/strict";

test("createSmsCaptchaV2 returns batchId and sendResult fields without token", async () => {
  const res = await createSmsCaptcha(
    "12345671145",
    "loginbyPhone",
    "86",
    "ccw_sms",
  );
  assert.ok(hasKeyPath(res, "batchId"), "expected property to exist");
  assert.ok(hasKeyPath(res, "sendResult"), "expected property to exist");
  assert.strictEqual(res.batchId, null, "expected value to be null");
  assert.strictEqual(res.sendResult, (2), "expected values to be strictly equal");
}, 30000);
