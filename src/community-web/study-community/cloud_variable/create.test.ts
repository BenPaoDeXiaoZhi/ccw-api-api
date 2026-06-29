import { createCloudVariable } from "./create";

test("create cloud variable should fail without token", async () => {
  await expect(
    createCloudVariable("63c2807d669fa967f17f5559", {}),
  ).rejects.toThrow("token为空");
});
