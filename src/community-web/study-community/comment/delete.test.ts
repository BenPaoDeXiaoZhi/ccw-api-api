import { deleteComment } from "./delete";

test("delete comment should fail without token", async () => {
  await expect(deleteComment(1)).rejects.toThrow("token为空");
});
