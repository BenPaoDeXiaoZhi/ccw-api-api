import { topComment } from "./top";

test("top comment should fail without token", async () => {
  await expect(topComment(1)).rejects.toThrow("token为空");
});
