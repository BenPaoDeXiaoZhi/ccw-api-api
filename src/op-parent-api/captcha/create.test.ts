import { createCaptcha } from "./create";
import { test, hasKeyPath } from "src/testUtils";
import assert from "node:assert/strict";

test("create BLOCK_PUZZLE captcha returns bgImg, jigsawImg and token without token", async () => {
  const res = await createCaptcha("BLOCK_PUZZLE");
  assert.ok(hasKeyPath(res, "data"), "expected property to exist");
  assert.ok(hasKeyPath(res.data, "bgImg"), "expected property to exist");
  assert.ok(hasKeyPath(res.data, "jigsawImg"), "expected property to exist");
  assert.ok(hasKeyPath(res, "token"), "expected property to exist");
  assert.strictEqual(typeof res.token, ("string"), "expected values to be strictly equal");
  assert.strictEqual(typeof res.data.bgImg, ("string"), "expected values to be strictly equal");
  assert.strictEqual(typeof res.data.jigsawImg, ("string"), "expected values to be strictly equal");
  assert.ok(Boolean(res.data.bgImg.startsWith("data:image/png;base64,")), "expected value to be truthy");
  assert.ok(Boolean(res.data.jigsawImg.startsWith("data:image/png;base64,")), "expected value to be truthy");
}, 30000);
