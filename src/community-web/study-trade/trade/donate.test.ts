import { donateTrade } from "./donate";
import { testAuthWriteApi } from "src/testUtils";

test("donate trade", async () => {
  await testAuthWriteApi(
    () => donateTrade(-1, "68ce4849811b737483bf7027", "CREATION"),
    {},
  );
});
