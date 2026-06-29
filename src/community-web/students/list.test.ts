import { getStudentsList } from "./list";

const STUDENT_OIDS = ["63c2807d669fa967f17f5559", "62bd863874c3155ff7a54308"];

test("get students list", async () => {
  const result = await getStudentsList(STUDENT_OIDS);
  expect(Array.isArray(result)).toBe(true);
  expect(result[0].oid).toBe(STUDENT_OIDS[0]);
});
