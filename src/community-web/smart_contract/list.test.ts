import { getSmartContractList } from "./list";

test("should fail without token when listing smart contracts", async () => {
  await expect(
    getSmartContractList("679d79862de3ec4dde55d534"),
  ).rejects.toThrow();
});
