import { getCCWMainStatus } from "./status";

test("get ccw main status should fail without token", async () => {
  await expect(getCCWMainStatus()).rejects.toThrow("token为空");
});
