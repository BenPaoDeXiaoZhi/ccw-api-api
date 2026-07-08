import { updateCreation } from "./update";
import { testAuthWriteApi } from "src/testUtils";

test("update creation should fail without token", async () => {
  await testAuthWriteApi(
    () =>
      updateCreation(
        "63c2807d669fa967f17f5559",
        "https://m.ccw.site/a",
        "LANDSCAPE",
        "https://m.ccw.site/a",
      ),
    {
      rejectMessage: "token为空",
    },
  );
});
