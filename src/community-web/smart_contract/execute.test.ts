import { executeSmartContract } from "./execute";
import { test, testAuthWriteApi } from "src/testUtils";

test("execute smart contract", async () => {
  await testAuthWriteApi(
    () =>
      executeSmartContract(
        "6a3fa1ed159ed52f170c34d2",
        2022277721908162,
        378074,
        1,
      ),
    {},
  );
});