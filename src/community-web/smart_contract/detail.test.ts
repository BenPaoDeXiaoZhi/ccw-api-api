import { getSmartContractDetail } from "./detail";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";

test("get smart contract detail", async () => {
  await testAuthReadApi(() => getSmartContractDetail(2022277721908162), {
    validateShape: (res) => {
      expectKeys(res, [
        "id",
        "bizId",
        "bizType",
        "accountId",
        "title",
        "type",
        "status",
        "rules",
        "createdAt",
        "updatedAt",
      ]);
    },
  });
});
