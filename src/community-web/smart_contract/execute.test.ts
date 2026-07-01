import { executeSmartContract } from "./execute";

test("should fail without token when executing smart contract", async () => {
  await expect(
    executeSmartContract("6a3fa1ed159ed52f170c34d2", 2022277721908162, 378074, 1),
  ).rejects.toThrow();
});