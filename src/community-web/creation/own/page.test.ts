import { getOwnCreationPage } from "./page";

test("get own creation page should fail without token", async () => {
  await expect(getOwnCreationPage()).rejects.toThrow("token为空");
});
