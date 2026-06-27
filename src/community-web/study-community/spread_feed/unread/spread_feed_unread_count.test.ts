import { getSpreadFeedUnreadCount } from "./count";

const STUDENT_OID = "63c2807d669fa967f17f5559";

test("get spread feed unread count should reject without login", async () => {
  await expect(getSpreadFeedUnreadCount(STUDENT_OID)).rejects.toThrow();
});
