import { unfollowCreator } from "./unfollow";
import { testAuthWriteApi } from "src/testUtils";

test("unfollow creator", async () => {
  await testAuthWriteApi(() => unfollowCreator("62444bdd1dd43a0637b6a147"));
});
