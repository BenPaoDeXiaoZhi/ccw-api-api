import { getTypicalProjectUnreadCount } from "./unread_count";

test("get typical project unread count should fail without token", async () => {
  await expect(
    getTypicalProjectUnreadCount("63c2807d669fa967f17f5559"),
  ).rejects.toThrow("token为空");
});
