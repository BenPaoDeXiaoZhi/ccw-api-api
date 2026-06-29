import { foldComment } from "./fold";

test("fold comment should fail without token", async () => {
  await expect(foldComment(1)).rejects.toThrow("token为空");
});
