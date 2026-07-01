import { getSmartContractAccount } from "./account";

test("should fail without token when getting smart contract account", async () => {
  await expect(getSmartContractAccount(2022277721908162)).rejects.toThrow();
});