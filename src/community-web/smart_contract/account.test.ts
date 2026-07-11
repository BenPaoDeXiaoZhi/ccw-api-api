import { getSmartContractAccount } from "./account";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";
import assert from "node:assert/strict";

test("get smart contract account", async () => {
  await testAuthReadApi(() => getSmartContractAccount(2022277721908162), {
    validateShape: (res) => {
      expectKeys(res, ["balance"]);
      assert.strictEqual(typeof res.balance, ("number"), "expected values to be strictly equal");
    },
  });
});