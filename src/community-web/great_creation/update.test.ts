import { updateGreatCreation } from "./update";
import { test, testAuthWriteApi } from "src/testUtils";

test("should fail without token when updating great creation", async () => {
  await testAuthWriteApi(
    () => updateGreatCreation("69740f1a61b891733d5ee2c6"),
    {},
  );
});
