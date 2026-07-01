import { followCreator } from "./follow";

test("should fail without token when following creator", async () => {
  await expect(
    followCreator("651e3f7310b0530e7f80fe7a"),
  ).rejects.toThrow();
});