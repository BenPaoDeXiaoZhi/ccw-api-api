import { getCreationStudentDetail } from "./detail";
import { getExcellentCreations } from "../excellent/list";

let sampleStudentOid: string;

beforeAll(async () => {
  const creations = await getExcellentCreations(1);
  if (creations.length > 0) {
    sampleStudentOid = creations[0].studentOid;
  }
}, 30000);

test("get creation student detail should return data", async () => {
  if (!sampleStudentOid) {
    return;
  }
  const res = await getCreationStudentDetail(sampleStudentOid);
  expect(res.oid).toBe(sampleStudentOid);
  expect(res.name).toBeDefined();
});
