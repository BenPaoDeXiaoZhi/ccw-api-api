import { setUserProductStatus } from "./status";

test("should fail without token when setting user product status", async () => {
  await expect(setUserProductStatus(105847, false)).rejects.toThrow();
});
