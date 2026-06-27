import { getStudentStats } from "./stats";

const STUDENT_OID = "63c2807d669fa967f17f5559";

test("get student stats", async () => {
  const stats = await getStudentStats(STUDENT_OID);
  expect(typeof stats.followerCount).toBe("number");
  expect(typeof stats.followingCount).toBe("number");
});
