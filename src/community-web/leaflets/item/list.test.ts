import { getLeafletsItemList } from "./list";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get leaflets item list should return data", async () => {
  const res = await getLeafletsItemList(1);
  assert.strictEqual(Array.isArray(res), (true), "expected values to be strictly equal");
});
