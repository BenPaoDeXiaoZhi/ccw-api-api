import { getCodeProfilingDetail } from "./detail";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get code profiling detail returns null or object without token", async () => {
  const result = await getCodeProfilingDetail(
    "63c2807d669fa967f17f5559",
    "63c2807d669fa967f17f5559",
  );
  assert.strictEqual(result === null || typeof result === "object", (true), "expected values to be strictly equal");
});
