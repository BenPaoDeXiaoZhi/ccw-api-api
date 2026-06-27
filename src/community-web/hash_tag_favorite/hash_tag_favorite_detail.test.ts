import { getHashTagFavoriteDetail } from "./detail";

test("get hash tag favorite detail should reject without login", async () => {
  await expect(getHashTagFavoriteDetail(29887)).rejects.toThrow("token为空");
});
