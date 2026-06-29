import { getUserExtensions } from "./extensions";

test("get user extensions should fail without token", async () => {
  await expect(
    getUserExtensions("63c2807d669fa967f17f5559"),
  ).resolves.toHaveProperty("data");
});
