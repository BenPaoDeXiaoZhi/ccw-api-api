import { replyComment } from "./reply";

test("reply comment should fail without token", async () => {
  await expect(replyComment("test reply", 1)).rejects.toThrow("token为空");
});
