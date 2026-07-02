import { unfollowCreator } from "./unfollow";

test("should fail without token when unfollowing creator", async () => {
  await expect(
    unfollowCreator("62444bdd1dd43a0637b6a147"),
  ).rejects.toThrow();
});