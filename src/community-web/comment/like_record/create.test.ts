import { likeComment } from "./create";

test("like comment should fail without token", async () => {
  await expect(likeComment(1)).rejects.toThrow("token为空");
});
