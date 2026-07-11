import { createSmsCaptchaBySession } from "./create-by-session";
import { test, testAuthWriteApi } from "src/testUtils";

test("create sms captcha by session", async () => {
  await testAuthWriteApi(
    () => createSmsCaptchaBySession("change_password", "-1"),
    {
      rejectMessage: "token为空",
    },
  );
});
