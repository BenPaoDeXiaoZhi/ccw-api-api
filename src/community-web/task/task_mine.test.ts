import { getMyTasks } from "./mine";

test("get my tasks should reject without login", async () => {
  await expect(getMyTasks()).rejects.toThrow("token为空");
});
