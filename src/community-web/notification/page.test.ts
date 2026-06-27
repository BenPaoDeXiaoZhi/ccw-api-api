import { getNotificationPage } from "./page";

test("get notification page should reject without login", async () => {
  await expect(getNotificationPage()).rejects.toThrow();
});
