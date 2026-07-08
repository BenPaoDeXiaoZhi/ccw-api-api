import { getSpreadFeedUnreadCount } from "./count";
import { expectType, testAuthReadApi } from "src/testUtils";

const STUDENT_OID = "63c2807d669fa967f17f5559";

test("get spread feed unread count should reject without login", async () => {
  await testAuthReadApi(() => getSpreadFeedUnreadCount(STUDENT_OID), {
    validateShape: (res) => {
      expectType(res, "number");
    },
  });
});
