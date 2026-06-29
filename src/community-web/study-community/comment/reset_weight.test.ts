import { resetCommentWeight } from "./reset_weight";

test("reset comment weight should fail without token", async () => {
  await expect(resetCommentWeight(1)).rejects.toThrow("token为空");
});
