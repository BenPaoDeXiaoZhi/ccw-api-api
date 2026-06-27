import { getNotificationStats } from "./v2";

test("get notification stats should reject without login", async () => {
  await expect(getNotificationStats()).rejects.toThrow();
});
