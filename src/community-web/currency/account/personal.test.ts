import { getPersonalCurrencyAccount } from "./personal";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";
import assert from "node:assert/strict";

test("get personal currency account", async () => {
  await testAuthReadApi(() => getPersonalCurrencyAccount(), {
    validateShape: (res) => {
      expectKeys(res, [
        "internalCurrencyBalance",
        "topUpCurrencyBalance",
        "withdrawCurrencyBalance",
      ]);
      assert.strictEqual(typeof res.internalCurrencyBalance, ("number"), "expected values to be strictly equal");
    },
  });
});
