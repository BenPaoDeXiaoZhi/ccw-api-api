import { getStudentProfile } from "./profile";

const STUDENT_OID = "63c2807d669fa967f17f5559";

test("get student profile", async () => {
  const profile = await getStudentProfile(STUDENT_OID);
  expect(profile.studentOid).toBe(STUDENT_OID);
});
