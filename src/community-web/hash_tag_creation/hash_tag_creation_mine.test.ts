import { getMyHashTagCreations } from "./mine";

test("get my hash tag creations should reject without login", async () => {
  await expect(getMyHashTagCreations()).rejects.toThrow("token为空");
});
