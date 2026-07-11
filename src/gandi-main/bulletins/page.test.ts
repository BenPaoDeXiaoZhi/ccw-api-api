import { getBulletinsPage } from "./page";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get bulletins page should return data", async () => {
  const res = await getBulletinsPage();
  assert.ok(((res.data) !== undefined), "expected value to be defined");
  assert.strictEqual(Array.isArray(res.data), (true), "expected values to be strictly equal");
});
