import { getPlanetsOfCreation } from "./list_relation";
import { test, testAuthReadApi } from "src/testUtils";
import assert from "node:assert/strict";

test("get hash tag creation relation list should reject without login", async () => {
  await testAuthReadApi(
    () => getPlanetsOfCreation("6880873d2211fa69e41c9d19"),
    {
      rejectMessage: "token为空",
      validateShape: (res) => {
        assert.strictEqual(Array.isArray(res), (true), "expected values to be strictly equal");
      },
    },
  );
});
