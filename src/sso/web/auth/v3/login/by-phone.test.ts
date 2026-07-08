import { loginByPhone } from "./by-phone";
import { testAuthWriteApi } from "src/testUtils";

test("expect wrong sms code to throw error", async () => {
  await testAuthWriteApi(
    () =>
      loginByPhone("12345671145", "000000", {
        device: "Node.js Test",
        browser: "Jest",
      }),
    {},
  );
}, 30000);
