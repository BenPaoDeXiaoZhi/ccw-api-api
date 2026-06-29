import { donateExtension } from "./donate";

test("donate extension should fail without token", async () => {
  await expect(
    donateExtension("spineAnimation", 1),
  ).rejects.toThrow();
});
