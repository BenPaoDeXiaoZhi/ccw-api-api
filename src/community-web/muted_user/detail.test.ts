import { getMutedUserDetail } from "./detail";

const STUDENT_NUMBER = "test-student-number";

test("get muted user detail should return null", async () => {
  const res = await getMutedUserDetail(STUDENT_NUMBER);
  expect(res).toBeNull();
});
