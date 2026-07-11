import { getNotificationStats } from "./v2";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";

test("get notification stats should reject without login", async () => {
  await testAuthReadApi(() => getNotificationStats(), {
    validateShape: (res) => {
      expectKeys(res, [
        "ACTIVITY_ASSISTANT",
        "COMMENT_TO_ME",
        "CREATION_INTERACTION",
        "CREATION_STATUS",
        "FOLLOW_ME",
        "FRIEND_SHARE",
        "JUDGEMENT",
        "WEB_SYSTEM",
      ]);
    },
  });
});
