import { getSmartContractList } from "./list";
import { testAuthReadApi } from "src/testUtils";

test("list smart contracts", async () => {
  await testAuthReadApi(
    () => getSmartContractList("679d79862de3ec4dde55d534"),
    {
      validateShape: (res) => {
        expect(Array.isArray(res)).toBe(true);
      },
    },
  );
});
