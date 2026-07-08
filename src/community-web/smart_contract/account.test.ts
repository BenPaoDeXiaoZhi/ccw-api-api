import { getSmartContractAccount } from "./account";
import { testAuthReadApi, expectKeys } from "src/testUtils";

test("get smart contract account", async () => {
  await testAuthReadApi(() => getSmartContractAccount(2022277721908162), {
    validateShape: (res) => {
      expectKeys(res, ["balance"]);
      expect(typeof res.balance).toBe("number");
    },
  });
});