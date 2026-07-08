import { getPersonalCurrencyAccount } from "./personal";
import { testAuthReadApi, expectKeys } from "src/testUtils";

test("get personal currency account", async () => {
  await testAuthReadApi(() => getPersonalCurrencyAccount(), {
    validateShape: (res) => {
      expectKeys(res, [
        "internalCurrencyBalance",
        "topUpCurrencyBalance",
        "withdrawCurrencyBalance",
      ]);
      expect(typeof res.internalCurrencyBalance).toBe("number");
    },
  });
});
