import { getPlanetsOfCreation } from "./list_relation";
import { testAuthReadApi } from "src/testUtils";

test("get hash tag creation relation list should reject without login", async () => {
  await testAuthReadApi(
    () => getPlanetsOfCreation("6880873d2211fa69e41c9d19"),
    {
      rejectMessage: "token为空",
      validateShape: (res) => {
        expect(Array.isArray(res)).toBe(true);
      },
    },
  );
});
