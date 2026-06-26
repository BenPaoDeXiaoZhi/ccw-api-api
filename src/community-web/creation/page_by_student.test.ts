import { getCreationsByStudent } from "./page_by_student";
import { getExcellentCreations } from "./excellent/list";

let sampleStudentOid: string;

beforeAll(async () => {
  const creations = await getExcellentCreations(1);
  if (creations.length > 0) {
    sampleStudentOid = creations[0].studentOid;
  }
}, 30000);

test("get creations by student should return data", async () => {
  if (!sampleStudentOid) {
    return;
  }
  const res = await getCreationsByStudent([sampleStudentOid]);
  expect(Array.isArray(res)).toBe(true);
  res.forEach((c) => {
    expect(c.oid).toBeDefined();
    expect(c.studentOid).toBeDefined();
  });
});