import { sso, communityWeb } from "./index";
import { test } from "src/testUtils";
import assert from "node:assert/strict";
test("test export", () => {
  assert.ok(((sso) !== undefined), "expected value to be defined");
  assert.ok(((communityWeb) !== undefined), "expected value to be defined");
});
