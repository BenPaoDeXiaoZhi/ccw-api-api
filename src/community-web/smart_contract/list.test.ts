import { getSmartContractList } from "./list";
import { test, testAuthReadApi } from "src/testUtils";
import assert from "node:assert/strict";

test("list smart contracts", async () => {
  await testAuthReadApi(
    () => getSmartContractList("679d79862de3ec4dde55d534"),
    {
      validateShape: (res) => {
        assert.strictEqual(Array.isArray(res), (true), "expected values to be strictly equal");
      },
    },
  );
});
