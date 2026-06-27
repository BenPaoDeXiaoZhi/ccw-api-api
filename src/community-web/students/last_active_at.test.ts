import { getStudentLastActiveAt } from "./last_active_at";

const STUDENT_OID = "63c2807d669fa967f17f5559";

test("get student last active at", async () => {
  const result = await getStudentLastActiveAt(STUDENT_OID);
  expect(typeof result.lastActiveAt).toBe("number");
});
